import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import AboutCard from '../components/AboutCard'
import WorkProcess from '../components/WorkProcess'
import PortfolioGrid from '../components/PortfolioGrid'
import CTASection from '../components/CTASection'
import BlogStrip from '../components/BlogStrip'
import ServicesList from '../components/ServicesList'
import Clients from '../components/Clients'
import Testimonial from '../components/Testimonial'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

export default function Home(){
  return (
    <div className="min-h-screen bg-gradient-to-r from-white via-purple-50 to-sky-50">
      <Header />
      <main className="container mx-auto px-6 space-y-20">
        <Hero />
        <AboutCard />
        <WorkProcess />
        <PortfolioGrid />
        <CTASection />
        <BlogStrip />
        <ServicesList />
        <Clients />
        <Testimonial />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
