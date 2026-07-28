# Haikong Lu | Personal Website

A responsive academic homepage for [Haikong Lu](https://github.com/Haikong-Lu1206), built as a dependency-free static site for GitHub Pages.

## Local preview

Run a static file server from this directory:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Personal assets

- Replace `assets/avatar-placeholder.svg` with a portrait, then update the image path in `index.html`.
- Add a CV PDF to the repository and update the `CV` navigation link when it is ready.
- Keep images compressed for faster loading on GitHub Pages.

## Publishing

Push the site to the `main` branch and configure GitHub Pages to deploy from `main / root`. The site will be served at <https://haikong-lu1206.github.io/>.
