'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

const volunteerWork = [
    {
        organization: 'Code in Place',
        role: 'Section Leader (Part-time)',
        date: 'Apr 2025 – Jun 2025 · 3 mos',
        location: 'United States · Remote',
        highlights: [
            'Volunteered as a Section Leader, teaching international students problem-solving, Karel, and Python programming.',
            'Engaged students with interactive activities and supported their learning journey.'
        ],
        certificateLink: 'https://digitalcredential.stanford.edu/check/6A90631386ACD84D19D2AD9D6292CEBF9F14C93C2AA1124BD96A5B584B47E201RWVxR1l6Zkx0YXVNaUNwVUYxdlppTjBlUEhZcjJkd3daS1Rncm53TWZMOW1QOUxv'
    },
    {
        organization: 'iCodeGuru',
        role: 'Instructor (Part-time)',
        date: 'May 2024 – Jul 2024 · 3 mos',
        location: 'Silicon Valley, California, United States · Remote',
        highlights: [
            'Trained students in Python fundamentals: variables, data types, control structures, functions, and basic data structures.',
            'Focused on instructor development and Python programming skills.'
        ],
        projectLink: 'https://github.com/Fatimaarshad10/PythonTeachingVolunteers'
    },

];

const certificates = [
    {
        title: 'First Hackathon: Emma (AI Therapist App)',
        issuer: 'lablab.ai GPT-4o Hackathon',
        date: 'June 2024',
        links: [
            { label: 'GitHub', url: 'https://github.com/Fatimaarshad10/dr_emma' },
            { label: 'Hackathon Event', url: 'https://lablab.ai/event/hello-gpt-4o-ai-challenge/mental-health-gpt4o/emma-mental-health' },
            { label: 'Profile', url: 'https://lablab.ai/u/@fatimaarshad10/clxuet54m001z10o5c2rxh7fe' }
        ],
        highlights: [
            'Emma is a trusted mental health support companion: using AI-powered expertise and evidence-based techniques like CBT and DBT to tailor therapy sessions to users’ specific contexts and personality preferences.',
            'Developed for a lablab.ai hackathon. My role: UI/UX Design, Content, and Development.',
            'Emma uses GPT-4o, voice-to-text, and text-to-speech APIs to provide 24/7 personalized mental health support.',
            'Value: Enhances awareness and proactive management of mental well-being by tailoring resources to individual needs.'
        ]
    },
    {
        title: 'Social Media Post Optimizer',
        issuer: 'lablab.ai Hackathon',
        date: '2024',
        links: [
            { label: 'Project', url: 'https://lablab.ai/u/@fatimaarshad10/cm0fgqwff0041e7ih5agnic7f' },
            { label: 'GitHub', url: 'https://github.com/zulfiqaralimir/AI-Powered-SocialMediaPostOptimizer_LLM' }
        ],
        highlights: [
            'The Social Media Post Optimizer is a powerful tool designed to enhance your social media presence by optimizing both text and images.',
            'Input your post and image to receive AI-generated suggestions for engagement, including keywords, tags, and content enhancements.',
            'The app analyzes image quality (brightness, contrast, sharpness, color), predicts likes/comments/reposts, and provides sentiment/readability analysis.',
            'Visualize engagement with a bar chart and get actionable tips to optimize your social media strategy. User-friendly interface for easy content enhancement.'
        ]
    },
    {
        title: 'Code in Place: Certificate of Completion',
        issuer: 'Stanford University',
        date: 'Apr 2024 – Jun 2024',
        links: [
            { label: 'View Certificate', url: 'https://codeinplace.stanford.edu/cip4/certificate/kruxyj' }
        ],
        highlights: [
            "Certificate of Completion for learning Python in Stanford University's Code in Place program."
        ]
    },
    {
        title: 'CS50x Puzzle Day 2025',
        issuer: 'CS50',
        date: 'Apr 2025',
        links: [
            { label: 'View Certificate', url: 'https://certificates.cs50.io/474376aa-e757-4913-8b22-dfaf4126c212.pdf?size=letter' }
        ],
        highlights: [
            'Certificate of participation in CS50x Puzzle Day 2025.'
        ]
    },
    {
        title: 'React (Basic)',
        issuer: 'HackerRank',
        date: 'Feb 2023',
        links: [
            { label: 'View Certificate', url: 'https://www.hackerrank.com/certificates/639938e47ff9' }
        ],
        highlights: [
            'Credential ID: https://www.hackerrank.com/certificates/639938e47ff9'
        ]
    }
];

