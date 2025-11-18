export const EmpolymentWithUs = () => {
    return (
        <div className="bg-[#1a1f3a] text-white py-16 md:py-24 w-full">
            <div className="max-w-5xl mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">EMPLOYMENT WITH TAILORED WORKFORCE</h2>

                <div className="space-y-6 mb-10">
                    <p className="text-base md:text-lg leading-relaxed">
                        Our strength as one of the pre-eminent recruitment companies in Australia is determined by the quality of our staff. By joining Tailored Workforce, you become a full and effective member of an outstanding team.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed">
                        If you believe that you have the qualities and experience to be a part of our dynamic team, then please contact us and we will be happy to discuss how you may be able to become a key player and driving force in our future.
                    </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href="/employers"
                        className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-3 transition-colors"
                    >
                        Employers
                    </a>
                    <a
                        href="/contact"
                        className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-3 transition-colors"
                    >
                        Candidates
                    </a>
                </div>
            </div>
        </div>
    )
}