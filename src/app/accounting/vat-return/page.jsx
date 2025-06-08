import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import React from 'react'
import ReturnBanner from './ReturnBanner'
import Logo from '@/app/home/Logo'
import BusinessTab from '@/app/workspace/business-center/BusinessTab'
import ConsultantBanner from '@/app/components/ConsultantBanner'
import VideoTesti from '@/app/home/VideoTesti'
import Testimonials from '@/app/home/Testimonials'
import Assoisiates from '@/app/home/Assoisiates'
import Faq from '@/app/home/Faq'

function page() {
  return (
    <div>
        <Header />
<ReturnBanner />
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