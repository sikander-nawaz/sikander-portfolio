"use client";
import { useState } from "react";
import { projects, categories } from "@/data/projects";
import SectionHeader from "./SectionHeader";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink as ExternalLinkIcon, Star } from "lucide-react";

function ExtLink({ href, label, icon }) {
  if (!href) return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1 text-xs font-medium text-zinc-500 hover:text-[#E2C792] transition-colors"
    >
      {icon}
      {label}
    </a>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="glass-card glow-border rounded-xl p-6 flex flex-col gap-4 h-full">

      {/* Header row */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-col gap-1.5">
          {project.badge && (
            <span className="inline-block font-mono text-[0.6rem] font-semibold tracking-widest uppercase text-[#E2C792] bg-[#C8A257]/10 border border-[#C8A257]/20 px-2 py-0.5 rounded-sm w-fit">
              {project.badge}
            </span>
          )}
          <h3 className="font-syne font-semibold text-white text-base leading-snug">
            {project.title}
          </h3>
        </div>
        {project.featured && (
          <span className="shrink-0 flex items-center gap-1 text-[0.6rem] font-semibold uppercase tracking-wider text-[#C8A257] bg-[#C8A257]/10 border border-[#C8A257]/20 px-2 py-1 rounded-sm">
            <Star size={10} className="fill-current" /> Featured
          </span>
        )}
      </div>

      {/* Description */}
      <p className="text-zinc-500 text-sm leading-relaxed flex-1">
        {project.description}
      </p>

      {/* Tech pills */}
      <div className="flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <span key={t} className="tech-pill">
            {t}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-2 border-t border-white/[0.05]">
        <span className="text-xs font-semibold font-mono text-[#C8A257]/60 tracking-wider uppercase">
          {project.role}
        </span>
        <div className="flex items-center gap-4">
          {project.live && <ExtLink href={project.live} label="Live" icon={<ExternalLinkIcon size={11} />} />}
          <ExtLink href={project.github} label="GitHub" icon={<svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>} />
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-28 px-6 relative">
      <div className="orb w-[400px] h-[400px] bottom-0 left-[-100px] bg-[#C8A257]/[0.03]" />
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="Portfolio"
          title="Projects & Hackathons"
          subtitle="Real-world applications across the full web stack — from static pages to AI-powered platforms."
        />

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`filter-pill ${activeCategory === cat.id ? "active" : ""}`}
            >
              {cat.label}
              {activeCategory === cat.id && (
                <span className="ml-1.5 text-[0.6rem] opacity-80 font-mono">
                  ({filtered.length})
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-zinc-600 font-outfit">
            No projects in this category yet.
          </div>
        )}
      </div>
    </section>
  );
}
