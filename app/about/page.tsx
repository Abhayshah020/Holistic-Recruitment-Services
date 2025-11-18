import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import AboutUsHeader from '@/components/about-us-header'
import WhyWorkWithUs from '@/components/why-work-with-us'
import OurStrengths from '@/components/our-strengths'
import ManagementTeam from '@/components/management-team'
import Statistics from '@/components/statistics'
import ValuesSection from '@/components/values-section'
import IndustriesGrid from '@/components/industries-grid'
import TeamPhotos from '@/components/team-photos'
import { EmpolymentWithUs } from '@/components/employment-with-us'
import AboutUsContent from '@/components/about-us-content'

export const metadata = {
    title: 'About Us - Tailored Workforce',
    description: 'Learn about Tailored Workforce, our mission, values, and the talented team behind our innovative recruitment solutions.',
}

export default function AboutPage() {
    return (
        <>
            <Navbar />
            <main className="w-full pt-16 md:pt-20 relative">
                <AboutUsHeader />
                <nav className="sticky top-0 left-0 right-0 w-full bg-blue-950 bg-opacity-80 h-20 backdrop-blur-sm flex flex-wrap justify-center items-center gap-4 md:gap-12 text-sm md:text-base z-100">
                    <a href="#why-us" className="text-blue-200 hover:text-white transition">Why Us?</a>
                    {/* <a href="#history" className="text-blue-200 hover:text-white transition">Our History</a> */}
                    <a href="#vision" className="text-blue-200 hover:text-white transition">Our Vision</a>
                    <a href="#sectors" className="text-blue-200 hover:text-white transition">Sectors We Recruit</a>
                    {/* <a href="#social-contract" className="text-blue-200 hover:text-white transition">Our Social Contract</a> */}
                </nav>
                <WhyWorkWithUs />
                <OurStrengths />
                <Statistics />
                <ManagementTeam />
                <ValuesSection />
                <TeamPhotos />
                <IndustriesGrid />
                <EmpolymentWithUs />
            </main >
            <Footer />
        </>
    )
}
