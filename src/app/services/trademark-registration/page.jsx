import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import React from 'react'
import TrademarkBanner from './TrademarkBanner'
import Logo from '@/app/home/Logo'
import TradeYtb from './TradeYtb'
import TradeTab from './TradeTab'
import VideoTesti from '@/app/home/VideoTesti'
import Testimonials from '@/app/home/Testimonials'
import Assoisiates from '@/app/home/Assoisiates'
import Faq from '@/app/home/Faq'
import ConsultantBanner from '@/app/components/ConsultantBanner'

function page () {
  return (
    <div>
      <Header />
      <TrademarkBanner />
      <Logo />
      <TradeYtb />
      <TradeTab />

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
