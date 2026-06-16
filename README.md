# Arviona Labs Website

This project is a static website built with plain HTML and CSS.

## Files

- `index.html` - homepage
- `technology.html` - technology page
- `solutions.html` - solutions page
- `about.html` - about page
- `styles.css` - shared styling
- `arviona labs.jpeg` - logo asset

## How To Run

### Option 1: Open directly in a browser

1. Open `index.html` in your browser.
2. Use the navigation links to move between pages.

This works because the site does not require a build step.

### Option 2: Run with a local static server

From the project folder, run one of these:

#### Python

```powershell
python -m http.server 8000
```

Then open:

```text
http://localhost:8000/index.html
```

#### Node.js

```powershell
npx serve .
```

Then open the local URL shown in the terminal.

## Deploy On Render

This project should be deployed on Render as a static site.

### Option 1: Deploy from the Render Dashboard

1. Push this project to GitHub or GitLab.
2. In Render, click `New` -> `Static Site`.
3. Connect your repository.
4. Use these settings:

	- `Branch`: `main` (or your deployment branch)
	- `Build Command`: `echo "Static site ready"`
	- `Publish Directory`: `.`

5. Click `Create Static Site`.

Render will deploy the HTML, CSS, and image files directly from the repository root.

### Option 2: Deploy with render.yaml

This repo includes a `render.yaml` file for Render Blueprint deployment.

1. Push the repository with `render.yaml` included.
2. In Render, click `New` -> `Blueprint`.
3. Select this repository.
4. Render will read `render.yaml` and create the static site automatically.

### Important Notes For Render

- This site does not need `npm install` or any build tool.
- The publish directory is the project root because `index.html` and the other pages are stored there.
- Since this is a multi-page static site, no SPA rewrite rule is required.

## Recommended Workflow

1. Edit the HTML or CSS files.
2. Refresh the browser.
3. Recheck the homepage in `index.html` after design changes, because it contains the animated hero globe.

## Notes

- No installation is required for the direct browser method.
- A local server is useful if your browser restricts some `file://` behavior.