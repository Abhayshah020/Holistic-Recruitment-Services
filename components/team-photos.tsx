export default function TeamPhotos() {
  return (
    <div className="relative w-full h-50 bg-gray-200 overflow-hidden bg-gradient-to-r from-[#0a1a2e] to-[#0f2a47] text-white flex items-center justify-center">
      <div className="absolute top-0 left-0 w-96 h-96 opacity-10">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <line x1="0" y1="0" x2="200" y2="200" stroke="#d4af37" strokeWidth="3" />
          <line x1="200" y1="0" x2="0" y2="200" stroke="#d4af37" strokeWidth="3" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Sectors we recruit</h1>
      </div>
    </div>
  )
}
