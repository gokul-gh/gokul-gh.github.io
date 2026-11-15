# Gokul — Personal Portfolio

Modern, static portfolio website built with **Astro** + **Tailwind CSS**.

## Quick start

```bash
npm install
npm run dev        # local dev server
npm run build      # production build → dist/
npm run preview    # preview production build
```

## Project structure

```
src/
├── components/      # Navbar, Hero, ProjectCard, Skills, Contact, Footer
├── content/projects/ # Markdown project entries
├── layouts/         # BaseLayout.astro
├── pages/           # index.astro
└── styles/          # global.css (Tailwind)
public/              # static assets (resume PDF, images, project demos)
```

## Stack

- [Astro](https://astro.build) — static site generator
- [Tailwind CSS](https://tailwindcss.com) — utility-first styling
- React islands (optional) — for interactive components

## Notes

- All content lives in `src/content/projects/*.md`.
- Resume PDF is served from `/Gokul-Resume.pdf`.
- Standalone project demos live under `public/assets/projects/`.