"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Code2 } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.4, 0.25, 1] },
});

export default function Hero() {
  const stats = [
    { num: "220+", label: "LeetCode Solved" },
    { num: "3×",   label: "Harvard CS50 Winner" },
    { num: "5+",   label: "Intl. Hackathons" },
    { num: "2+",   label: "Years Teaching" },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-6 pt-24 pb-16">

      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Ambient orbs */}
      <div className="orb w-[500px] h-[500px] top-[-120px] left-[-150px] bg-[#C8A257]/[0.06]" />
      <div className="orb w-[350px] h-[350px] bottom-[-50px] right-[-100px] bg-[#C8A257]/[0.04]" />

      {/* Main grid */}
      <div className="relative z-10 max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT: Content */}
        <div className="flex flex-col order-2 lg:order-1">

          {/* Status badge */}
          <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#C8A257]/20 bg-[#C8A257]/[0.06] mb-8 w-fit">
            <span className="w-2 h-2 rounded-full bg-[#C8A257] animate-pulse" />
            <span className="font-mono text-xs font-medium text-[#E2C792] tracking-widest uppercase">
              Available for Work
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1 {...fadeUp(0.2)} className="font-syne font-bold leading-[1.05] mb-6">
            <span
              className="block text-white"
              style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.2rem)" }}
            >
              Sikander Nawaz
            </span>
            <span
              className="block gradient-text"
              style={{ fontSize: "clamp(1.6rem, 4vw, 3.2rem)" }}
            >
              Software Engineer
            </span>
            <span
              className="block text-zinc-500 font-outfit font-normal"
              style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)" }}
            >
              &amp; Tech Trainer
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p {...fadeUp(0.3)} className="text-zinc-400 font-outfit font-light max-w-[500px] mb-8 leading-relaxed text-base lg:text-lg">
            Building scalable web applications and empowering the next generation
            of developers through mentorship and teaching — based in{" "}
            <span className="text-[#E2C792] font-medium">Faisalabad, Pakistan</span>.
          </motion.p>

          {/* CTAs */}
          <motion.div {...fadeUp(0.4)} className="flex flex-wrap gap-4 mb-10">
            <a href="#projects" className="btn-primary">
              View My Work
              <ArrowRight size={15} />
            </a>
            <a href="mailto:sikandernawaz295@gmail.com" className="btn-ghost">
              Get in Touch
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div {...fadeUp(0.5)} className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-3">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-card">
                <div className="font-syne font-bold text-xl gradient-text-gold leading-none mb-1">
                  {stat.num}
                </div>
                <div className="text-zinc-500 text-xs font-outfit tracking-wide leading-snug">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Social links */}
          <motion.div {...fadeUp(0.6)} className="flex items-center gap-6 mt-8 pt-6 border-t border-white/[0.05]">
            {[
              { label: "GitHub", href: "https://github.com", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg> },
              { label: "LinkedIn", href: "https://linkedin.com", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
              { label: "LeetCode", href: "https://leetcode.com", icon: <Code2 size={14} /> },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-mono font-medium text-zinc-600 hover:text-[#E2C792] transition-colors tracking-wider uppercase"
              >
                {link.icon}
                {link.label}
              </a>
            ))}
          </motion.div>
        </div>

        {/* RIGHT: Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <div className="relative w-[280px] h-[360px] sm:w-[340px] sm:h-[430px] lg:w-[400px] lg:h-[510px]">

            {/* Offset decorative border frame */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                transform: "translate(10px, 10px)",
                border: "1px solid rgba(200,162,87,0.18)",
                borderRadius: "20px",
              }}
            />

            {/* Outer glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                boxShadow: "0 0 80px rgba(200,162,87,0.06), 0 0 160px rgba(200,162,87,0.03)",
                borderRadius: "20px",
              }}
            />

            {/* Photo container */}
            <div
              className="relative w-full h-full overflow-hidden"
              style={{ borderRadius: "20px" }}
            >
              <Image
                src="/profile.png"
                alt="Sikander Nawaz"
                fill
                priority
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 340px, 400px"
                className="object-cover object-top"
                style={{
                  filter: "brightness(0.88) contrast(1.06) saturate(0.85)",
                }}
              />

              {/* Bottom fade */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `linear-gradient(to bottom, rgba(9,9,11,0.05) 0%, rgba(9,9,11,0) 30%, rgba(9,9,11,0.5) 75%, rgba(9,9,11,0.96) 100%)`,
                }}
              />

              {/* Side fades */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `
                    linear-gradient(to right, rgba(9,9,11,0.5) 0%, transparent 20%, transparent 80%, rgba(9,9,11,0.5) 100%),
                    linear-gradient(to bottom, rgba(9,9,11,0.4) 0%, transparent 16%)
                  `,
                }}
              />

              {/* Warm tint color grade */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "linear-gradient(160deg, rgba(200,162,87,0.06) 0%, rgba(226,199,146,0.04) 60%, transparent 100%)",
                  mixBlendMode: "screen",
                }}
              />

              {/* Floating name card at bottom */}
              <div className="absolute bottom-0 left-0 right-0 px-5 py-4">
                <p className="font-syne font-bold text-white text-sm leading-tight">
                  Sikander Nawaz
                </p>
                <p className="font-mono text-[0.65rem] text-[#C8A257]/75 tracking-wider mt-0.5">
                  Software Engineer · Faisalabad, PK
                </p>
              </div>
            </div>

            {/* Corner accent dots */}
            <div className="absolute -top-1.5 -left-1.5 w-3 h-3 rounded-full bg-[#C8A257]/60" />
            <div className="absolute -top-1.5 -right-1.5 w-2 h-2 rounded-full bg-[#E2C792]/40" />
            <div className="absolute -bottom-1.5 -left-1.5 w-2 h-2 rounded-full bg-[#E2C792]/40" />
            <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 rounded-full bg-[#C8A257]/60" />

          </div>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-zinc-500 text-[10px] font-mono tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#C8A257]/50 to-transparent" />
      </motion.div>

    </section>
  );
}
