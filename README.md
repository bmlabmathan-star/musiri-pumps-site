# Musiri Pumps website

This repository contains the current company website built with Next.js App Router, TypeScript, and Tailwind CSS. The original standalone `index.html` concept is preserved at the repository root.

The Next.js site is a **front-end preview**. Login, registration, enquiry sending, and admin actions are **not connected** to a database yet.

## Preview the current website

1. Open a terminal in this folder.
2. Install packages if needed:

```bash
npm install
```

3. Start the local development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

Keep the terminal running while previewing the site. Press `Ctrl+C` in the terminal to stop it.

## Project folders

- `src/app` — website pages, including Home, Products, About Us, Contact Us, and Become a Partner.
- `src/components` — reusable page elements such as the header, forms, product cards, and video gallery.
- `src/data` — editable company text, navigation, product details, and video links.
- `src/lib` — client-side form checks and future Supabase integration points.

## Edit website content

- Company name and contact placeholders: `src/data/site.ts`
- About Us text: `src/data/about.ts`
- Vision, mission, and core values: `src/data/brand.ts`
- Product catalogue: `src/data/products.ts`
- Video gallery: `src/data/videos.ts`
- Applications page: `src/data/applications.ts`

Text marked as a placeholder is not official company information.

## Later: database and login

When you are ready, copy `.env.example` to `.env.local` and add Supabase values there. Do not put secret keys in website files. Starter files for that work are in `src/lib/supabase/`.
