import Image from 'next/image'

const steps = [
  {
    image: '/business-analysis-meeting.jpg',
    title: 'Analyse your business',
  },
  {
    image: '/consulting-with-training-providers.jpg',
    title: 'Consult with training providers',
  },
  {
    image: '/develop-training-programs.jpg',
    title: 'Develop training programs',
  },
  {
    image: '/execute-training-programs.jpg',
    title: 'Execute training programs',
  },
  {
    image: '/delivery-of-trained-resources.jpg',
    title: 'Delivery of trained resources for job placements',
  },
]

export default function WhatWillWeDo() {
  return (
    <section className="w-full bg-white py-10">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-bold text-navy-900 mb-12 md:mb-16">
          WHAT WILL WE DO?
        </h2>

        {/* Desktop Flow - Horizontal Timeline */}
        <div className="hidden w-full md:flex md:gap-10 md:justify-between gap-0 overflow-x-auto pb-4">
          {steps.map((step, index) => (
            <div key={index} className="flex-shrink-0 flex flex-col items-center gap-0">
              {/* Image */}
              <div className="w-65 h-48 relative mb-0">
                <Image
                  src={step.image || "/placeholder.svg"}
                  alt={step.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Chevron Banner */}
              <div className="relative w-65 bg-slate-700 text-white p-4 clip-chevron-right">
                <p className="text-sm font-semibold text-white h-15 flex items-center">
                  {step.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Flow - Vertical Timeline */}
        <div className="md:hidden space-y-6">
          {steps.map((step, index) => (
            <div key={index}>
              {/* Image */}
              <div className="w-full h-48 relative mb-0">
                <Image
                  src={step.image || "/placeholder.svg"}
                  alt={step.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Banner */}
              <div className="bg-slate-700 text-white p-4">
                <p className="text-sm font-semibold text-white">
                  {step.title}
                </p>
              </div>

              {/* Connector Arrow */}
              {index < steps.length - 1 && (
                <div className="text-center text-slate-700 text-2xl font-bold py-2">
                  ↓
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .clip-chevron-right {
          clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%);
        }
      `}</style>
    </section>
  )
}
