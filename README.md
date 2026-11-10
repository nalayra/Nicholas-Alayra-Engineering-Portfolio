# Nicholas Alayra — Engineering Portfolio

A complete, responsive React + Vite engineering portfolio starter with a traditional white-and-navy professional design.

## Requirements

- Node.js 20.19+ or 22.12+ (recommended: latest LTS)
- npm
- VS Code or another text editor

## Run locally

```bash
npm install
npm run dev
```

Open the URL shown by Vite (usually `http://localhost:5173`).

## Customize the site

**Start with `src/data/site.js`.** Almost all visible content is editable there:

- `profile`: name, bio, graduation, email, LinkedIn, GitHub, resume URL
- `projects`: descriptions, project images, responsibilities, approaches, results
- `skills`: technical skills
- `background`: education
- `experience`: professional experience

**Images:** Replace the illustrative SVG files in `public/images/` with your **actual CAD renders, photos, and simulation plots**. You can use different filenames; just edit the `image` field for each project in `src/data/site.js`. Images in this starter are original concept illustrations, **not images of your actual work**.

**Colors/fonts/layout:** Edit `src/styles.css` (most brand colors currently use navy `#103960` / `#123a60`). Fonts are loaded from Google Fonts; change the `@import` if desired.

**Pages/components:**
- `src/pages/Home.jsx`: homepage
- `src/pages/Projects.jsx`: project listing
- `src/pages/ProjectDetail.jsx`: project case studies (all pull data from `site.js`)
- `src/pages/About.jsx`: bio, education, and skills
- `src/pages/Resume.jsx`: resume and qualifications
- `src/components/`: navigation and project cards

**Resume PDF:** Export your final resume to `public/resume.pdf`, then set `resumePdf: '/resume.pdf'` inside `src/data/site.js`. The site intentionally hides the download button until you add the file.

**Contact links:** Set `email`, `linkedin`, and `github` in `src/data/site.js`. Empty values are intentionally hidden; no fake links are included.

**Accuracy:** The ANSYS skill is labeled as planned/in progress. Update it to your actual tools and performed analyses before applying. Replace every placeholder note with substantiated results. Make sure your team is comfortable with any Baja SAE images or CAD you publish.

## Production build

```bash
npm run build
npm run preview
```

Vite creates the site in `dist/`. You do **not** need to leave your PC on after deploying it to hosting.

## Deploy to Vercel (recommended)

1. Create a new GitHub repository and push this project's source files (not `node_modules`).
2. In Vercel, choose **Add New → Project** and import the repository.
3. Vercel normally detects Vite automatically. Build command: `npm run build`. Output directory: `dist`.
4. Deploy. The supplied `vercel.json` makes client-side React Router page links work when refreshed.
5. Future pushes to GitHub can automatically trigger redeployments.

Note: this uses `BrowserRouter` and includes Vercel rewrites. If you later choose GitHub Pages instead, you'll need a SPA fallback or switch to `HashRouter`.

## Before publishing

- Add real contact links.
- Replace illustration placeholders with your engineering images.
- Review descriptions for accuracy, permissions, and confidential team data.
- Add your final PDF resume.
- Update ANSYS and FEA results **only after** you perform and document them.
- Test every page on mobile and desktop.

## Dependencies

React, React DOM, React Router, Lucide React icons, Vite, and the React plugin for Vite. No backend or database is needed.
