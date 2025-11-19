export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: 'Post a Job in a specific industry',
      description: 'Are you looking to find the ideal candidate for a vacancy within your company? Look no further than our job posting services, holistic especially for professionals seeking candidates in a specific industry.'
    },
    {
      number: 2,
      title: 'Our Talent Acquisition Team',
      description: 'We take great pride in the talent we offer. We strive to work with only the best of the best in their respective fields. Our team is made up of professionals who are not only highly skilled and experienced, but also passionate about what they do.'
    },
    {
      number: 3,
      title: 'Guaranteed Job',
      description: 'We are committed to providing our clients with a guaranteed job. We understand the importance of stability and security when it comes to employment, which is why we have created a rigorous screening process to ensure that only the best candidates are employed.'
    }
  ]

  return (
    <div className="w-full bg-white py-12 md:py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-950 mb-12 md:mb-16">
          HOW IT WORKS?
        </h2>

        {/* Steps Container */}
        <div className="relative">
          {/* Desktop: Horizontal Flow */}
          <div className="hidden md:flex justify-between items-start gap-10">
            {steps.map((step, index) => (
              <div key={index} className="flex-1 relative">
                {/* Circle */}
                <div className="flex justify-center mb-8">
                  <div className="w-16 h-16 rounded-full border-2 border-gray-800 flex items-center justify-center bg-white">
                    <span className="text-2xl font-bold text-gray-800">{step.number}</span>
                  </div>
                </div>

                {/* Connecting Line (to next step) */}
                {index < steps.length - 1 && (
                  <>
                    <div className="absolute top-8 left-[50%] w-full h-0.5 border-t border-gray-400 border-dashed" style={{
                      left: 'calc(50% + 32px)',
                      width: 'calc(100% + 16px)'
                    }}></div>
                  </>
                )}

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile: Vertical Flow */}
          <div className="md:hidden space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Vertical Line (to next step) */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-16 w-0.5 h-8 bg-gray-400 border-l-2 border-dashed border-gray-400"></div>
                )}

                {/* Circle and Content Row */}
                <div className="flex gap-6">
                  {/* Circle */}
                  <div className="flex-shrink-0 w-16 h-16 rounded-full border-2 border-gray-800 flex items-center justify-center bg-white">
                    <span className="text-2xl font-bold text-gray-800">{step.number}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
