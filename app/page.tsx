import Hero from '@/components/Hero'
import AboutSection from '@/components/AboutSection'
import ExperienceSection from '@/components/ExperienceSection'
import VolunteerCertificatesSection from '@/components/VolunteerCertificatesSection'
import AnimatedSkills from '@/components/AnimatedSkills'
import ProjectsSection from '@/components/ProjectsSection'
import ContactSection from '@/components/ContactSection'

export default function Page() {
    return (
        <>
            <Hero />
            <AboutSection />
            {/* <ExperienceSection /> */}
            <VolunteerCertificatesSection />
            <AnimatedSkills />
            <ProjectsSection />
            <ContactSection />
        </>
    )
}