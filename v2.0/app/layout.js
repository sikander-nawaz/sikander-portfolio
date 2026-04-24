import "./globals.css";

export const metadata = {
  title: "Sikander Nawaz — Software Engineer & Tech Trainer",
  description:
    "Portfolio of Sikander Nawaz — Software Engineer, Tech Trainer, Stanford Section Leader, and 3× Harvard CS50 winner from Faisalabad, Pakistan.",
  keywords: [
    "Sikander Nawaz",
    "Software Engineer",
    "Web Developer",
    "React",
    "Next.js",
    "Freelancer",
    "Pakistan",
  ],
  authors: [{ name: "Sikander Nawaz" }],
  openGraph: {
    title: "Sikander Nawaz — Software Engineer & Tech Trainer",
    description: "Building scalable web apps. Teaching the next generation.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
