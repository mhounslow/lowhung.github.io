# matthounslow.dev

Personal site — plain HTML/CSS, no build step. Deployed to GitHub Pages by
`.github/workflows/static.yml` on every push to `master`.

- `index.html` — home
- `art.html` — engram gallery (image list lives in `assets/engrams.js`)
- `resume.pdf` — linked from the nav and hero; replace this file to update the resume
- `assets/site.css` / `assets/site.js` — shared styles (light/dark tokens) and theme toggle

Preview locally:

```sh
python3 -m http.server 8000
```
