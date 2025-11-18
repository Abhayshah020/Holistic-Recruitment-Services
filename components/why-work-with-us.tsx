export default function WhyWorkWithUs() {
  const cards = [
    {
      title: 'Need Identification',
      subtitle: 'Identification of your needs',
      color: 'bg-green-500',
      icon: '📋',
      points: [
        'Proximity, flexibility, availability and transparency',
        'Cost efficiency, time savings and increased productivity',
        'Tried and tested the quality of services'
      ]
    },
    {
      title: 'Access to talent pool - sourcing',
      subtitle: 'Resource Sourcing',
      color: 'bg-green-500',
      icon: '🧕👮',
      points: [
        'Reactive and rapid; a local, national, and international network',
        'Choice and volume; a database of 6,000 profiles',
        'Establishing and retaining talent'
      ]
    },
    {
      title: 'Matching candidates to your needs',
      subtitle: 'Resource matching to your needs',
      color: 'bg-green-500',
      icon: '🔍',
      points: [
        'Corporate culture, productivity, and assessment tests',
        'Access to innovative tools and efficient processes',
        'Optimisation and quality of applications received (shortlist)',
        'Candidate training'
      ]
    },
    {
      title: 'Administration of assignment',
      subtitle: 'Administration',
      color: 'bg-green-500',
      icon: '📋',
      points: [
        'Tested and certified processes; coherent and high-quality services',
        'Compliance; adherence to current labour market and collective agreement legislation',
        'Time savings'
      ]
    }
  ]

  return (
    <div id="why-us" className="w-full py-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-900 mb-12 md:mb-16">
          WHY WORK WITH US?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div key={index} className={`${card.color} p-8 md:p-6 text-white`}>
              <div className="text-5xl md:text-4xl mb-6 text-center">{card.icon}</div>
              <h3 className="text-xl md:text-lg font-bold mb-2 text-center">{card.title}</h3>
              <p className="text-sm opacity-90 text-center mb-4">{card.subtitle}</p>
              <ul className="space-y-2 text-sm">
                {card.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-white font-bold">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