const VolunteerCertificatesSection = () => {
    const [activeTab, setActiveTab] = useState<'volunteer' | 'certificates'>('volunteer');
    const [openVolunteer, setOpenVolunteer] = useState<number | null>(0);
    const [openCert, setOpenCert] = useState<number | null>(0);

    return (
        <section id="volunteer-certificates" className="relative overflow-hidden py-16 sm:py-24 bg-[#DCE7E1]">
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full blur-3xl opacity-30"
                    style={{ background: 'radial-gradient(circle at 30% 30%, rgba(31,38,42,0.14), transparent 65%)' }}
                />

                <div
                    className="absolute -bottom-48 -left-32 h-[520px] w-[520px] rounded-full blur-3xl opacity-25"
                    style={{ background: 'radial-gradient(circle at 50% 50%, rgba(31,38,42,0.10), transparent 70%)' }}
                />
            </div>

            <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#1F262A]">
                         Work & <span className="text-[#1F262A]/70">Certificates</span>
                    </h2>
                    <p className="mt-4 text-base sm:text-lg text-[#1F262A]/70">Giving back and continuous learning.</p>
                </div>

                <div className="mx-auto w-full max-w-2xl">
                    <div className="flex items-center justify-center">
                        <div className="inline-flex rounded-full border border-black/10 bg-white/60 p-1 shadow-sm shadow-black/10 backdrop-blur">
                            <button
                                className={`px-4 sm:px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-200 focus:outline-none ${activeTab === 'volunteer' ? 'bg-[#1F262A] text-white' : 'text-[#1F262A]/70 hover:text-[#1F262A]'}`}
                                onClick={() => setActiveTab('volunteer')}
                            >
                                Work
                            </button>
                            <button
                                className={`px-4 sm:px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-200 focus:outline-none ${activeTab === 'certificates' ? 'bg-[#1F262A] text-white' : 'text-[#1F262A]/70 hover:text-[#1F262A]'}`}
                                onClick={() => setActiveTab('certificates')}
                            >
                                Certificates
                            </button>
                        </div>
                    </div>

                    <div className="mt-8 space-y-4">
                        {activeTab === 'volunteer' && (
                            <div className="space-y-4">
                                {volunteerWork.map((item, idx) => {
                                    const isOpen = openVolunteer === idx
                                    return (
                                        <div
                                            key={idx}
                                            className="rounded-2xl border border-black/10 bg-white/55 backdrop-blur shadow-sm shadow-black/10"
                                        >
                                            <button
                                                type="button"
                                                className="w-full px-5 py-4 flex items-start gap-4 text-left"
                                                onClick={() => setOpenVolunteer(isOpen ? null : idx)}
                                            >
                                                <div className="mt-1 h-10 w-10 rounded-2xl border border-black/10 bg-white/70 grid place-items-center text-[#1F262A] font-extrabold">
                                                    {item.organization.slice(0, 1)}
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                                                        <div className="font-semibold text-[#1F262A] truncate">
                                                            {item.role}
                                                        </div>
                                                        <div className="text-xs font-mono text-[#1F262A]/55">
                                                            {item.date}
                                                        </div>
                                                    </div>
                                                    <div className="mt-1 text-sm text-[#1F262A]/70 truncate">
                                                        {item.organization} • {item.location}
                                                    </div>
                                                </div>
                                                <div className="mt-1 text-[#1F262A]/70">
                                                    {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                                </div>
                                            </button>

                                            {isOpen && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: -8 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.25 }}
                                                    className="px-5 pb-5"
                                                >
                                                    <div className="flex flex-wrap gap-3 mb-4">
                                                        {item.certificateLink && (
                                                            <a
                                                                href={item.certificateLink}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1.5 text-sm font-semibold text-[#1F262A] hover:bg-white/85 transition-colors"
                                                            >
                                                                View Certificate <ArrowRight size={16} />
                                                            </a>
                                                        )}
                                                        {item.projectLink && (
                                                            <a
                                                                href={item.projectLink}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1.5 text-sm font-semibold text-[#1F262A] hover:bg-white/85 transition-colors"
                                                            >
                                                                View Project <ArrowRight size={16} />
                                                            </a>
                                                        )}
                                                    </div>

                                                    <ul className="space-y-2">
                                                        {item.highlights.map((h, i) => (
                                                            <li key={i} className="flex items-start gap-2 text-[#1F262A]/70">
                                                                <span className="mt-1 flex-shrink-0 text-[#1F262A]/70">
                                                                    <ArrowRight size={16} />
                                                                </span>
                                                                <span>{h}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </motion.div>
                                            )}
                                        </div>
                                    )
                                })}
                            </div>
                        )}

                        {activeTab === 'certificates' && (
                            <div className="space-y-4">
                                {certificates.map((cert, idx) => {
                                    const isOpen = openCert === idx
                                    return (
                                        <div
                                            key={idx}
                                            className="rounded-2xl border border-black/10 bg-white/55 backdrop-blur shadow-sm shadow-black/10"
                                        >
                                            <button
                                                type="button"
                                                className="w-full px-5 py-4 flex items-start gap-4 text-left"
                                                onClick={() => setOpenCert(isOpen ? null : idx)}
                                            >
                                                <div className="mt-1 h-10 w-10 rounded-2xl border border-black/10 bg-white/70 grid place-items-center text-[#1F262A] font-extrabold">
                                                    C
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                                                        <div className="font-semibold text-[#1F262A] truncate">
                                                            {cert.title}
                                                        </div>
                                                        <div className="text-xs font-mono text-[#1F262A]/55">
                                                            {cert.date}
                                                        </div>
                                                    </div>
                                                    <div className="mt-1 text-sm text-[#1F262A]/70 truncate">
                                                        {cert.issuer}
                                                    </div>
                                                </div>
                                                <div className="mt-1 text-[#1F262A]/70">
                                                    {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                                </div>
                                            </button>

                                            {isOpen && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: -8 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.25 }}
                                                    className="px-5 pb-5"
                                                >
                                                    {cert.links && Array.isArray(cert.links) && (
                                                        <div className="flex flex-wrap gap-3 mb-4">
                                                            {cert.links.map((link, i) => (
                                                                <a
                                                                    key={i}
                                                                    href={link.url}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1.5 text-sm font-semibold text-[#1F262A] hover:bg-white/85 transition-colors"
                                                                >
                                                                    {link.label} <ArrowRight size={16} />
                                                                </a>
                                                            ))}
                                                        </div>
                                                    )}

                                                    <ul className="space-y-2">
                                                        {cert.highlights && cert.highlights.map((h, i) => (
                                                            <li key={i} className="flex items-start gap-2 text-[#1F262A]/70">
                                                                <span className="mt-1 flex-shrink-0 text-[#1F262A]/70">
                                                                    <ArrowRight size={16} />
                                                                </span>
                                                                <span>{h}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </motion.div>
                                            )}
                                        </div>
                                    )
                                })}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VolunteerCertificatesSection;