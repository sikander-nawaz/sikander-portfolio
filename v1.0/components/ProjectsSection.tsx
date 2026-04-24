'use client'

import ProjectCard from '@/components/ProjectCard'

const projects = [
    {
        name: 'Molar (Dental Practice Management)',
        description: 'A comprehensive dental practice management application. Features include patient records, appointment scheduling, billing, and secure communication. Built as a modern web app for dental professionals. My role: PERN Stack Developer (React, Node.js, Express, PostgreSQL, EmailJS).',
        tech: ['PostgreSQL', 'Express', 'React', 'Node.js', 'EmailJS'],
        image: "/assets/molar.png",
        liveUrl: 'https://app.molarlabs.com/login',
        year: '2024',
        category: 'Full Stack'
    },

    {
        name: 'Pine Straw University',
        description: 'Modern portfolio website built with Next.js and Tailwind CSS. Includes a Pine Straw Calculator app with authentication, a calculation page for pine straw needs, and PDF download functionality. Developed core features using Node.js, Express, HTML, and JavaScript.',
        tech: ['HTML', 'JavaScript', 'Tailwind CSS', 'Node.js', 'Express'],
        image: "/assets/pinestraw.png",
        liveUrl: 'https://pinestrawuniversity.com/',
        year: '2024',
        category: 'Frontend'
    },
    {
        name: '321Vets',
        description: 'Real-time chat application with AI-powered responses and sentiment analysis. Developed using React.js with a modular component structure and custom details pages for enhanced user experience.',
        tech: ['React', 'Tailwind CSS',],
        image: "/assets/321.png",
        liveUrl: 'https://321vets.com/',
        year: '2023',
        category: 'AI/ML'
    },

    {
        name: 'Tech Wizz',
        description: 'Business portfolio website built with Next.js, integrated with Notion for content management, and enhanced with Framer Motion animations for a dynamic user experience.',
        tech: ['Next.js', 'Notion', 'Framer Motion', 'React', 'Firebase', 'Redux', 'Chart.js'],
        image: "/assets/427shots_so.png",
        githubUrl: 'https://github.com/Fatimaarshad10/NextJS-Portfolio-',
        year: '2024',
        category: 'Frontend'
    },
    {
        name: "Let's Play App ",
        description: 'Event management system with robust scheduling features. Backend managed using Node.js, Express, Socket.io, and PostgreSQL to handle real-time events and user interactions.',
        tech: ['Node.js', 'Express', 'Socket.io', 'PostgreSQL'],
        image: "/assets/Let's_play.png",
        githubUrl: 'https://github.com/NaxtechGit/Event-Management-System-Backend-',
        year: '2024',
        category: 'Full Stack'
    },
    {
        name: 'Profiler',
        description: 'Job management system featuring a QR scanner and advanced search algorithms. Utilizes Redis, AWS Lambda, OpenAI, and Node.js for fast, intelligent job matching and management.',
        tech: ['Node.js', 'AWS Lambda', 'Redis', 'OpenAI', 'QR Scanner'],
        image: "/assets/profiler_01.png",
        liveUrl: 'https://dtkcfwfq66241.cloudfront.net/',
        year: '2024',
        category: 'Backend developer'
    },



]

const ProjectsSection = () => {
    return (
        <section id="projects" className="relative overflow-hidden py-16 sm:py-24 bg-[#DCE7E1]">
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute -top-40 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full blur-3xl opacity-30"
                    style={{ background: 'radial-gradient(circle at 30% 30%, rgba(31,38,42,0.14), transparent 65%)' }}
                />
                <div
                    className="absolute -bottom-56 -left-44 h-[560px] w-[560px] rounded-full blur-3xl opacity-25"
                    style={{ background: 'radial-gradient(circle at 50% 50%, rgba(31,38,42,0.10), transparent 70%)' }}
                />
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage:
                            'linear-gradient(to right, rgba(31,38,42,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(31,38,42,0.08) 1px, transparent 1px)',
                        backgroundSize: '72px 72px',
                        maskImage: 'radial-gradient(circle at 50% 20%, black 0%, transparent 60%)',
                        WebkitMaskImage: 'radial-gradient(circle at 50% 20%, black 0%, transparent 60%)',
                    }}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#1F262A]">
                        My <span className="text-[#1F262A]/70">Projects</span>
                    </h2>
                    <p className="mt-4 text-base sm:text-lg text-[#1F262A]/70 max-w-3xl mx-auto">
                        A collection of my work, from full-stack applications to AI-powered tools.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.name}
                            description={project.description}
                            image={project.image}
                            technologies={project.tech}
                            liveUrl={project.liveUrl}
                            githubUrl={project.githubUrl}
                            featured={index === 0}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProjectsSection