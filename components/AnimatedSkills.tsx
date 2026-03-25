'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
    SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiPostgresql, SiMongodb, SiDocker,
    SiPython, SiGitlab, SiOpenai , SiWordpress
} from 'react-icons/si'

type Skill = {
    name: string
    icon: any
    color: string
}

const skills = [
    { name: "React", icon: SiReact, color: "text-cyan-400 " },
    { name: "Next.js", icon: SiNextdotjs, color: "text-black" },
    { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
    { name: "Express", icon: SiExpress, color: "text-gray-900" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-600" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
    { name: "Docker", icon: SiDocker, color: "text-blue-400" },
    { name: "Python", icon: SiPython, color: "text-yellow-500" },
    { name: "GitLab", icon: SiGitlab, color: "text-orange-500" },
    { name: "OpenAI", icon: SiOpenai, color: "text-teal-400" },
    { name: "WordPress", icon: SiWordpress, color: "text-blue-400" },
]

const SkillCard = ({ skill }: { skill: Skill }) => {
    const Icon = skill.icon
    return (
        <motion.div
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 260, damping: 18 }}
            className="group relative flex flex-col items-center gap-3 overflow-hidden rounded-2xl border border-black/10 bg-white/55 p-5 backdrop-blur shadow-sm shadow-black/10 transition-all duration-300 hover:bg-white/70 hover:border-[#1F262A]/60 hover:ring-1 hover:ring-[#1F262A]/30"
        >
            <div
                className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                    background:
                        'radial-gradient(600px circle at 50% 0%, rgba(31,38,42,0.10), transparent 45%)',
                }}
            />
            <div className="relative z-10 flex items-center justify-center">
                <div className="grid h-12 w-12 place-items-center rounded-2xl border border-black/10 bg-white/70">
                    <Icon className={`h-7 w-7 ${skill.color}`} />
                </div>
            </div>
            <span className="relative z-10 block w-full text-center text-sm font-semibold tracking-wide text-[#1F262A]/80">
                {skill.name}
            </span>
        </motion.div>
    )
}

const AnimatedSkills = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.06,
                delayChildren: 0.12,
            },
        },
    }

    const item = {
        hidden: { opacity: 0, y: 14 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] },
        },
    }

    return (
        <section className="relative overflow-hidden bg-[#DCE7E1] py-16 sm:py-24">
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full blur-3xl opacity-30"
                    style={{ background: 'radial-gradient(circle at 30% 30%, rgba(31,38,42,0.14), transparent 65%)' }}
                />
                <div
                    className="absolute -bottom-48 -left-32 h-[520px] w-[520px] rounded-full blur-3xl opacity-25"
                    style={{ background: 'radial-gradient(circle at 50% 50%, rgba(31,38,42,0.10), transparent 70%)' }}
                />
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage:
                            'linear-gradient(to right, rgba(31,38,42,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(31,38,42,0.08) 1px, transparent 1px)',
                        backgroundSize: '64px 64px',
                        maskImage: 'radial-gradient(circle at 50% 20%, black 0%, transparent 58%)',
                        WebkitMaskImage: 'radial-gradient(circle at 50% 20%, black 0%, transparent 58%)',
                    }}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#1F262A]"
                    >
                        My <span className="text-[#1F262A]/70">Toolkit</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.05 }}
                        className="mt-4 text-base sm:text-lg text-[#1F262A]/70"
                    >
                        The technologies I use to build modern web experiences.
                    </motion.p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
                >
                    {skills.map((skill) => (
                        <motion.div key={skill.name} variants={item}>
                            <SkillCard skill={skill as Skill} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default AnimatedSkills;