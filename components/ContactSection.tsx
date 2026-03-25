'use client'

import { useFormState } from 'react-dom'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Send } from 'lucide-react'
import { sendEmail } from '@/app/actions'

type ContactSectionProps = {
    heading?: string
    subheading?: string
    email?: string
    githubUrl?: string
    linkedinUrl?: string
}

const initialState: any = {
    message: '',
    errors: {},
}

const ContactSection = ({
    heading = 'Get in touch',
    subheading = "Tell me about your project, timeline & what you're building — I'll respond soon.",
    email = 'sikandernawaz259@gmail.com',
    githubUrl = 'https://github.com/sikander-nawaz',
    linkedinUrl = 'https://www.linkedin.com/in/sikander-nawaz',
}: ContactSectionProps) => {
    const [state, formAction] = useFormState(sendEmail as any, initialState)

    return (
        <section id="contact" className="relative overflow-hidden bg-[#1F262A] py-16 sm:py-24">
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute -top-48 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full blur-3xl opacity-25"
                    style={{ background: 'radial-gradient(circle at 30% 30%, rgba(220,231,225,0.18), transparent 65%)' }}
                />
                <div
                    className="absolute -bottom-56 -left-44 h-[560px] w-[560px] rounded-full blur-3xl opacity-20"
                    style={{ background: 'radial-gradient(circle at 50% 50%, rgba(220,231,225,0.14), transparent 70%)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/45" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white"
                    >
                        {heading}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.05 }}
                        className="mt-4 text-base sm:text-lg text-white/70"
                    >
                        {subheading}
                    </motion.p>

                    <motion.a
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        href={`mailto:${email}`}
                        className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white/90 backdrop-blur transition-all duration-300 hover:bg-white/15"
                    >
                        <Mail className="h-4 w-4" />
                        {email}
                    </motion.a>
                </div>

                <div className="mt-12 grid gap-8 lg:grid-cols-5">
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.65 }}
                        className="lg:col-span-2"
                    >
                        <div className="rounded-3xl border border-white/10 bg-white/10 backdrop-blur p-6 sm:p-8 shadow-lg shadow-black/30">
                            <div className="text-sm font-semibold text-white/80">Connect</div>
                            <div className="mt-5 flex flex-wrap gap-3">
                                <a
                                    href={githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-white/80 transition-all duration-300 hover:bg-white/15 hover:text-white"
                                >
                                    <Github className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
                                    GitHub
                                </a>
                                <a
                                    href={linkedinUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-white/80 transition-all duration-300 hover:bg-white/15 hover:text-white"
                                >
                                    <Linkedin className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
                                    LinkedIn
                                </a>
                                <a
                                    href={`mailto:${email}`}
                                    className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-white/80 transition-all duration-300 hover:bg-white/15 hover:text-white"
                                >
                                    <Mail className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
                                    Email
                                </a>
                            </div>

                            <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/70">
                                <span className="inline-flex items-center gap-2">
                                    <span className="relative flex h-2.5 w-2.5">
                                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                                        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
                                    </span>
                                    Available for freelance, full-time roles, and training.
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.65, delay: 0.05 }}
                        className="lg:col-span-3"
                    >
                        <form action={formAction} className="rounded-3xl border border-white/10 bg-white/10 backdrop-blur p-6 sm:p-8 shadow-lg shadow-black/30">
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div>
                                    <label className="text-sm font-semibold text-white/80" htmlFor="name">Name</label>
                                    <input
                                        id="name"
                                        name="name"
                                        className="mt-2 w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition-colors focus:border-white/20"
                                        placeholder="Your name"
                                    />
                                    {state?.errors?.name?.[0] && (
                                        <div className="mt-2 text-sm text-white/70">{state.errors.name[0]}</div>
                                    )}
                                </div>
                                <div>
                                    <label className="text-sm font-semibold text-white/80" htmlFor="email">Email</label>
                                    <input
                                        id="email"
                                        name="email"
                                        className="mt-2 w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition-colors focus:border-white/20"
                                        placeholder="you@email.com"
                                    />
                                    {state?.errors?.email?.[0] && (
                                        <div className="mt-2 text-sm text-white/70">{state.errors.email[0]}</div>
                                    )}
                                </div>
                                <div className="sm:col-span-2">
                                    <label className="text-sm font-semibold text-white/80" htmlFor="subject">Subject</label>
                                    <input
                                        id="subject"
                                        name="subject"
                                        className="mt-2 w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition-colors focus:border-white/20"
                                        placeholder="Project inquiry"
                                    />
                                    {state?.errors?.subject?.[0] && (
                                        <div className="mt-2 text-sm text-white/70">{state.errors.subject[0]}</div>
                                    )}
                                </div>
                                <div className="sm:col-span-2">
                                    <label className="text-sm font-semibold text-white/80" htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={6}
                                        className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition-colors focus:border-white/20"
                                        placeholder="Tell me a bit about what you need…"
                                    />
                                    {state?.errors?.message?.[0] && (
                                        <div className="mt-2 text-sm text-white/70">{state.errors.message[0]}</div>
                                    )}
                                </div>
                            </div>

                            <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:justify-between">
                                <div className="text-sm text-white/60">{state?.message === 'success' ? 'Message sent successfully.' : state?.message}</div>
                                <button
                                    type="submit"
                                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white px-5 py-3 text-sm font-semibold text-[#1F262A] transition-all duration-300 hover:bg-white/90"
                                >
                                    Send Message
                                    <Send className="h-4 w-4" />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection
