"""Convert the source-pages/*.html fragments into JSX for the TanStack port.

Parsing goes through lxml so malformed/implicitly-closed markup in the source
still yields balanced JSX.
"""

import re

from lxml import html as lhtml

VOID = {"img", "br", "hr", "input", "meta", "link", "source", "col", "area", "base", "wbr"}

ATTR_MAP = {
    "class": "className",
    "for": "htmlFor",
    "srcset": "srcSet",
    "colspan": "colSpan",
    "rowspan": "rowSpan",
    "tabindex": "tabIndex",
    "maxlength": "maxLength",
    "autocomplete": "autoComplete",
    "novalidate": "noValidate",
    "crossorigin": "crossOrigin",
    "viewbox": "viewBox",
    "stroke-width": "strokeWidth",
    "stroke-linecap": "strokeLinecap",
    "stroke-linejoin": "strokeLinejoin",
    "fill-rule": "fillRule",
    "clip-rule": "clipRule",
    "stop-color": "stopColor",
    "gradientunits": "gradientUnits",
    "clippath": "clipPath",
    "preserveaspectratio": "preserveAspectRatio",
    "referrerpolicy": "referrerPolicy",
    "datetime": "dateTime",
    "readonly": "readOnly",
}

DROP_ATTRS = {"onsubmit", "onclick", "onchange", "data-page", "onload", "id"}

KEEP_IDS = {"main", "start"}

BLOG_PREFIX = "blog-"

DATA_URI_ASSETS = [
    ("brandlockup", "/brand/jones-lockup-transparent.png"),
    ("pfoto", "/brand/emily_full.jpg"),
    ("flogo", "/brand/jones-vase-icon.png"),
]

BOOLEAN_ATTRS = {"required", "disabled", "checked", "selected", "readonly", "multiple"}


def html_path_to_route(href: str) -> str | None:
    """Map a source .html href to its clean route path, or None if external."""
    if not href or href.startswith(("http", "mailto:", "tel:", "#", "/")):
        return None
    path, _, frag = href.partition("#")
    if not path.endswith(".html"):
        return None
    name = path[: -len(".html")]
    if name == "index":
        route = "/"
    elif name.startswith(BLOG_PREFIX):
        route = "/blog/" + name[len(BLOG_PREFIX) :]
    else:
        route = "/" + name
    return route + (("#" + frag) if frag else "")


def camel(prop: str):
    prop = prop.strip()
    if prop.startswith("--"):
        return prop
    parts = prop.split("-")
    return parts[0] + "".join(p.capitalize() for p in parts[1:])


def style_to_jsx(value: str) -> str:
    out = []
    for decl in value.split(";"):
        if ":" not in decl:
            continue
        prop, _, val = decl.partition(":")
        key = camel(prop)
        if key is None:
            continue
        val = val.strip().replace('"', "'")
        out.append(f'"{key}": "{val}"')
    return "{{" + ", ".join(out) + "}}"


def escape_text(text: str) -> str:
    return text.replace("{", "{'{'}").replace("}", "{'}'}")


PLACEHOLDER_RE = re.compile(r"@@[A-Z]+(?::[^@]*)?@@")


def escape_text_keep_placeholders(text: str) -> str:
    """Escape braces but leave @@PLACEHOLDER@@ markers intact."""
    return escape_text(text)


def render_attrs(el, is_link: bool) -> str:
    attrs = []
    cls = el.get("class") or ""
    for name, raw in el.items():
        lname = name.lower()
        if lname == "id" and raw not in KEEP_IDS:
            continue
        if lname in DROP_ATTRS:
            continue
        if lname == "onerror":
            if raw and "remove" in raw:
                attrs.append("onError={(e) => e.currentTarget.remove()}")
            continue
        if is_link and lname == "href":
            continue
        if lname == "src" and raw and raw.startswith("data:"):
            replacement = "/brand/jones-lockup-transparent.png"
            for key, path in DATA_URI_ASSETS:
                if key in cls:
                    replacement = path
                    break
            attrs.append(f'src="{replacement}"')
            continue
        if lname == "style" and raw:
            attrs.append("style=" + style_to_jsx(raw))
            continue
        jsx_name = ATTR_MAP.get(lname, name)
        if lname in BOOLEAN_ATTRS and raw in ("", lname, None):
            attrs.append(jsx_name)
            continue
        raw = raw or ""
        if '"' in raw:
            attrs.append(f"{jsx_name}={{{raw!r}}}")
        else:
            attrs.append(f'{jsx_name}="{raw}"')
    if is_link:
        route = html_path_to_route(el.get("href") or "")
        attrs.insert(0, f'to="{route}"')
    return (" " + " ".join(attrs)) if attrs else ""


def render(el) -> str:
    tag = el.tag
    if not isinstance(tag, str):  # comments / PIs
        return el.tail or ""
    tag = tag.lower()
    is_link = tag == "a" and html_path_to_route(el.get("href") or "") is not None
    name = "Link" if is_link else tag
    attr_text = render_attrs(el, is_link)

    inner = escape_text(el.text or "")
    for child in el:
        inner += render(child)

    if tag in VOID:
        out = f"<{name}{attr_text} />"
    elif not inner.strip() and tag not in {"div", "span", "section", "textarea", "p"}:
        out = f"<{name}{attr_text} />"
    else:
        out = f"<{name}{attr_text}>{inner}</{name}>"
    return out + escape_text(el.tail or "")


def convert(fragment: str) -> str:
    """Convert an HTML fragment to JSX. Returns JSX source text."""
    fragment = re.sub(r"<!--.*?-->", "", fragment, flags=re.S)
    root = lhtml.fragment_fromstring(fragment, create_parent="lovable-root")
    inner = escape_text(root.text or "")
    for child in root:
        inner += render(child)
    return inner.strip()
