"use client";
import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";

const roles = [
  {
    id: 2,
    period: "Feb 2024 – Present",
    role: "Trainer & Moderator",
    org: "iCodeGuru",
    location: "Remote · Santa Clara, California",
    points: [
      "Volunteer teaching Python to underprivileged students.",
      "Delivered Data Structures & Algorithms from scratch with LeetCode-focused practicals.",
      "Moderated 'Machine Learning from Scratch & Its Privacy Implications' course.",
      "Facilitated weekly IELTS workshop and Duolingo English Proficiency Test preparation.",
    ],
  },
  {
    id: 1,
    period: "Apr 2026 – June 2026  ·  Apr – Jun 2024",
    role: "Section Leader Mentor",
    org: "Stanford University — Code in Place",
    location: "Remote · California, USA",
    points: [
      "Selected twice to teach Python to international students in groups of 10–15.",
      "Provided one-on-one student support and delivered TeachNow sessions.",
      "Helped students from the USA, UK, Canada, Russia, India, Bangladesh, Germany, Brazil, and more.",
    ],
  },

  {
    id: 3,
    period: "Jan 2026 – Jun 2026",
    role: "Instructor",
    org: "Pak Angels",
    location: "Remote · USA",
    points: [
      "Delivered sessions on Generative AI, fostering student understanding of modern AI concepts and applications.",
      "Mentored teams during Hackathon Cohort 2, providing technical guidance and project development support.",
      "Evaluated and judged submissions in Hackathon Cohort 3, assessing innovation, feasibility, and technical execution.",
    ],
  },
];

export default function Volunteer() {
  return (
    <section
      id="volunteer"
      className="py-28 px-6 relative"
      style={{
        background:
          "linear-gradient(180deg, transparent 0%, rgba(200,162,87,0.02) 50%, transparent 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="Teaching"
          title="Volunteer & Teaching"
          subtitle="Empowering students globally through open, accessible education in programming and technology."
        />

        <div className="relative pl-8 max-w-3xl">
          {/* Timeline line */}
          <div className="timeline-line rounded-full" />

          {roles.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: idx * 0.1,
                ease: [0.25, 0.4, 0.25, 1],
              }}
              className={`relative mb-12 ${idx === roles.length - 1 ? "mb-0" : ""}`}
            >
              {/* Dot */}
              <span className="absolute -left-[2.15rem] top-1.5 w-3 h-3 rounded-full border-2 border-[#C8A257] bg-[#C8A257]/20" />

              <div className="glass-card glow-border rounded-xl p-6">
                {/* Period */}
                <span className="font-mono text-xs text-zinc-600 tracking-wider uppercase">
                  {item.period}
                </span>

                {/* Role & org */}
                <h3 className="font-syne font-bold text-white text-lg mt-2 mb-0.5">
                  {item.role}
                </h3>
                <p className="text-sm font-medium mb-1 text-[#C8A257]">
                  {item.org}
                </p>
                <p className="text-xs text-zinc-600 mb-4">{item.location}</p>

                {/* Points */}
                <ul className="space-y-2">
                  {item.points.map((pt) => (
                    <li
                      key={pt}
                      className="flex gap-3 text-sm text-zinc-400 leading-relaxed"
                    >
                      <span className="mt-2 shrink-0 w-1 h-1 rounded-full bg-[#C8A257]/50" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
