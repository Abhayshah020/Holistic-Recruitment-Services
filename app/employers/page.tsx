import EmployerJobPostingForm from '@/components/employer-job-posting-form'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'

export const metadata = {
    title: 'Post Your Job - Tailored Workforce',
    description: 'Post your job opening and connect with qualified candidates. Fill out our form to start your recruitment journey.',
}

export default function EmployersPage() {
    return (
        <>
            <Navbar />
            <main className="w-full pt-16 md:pt-20">
                <EmployerJobPostingForm />
            </main>
            <Footer />
        </>
    )
}
