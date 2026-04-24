# Sikander Nawaz — Portfolio

A modern, dark-themed personal portfolio built with **Next.js 14 App Router** and **Tailwind CSS**.

## ✨ Features

- **Modern dark design** — deep navy background, cyan/blue/purple gradient accents, glassmorphism cards
- **Fully responsive** — mobile-first, adapts to all screen sizes
- **Project filtering** — filter by category: HTML+CSS, HTML+CSS+JS, React, Next.js, React+Firebase, Next.js+MongoDB, Hackathons
- **Smooth interactions** — hover micro-animations, glow borders, scroll-reveal effects
- **SEO optimized** — Next.js metadata API, semantic HTML
- **Performance first** — static generation, optimized fonts, no heavy libraries

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── globals.css        # Global styles, animations, glass card, tech pills
│   ├── layout.js          # Root layout with metadata
│   └── page.js            # Main page assembling all sections
├── components/
│   ├── Navbar.jsx         # Sticky nav with scroll effect & mobile menu
│   ├── Hero.jsx           # Hero with stats, CTAs, ambient orbs
│   ├── Achievements.jsx   # Achievement cards (Harvard, Stanford, MIT, etc.)
│   ├── Skills.jsx         # Skills grid with categories
│   ├── Projects.jsx       # Filterable projects grid (client component)
│   ├── Volunteer.jsx      # Teaching timeline
│   ├── Contact.jsx        # Contact section + footer
│   └── SectionHeader.jsx  # Reusable section header
├── data/
│   ├── projects.js        # All project data with categories
│   ├── achievements.js    # Achievements data
│   └── skills.js          # Skill categories data
├── jsconfig.json          # Path aliases (@/)
├── next.config.mjs
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
http://localhost:3000
```

## 🛠 Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization

### Update your links
Search for `https://github.com`, `https://linkedin.com`, `https://leetcode.com` in the components and replace with your actual profile URLs.

### Add a new project
Open `data/projects.js` and add a new entry:

```js
{
  id: 15,
  title: "My New Project",
  description: "Project description here.",
  tech: ["React", "Firebase"],
  category: "react-firebase",   // must match a category id
  role: "Full Stack",
  github: "https://github.com/sikandernawaz/project",
  live: "https://myproject.vercel.app",
  featured: false,
}
```

### Add a new project category
Open `data/projects.js` and add to the `categories` array:

```js
{ id: "new-category", label: "New Category" }
```

### Hosting on Vercel (recommended)
```bash
npm install -g vercel
vercel
```

Or push to GitHub and import at [vercel.com](https://vercel.com) — zero config needed.

## 🔗 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + custom CSS
- **Fonts**: Syne (headings) + Outfit (body) + JetBrains Mono (code) via Google Fonts
- **Animations**: Pure CSS transitions & keyframes
- **Deployment**: Vercel (recommended)
