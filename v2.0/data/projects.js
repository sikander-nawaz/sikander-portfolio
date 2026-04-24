export const categories = [
  { id: "all", label: "All Projects" },
  { id: "html-css", label: "HTML + CSS" },
  { id: "html-css-js", label: "HTML + CSS + JS" },
  { id: "react", label: "ReactJS" },
  { id: "nextjs", label: "Next.js" },
  { id: "react-firebase", label: "React + Firebase" },
  { id: "nextjs-mongodb", label: "Next.js + MongoDB" },
  { id: "hackathon", label: "Hackathons" },
];

export const projects = [
  // ── HTML + CSS ──────────────────────────────────────────────
  {
    id: 1,
    title: "Agency Landing Page",
    description:
      "A fully responsive agency landing page built with pure HTML and CSS. Features hero section, services grid, testimonials, and a clean contact form layout.",
    tech: ["HTML5", "CSS3", "Flexbox", "Grid", "Responsive"],
    category: "html-css",
    role: "Frontend",
    github: "https://github.com/sikandernawaz",
    live: null,
    featured: false,
  },
  {
    id: 2,
    title: "Restaurant Website",
    description:
      "Multi-section restaurant website with full responsive design. Includes hero, menu cards, chef section, gallery grid, and reservation form — zero JavaScript.",
    tech: ["HTML5", "CSS3", "SCSS", "Animations"],
    category: "html-css",
    role: "Frontend",
    github: "https://github.com/sikandernawaz",
    live: null,
    featured: false,
  },

  // ── HTML + CSS + JS ──────────────────────────────────────────
  {
    id: 3,
    title: "Interactive Quiz App",
    description:
      "A dynamic quiz application with question timers, score tracking, progress bar, and result summary. Built with vanilla JS for DOM manipulation and state management.",
    tech: ["HTML5", "CSS3", "JavaScript", "DOM API"],
    category: "html-css-js",
    role: "Frontend",
    github: "https://github.com/sikandernawaz",
    live: null,
    featured: false,
  },
  {
    id: 4,
    title: "Expense Tracker",
    description:
      "Vanilla JS expense tracker with add/delete transactions, real-time balance calculation, and localStorage persistence. Clean UI with animated feedback.",
    tech: ["HTML5", "CSS3", "JavaScript", "LocalStorage"],
    category: "html-css-js",
    role: "Frontend",
    github: "https://github.com/sikandernawaz",
    live: null,
    featured: false,
  },

  // ── ReactJS ──────────────────────────────────────────────────
  {
    id: 5,
    title: "Weather Dashboard",
    description:
      "Real-time weather app consuming OpenWeatherMap API. Features city search, 5-day forecast, temperature unit toggle, and dynamic background based on weather conditions.",
    tech: ["React", "Context API", "REST API", "CSS Modules"],
    category: "react",
    role: "Frontend",
    github: "https://github.com/sikandernawaz",
    live: null,
    featured: false,
  },
  {
    id: 6,
    title: "E-Commerce UI",
    description:
      "Fully functional e-commerce front-end with product listing, cart management, filters, and checkout flow. Uses React Context for global cart state.",
    tech: ["React", "Context API", "React Router", "Tailwind CSS"],
    category: "react",
    role: "Frontend",
    github: "https://github.com/sikandernawaz",
    live: null,
    featured: false,
  },

  // ── Next.js ──────────────────────────────────────────────────
  {
    id: 7,
    title: "Dev Blog Platform",
    description:
      "A blog platform with static generation, dynamic routing, MDX support, and tag-based filtering. Optimized for SEO and fast page loads using Next.js SSG.",
    tech: ["Next.js 14", "MDX", "Tailwind CSS", "App Router"],
    category: "nextjs",
    role: "Full Stack",
    github: "https://github.com/sikandernawaz",
    live: null,
    featured: false,
  },
  {
    id: 8,
    title: "Portfolio v1",
    description:
      "First generation personal portfolio built with Next.js App Router and Tailwind CSS. Server-side rendered with dynamic project data, contact form, and smooth scroll animations.",
    tech: ["Next.js 14", "Tailwind CSS", "App Router", "Framer Motion"],
    category: "nextjs",
    role: "Frontend",
    github: "https://github.com/sikandernawaz",
    live: null,
    featured: false,
  },

  // ── React + Firebase ─────────────────────────────────────────
  {
    id: 9,
    title: "Bank Web App",
    description:
      "Full-featured banking dashboard with multi-provider authentication (Email, Google, Facebook, GitHub), real-time account management, deposit/withdrawal flows, and Firestore-backed data.",
    tech: ["React", "Firebase Auth", "Firestore", "Bootstrap 5", "Context API"],
    category: "react-firebase",
    role: "Full Stack",
    github: "https://github.com/sikandernawaz",
    live: null,
    featured: true,
  },
  {
    id: 10,
    title: "SogaatCafe Web App",
    description:
      "Full-stack restaurant management system with authentication, real-time Firestore data management, and a responsive UI designed for smooth daily restaurant operations.",
    tech: ["React.js", "Firebase", "Firestore", "CSS Modules"],
    category: "react-firebase",
    role: "Full Stack",
    github: "https://github.com/sikandernawaz",
    live: null,
    featured: false,
  },

  // ── Next.js + MongoDB ────────────────────────────────────────
  {
    id: 11,
    title: "TutorFinder Web App",
    description:
      "Scalable tutor marketplace with role-based auth (Admin / Tutor / Student), slot-based booking lifecycle, real-time chat via Socket.IO with payment-gated file sharing, and modular RESTful APIs.",
    tech: ["Next.js", "Node.js", "Express.js", "MongoDB", "Socket.IO", "JWT"],
    category: "nextjs-mongodb",
    role: "Full Stack",
    github: "https://github.com/sikandernawaz",
    live: null,
    featured: true,
  },

  // ── Hackathons ───────────────────────────────────────────────
  {
    id: 12,
    title: "NeuroFlow",
    description:
      "AI-powered brain tumor image classification and specialist assistant for medical diagnosis. International hackathon project developed with a global team from Indonesia, Bangladesh & Pakistan.",
    tech: ["React", "Flask", "Python", "Gen AI", "Machine Learning", "Bootstrap 5"],
    category: "hackathon",
    role: "Junior Developer",
    github: "https://github.com/sikandernawaz",
    live: null,
    featured: true,
    badge: "International Hackathon",
  },
  {
    id: 13,
    title: "AstroCleanAI",
    description:
      "AI-based space debris detection, classification, and collision risk prediction system. Built Flask APIs and trained YOLOv5 / ResNet-50 / XGBoost models for the AIstronaut Space Mission challenge.",
    tech: ["Python", "Flask", "YOLOv5", "PyTorch", "XGBoost", "ResNet-50"],
    category: "hackathon",
    role: "Backend & ML",
    github: "https://github.com/sikandernawaz",
    live: null,
    featured: true,
    badge: "AIstronaut Challenge",
  },
  {
    id: 14,
    title: "MeetGist",
    description:
      "AI-powered platform for automated meeting transcription, summarization, and team knowledge sharing via Slack. Designed FastAPI endpoints and integrated AssemblyAI + IBM Granite + Supabase.",
    tech: ["FastAPI", "Node.js", "Supabase", "AssemblyAI", "IBM Granite", "Slack API"],
    category: "hackathon",
    role: "Backend Engineer",
    github: "https://github.com/sikandernawaz",
    live: null,
    featured: false,
    badge: "AI Hackathon",
  },
];
