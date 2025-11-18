import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import ServicesSection from '@/components/services-section'

export default function Services() {
    return (
        <>
            <Navbar />
            <main className="w-full pt-16 md:pt-20">
                <ServicesSection />
            </main>
            <Footer />
        </>
    )
}
