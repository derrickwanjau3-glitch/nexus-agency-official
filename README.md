# NEXUS Website - Premium Kenyan AI & Web Agency

This is the source code for the NEXUS website, a world-class, futuristic digital experience built with Next.js 15, Tailwind CSS 4, and Framer Motion.

## 🚀 Key Features
- **Lead Capture System:** Integrated form that captures customer data and redirects to WhatsApp (+254 742 727 451).
- **Fail-Safe Redirect:** Built-in logic to ensure customers always reach WhatsApp even if the database is unavailable.
- **Admin Dashboard:** Real-time lead monitoring at .
- **Premium UI:** Glassmorphism, neon glows, and Kenyan professional imagery.

## 🛠 Project Structure
- : Next.js App Router pages and API routes.
- : Reusable UI components.
- : High-resolution assets.

## 🗄 Database Configuration (Vercel Compatibility)
The current implementation uses a local JSON file () for local testing.
**Note:** On Vercel, the filesystem is read-only. For permanent data storage:
1. Set up a **Supabase** or **MongoDB** project.
2. Update  to use your database client instead of .
3. The Lead Capture form is already configured to prioritize the user's connection to WhatsApp.

## 🚀 Deployment (Vercel)
1. Import this repository.
2. Framework: **Next.js**.
3. Build Command: 
> nexus-site@0.1.0 build
> next build

▲ Next.js 16.2.6 (Turbopack)

  Creating an optimized production build ...
✓ Compiled successfully in 5.8s
  Running TypeScript ...
  Finished TypeScript in 3.5s ...
  Collecting page data using 1 worker ...
  Generating static pages using 1 worker (0/7) ...
  Generating static pages using 1 worker (1/7) 
  Generating static pages using 1 worker (3/7) 
  Generating static pages using 1 worker (5/7) 
✓ Generating static pages using 1 worker (7/7) in 256ms
  Finalizing page optimization ...

Route (app)
┌ ○ /
├ ○ /_not-found
├ ○ /admin
├ ○ /admin/dashboard
└ ƒ /api/leads


○  (Static)   prerendered as static content
ƒ  (Dynamic)  server-rendered on demand.
4. Add your domain in settings.

---
© 2026 NEXUS. Designed for the future of Kenyan business.
