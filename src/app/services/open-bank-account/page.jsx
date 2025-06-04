import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import React from 'react'
import BankBanner from './BankBanner'
import Logo from '@/app/home/Logo'
import BankTab from './BankTab'
import ConsultantBanner from '@/app/components/ConsultantBanner'
import VideoTesti from '@/app/home/VideoTesti'
import Testimonials from '@/app/home/Testimonials'
import Assoisiates from '@/app/home/Assoisiates'
import Faq from '@/app/home/Faq'

function page() {
  return (
    <div className=''>
<Header />
<BankBanner />
<Logo />
<BankTab />


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