'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navItems = [
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ]

    return (
        <nav className="fixed top-0 left-0 right-0 z-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-3">
                <div
                    className={`flex items-center justify-between rounded-full border transition-all duration-300 px-2.5 sm:px-3 py-1.5 ${scrolled
                        ? 'border-black/10 bg-white/35 backdrop-blur-md shadow-sm shadow-black/10'
                        : 'border-black/10 bg-white/55 backdrop-blur'}
                    `}
                >
                    <Link
                        href="/"
                        className="flex items-center rounded-full px-1.5 py-1.5 text-[#1F262A] transition-colors duration-300"
                        onClick={e => {
                            if (pathname === "/") {
                                e.preventDefault();
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }
                        }}
                    >
                        <span
                            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white/60 text-sm font-extrabold tracking-tight text-[#1F262A]"
                            aria-label="SN"
                        >
                            SN
                        </span>
                    </Link>

                    <div className="flex items-center gap-2">
                        <div className="hidden md:flex items-center gap-1">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`rounded-full px-3 py-1.5 text-sm font-semibold transition-all duration-300 ${pathname === item.href
                                        ? 'bg-white/70 text-[#1F262A] shadow-sm shadow-black/5'
                                        : 'text-[#1F262A]/70 hover:text-[#1F262A] hover:bg-white/60'
                                        }`}
                                    onClick={(e) => {
                                        if (item.href.startsWith('#')) {
                                            e.preventDefault()
                                            document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' })
                                        }
                                    }}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex md:hidden items-center justify-center h-9 w-9 rounded-full border border-black/10 bg-white/50 text-[#1F262A]/80 transition-all duration-300 hover:bg-white/70 hover:text-[#1F262A] focus:outline-none focus:ring-2 focus:ring-black/20"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </button>
                    </div>
                </div>

                {isOpen && (
                    <div className="md:hidden mt-3">
                        <div className="rounded-2xl border border-black/10 bg-white/55 backdrop-blur-md shadow-sm shadow-black/10 p-2">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={(e) => {
                                        setIsOpen(false)
                                        if (item.href.startsWith('#')) {
                                            e.preventDefault()
                                            document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' })
                                        }
                                    }}
                                    className={`block rounded-xl px-4 py-3 text-base font-semibold transition-colors duration-300 ${pathname === item.href
                                        ? 'bg-white/80 text-[#1F262A]'
                                        : 'text-[#1F262A]/70 hover:bg-white/70 hover:text-[#1F262A]'
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navigation