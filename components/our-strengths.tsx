export default function OurStrengths() {
  const strengths = [
    {
      title: 'Creativity',
      icon: '🔺',
      description: 'There is nothing that our team members can\'t achieve. We use technology and change management principles and we never shy away from innovation in any of the elements associated with the employment supply chain. We constantly challenge not only ourselves but the existing order as it applies to the recruitment industry.'
    },
    {
      title: 'Innovation',
      icon: '⚙️',
      description: 'We understand that hiring can be a difficult process, which is why we\'ve developed innovative solutions to make it easier for you. Our approach combines the latest technology with tailored recruiting services to bring you the best candidates for your job openings.'
    },
    {
      title: 'Experience',
      icon: '☁️',
      description: 'All of our team members are experienced in the recruitment industry or in our candidate industries. We listen, adapt, and share this experience in order to improve the quality of our service offer.'
    },
    {
      title: 'Service Performance',
      icon: '👥',
      description: 'We care about our people and our candidate employees and the role that work plays in their lives. We help people develop their careers through careful planning, training, and supervision.'
    }
  ]

  return (
    <div id="vision" className="w-full py-10 px-3 bg-gray-50">
      <div className="relative bg-gradient-to-r from-[#0a1a2e] to-[#0f2a47] text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 opacity-10">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <line x1="0" y1="0" x2="200" y2="200" stroke="#d4af37" strokeWidth="3" />
            <line x1="200" y1="0" x2="0" y2="200" stroke="#d4af37" strokeWidth="3" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">OUR VISION</h1>
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-3">
        <div className="text-center mb-12">
          <p className="text-blue-600 italic text-base md:text-lg mb-4">
            "To become a leading workforce partner in Australia by providing end-to-end staffing and talent management solutions with integrity and care."
          </p>
          <p className="text-gray-700 text-base md:text-lg font-medium">
            In order to achieve our vision we have four key enablers:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {strengths.map((strength, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl md:text-6xl mb-4 text-red-500">{strength.icon}</div>
              <h3 className="text-xl md:text-2xl font-bold text-navy-900 mb-3">{strength.title}</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">{strength.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
