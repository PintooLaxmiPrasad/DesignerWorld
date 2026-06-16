# AGENTS.md — Interior Worlds Website

## Project Overview

A single-page interior design business website built with TanStack Start and deployed on Netlify. The site connects potential clients with the designer, showcases portfolio work via YouTube, and provides dual WhatsApp contact options for India and UAE.

## Directory Structure

```
src/
  routes/
    __root.tsx      — Root layout: Google Fonts, meta tags, HTML shell
    index.tsx       — Single-page site: all sections (Navbar, Hero, About,
                      Services, Videos, Contact, Footer)
  styles.css        — All styling via CSS custom properties + utility classes
public/
  favicon.ico
netlify.toml        — Build config (vite build → dist/client)
```

## Key Design Decisions

- **Single page, no routing**: Everything lives in `src/routes/index.tsx`. No nested routes needed.
- **Custom CSS over Tailwind utilities**: The design uses CSS custom properties and hand-authored CSS classes for precise control. Tailwind is imported but minimal utility usage.
- **Fonts**: Cormorant Garamond (display/headings) + DM Sans (body) — loaded via Google Fonts in `__root.tsx` head links.
- **Images**: Unsplash URLs with `?w=...&q=80` parameters for copyright-free, optimised images. No local images to maintain.
- **Video embeds**: YouTube iframes with `autoplay=1&mute=1&loop=1` params. Browser autoplay policy requires muted for autoplay to work.
- **WhatsApp**: Two separate anchor tags with `wa.me/` deep links — one for India (+91), one for UAE (+971).
- **Colour palette**: CSS variables in `:root` using teal/cyan/emerald family for a professional, cool-toned feel.

## What to update when deploying

1. **WhatsApp numbers** in `src/routes/index.tsx` — replace `917012345678` (India) and `971501234567` (UAE) with real numbers.
2. **Years of experience** — the "8+" badge in the About section.
3. **Contact form** — currently a static form; wire up Netlify Forms or an API route to actually receive submissions.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start (React 19) |
| Router | TanStack Router v1 (file-based) |
| Build | Vite 7 |
| Styling | Tailwind CSS v4 + custom CSS |
| Deployment | Netlify |
| Language | TypeScript 5 |
