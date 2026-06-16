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

## Recommended Workflow

1. Edit the HTML or CSS files.
2. Refresh the browser.
3. Recheck the homepage in `index.html` after design changes, because it contains the animated hero globe.

## Notes

- No installation is required for the direct browser method.
- A local server is useful if your browser restricts some `file://` behavior.