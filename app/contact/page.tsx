import ContactSection from '@/components/contact-section'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'

export const metadata = {
    title: 'Contact Us - Holistic Recruitment Services',
    description: 'Get in touch with Holistic Recruitment Services. Contact our team for recruitment services, employment opportunities, and more.',
}

export default function ContactPage() {
    return (
        <>
            <Navbar />
            <main className="w-full pt-16 md:pt-20">
                <ContactSection />
            </main>
            <Footer />
        </>
    )
}
