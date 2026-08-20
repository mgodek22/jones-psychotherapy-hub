"""Convert the source-pages/*.html fragments into JSX for the TanStack port."""

import re

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
    "xmlns:xlink": "xmlnsXlink",
    "preserveaspectratio": "preserveAspectRatio",
    "referrerpolicy": "referrerPolicy",
    "datetime": "dateTime",
    "readonly": "readOnly",
}

DROP_ATTRS = {"onsubmit", "onclick", "onchange", "data-page", "onerror", "onload"}

BLOG_PREFIX = "blog-"

DATA_URI_ASSETS = [
    ("brandlockup", "/brand/jones-lockup-transparent.png"),
    ("pfoto", "/brand/emily_full.jpg"),
    ("flogo", "/brand/jones-vase-icon.png"),
]


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


def camel(prop: str) -> str:
    parts = prop.strip().split("-")
    if parts[0].startswith("--"):
        return None
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


TAG_RE = re.compile(r"<(/?)([a-zA-Z][a-zA-Z0-9:-]*)((?:\s+[^<>]*?)?)(/?)>", re.S)
ATTR_RE = re.compile(r"""([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'>]+)))?""")


def convert(fragment: str) -> str:
    """Convert an HTML fragment to JSX. Returns JSX source text."""
    fragment = re.sub(r"<!--.*?-->", "", fragment, flags=re.S)

    out = []
    pos = 0
    for m in TAG_RE.finditer(fragment):
        out.append(escape_text(fragment[pos : m.start()]))
        pos = m.end()
        closing, tag, attrs_src, selfclose = m.group(1), m.group(2), m.group(3) or "", m.group(4)
        lower = tag.lower()

        if closing:
            out.append(f"</{TAG_RENAME.get(lower, lower)}>")
            continue

        attrs = []
        is_link = False
        for am in ATTR_RE.finditer(attrs_src):
            name = am.group(1)
            raw = am.group(2) if am.group(2) is not None else (am.group(3) if am.group(3) is not None else am.group(4))
            lname = name.lower()
            if lname in DROP_ATTRS:
                if lname == "onerror" and raw and "remove" in raw:
                    attrs.append("onError={(e) => e.currentTarget.remove()}")
                continue
            if lname == "href" and lower == "a":
                route = html_path_to_route(raw or "")
                if route is not None:
                    is_link = True
                    attrs.append(f'to="{route}"')
                    continue
            if lname == "src" and raw and raw.startswith("data:"):
                cls = ""
                cm = re.search(r'class="([^"]*)"', attrs_src)
                if cm:
                    cls = cm.group(1)
                replacement = None
                for key, path in DATA_URI_ASSETS:
                    if key in cls:
                        replacement = path
                        break
                if replacement is None:
                    replacement = "/brand/jones-lockup-transparent.png"
                attrs.append(f'src="{replacement}"')
                continue
            if lname == "style" and raw:
                attrs.append("style=" + style_to_jsx(raw))
                continue
            jsx_name = ATTR_MAP.get(lname, name)
            if raw is None:
                attrs.append(jsx_name)
            else:
                if '"' in raw:
                    attrs.append(f"{jsx_name}={{{raw!r}}}")
                else:
                    attrs.append(f'{jsx_name}="{raw}"')

        name_out = "Link" if is_link else TAG_RENAME.get(lower, lower)
        attr_text = (" " + " ".join(attrs)) if attrs else ""
        if lower in VOID or selfclose:
            out.append(f"<{name_out}{attr_text} />")
        else:
            out.append(f"<{name_out}{attr_text}>")

    out.append(escape_text(fragment[pos:]))
    return "".join(out)


TAG_RENAME: dict[str, str] = {}
