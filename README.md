# MusiR Pumps website

This is a company website built with Next.js (App Router), TypeScript, and Tailwind CSS.

It is a **front-end preview**. Login, registration, enquiry sending, and admin actions are **not connected** to a database yet.

## Preview the website on your computer

1. Open a terminal in this folder (`musir-pumps`).
2. Install packages if you have not already:

```bash
npm install
```

3. Start the local development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

When you save a file, the page usually updates by itself. Press `Ctrl+C` in the terminal to stop the server.

## What each important folder does

- `src/app` — the pages you visit in the browser (`/`, `/products`, `/about`, and so on).
- `src/components` — reusable pieces such as the header, product cards, and forms.
- `src/data` — easy-to-edit text and product lists. Change these files to update the website copy.
- `src/lib` — form checks and a future place for Supabase (database/login) code.

## How to edit content

- Company name, email, phone, and address: `src/data/site.ts`
- About Us text: `src/data/about.ts`
- Products: `src/data/products.ts`
- Applications: `src/data/applications.ts`

Text marked as a placeholder is not official company information.

## Later: database and login

When you are ready, copy `.env.example` to `.env.local` and add Supabase values there. Do not put secret keys in the website files.

Starter files for that work are in `src/lib/supabase/`.
