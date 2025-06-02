import React from 'react'
import VIsaBanner from './VIsaBanner'
import Header from '../components/Header'
import Logo from '../home/Logo'
import VisaServices from './VisaServices'
import UtilizingVisa from './UtilizingVisa'
import ConsultantBanner from '../components/ConsultantBanner'
import VideoTesti from '../home/VideoTesti'
import Testimonials from '../home/Testimonials'
import Assoisiates from '../home/Assoisiates'
import Faq from '../home/Faq'
import Footer from '../components/Footer'

function page() {
  return (
    <div>
        <Header />
        <VIsaBanner />
        <Logo />
        <VisaServices />
    <UtilizingVisa />

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