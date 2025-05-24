import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import GuideBanner from './GuideBanner'
import Logo from '../home/Logo'
import HowToSetup from './HowToSetup'
import BusinessStartGuide from './BusinessStartGuide'
import ThingsKnow from '../licensing/ThingsKnow'
import BusinessGuidesTabs from './BusinessGuidesTabs'
import ConsultantBanner from '../components/ConsultantBanner'
import VideoTesti from '../home/VideoTesti'
import Testimonials from '../home/Testimonials'
import Assoisiates from '../home/Assoisiates'
import Faq from '../home/Faq'


function page() {
  return (
    <div>
      <Header />
      <GuideBanner />
      <Logo />
      <HowToSetup />
      <BusinessStartGuide />
      <BusinessGuidesTabs />
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