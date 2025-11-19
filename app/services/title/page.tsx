import { EmpolymentWithUs } from "@/components/employment-with-us"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import { ServiceDetail } from "@/components/service-detail"

const services = {
    'medical-recruitment': {
        title: 'MEDICAL RECRUITMENT',
        shortDescription: 'In today\'s rapidly evolving healthcare industry, having the right workforce is crucial. That\'s where Holistic Recruitment Services comes in. Our specialized medical recruitment solutions are designed to provide the ideal candidates for your organization’s specific needs.',
        backgroundImage: '/doctor-with-stethoscope.png',
        sections: [
            {
                title: 'Understanding Healthcare Challenges',
                content: 'As the healthcare industry continues to grow and evolve, the demand for highly qualified medical professionals becomes increasingly critical. Holistic Recruitment Services is here to address that need. Our team of experienced recruiters is dedicated to sourcing the best candidates for your organization’s medical staffing requirements. We understand the unique challenges faced by healthcare organizations and carefully identify professionals who not only have the required qualifications and skills, but also align with your organization\'s values and culture. With Holistic Recruitment Services, you can be confident that your team will include top-notch professionals committed to delivering exceptional patient care.'
            },
            {
                title: 'Expert Recruitment Specialists',
                content: 'In a continuously evolving medical landscape, healthcare organizations must hire the most capable individuals to ensure success. Holistic Recruitment Services provides that expertise. Our recruitment specialists focus on finding top talent across the healthcare industry, whether it’s nursing professionals, specialized medical staff, or executives to lead your organization. With a commitment to professionalism and personalized service, Holistic Recruitment Services ensures that your recruitment needs are met efficiently and effectively, helping your organization thrive with the right people in the right roles.'
            }
        ]
    },
}

export default function Services() {
    const service = services['medical-recruitment']

    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-xl text-gray-600">Service not found</p>
            </div>
        )
    }

    return (
        <>
            <Navbar />
            <ServiceDetail {...service} />
            <EmpolymentWithUs />
            <Footer />
        </>
    )
}
