'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const experiences = [
    {
        company: 'Saylani Institute SMIT - Faisalabad',
        companyUrl: 'https://saylaniwelfareusa.com/en/services/education/technical-education/saylani-mass-it-training',
        role: 'Full Stack Developer Instructor',
        date: 'May 2023 – Present',
        highlights: [
            'Trained 600+ students in programming, web and mobile app development, and web designing (Word, Excel, PowerPoint).',
            'Programming Languages and Technologies: HTML, CSS (Bootstrap 5), JavaScript (ES6), Tailwind CSS, TypeScript, DSA (LeetCode), React JS (Context API, Router, State Management), Next.js, NodeJS (ExpressJS, Authentication, API Endpoint Handling), NPM, MongoDB, Firebase, and React Native.',
            'Hosting Platforms: Surge, Netlify, Vercel, and Firebase.',
            'Students received training from me via these courses. See GitHub Repositories:',
            'Web and Mobile Developer Batch 02: https://github.com/Fatimaarshad10/Web-and-Mobile-developer-Batch-no-02',
            'Web Designing Batch 01: https://github.com/Fatimaarshad10/web-designing-batch-1',
            'Web Designing Batch 02: https://github.com/Fatimaarshad10/web-designing-batch-2',
            'Web Designing Batch 03: https://github.com/Fatimaarshad10/web-designing-batch-03',
            'Web and Mobile Development Batch 03: https://github.com/Fatimaarshad10/web-and-mobile-development-batch-no-03',
        ]
    },
    {
        company: 'CyberGen - Faisalabad',
        companyUrl: 'https://www.cybergen.com/',
        role: 'Senior MERN Stack Developer',
        date: 'Sep 2024 – June 2025',
        highlights: [
            "As a Senior MERN Stack Developer, I've led and contributed to multiple live projects, including FlyZone, CyberGen, and GRIT (a project management tool). My work spans across React.js, Next.js, Bootstrap, and Node.js, where I specialize in debugging, feature development, and team leadership. I also manage server environments using cPanel, aaPanel, and even WordPress for full-stack delivery. My ability to adapt, lead, and solve problems under pressure makes me a reliable team player in fast-paced environments.",
            'FlyZone: https://flyzone.ai/',
            'Powerphase: https://powerphase.com/',
            'GRIT: https://grit.cybergen.com/'
        ]
    },
    {
        company: 'Naxtech - Faisalabad',
        companyUrl: 'https://www.naxtech.com/',
        role: 'Backend Developer',
        date: 'Aug 2023 – Feb 2025',
        highlights: [
            'Languages & Frameworks: Node.js, Express.js, Socket.io',
            'Databases: PostgreSQL, MongoDB (SQL & NoSQL)',
            'Cloud Services: AWS (Lambda, SES, S3, EventBridge, Scheduler)',
            'Messaging & Realtime: Redis, Socket.io, WebSockets',
            'DevOps: Docker, GitLab CI/CD, Microservices architecture',
            'Projects: Event Management App (PostgreSQL, AWS Mailer, Scheduler)',
            'Projects: Profiler – a Job & Employment Management System with location-based search, OpenAI integration, SEO optimization, and long-running Lambda functions'
        ]

    },
    {
        company: 'SunzTech',
        role: 'Web Developer Intern',
        date: 'June 2022 – Feb 2023',
        highlights: [
            'Integrated a React front-end with a WordPress back-end, converting static pages into dynamic React.js components.',
            'Used fake product APIs to simulate backend data during early development, which helped strengthen my understanding of data fetching and component rendering.',
            'Overcame challenges in API integration, taking nearly a month to fully resolve issues — a key milestone in my learning journey.',
            'Handled various UI styles and forms using React, and also contributed to Shopify-based projects for e-commerce solutions.',
            'Learned clean coding practices and real-world workflows under the guidance of senior developers.'
        ]
    },
];

export default function ExperienceSection() {
    const [active, setActive] = useState(0);

    return (
        <section id="experience" className="py-16 sm:py-24 bg-dark-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold">
                        Professional <span className="text-primary-400">Experience</span>
                    </h2>
                    <p className="mt-4 text-lg text-dark-600">My journey in the world of technology.</p>
                </div>

                <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/4 flex flex-col">
                        {experiences.map((exp, idx) => (
                            <button
                                key={exp.company}
                                onClick={() => setActive(idx)}
                                className={`text-left p-4 rounded-lg transition-all duration-300 focus:outline-none ${active === idx ? 'bg-dark-700 text-primary-400' : 'text-dark-600 hover:bg-dark-700/50 hover:text-dark-500'}`}
                            >
                                <span className="font-semibold">{exp.company}</span>
                            </button>
                        ))}
                    </div>

                    <div className="md:w-3/4">
                        <motion.div
                            key={active}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="bg-dark-800 rounded-xl p-8 shadow-lg border border-dark-700"
                        >
                            <h3 className="text-2xl font-bold text-dark-500 mb-1">
                                {experiences[active].role}
                            </h3>
                            <p className="text-primary-400 font-medium mb-2">
                                @{
                                    experiences[active].companyUrl ? (
                                        <a href={experiences[active].companyUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-primary-300 transition-colors">
                                            {experiences[active].company}
                                        </a>
                                    ) : (
                                        experiences[active].company
                                    )
                                }
                            </p>
                            <p className="text-dark-600 font-mono text-sm mb-4">{experiences[active].date}</p>
                            <ul className="space-y-3">
                                {experiences[active].highlights.map((h, i) => {
                                    // Check for 'Title: URL' pattern
                                    const match = h.match(/^(.*?):\s*(https?:\/\/\S+)/);
                                    if (match) {
                                        const [, title, url] = match;
                                        return (
                                            <li key={i} className="flex items-start gap-3">
                                                <span className="text-primary-500 mt-1 flex-shrink-0">
                                                    <ArrowRight size={18} />
                                                </span>
                                                <a
                                                    href={url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-primary-400 underline hover:text-primary-300 transition-colors"
                                                >
                                                    {title}
                                                </a>
                                            </li>
                                        );
                                    }
                                    return (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="text-primary-500 mt-1 flex-shrink-0">
                                                <ArrowRight size={18} />
                                            </span>
                                            <span className="text-dark-600">{h}</span>
                                        </li>
                                    );
                                })}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
} 