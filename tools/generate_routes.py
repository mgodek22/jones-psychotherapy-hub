"""Generate TanStack route files from source-pages/*.html."""

import glob
import html as htmllib
import json
import os
import re

from port_html import convert, html_path_to_route

SRC = "source-pages"
OUT = "src/routes"
DOMAIN = "https://www.jonespsychotherapy.com"

FUNNEL_PAGES = {"book", "explore", "guide"}


def unescape(v: str) -> str:
    return htmllib.unescape(v)


def scrub_dc(text: str) -> str:
    """BUILD-SPEC: licensed in Virginia & Utah only — no DC geography claims."""
    subs = [
        (r",?\s*serving the Washington,? D\.?C\.? metro area", ""),
        (r",?\s*serving the Washington DC metro area", ""),
        (r"\s*·\s*Washington,? D\.?C\.?", ""),
        (r"Washington,? D\.?C\.?,?\s*(metro area|metro)?", ""),
        (r"\bDC metro area\b", "Northern Virginia"),
        (r",\s*and Washington DC", ""),
        (r",\s*Washington DC", ""),
        (r"\bWashington DC\b", ""),
    ]
    for pat, rep in subs:
        text = re.sub(pat, rep, text)
    text = re.sub(r"\s{2,}", " ", text)
    text = re.sub(r"\s+([,.·])", r"\1", text)
    text = re.sub(r"(,\s*){2,}", ", ", text)
    text = re.sub(r",\s*\.", ".", text)
    return text.strip()


def slug_to_route(slug: str) -> str:
    if slug == "index":
        return "/"
    if slug.startswith("blog-"):
        return "/blog/" + slug[len("blog-") :]
    return "/" + slug


def slug_to_filename(slug: str) -> str:
    if slug == "index":
        return "index.tsx"
    if slug.startswith("blog-"):
        return "blog." + slug[len("blog-") :] + ".tsx"
    return slug + ".tsx"


def component_name(slug: str) -> str:
    parts = re.split(r"[-.]", slug)
    return "".join(p.capitalize() for p in parts if p) + "Page"


def extract_head(head: str, slug: str):
    metas: list[dict] = []

    def meta(attr, key):
        for m in re.finditer(
            rf'<meta\s+{attr}="([^"]+)"\s+content="([^"]*)"\s*/?>', head
        ):
            yield m.group(1), m.group(2)

    title = re.search(r"<title>(.*?)</title>", head, re.S)
    if title:
        metas.append({"title": scrub_dc(unescape(title.group(1)))})

    for name, content in meta("name", "name"):
        if name in {"description", "author", "theme-color", "robots"} or name.startswith(
            "twitter:"
        ):
            metas.append({"name": name, "content": scrub_dc(unescape(content))})
    for prop, content in meta("property", "property"):
        metas.append({"property": prop, "content": scrub_dc(unescape(content))})

    canonical = re.search(r'<link rel="canonical" href="([^"]+)"', head)
    links = []
    if canonical:
        links.append({"rel": "canonical", "href": canonical.group(1)})

    scripts = []
    for m in re.finditer(
        r'<script type="application/ld\+json">(.*?)</script>', head, re.S
    ):
        raw = scrub_dc(unescape(m.group(1)))
        try:
            data = json.loads(raw)
        except json.JSONDecodeError:
            data = json.loads(unescape(m.group(1)))
        scripts.append(data)
    return metas, links, scripts


def parse_crumbs(body: str):
    m = re.search(r'<nav class="crumbs".*?</nav>', body, re.S)
    if not m:
        return None, body
    nav = m.group(0)
    crumbs = []
    for part in re.finditer(
        r'<a[^>]*href="([^"]+)"[^>]*>(.*?)</a>|<span aria-current="page">(.*?)</span>',
        nav,
        re.S,
    ):
        if part.group(1):
            route = html_path_to_route(part.group(1)) or part.group(1)
            crumbs.append({"label": unescape(part.group(2)).strip(), "to": route})
        else:
            crumbs.append({"label": unescape(part.group(3)).strip()})
    return crumbs, body.replace(nav, "")


def strip_testimonials(main: str) -> str:
    """BUILD-SPEC: no testimonials anywhere on the site."""
    out = main
    while True:
        m = re.search(r'<section class="band[^"]*">(?:(?!</section>).)*?<div class="quote"', out, re.S)
        if not m:
            break
        start = m.start()
        end = out.index("</section>", start) + len("</section>")
        out = out[:start] + out[end:]
    return out


