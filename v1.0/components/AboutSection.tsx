'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useMemo, useState } from 'react'

type AboutImage = {
    src: string
    alt: string
}

type AboutSectionProps = {
    images?: AboutImage[]
    title?: string
    highlight?: string
    description?: string[]
    intervalMs?: number
}

const AboutSection = ({
    images,
    title = 'About Me',
    highlight = 'About',
    description = [
        "I help teams and founders turn ideas into polished, high-performing web experiences—fast, reliable, and built to scale.",
        "From landing pages to full-stack applications, I focus on clean UI, strong architecture, and shipping with confidence.",
        "I also provide training and mentorship to help developers level up with practical, industry-focused guidance polished, high-performing web experiences—fast, reliable, and built to scale.",
        "From landing pages to full-stack applications, I focus on clean UI, strong architecture, and shipping with confidence.",
        "I also provide training and mentorship to help developers level up with practical, industry-focused guidance.",
    ],
    intervalMs = 3500,
}: AboutSectionProps) => {

    const slides = useMemo<AboutImage[]>(
        () =>
            images && images.length > 0
                ? images
                : [
                    { src: '/assets/sikander-nawaz.jpg', alt: 'Sikander Nawaz' },
                    { src: '/assets/sikander-nawaz.jpg', alt: 'Portfolio' },
                    { src: '/assets/sikander-nawaz.jpg', alt: 'Logo' },
                ],
        [images]
    )

    const [order, setOrder] = useState<number[]>(() => slides.map((_, i) => i))

    useEffect(() => {
        const id = window.setInterval(() => {
            setOrder((o) => {
                if (o.length <= 1) return o
                return [...o.slice(1), o[0]]
            })
        }, intervalMs)

        return () => window.clearInterval(id)
    }, [intervalMs])

    const advance = () => {
        setOrder((o) => {
            if (o.length <= 1) return o
            return [...o.slice(1), o[0]]
        })
    }

    return (
        <section id="about" className="relative overflow-hidden bg-[#1F262A] py-16 sm:py-24">
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute -top-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full blur-3xl opacity-40"
                    style={{ background: 'radial-gradient(circle at 35% 35%, rgba(220,231,225,0.18), transparent 65%)' }}
                />
                <div
                    className="absolute -bottom-28 -right-32 h-[420px] w-[420px] rounded-full blur-3xl opacity-35"
                    style={{ background: 'radial-gradient(circle at 45% 45%, rgba(220,231,225,0.14), transparent 70%)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/35" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                        <span className="text-white/70">{highlight}</span>{' '}
                        <span className="text-white">{title.replace(highlight, '').trim() || 'Me'}</span>
                    </h2>
                </motion.div>

                <div className="mt-10 grid items-center gap-10 lg:grid-cols-2">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="order-2 lg:order-1"
                    >
                        <div className="relative mx-auto w-full max-w-xs sm:max-w-sm">
                            <div className="relative aspect-[7/8] w-full">
                                {order.map((slideIndex, stackIndex) => {
                                    const s = slides[slideIndex]
                                    const isFront = stackIndex === 0
                                    const y = stackIndex * 12
                                    const x = stackIndex * 10
                                    const rotate = stackIndex === 0 ? 0 : stackIndex === 1 ? -3 : 3
                                    const scale = stackIndex === 0 ? 1 : stackIndex === 1 ? 0.97 : 0.94
                                    const zIndex = 30 - stackIndex

                                    return (
                                        <motion.div
                                            key={`${s.src}-${slideIndex}`}
                                            className="absolute inset-0"
                                            style={{ zIndex }}
                                            animate={{ x, y, rotate, scale }}
                                            transition={{ duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
                                            drag={isFront ? 'x' : false}
                                            dragConstraints={{ left: 0, right: 0 }}
                                            dragElastic={0.18}
                                            onDragEnd={(_, info) => {
                                                if (!isFront) return
                                                if (Math.abs(info.offset.x) > 80) advance()
                                            }}
                                            onClick={() => {
                                                if (isFront) advance()
                                            }}
                                        >
                                            <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg shadow-black/40">
                                                <Image
                                                    src={s.src}
                                                    alt={s.alt}
                                                    fill
                                                    className="object-cover"
                                                    sizes="(max-width: 1024px) 88vw, 420px"
                                                />
                                                <div
                                                    className="absolute inset-0"
                                                    style={{
                                                        background:
                                                            'linear-gradient(180deg, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.40) 70%, rgba(0,0,0,0.62) 100%)',
                                                    }}
                                                />
                                            </div>
                                        </motion.div>
                                    )
                                })}

                                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 z-50">
                                    <div className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white/80 shadow-sm shadow-black/30 backdrop-blur">
                                        Tap or swipe
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.05 }}
                        className="order-1 lg:order-2"
                    >
                        <div className="space-y-4 text-white/70 leading-relaxed text-justify">
                            {description.map((p, idx) => (
                                <p key={idx} className="text-base sm:text-lg">
                                    {p}
                                </p>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>

    )
}

export default AboutSection