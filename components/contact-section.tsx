'use client'

import { useState } from 'react'
import { Instagram, Facebook, Linkedin } from 'lucide-react'
import { EmpolymentWithUs } from './employment-with-us'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ fullName: '', email: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="w-full">
      {/* Contact Header Section with Decorative Elements */}
      <div className="relative bg-gradient-to-r from-[#0a1a2e] to-[#0f2a47] text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 opacity-10">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <line x1="0" y1="0" x2="200" y2="200" stroke="#d4af37" strokeWidth="3" />
            <line x1="200" y1="0" x2="0" y2="200" stroke="#d4af37" strokeWidth="3" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">CONTACT US</h1>
          <p className="text-lg md:text-xl text-yellow-300">Get in touch with us and unlock a world of possibilities. We're just an email away!</p>
        </div>
      </div>

      {/* Main Contact Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name Field */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Fullname"
                  className="w-full px-4 py-3 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full px-4 py-3 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full px-4 py-3 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  I would like to talk about... <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="I would like to talk about..."
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
                  required
                />
              </div>

              {/* reCAPTCHA Notice */}
              <div className="flex items-center gap-3 p-4 border border-gray-400 bg-white">
                <input type="checkbox" className="w-6 h-6 cursor-pointer" required />
                <div>
                  <p className="text-sm text-gray-900">I'm not a robot</p>
                  <p className="text-xs text-gray-600">
                    reCAPTCHA is changing its terms of service.{' '}
                    <a href="#" className="text-blue-600 hover:underline">
                      Take action
                    </a>
                  </p>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 transition-colors"
              >
                Send Message
              </button>

              {submitted && (
                <div className="p-3 bg-green-100 text-green-700 text-sm">
                  Thank you! Your message has been sent successfully.
                </div>
              )}
            </form>
          </div>

          {/* Employment Information Box */}
          <div className="bg-white border border-gray-200 p-8 h-fit">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Holistic Recruitment Services - Head Office</h3>

            {/* Address */}
            <div className="mb-8">
              <p className="text-gray-700 text-sm leading-relaxed">
                Suite 6, 247 Church Street Parramatta NSW 2150
              </p>
            </div>

            {/* Phone */}
            <div className="mb-8">
              <h4 className="font-bold text-gray-900 mb-2">Phone</h4>
              <a href="tel:+61-0411193729" className="text-blue-500 hover:text-blue-700 font-semibold">
                (+61) 0411193729
              </a>{" "},{" "}
              <a href="tel:+61-0413173504" className="text-blue-500 hover:text-blue-700 font-semibold">
                (+61) 0413173504 
              </a>
            </div>

            {/* Email */}
            <div className="mb-8">
              <h4 className="font-bold text-gray-900 mb-2">Email</h4>
              <a href="mailto:info@holisticrs.com.au" className="text-blue-500 hover:text-blue-700 font-semibold break-all">
                info@holisticrs.com.au
              </a>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Follow us</h4>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Google Map Section */}
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Our Location</h2>
          <div className="w-full h-96 md:h-96 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354765946246!2d144.8210312!3d-37.8193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d8bae6fb%3A0x1234567890!2s11%2F86-90%20Pipe%20Rd%2C%20Laverton%20North%20VIC%203026!5e0!3m2!1sen!2sau!4v1234567890"
            />
          </div>
        </div>
      </div>

      {/* Employment Section */}
      <EmpolymentWithUs />
    </div>
  )
}
