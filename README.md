# Ali Lishan Portfolio (Next.js 15)

A modern, responsive portfolio and resume web app built with Next.js 15, React 19, and Tailwind CSS. Showcases professional experience, education, skills, and more, with a clean UI and interactive components.

## 🚀 Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/)
- **Language:** TypeScript, React 19
- **Styling:** Tailwind CSS 4, Custom CSS Variables, [tw-animate-css](https://www.npmjs.com/package/tw-animate-css)
- **UI Components:** [Radix UI Accordion](https://www.radix-ui.com/primitives/docs/components/accordion), [Lucide Icons](https://lucide.dev/), shadcn/ui patterns
- **Markdown Rendering:** [markdown-to-jsx](https://github.com/probablyup/markdown-to-jsx)
- **Animation:** [framer-motion](https://www.framer.com/motion/)
- **Linting:** ESLint (Next.js, TypeScript)

## 📁 Folder Structure

```
alilishan-next-15/
├── src/
│   ├── app/           # Next.js app directory (pages, layout, global styles)
│   ├── components/    # UI and feature components (Accordion, Education, Experience, etc.)
│   ├── data/          # Resume data and data utilities
│   ├── libs/          # Utility functions
│   └── ...
├── public/            # Static assets (SVGs, images)
├── package.json       # Project dependencies and scripts
├── postcss.config.mjs # PostCSS config (Tailwind plugin)
├── eslint.config.mjs  # ESLint config
├── tsconfig.json      # TypeScript config
└── ...
```

## 🛠️ Key Features

- **Modern Resume Layout:** Clean, print-friendly, and responsive design.
- **Accordion Sections:** Interactive, collapsible sections for Education, Experience, etc.
- **Markdown Support:** Rich text descriptions using markdown.
- **Animated Descriptions:** Rotating professional descriptors with smooth animations.
- **Customizable Theme:** Uses CSS variables and Tailwind for easy theming.
- **TypeScript Strictness:** Ensures type safety and maintainability.

## ⚡ Getting Started

1. **Install dependencies:**

   ```bash
   npm install
   # or
yarn
   # or
pnpm install
   ```

2. **Run the development server:**

   ```bash
   npm run dev
   # or
yarn dev
   # or
pnpm dev
   # or
bun dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the app.

3. **Edit Content:**
   - Update your resume data in `src/data/resume_json.json`.
   - Modify components in `src/components/` as needed.

## 🧩 Scripts

- `dev`   – Start development server (with Turbopack)
- `build` – Build for production
- `start` – Start production server
- `lint`  – Run ESLint

## 🌐 Deployment

Deploy easily on [Vercel](https://vercel.com/) or any platform supporting Next.js 15.

## 📚 Learn More
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com/)
- [Radix UI](https://www.radix-ui.com/)

---

© Ali Lishan. MSc IT Management, BSc (Hons) Software Engineering.
