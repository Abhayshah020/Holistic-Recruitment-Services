import Image from 'next/image'

export default function AboutUsHeaderPerson() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
            {/* Hero Section with Profile */}
            <section className="w-full py-16 md:py-24 px-4 md:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                        {/* Left Column - Profile Image */}
                        <div className="flex justify-center md:justify-start">
                            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 bg-white dark:bg-slate-800">
                                <Image
                                    src="/director-profile.jpg"
                                    alt="Jaikiran Reddy Seelam"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>

                        {/* Right Column - Text Content */}
                        <div className="space-y-6">
                            <div>
                                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-2 text-balance">
                                    Jaikiran Reddy Seelam
                                </h1>
                                <p className="text-xl text-slate-600 dark:text-slate-300 font-semibold">
                                    Director, Holistic Recruitment Services
                                </p>
                            </div>

                            <p className="text-lg text-slate-700 dark:text-slate-200 leading-relaxed">
                                Meet the visionary leader behind Holistic Recruitment Services, dedicated to advancing workforce and service solutions within the healthcare and education industries.
                            </p>

                            <div className="flex gap-4">
                                <button className="px-6 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 transition-colors font-semibold">
                                    Learn More
                                </button>
                                <button className="px-6 py-2 border-2 border-slate-900 text-slate-900 rounded-lg hover:bg-slate-100 dark:border-white dark:text-white dark:hover:bg-slate-900 transition-colors font-semibold">
                                    Connect
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section className="w-full py-16 md:py-24 px-4 md:px-8 bg-white dark:bg-slate-900">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 text-balance">
                        Experience & Background
                    </h2>
                    <div className="w-12 h-1 bg-gradient-to-r from-slate-900 to-slate-400 dark:from-white dark:to-slate-500 mb-8 rounded-full"></div>

                    <div className="space-y-8">
                        <div className="prose prose-sm dark:prose-invert max-w-none">
                            <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
                                With more than <span className="font-semibold">20 years of experience</span> in healthcare and education, Jaikiran Reddy Seelam has shaped innovative business solutions based on technological efficiency, regulatory compliance, and workforce capability in contemporary healthcare environments.
                            </p>

                            <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
                                Prior to leading Holistic Recruitment Services, Jaikiran spearheaded educational initiatives at colleges in Australia, implementing progressive training methodologies and expanding educational curricula across various nursing specialties. This comprehensive understanding of healthcare systems and program design provided critical insights into building successful recruitment and development strategies within the sector.
                            </p>

                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
                                Education & Credentials
                            </h3>
                            <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                                <li className="flex items-start gap-3">
                                    <span className="text-slate-900 dark:text-white font-bold mt-1">•</span>
                                    <span>Master's degree in Health Administration from the University of Technology Sydney</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-slate-900 dark:text-white font-bold mt-1">•</span>
                                    <span>Master's degree in Biotechnology and Bio-Informatics</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-slate-900 dark:text-white font-bold mt-1">•</span>
                                    <span>Managed educational consultancies across five countries (Prisms and Ozdreams)</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission Section */}
            <section className="w-full py-16 md:py-24 px-4 md:px-8 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 text-balance">
                        Vision & Mission
                    </h2>
                    <div className="w-12 h-1 bg-gradient-to-r from-slate-900 to-slate-400 dark:from-white dark:to-slate-500 mb-8 rounded-full"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Vision Card */}
                        <div className="bg-white dark:bg-slate-800 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                                Vision
                            </h3>
                            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                To redefine operational excellence and workforce solutions in the healthcare industry, enabling organizations and educators to enhance processes and deliver elevated standards of care and education.
                            </p>
                        </div>

                        {/* Mission Card */}
                        <div className="bg-white dark:bg-slate-800 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                                Mission
                            </h3>
                            <div className="space-y-4 text-slate-700 dark:text-slate-300">
                                <p>
                                    <span className="font-semibold">1. Proprietary Technology</span> - Creating software and systems for seamless integration with healthcare providers, enhancing recruitment accuracy and workforce management.
                                </p>
                                <p>
                                    <span className="font-semibold">2. Professional Development</span> - Building comprehensive training programs for healthcare staff to promote advanced competencies in health service delivery and regulatory compliance.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Company Section */}
            <section className="w-full py-16 md:py-24 px-4 md:px-8 bg-white dark:bg-slate-900">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 text-balance">
                        About Holistic Recruitment Services
                    </h2>
                    <div className="w-12 h-1 bg-gradient-to-r from-slate-900 to-slate-400 dark:from-white dark:to-slate-500 mb-8 rounded-full"></div>

                    <div className="prose prose-sm dark:prose-invert max-w-none">
                        <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
                            Holistic Recruitment Services was established with a mission to address key gaps in staffing, operational efficiency, and workforce education for the healthcare sector. The company is committed to developing integrated technology platforms and training programs to streamline recruitment, improve service delivery, and maintain internationally recognized standards.
                        </p>

                        <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mt-6">
                            Under Jaikiran's visionary leadership, Holistic Recruitment Services combines strategic innovation with practical expertise to empower healthcare organizations to optimize their teams, consistently apply best practices, and achieve outstanding outcomes for both professionals and patients.
                        </p>
                    </div>
                </div>
            </section>

            {/* Footer Section with Profile CTA */}
            {/* <section className="w-full py-16 md:py-20 px-4 md:px-8 bg-slate-900 dark:bg-slate-950 text-white">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col items-center text-center space-y-6">
                        <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-xl bg-white">
                            <Image
                                src="/director-profile.jpg"
                                alt="Jaikiran Reddy Seelam"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold mb-2">Jaikiran Reddy Seelam</h3>
                            <p className="text-lg text-slate-300">
                                Director, Holistic Recruitment Services
                            </p>
                        </div>

                        <p className="text-slate-300 max-w-2xl leading-relaxed">
                            20+ years of expertise in healthcare management, workforce development, and educational innovation.
                        </p>

                        <div className="flex gap-4 pt-4">
                            <a
                                href="#"
                                className="px-6 py-2 bg-white text-slate-900 rounded-lg hover:bg-slate-100 transition-colors font-semibold"
                            >
                                Contact
                            </a>
                            <a
                                href="#"
                                className="px-6 py-2 border-2 border-white text-white rounded-lg hover:bg-white hover:text-slate-900 transition-colors font-semibold"
                            >
                                LinkedIn
                            </a>
                        </div>

                        <p className="text-slate-500 text-sm pt-8">
                            © 2025 Holistic Recruitment Services. All rights reserved.
                        </p>
                    </div>
                </div>
            </section> */}
        </main>
    )
}
