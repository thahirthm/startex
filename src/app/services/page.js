import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ServiceBanner from './ServiceBanner'
import Logo from '../home/Logo'
import WhatWeDo from './WhatWeDo'
import ServiceTab from './ServiceTab'
import ThingsKnow from './ThingsKnow'
import ConsultantBanner from '../components/ConsultantBanner'
import VideoTesti from '../home/VideoTesti'
import Testimonials from '../home/Testimonials'
import Assoisiates from '../home/Assoisiates'
import Faq from '../home/Faq'

function page() {
  return (
    <div >
      <Header />
      <ServiceBanner />
      <Logo />
      <WhatWeDo />
      <ThingsKnow />

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