def replace_forms(main: str):
    """Swap the local data-collecting forms for the compliant components."""
    uses = set()

    def consult(m):
        uses.add("ConsultHandoff")
        label = re.search(r'type="submit">(.*?)</button>', m.group(0), re.S)
        label_attr = (
            f' ctaLabel="{unescape(label.group(1)).strip()}"' if label else ""
        )
        return f"@@CONSULT{label_attr}@@"

    main = re.sub(
        r'<form class="formcard" id="consultForm".*?</form>\s*<div class="thanks" id="thanks">.*?</div>',
        consult,
        main,
        flags=re.S,
    )

    def optin(m):
        uses.add("OptinForm")
        return "@@OPTIN@@"

    main = re.sub(
        r'<form id="optinForm".*?</form>\s*<div class="thanks" id="optinThanks">.*?</div>\s*(?=</div>)',
        optin,
        main,
        flags=re.S,
    )
    return main, uses


def build(slug: str, src: str) -> str:
    head = re.search(r"<head>(.*?)</head>", src, re.S).group(1)
    body = re.search(r"<body.*?</body>", src, re.S).group(0)
    metas, links, scripts = extract_head(head, slug)
    crumbs, body = parse_crumbs(body)
    main_m = re.search(r"<main[^>]*>(.*?)</main>", body, re.S)
    main = main_m.group(1)
    main = strip_testimonials(main)
    main, uses = replace_forms(main)
    main = scrub_dc(main)
    jsx = convert(main)

    variant = "guide" if slug == "guide" else "index"
    jsx = jsx.replace("@@OPTIN@@", f'<OptinForm variant="{variant}" />')
    jsx = re.sub(
        r"@@CONSULT(?: ctaLabel=\"([^\"]*)\")?@@",
        lambda m: f'<ConsultHandoff ctaLabel="{m.group(1)}" />'
        if m.group(1)
        else "<ConsultHandoff />",
        jsx,
    )
    jsx = jsx.replace('href="tel:5715828086"', 'href={PHONE_HREF}')

    is_funnel = slug in FUNNEL_PAGES
    layout = "FunnelLayout" if is_funnel else "SiteLayout"

    imports = [
        'import { createFileRoute, Link } from "@tanstack/react-router";',
        "",
    ]
    site_imports = [layout]
    comp_imports = []
    if "ConsultHandoff" in uses:
        comp_imports.append(
            'import { ConsultHandoff } from "@/components/site/ConsultHandoff";'
        )
    if "OptinForm" in uses:
        comp_imports.append('import { OptinForm } from "@/components/site/OptinForm";')
    if "PHONE_HREF" in jsx:
        comp_imports.append(
            'import { PHONE_HREF } from "@/components/site/site-config";'
        )
    comp_imports.append(
        f'import {{ {layout} }} from "@/components/site/SiteLayout";'
    )
    imports += sorted(comp_imports)

    head_parts = ["    meta: " + json.dumps(metas, indent=6, ensure_ascii=False).replace("\n", "\n    ") + ","]
    if links:
        head_parts.append(
            "    links: " + json.dumps(links, indent=6, ensure_ascii=False).replace("\n", "\n    ") + ","
        )
    if scripts:
        entries = []
        for data in scripts:
            entries.append(
                '      {\n        type: "application/ld+json",\n        children: JSON.stringify(\n'
                + "          "
                + json.dumps(data, ensure_ascii=False, indent=2).replace("\n", "\n          ")
                + ",\n        ),\n      },"
            )
        head_parts.append("    scripts: [\n" + "\n".join(entries) + "\n    ],")

    crumb_prop = ""
    if crumbs and not is_funnel:
        crumb_json = json.dumps(crumbs, ensure_ascii=False, indent=2).replace(
            "\n", "\n    "
        )
        crumb_prop = f" crumbs={{{crumb_json}}}"

    comp = component_name(slug if slug != "index" else "home")
    body_jsx = "\n".join("      " + line for line in jsx.strip().splitlines())

    return (
        "\n".join(imports)
        + f'\n\nexport const Route = createFileRoute("{slug_to_route(slug)}")({{\n'
        + "  head: () => ({\n"
        + "\n".join(head_parts)
        + "\n  }),\n"
        + f"  component: {comp},\n}});\n\n"
        + f"function {comp}() {{\n  return (\n    <{layout}{crumb_prop}>\n"
        + body_jsx
        + f"\n    </{layout}>\n  );\n}}\n"
    )


def main():
    for path in sorted(glob.glob(f"{SRC}/*.html")):
        slug = os.path.basename(path)[: -len(".html")]
        src = open(path).read()
        out_path = os.path.join(OUT, slug_to_filename(slug))
        open(out_path, "w").write(build(slug, src))
        print("wrote", out_path)


if __name__ == "__main__":
    main()
