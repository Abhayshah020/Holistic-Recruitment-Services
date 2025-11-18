export default function IndustriesGrid() {
  const industries = [
    { icon: '⚕️', name: 'Health & Medical' },
    { icon: '👴', name: 'Aged Care' },
    { icon: '👨‍⚕️', name: 'Assistant Nurses' },
    { icon: '💊', name: 'Pharmaceutical' },
    { icon: '🔨', name: 'Construction' },
    { icon: '🤝', name: 'Trades' },
    { icon: '💧', name: 'Energy & Water' },
    { icon: '🚚', name: 'Logistics, Transport & Supply Chain' },
    { icon: '🚛', name: 'Freight Forwarding' },
    { icon: '🏭', name: 'Manufacturing' },
    { icon: '🔔', name: 'Office & Administration' },
    { icon: '👔', name: 'Managerial' },
    { icon: '💰', name: 'Finance' },
    { icon: '🏨', name: 'Hospitality' },
    { icon: '🍽️', name: 'Restaurants, Bars & Food Industry' },
    { icon: '🏪', name: 'Retail' },
    { icon: '🏠', name: 'Sales & Customer Service' }
  ]

  return (
    <div id="sectors" className="w-full py-12 md:py-20 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="flex items-center gap-3">
              <span className="text-3xl md:text-4xl">{industry.icon}</span>
              <span className="text-sm md:text-base text-navy-900 font-medium">{industry.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
