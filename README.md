# Namith Tatipigari — Personal website

**[Visit the website →](https://namit1333.github.io/)**

A responsive portfolio of developer tools, agent automation, and reproducible quantitative research, grounded in the public projects on [@namit1333](https://github.com/namit1333).

## Run locally

No build tools or JavaScript packages required. With Python installed:

```bash
python -m http.server 8040 --bind 127.0.0.1
```

Open http://127.0.0.1:8040.

## Update

- `index.html`: profile copy, public project descriptions, and links.
- `projects/*.html`: one plain-language explanation page per project (no technical background required). Each project card links here; the GitHub source is a secondary link on the card and on the page.
- `styles.css`: responsive layout, typography, illustrations, and project story pages.
- `script.js`: progressively enhanced project filters and copyright year.
- `favicon.svg`: local site icon.

The website remains readable and all project links work without JavaScript. Google Fonts is optional; system-font fallbacks are included. There are no analytics, cookies, API keys, or runtime GitHub API requests.

## Publish

GitHub Pages serves the root of the `main` branch at https://namit1333.github.io/. Push changes to `main` to publish updates. The repository’s About → Website link points to the live site.

Only public repositories are featured. Project claims are summarized from their READMEs; research limitations and negative results are retained.
