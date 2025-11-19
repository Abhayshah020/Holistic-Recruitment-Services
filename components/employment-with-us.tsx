export const EmpolymentWithUs = () => {
    return (
        <div className="bg-[#1a1f3a] text-white py-16 md:py-24 w-full">
            <div className="max-w-5xl mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase">EMPLOYMENT WITH HOLISTICS Recruitment Services</h2>

                <div className="space-y-6 mb-10">
                    <p className="text-base md:text-lg leading-relaxed">
                        At Holistic Recruitment Services, our success as a leading recruitment firm in Australia stems from the excellence of our team. By joining us, you become an integral part of a highly skilled and collaborative workforce.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed">
                        If you have the talent, experience, and drive to contribute to a dynamic and thriving team, we encourage you to reach out. We would be delighted to explore how you can play a pivotal role in shaping our future success.
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