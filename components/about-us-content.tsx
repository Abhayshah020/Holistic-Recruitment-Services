"use client";

export default function AboutUsContent() {
    return (
        <section id="about-us" className="py-10 bg-white w-full flex items-center justify-center">
            <div className="w-full px-4 sm:px-6 md:px-0 sm:max-w-[95%] md:w-[70%] text-center">
                {/* Heading */}
                <h2
                    className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
                >
                    About Us
                </h2>

                {/* Animated Intro Text */}
                <p
                    className="text-lg md:text-xl text-gray-700 leading-relaxed mb-12"
                >
                    At{" "}
                    <span
                        className="relative font-semibold text-blue-600"
                        style={{
                            backgroundImage: "linear-gradient(120deg, #3b82f6 0%, #60a5fa 100%)",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "0 100%",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        Squeaky Kleaners
                    </span>
                    , we don’t just clean — we{" "}
                    <span
                        className="text-blue-500 font-semibold"
                    >
                        transform spaces
                    </span>{" "}
                    into spotless, healthy, and welcoming environments. With a team of
                    highly trained professionals and a passion for detail, we deliver
                    top-quality cleaning services tailored to homes, offices, and
                    businesses of all sizes.
                </p>
            </div>
        </section>
    );
}
