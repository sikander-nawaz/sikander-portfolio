"use client";
import { motion } from "framer-motion";

export default function SectionHeader({ tag, title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      className="mb-14"
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="font-mono text-xs font-medium tracking-[0.15em] uppercase text-[#C8A257]">
          {tag}
        </span>
        <div className="w-12 h-px bg-gradient-to-r from-[#C8A257]/50 to-transparent" />
      </div>
      <h2
        className="font-syne font-bold leading-tight mb-3 text-white"
        style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-zinc-500 font-outfit max-w-lg text-base leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
