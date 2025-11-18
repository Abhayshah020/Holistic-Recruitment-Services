export default function Statistics() {
  const stats = [
    { number: '2,745', label: 'Business Customers' },
    { number: '1,000+', label: 'Permanent Recruitment\'s' },
    { number: '20,000+', label: 'Temporary Employees Placed' },
    { number: '45+', label: 'Staff to Support (Internal / National)' },
    { number: '5,988', label: 'Potential Candidates on our Books' }
  ]

  return (
    <div className="w-full bg-navy-900 py-12 md:py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</p>
              <p className="text-blue-200 text-sm md:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
