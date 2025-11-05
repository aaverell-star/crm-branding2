# CRM Spelman Header/Footer (GitHub Pages)

This repo hosts static assets (HTML, CSS, JS) for your CRM to pull header/footer HTML and related files.

## Files
- `index.html` – full page (header + footer)
- `header.html` – header-only
- `footer.html` – footer-only
- `assets/styles.css`
- `assets/main.js`
- `.nojekyll` – disables Jekyll processing on GitHub Pages

## Quick Publish (GitHub Pages)
1. Create a new GitHub repo, e.g., `crm-spelman`.
2. Upload these files to the repo root (so `index.html` is at the top level).
3. In the repo, go to **Settings → Pages**.
4. Under **Build and deployment**, set:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main` (or `master`) / **Folder**: `/root`
5. Save. After it builds, your site will be at:
   `https://<your-username>.github.io/<repo>/`

## Example URLs to provide to your CRM
- HTML (full): `https://<your-username>.github.io/<repo>/index.html`
- Header only: `https://<your-username>.github.io/<repo>/header.html`
- Footer only: `https://<your-username>.github.io/<repo>/footer.html`
- CSS: `https://<your-username>.github.io/<repo>/assets/styles.css`
- JS: `https://<your-username>.github.io/<repo>/assets/main.js`

> Images are hotlinked to spelman.edu. If you later want local copies, add them to `/images` and update the `<img src="">` paths.
