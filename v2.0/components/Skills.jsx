"use client";
import { skillCategories } from "@/data/skills";
import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-28 px-6 relative"
      style={{
        background:
          "linear-gradient(180deg, transparent 0%, rgba(200,162,87,0.02) 50%, transparent 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="Expertise"
          title="Skills & Tech Stack"
          subtitle="A full-spectrum toolkit spanning frontend, backend, mobile, AI, and teaching."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.25, 0.4, 0.25, 1] }}
              className="skill-card group"
            >
              {/* Header */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[#C8A257]/60 font-mono text-base group-hover:text-[#C8A257] transition-colors">
                  {cat.icon}
                </span>
                <span className="font-syne font-semibold text-sm text-zinc-300 tracking-wide uppercase">
                  {cat.label}
                </span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
