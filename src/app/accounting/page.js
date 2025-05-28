import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AccountingBanner from './AccountingBanner'
import Logo from '../home/Logo'
import How from './How'
import BusinessGuides from './BusinessGuides'
import ConsultantBanner from '../components/ConsultantBanner'
import VideoTesti from '../home/VideoTesti'
import Testimonials from '../home/Testimonials'
import Assoisiates from '../home/Assoisiates'
import Faq from '../home/Faq'

function page() {
  return (
    <div>
      <Header />
      <AccountingBanner />
      <Logo />
      <How />
      <BusinessGuides />

      <ConsultantBanner />
      <VideoTesti />
      <Testimonials />
      <Assoisiates />
      <Faq />
      <Footer />
    </div>
  )
}

export default page