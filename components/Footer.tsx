'use client'
import { Github, Linkedin, Mail } from 'lucide-react'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const Footer = () => {
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        if (!hasAnimated) {
            setHasAnimated(true);
        }
    }, [hasAnimated]);

    return (
        <footer className="relative overflow-hidden border-t border-white/10 bg-[#1F262A]">
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute -top-48 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full blur-3xl opacity-25"
                    style={{ background: 'radial-gradient(circle at 30% 30%, rgba(220,231,225,0.18), transparent 65%)' }}
                />
                <div
                    className="absolute -bottom-56 -left-40 h-[520px] w-[520px] rounded-full blur-3xl opacity-20"
                    style={{ background: 'radial-gradient(circle at 50% 50%, rgba(220,231,225,0.14), transparent 70%)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid gap-10 md:grid-cols-3 md:items-start">
                    <div className="text-center md:text-left">
                        <div className="inline-flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full border border-white/10 bg-white/10 grid place-items-center text-white font-extrabold tracking-tight">
                                SN
                            </div>
                            <div className="text-left">
                                <div className="text-white font-extrabold tracking-tight">Sikander Nawaz</div>
                                <div className="text-sm text-white/60">Full-Stack Developer & Trainer</div>
                            </div>
                        </div>
                        <p className="mt-4 text-sm text-white/60 leading-relaxed">
                            Building modern web experiences with clean UI, solid backend, and practical mentorship.
                        </p>
                    </div>

                    <div className="text-center md:text-left">
                        <div className="text-sm font-semibold text-white/80">Quick Links</div>
                        <div className="mt-4 flex flex-col gap-2">
                            <a className="text-sm text-white/60 hover:text-white transition-colors" href="#about">About</a>
                            <a className="text-sm text-white/60 hover:text-white transition-colors" href="#projects">Projects</a>
                            <a className="text-sm text-white/60 hover:text-white transition-colors" href="#contact">Contact</a>
                        </div>
                    </div>

                    <div className="text-center md:text-right">
                        <div className="text-sm font-semibold text-white/80">Let’s connect</div>
                        <motion.div
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.15 }}
                            className="mt-4 flex justify-center md:justify-end gap-3"
                        >
                            <a
                                href="https://github.com/Fatimaarshad10"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white/80 backdrop-blur transition-all duration-300 hover:bg-white/15 hover:text-white"
                                title="GitHub"
                            >
                                <Github className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/fatima-arshad-6ba52a184/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white/80 backdrop-blur transition-all duration-300 hover:bg-white/15 hover:text-white"
                                title="LinkedIn"
                            >
                                <Linkedin className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
                            </a>
                            <a
                                href="mailto:fatimaarshad091@gmail.com"
                                className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white/80 backdrop-blur transition-all duration-300 hover:bg-white/15 hover:text-white"
                                title="Email"
                            >
                                <Mail className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
                            </a>
                        </motion.div>
                    </div>
                </div>

                <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-white/50">
                    &copy; {new Date().getFullYear()} Sikander Nawaz. All rights reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer
