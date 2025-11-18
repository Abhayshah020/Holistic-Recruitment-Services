"use client"
import HeroSection from '@/components/hero-section'
import WhatWillWeDo from '@/components/what-will-we-do'
import OurProduct from '@/components/our-product'
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import CompaniesWorkedWith from '@/components/companies-worked-with'
import HowItWorks from '@/components/company-worked-with-and-how-it-works'
import Testimonials from '@/components/testimonials';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16 md:pt-20">
        <HeroSection />
        <CompaniesWorkedWith />
        <HowItWorks />
        <WhatWillWeDo />
        <OurProduct />
        <Testimonials />
      </main>
      <Footer />
    </>
  )
}
