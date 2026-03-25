'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'

interface ProjectCardProps {
    title: string
    description: string
    image: string
    technologies: string[]
    liveUrl?: string
    githubUrl?: string
    featured?: boolean
}

const ProjectCard = ({
    title,
    description,
    image,
    technologies,
    liveUrl,
    githubUrl,
    featured = false
}: ProjectCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-black/10 bg-white/55 backdrop-blur shadow-lg shadow-black/10 transition-all duration-300 hover:bg-white/70 hover:border-[#1F262A]/30"
        >
            <div className="relative h-52 overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                {featured && (
                    <span className="absolute top-4 left-4 px-3 py-1 bg-white/70 text-[#1F262A] text-xs font-semibold rounded-full border border-black/10 backdrop-blur">
                        Featured
                    </span>
                )}
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-extrabold tracking-tight text-[#1F262A] mb-2">
                    {title}
                </h3>
                <p className="text-[#1F262A]/70 mb-4 line-clamp-3 flex-grow">
                    {description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-white/70 text-[#1F262A]/70 text-xs font-semibold rounded-full border border-black/10">
                            {tech}
                        </span>
                    ))}
                </div>
                <div className="mt-auto flex flex-wrap items-center gap-3">
                    <a
                        href={githubUrl ?? 'https://github.com/'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm font-semibold text-[#1F262A] transition-colors duration-300 hover:bg-white/90"
                        title={githubUrl ? 'View on GitHub' : 'Placeholder GitHub link (update later)'}
                    >
                        <Github className="h-4 w-4" />
                        GitHub
                    </a>

                    <a
                        href={liveUrl ?? 'https://example.com'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-[#1F262A] px-4 py-2 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#1F262A]/90"
                        title={liveUrl ? 'View Live' : 'Placeholder Live link (update later)'}
                    >
                        <ExternalLink className="h-4 w-4" />
                        Live
                    </a>
                </div>
            </div>
        </motion.div>
    )
}

export default ProjectCard