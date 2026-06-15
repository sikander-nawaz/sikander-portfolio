"use client";
import { achievements } from "@/data/achievements";
import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const colorMap = {
  cyan: "text-[#E2C792] bg-[#C8A257]/10 border-[#C8A257]/20",
  blue: "text-[#E2C792] bg-[#C8A257]/8 border-[#C8A257]/15",
  purple: "text-[#E2C792] bg-[#C8A257]/10 border-[#C8A257]/20",
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-28 px-6 relative">
      <div className="orb w-[400px] h-[400px] top-0 right-[-120px] bg-[#C8A257]/[0.04]" />
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="Recognition"
          title="Achievements & Awards"
          subtitle="Recognized by top global institutions for engineering excellence, competitive programming, and academic leadership."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.06,
                ease: [0.25, 0.4, 0.25, 1],
              }}
              className="glass-card glow-border rounded-xl p-6 flex flex-col gap-3"
            >
              {/* Org badge */}
              <div className="flex items-start justify-between gap-2">
                <span className={`org-badge ${colorMap[item.color]}`}>
                  {item.orgShort}
                </span>
                <span
                  className={`text-xs font-mono font-medium px-2 py-1 rounded-md border ${colorMap[item.color]}`}
                >
                  {item.badge}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-syne font-semibold text-white text-base leading-snug">
                {item.title}
              </h3>

              {/* Desc */}
              <p className="text-zinc-500 text-sm leading-relaxed flex-1">
                {item.description}
              </p>

              {/* Links */}
              {item.links.length > 0 && (
                <div className="flex gap-2 flex-wrap pt-1">
                  {item.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs font-medium text-[#C8A257] hover:text-[#E2C792] transition-colors cursor-pointer relative z-10"
                    >
                      {link.label}
                      <ExternalLink size={10} />
                    </a>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
