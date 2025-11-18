'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Navbar() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a1f3a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <Image
              src={'/logo.jpg'}
              width={170}
              height={80}
              alt='Holistic Recruitment Services'
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            <Link
              href="/"
              className={`text-white font-medium px-6 py-2 transition-colors hover:bg-orange-500 ${pathname === "/" ? "bg-orange-500" : ""}`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`text-white font-medium px-6 py-2 transition-colors hover:bg-orange-500 ${pathname === "/about" ? "bg-orange-500" : ""}`}
            >
              About
            </Link>
            <Link
              href="/employers"
              className={`text-white font-medium px-6 py-2 transition-colors hover:bg-orange-500 ${pathname === "/employers" ? "bg-orange-500" : ""}`}
            >
              Employers
            </Link>
            <div className="relative group">
              <Link
                href={"/services"}
                className={`text-white font-medium px-6 py-2 transition-colors hover:bg-orange-500 text-white hover:text-gray-300 font-medium transition-colors flex items-center gap-1 ${pathname === "/services" ? "bg-orange-500" : ""}`}
              >
                Services
                <ChevronDown className="w-4 h-4" />
              </Link>
              {/* Dropdown Menu */}
              <div className="absolute left-0 mt-0 w-48 bg-[#0f1428] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 shadow-lg">
                <Link href="/services" className="block px-4 py-2 hover:bg-gray-700 first:pt-3 last:pb-3">
                  Recruitment
                </Link>
                <Link href="/services" className="block px-4 py-2 hover:bg-gray-700">
                  Consulting
                </Link>
                <Link href="/services" className="block px-4 py-2 hover:bg-gray-700 last:pb-3">
                  Staffing
                </Link>
              </div>
            </div>
            <Link
              href="/contact"
              className={`text-white font-medium px-6 py-2 transition-colors hover:bg-orange-500 ${pathname === "/contact" ? "bg-orange-500" : ""}`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-[#0f1428] border-t border-gray-700">
            <div className="flex flex-col gap-2 p-4">
              <Link
                href="/"
                className={`text-white font-medium px-6 py-2 transition-colors hover:bg-orange-500 ${pathname === "/" ? "bg-orange-500" : ""}`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`text-white font-medium px-6 py-2 transition-colors hover:bg-orange-500 ${pathname === "/about" ? "bg-orange-500" : ""}`}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/employers"
                className={`text-white font-medium px-6 py-2 transition-colors hover:bg-orange-500 ${pathname === "/employers" ? "bg-orange-500" : ""}`}
                onClick={() => setIsOpen(false)}
              >
                Employers
              </Link>
              <div>
                {/* <Link
                  href="/services"
                  className={`text-white font-medium px-6 py-2 transition-colors hover:bg-orange-500 ${pathname === "/services" ? "bg-orange-500" : ""}`}
                >
                  Services
                  <ChevronDown className="w-4 h-4" />
                </Link> */}
                <Link
                  href={"/services"}
                  className={`text-white font-medium px-6 py-2 transition-colors hover:bg-orange-500 text-white hover:text-gray-300 font-medium transition-colors flex items-center gap-1 ${pathname === "/services" ? "bg-orange-500" : ""}`}
                >
                  Services
                  <ChevronDown className="w-4 h-4" />
                </Link>
                <div className="bg-[#151d35] pl-4">
                  <Link href="/services" className="block text-white hover:bg-gray-700 px-4 py-2">
                    Recruitment
                  </Link>
                  <Link href="/services" className="block text-white hover:bg-gray-700 px-4 py-2">
                    Consulting
                  </Link>
                  <Link href="/services" className="block text-white hover:bg-gray-700 px-4 py-2">
                    Staffing
                  </Link>
                </div>
              </div>
              <Link
                href="/contact"
                className={`text-white font-medium px-6 py-2 transition-colors hover:bg-orange-500 ${pathname === "/contact" ? "bg-orange-500" : ""}`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
