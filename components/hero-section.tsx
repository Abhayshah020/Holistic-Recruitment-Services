import Link from "next/link";

export default function HeroSection() {
  return (
    <div
      className="relative w-full h-[calc(100vh-55px)] md:h-[calc(100vh-80px)] overflow-hidden bg-cover bg-center"
    >

      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-90 bg-black"
        // style={{
        //   clipPath: "polygon(0 0, 100% 0, 100% 75%, 0% 100%)",
        // }}
        poster="/heroFallBack.jpeg" // optional, works as fallback too
      >
        <source src="/videos/heroBg.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12 lg:px-20 max-w-4xl">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 text-balance">
          Never too late to find the perfect job
        </h1>

        {/* Description Text */}
        <p className="text-sm md:text-base text-white/90 mb-8 max-w-2xl leading-relaxed text-pretty">
          Empowering Australia's Workforce, One Placement at a Time At Holistic Recruitment Services, we connect skilled professionals with the organisations that need them most.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link href="/employers" className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-3 transition-colors text-center">
            Employers
          </Link>
          <Link href="/contact" className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-3 transition-colors text-center">
            Candidates
          </Link>
        </div>
      </div>
    </div>
  )
}
