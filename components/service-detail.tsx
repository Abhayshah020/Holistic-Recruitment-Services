import Image from 'next/image'

interface ServiceDetailProps {
    title: string
    shortDescription: string
    backgroundImage: string
    sections: Array<{
        title: string
        content: string
    }>
}

export const ServiceDetail = ({
    title,
    shortDescription,
    backgroundImage,
    sections
}: ServiceDetailProps) => {
    return (
        <main className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative h-screen md:h-[450px] overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url('${backgroundImage}')`,
                        backgroundPosition: 'center',
                    }}
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/50" />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 md:px-12 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
                        {title}
                    </h1>
                    <p className="text-base md:text-lg text-gray-100 max-w-3xl text-balance leading-relaxed">
                        {shortDescription}
                    </p>
                </div>
            </section>

            {/* Content Sections */}
            <section className="bg-white py-12 md:py-20 px-6 md:px-12 lg:px-24">
                <div className="max-w-4xl mx-auto space-y-12 md:space-y-16">
                    {sections.map((section, index) => (
                        <div key={index} className="space-y-4">
                            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                                {section.title}
                            </h2>
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                {section.content}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}
