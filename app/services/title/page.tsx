import { EmpolymentWithUs } from "@/components/employment-with-us"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import { ServiceDetail } from "@/components/service-detail"

const services = {
    'medical-recruitment': {
        title: 'MEDICAL RECRUITMENT',
        shortDescription: 'In today\'s rapidly evolving healthcare industry, having the right workforce is crucial. That\'s where Tailored Workforce comes in. Our specialized medical recruitment services are designed to provide the perfect candidates for your specific needs.',
        backgroundImage: '/doctor-with-stethoscope.png',
        sections: [
            {
                title: 'Understanding Healthcare Challenges',
                content: 'As the healthcare industry continues to grow and evolve, the need for highly qualified medical professionals becomes increasingly important. That\'s where Tailored Workforce comes in. Our team of experienced recruiters is dedicated to finding the best candidates for your organization\'s medical staffing needs. We understand the unique challenges of the healthcare industry and work diligently to identify candidates who not only possess the necessary qualifications and skills, but who also align with your organization\'s values and culture. With Tailored Workforce, you can trust that you are getting top-notch professionals who are committed to providing exceptional care to your patients.'
            },
            {
                title: 'Expert Recruitment Specialists',
                content: 'As the medical field continues to evolve and grow, healthcare organizations must stay ahead of the curve by hiring the most qualified individuals to join their teams. That\'s where Tailored Workforce steps in. Our team of experienced recruiters specialize in finding top talent in the healthcare industry, ensuring that your organization has the staff it needs to thrive. Whether you\'re looking for nursing professionals, specialized medical staff, or executives to lead your organization, Tailored Workforce has the expertise to find the perfect fit. With our commitment to professionalism and personalized service, you can rest assured that your recruitment needs are in good hands with Tailored Workforce.'
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
