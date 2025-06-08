import ConsultantBanner from '@/app/components/ConsultantBanner'
import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import Assoisiates from '@/app/home/Assoisiates'
import Faq from '@/app/home/Faq'
import Logo from '@/app/home/Logo'
import Testimonials from '@/app/home/Testimonials'
import VideoTesti from '@/app/home/VideoTesti'
import BusinessTab from '@/app/workspace/business-center/BusinessTab'
import React from 'react'
import AudiBanner from './AudiBanner'

function page() {
  return (
    <div>
        <Header />
        <AudiBanner />
        <Logo />

<BusinessTab />

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