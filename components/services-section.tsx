import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function ServicesSection() {
    return (
        <div className="w-full">
            {/* Hero Section with Overlay */}

            <div className="relative w-full overflow-hidden">
                <div className="relative w-full h-screen md:h-[400px] overflow-hidden bg-cover bg-center flex flex-col items-center justify-center text-center px-4 md:px-8" style={{
                    backgroundImage: `url('/heroFallBack.jpeg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}>
                    <div className="absolute inset-0 bg-black/40"></div>
                    <div className="z-10">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            OUR SERVICES
                        </h1>
                        <p className="max-w-2xl text-base md:text-lg text-blue-100 leading-relaxed">
                            Domestic Recruitment We partner with local businesses to identify, screen, and place qualified talent in permanent, part-time, and casual roles. From registered nurses to disability support workers, our candidates are job-ready and values-aligned.
                        </p>
                    </div>
                </div>
            </div>

            {/* Services Cards Section */}
            <div className="w-full bg-white py-16">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Card 1 - Training to Placement */}
                        <div className="group cursor-pointer">
                            <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-2xl h-96">
                                <Image
                                    src="/team-meeting-with-sticky-notes-brainstorming.jpg"
                                    alt="Training to Placement"
                                    fill
                                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>

                            <div className="mt-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    TRAINING TO PLACEMENT
                                </h3>
                                <a
                                    href="#"
                                    className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors font-semibold"
                                >
                                    READ MORE
                                    <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                                </a>
                            </div>
                        </div>

                        {/* Card 2 - On Hire Services */}
                        <div className="group cursor-pointer">
                            <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-2xl h-96">
                                <Image
                                    src="/construction-worker-in-safety-vest-and-hard-hat.jpg"
                                    alt="On Hire Services"
                                    fill
                                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>

                            <div className="mt-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    ON HIRE SERVICES
                                </h3>
                                <a
                                    href="#"
                                    className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors font-semibold"
                                >
                                    READ MORE
                                    <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
