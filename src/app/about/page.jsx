import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AboutBanner from './AboutBanner'
import AboutDetail from './AboutDetail'
import CompanyValues from './CompanyValues'
import OurService from './OurService'
import WhyChoose from './WhyChoose'

function page() {
  return (
    <div>
        <Header />
<AboutBanner />
<AboutDetail />
<CompanyValues />
<OurService />
<WhyChoose />

        <Footer />
    </div>
  )
}

export default page