import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import React from 'react'
import SponserBanner from './SponserBanner'
import Logo from '@/app/home/Logo'
import SponserTabs from './SponserTabs'
import ConsultantBanner from '@/app/components/ConsultantBanner'
import VideoTesti from '@/app/home/VideoTesti'
import Testimonials from '@/app/home/Testimonials'
import Assoisiates from '@/app/home/Assoisiates'
import Faq from '@/app/home/Faq'

function page () {
  return (
    <div>
      <Header />
      <SponserBanner />
      <Logo />
      <SponserTabs />

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
