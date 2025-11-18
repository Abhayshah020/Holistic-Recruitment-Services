import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const products = [
  {
    image: '/professional-women-with-tablet.jpg',
    title: 'TRAINING TO PLACEMENT',
  },
  {
    image: '/construction-worker-helmet.png',
    title: 'ON HIRE SERVICES',
  },
  {
    image: '/businessman-working-at-desk.jpg',
    title: 'PERMANENT RECRUITMENT',
  },
  {
    image: '/doctor-with-stethoscope.png',
    title: 'MEDICAL RECRUITMENT',
  },
  {
    image: '/elderly-person-smiling-outdoors.jpg',
    title: 'AGED CARE RECRUITMENT',
  },
]

export default function OurProduct() {
  return (
    <section className="w-full bg-white py-10">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-bold text-navy-900 mb-12 md:mb-16">
          OUR PRODUCTS
        </h2>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-4">
          {products.map((product, index) => (
            <div key={index} className="flex flex-col">
              {/* Product Image */}
              <div className="w-full h-64 md:h-56 relative mb-4">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Product Title */}
              <h3 className="text-sm md:text-base font-bold text-navy-900 mb-3 leading-tight">
                {product.title}
              </h3>

              {/* Read More Link */}
              <Link href="/services/title" className="flex items-center gap-2 text-gray-600 hover:text-navy-900 transition-colors cursor-pointer group">
                <span className="text-xs md:text-sm font-medium uppercase">Read More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        :root {
          --navy-900: #001a33;
        }
      `}</style>
    </section>
  )
}
