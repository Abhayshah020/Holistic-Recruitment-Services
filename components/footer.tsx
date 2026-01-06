'use client'

import { Facebook, Instagram, Linkedin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  return (
    <footer className="bg-[#1a1f3a] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo and Newsletter Section */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <Link href="/" className="flex items-center gap-2 flex-shrink-0">
                <Image
                  src={'/logo.jpg'}
                  width={170}
                  height={80}
                  alt='Holistic Recruitment Services'
                />
              </Link>
            </div>

            {/* Newsletter Subscription */}
            <form onSubmit={handleSubscribe} className="mb-8">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 border border-white bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
                <button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 font-semibold transition-colors"
                >
                  Subscribe
                </button>
              </div>
              {subscribed && <p className="text-green-400 text-sm mt-2">Thank you for subscribing!</p>}
            </form>

            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <p className="text-gray-400 text-sm mb-2">Email us</p>
                <a href="mailto:info@holisticrs.com.au0411193729 and 0413173504 " className="text-white font-bold text-lg hover:text-orange-500 transition-colors">
                  info@holisticrs.com.au
                </a>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-2">Call us</p>
                <a href="tel:0411193729" className="text-white font-bold text-lg hover:text-orange-500 transition-colors">
                  0411193729
                </a>{" "},{" "}
                <a href="tel:0413173504 " className="text-white font-bold text-lg hover:text-orange-500 transition-colors">
                  0413173504
                </a>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center hover:bg-white hover:text-[#1a1f3a] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center hover:bg-white hover:text-[#1a1f3a] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center hover:bg-white hover:text-[#1a1f3a] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Employers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Join Our Team</a></li>
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Help</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Cookies</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Permanent Recruitment</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Training To Placement</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Aged Care Recruitment</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Medical Recruitment</a></li>
              <li><a href="/recruitment-forms" className="text-gray-300 hover:text-white transition-colors">Referral Information</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          {/* Copyright */}
          <p className="text-gray-400 text-sm text-center md:text-left">
            <a href="https://smsitsolutions.com.au/">
              © {new Date().getFullYear()} Powered by SMS IT Solutions. All rights reserved.
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
