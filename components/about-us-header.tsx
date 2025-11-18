export default function AboutUsHeader() {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="relative w-full h-screen md:h-[400px] overflow-hidden bg-cover bg-center flex flex-col items-center justify-center text-center px-4 md:px-8" style={{
        backgroundImage: `url('/heroFallBack.jpeg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">ABOUT US</h1>
          <p className="max-w-2xl text-base md:text-lg text-blue-100 leading-relaxed">
            Who We Are Holistic Recruitment Services is an Australian-owned talent solutions provider dedicated to delivering highly skilled, reliable, and culturally aligned candidates to a wide range of industries. We pride ourselves on a holistic approach—matching not just skills, but values and long-term workforce compatibility.
          </p>
        </div>
      </div>
    </div>
  )
}
