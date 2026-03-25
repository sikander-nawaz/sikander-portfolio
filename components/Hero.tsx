'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

type HeroProps = {
    name?: string
    title?: string
    badgeText?: string
    description?: string
    imageSrc?: string
    imageAlt?: string
    accentColor?: string
    cvHref?: string
    contactHref?: string
}

const Hero = ({
    name = 'Sikander Nawaz',
    title = 'Full-Stack Developer & Trainer',
    badgeText = 'Available for work',
    description = "I build modern, scalable web apps end-to-end clean UI, robust backend, and production-ready delivery. I also train developers and teams with practical, industry-focused mentorship.",
    imageSrc = '/assets/sikander-nawaz.jpg',
    imageAlt = 'Sikander Nawaz',
    accentColor = '#1F262A',
    cvHref = '/assets/Sikander_Nawaz.pdf',
    contactHref = '/contact',
}: HeroProps) => {

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.1,
            },
        },
    }

    const item = {
        hidden: { opacity: 0, y: 18 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] },
        },
    }

    const renderTitle = (value: string) => {
        const idx = value.toLowerCase().indexOf('full-stack')
        if (idx === -1) return value

        const before = value.slice(0, idx)
        const word = value.slice(idx, idx + 'Full-Stack'.length)
        const after = value.slice(idx + 'Full-Stack'.length)

        return (
            <>
                {before}
                <span
                    className="text-transparent bg-clip-text"
                    style={{
                        backgroundImage:
                            'linear-gradient(90deg, var(--accent) 0%, rgba(75,85,99,0.95) 55%, var(--accent) 100%)',
                    }}
                >
                    {word}
                </span>
                {after}
            </>
        )
    }

    return (
        <section
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#DCE7E1] pt-20"
            style={{ ['--accent' as any]: accentColor }}
        >
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-48 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full blur-3xl opacity-30"
                    style={{ background: 'radial-gradient(circle at 30% 30%, rgba(31,38,42,0.12), transparent 65%)' }}
                />
                <div className="absolute -bottom-56 -left-40 h-[520px] w-[520px] rounded-full blur-3xl opacity-25"
                    style={{ background: 'radial-gradient(circle at 50% 50%, rgba(31,38,42,0.10), transparent 70%)' }}
                />
                <div
                    className="absolute inset-0 opacity-25"
                    style={{
                        backgroundImage:
                            'linear-gradient(to right, rgba(31,38,42,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(31,38,42,0.08) 1px, transparent 1px)',
                        backgroundSize: '56px 56px',
                        maskImage: 'radial-gradient(circle at 40% 35%, black 0%, transparent 60%)',
                        WebkitMaskImage: 'radial-gradient(circle at 40% 35%, black 0%, transparent 60%)',
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#DCE7E1] via-[#DCE7E1]/90 to-[#DCE7E1]" />
            </div>

            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="relative z-10 mx-auto w-full max-w-6xl px-4"
            >
                <div className="grid items-center gap-12 md:grid-cols-2">
                    <div className="text-center md:text-left">
                        <motion.div variants={item} className="mb-6 flex items-center justify-center md:justify-start">
                            <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-4 py-2 text-sm font-medium text-[#1F262A] backdrop-blur">
                                <span className="relative flex h-2.5 w-2.5 items-center justify-center">
                                    <span
                                        className="absolute inline-flex h-full w-full rounded-full opacity-30 animate-ping"
                                        style={{ backgroundColor: '#22c55e' }}
                                    />
                                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full" style={{ backgroundColor: '#22c55e' }} />
                                </span>
                                <span className="text-[#1F262A]/80">{badgeText}</span>
                            </span>
                        </motion.div>

                        <motion.h1
                            variants={item}
                            className="text-balance text-4xl font-extrabold tracking-tight text-[#1F262A] sm:text-5xl lg:text-6xl"
                        >
                            <span className="block">{name}</span>
                            <span
                                className="mt-3 block text-lg font-semibold tracking-normal text-[#1F262A]/70 sm:text-xl lg:text-2xl"
                            >
                                {renderTitle(title)}
                            </span>
                        </motion.h1>

                        <motion.p
                            variants={item}
                            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#1F262A]/70 md:mx-0 sm:text-lg"
                        >
                            {description}
                        </motion.p>

                        <motion.div
                            variants={item}
                            className="mt-8 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center md:justify-start"
                        >
                            <a
                                href={cvHref}
                                download
                                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-black/10 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-black/30 focus:ring-offset-2 focus:ring-offset-[#DCE7E1]"
                                style={{ backgroundColor: 'var(--accent)' }}
                            >
                                <span className="relative">Download CV</span>
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-white/90 transition-transform duration-300 group-hover:translate-y-0.5"
                                    aria-hidden
                                >
                                    <path
                                        d="M12 3v10"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M8 11l4 4 4-4"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M5 21h14"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </a>

                            <Link
                                href={contactHref}
                                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-black/10 bg-white/60 px-6 py-3 text-sm font-semibold text-[#1F262A] backdrop-blur transition-all duration-300 hover:bg-white/75 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-black/20 focus:ring-offset-2 focus:ring-offset-[#DCE7E1]"
                            >
                                Contact Me
                            </Link>
                        </motion.div>

                        <motion.div variants={item} className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-[#1F262A]/55 md:justify-start">
                            <span className="inline-flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: 'var(--accent)' }} />
                                Full-Stack Apps
                            </span>
                            <span className="inline-flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: 'var(--accent)' }} />
                                Extensions 
                            </span>
                            <span className="inline-flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: 'var(--accent)' }} />
                                Training & Mentorship
                            </span>
                        </motion.div>
                    </div>

                    <motion.div variants={item} className="relative mx-auto w-full max-w-md md:max-w-none">
                        <div className="relative mx-auto aspect-square w-[280px] sm:w-[340px] md:w-[420px]">
                            <div
                                className="absolute inset-0 -rotate-6 rounded-[28px]"
                                style={{
                                    background:
                                        'linear-gradient(135deg, rgba(31,38,42,0.10), rgba(31,38,42,0.02))',
                                    boxShadow: '0 40px 90px rgba(0,0,0,0.55)',
                                }}
                            />
                            <div className="absolute inset-0 rotate-3 rounded-[28px] border border-black/10 bg-white/50 backdrop-blur" />
                            <div className="absolute inset-0 rounded-[28px] p-2">
                                <div className="relative h-full w-full overflow-hidden rounded-[22px] border border-black/10 bg-white">
                                    <Image
                                        src={imageSrc}
                                        alt={imageAlt}
                                        fill
                                        priority
                                        className="object-cover"
                                    />
                                    <div
                                        className="absolute inset-0"
                                        style={{
                                            background:
                                                'linear-gradient(180deg, rgba(0,0,0,0.04) 0%, rgba(0,0,0,0.22) 70%, rgba(0,0,0,0.38) 100%)',
                                        }}
                                    />
                                </div>
                            </div>

                            <div
                                className="absolute -left-3 -top-3 h-12 w-12 rounded-2xl border-l-2 border-t-2"
                                style={{ borderColor: 'rgba(31,38,42,0.30)' }}
                            />
                            <div
                                className="absolute -right-3 -top-3 h-12 w-12 rounded-2xl border-r-2 border-t-2"
                                style={{ borderColor: 'rgba(31,38,42,0.30)' }}
                            />
                            <div
                                className="absolute -left-3 -bottom-3 h-12 w-12 rounded-2xl border-l-2 border-b-2"
                                style={{ borderColor: 'rgba(31,38,42,0.30)' }}
                            />
                            <div
                                className="absolute -right-3 -bottom-3 h-12 w-12 rounded-2xl border-r-2 border-b-2"
                                style={{ borderColor: 'rgba(31,38,42,0.30)' }}
                            />

                            <div
                                className="absolute left-2 top-2 h-2.5 w-2.5 rounded-full blur-[0.5px]"
                                style={{
                                    backgroundColor: 'var(--accent)',
                                    boxShadow: '0 0 0 6px rgba(31,38,42,0.10)',
                                }}
                            />
                            <div
                                className="absolute right-4 bottom-4 h-2 w-2 rounded-full"
                                style={{
                                    backgroundColor: 'rgba(31,38,42,0.90)',
                                    boxShadow: '0 0 0 10px rgba(31,38,42,0.10)',
                                }}
                            />

                            <div
                                className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs font-semibold text-[#1F262A]/80 shadow-lg backdrop-blur"
                            >
                                Building & Teaching Modern Web
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}

export default Hero