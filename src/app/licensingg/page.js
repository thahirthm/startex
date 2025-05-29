import React from 'react'
import LicensingBanner from './LicensingBanner'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Logo from '../home/Logo'
import BusinessLicenses from './BusinessLicenses'
import ThingsKnow from './ThingsKnow'
import ConsultantBanner from '../components/ConsultantBanner'

import VideoTesti from '../home/VideoTesti'
import Testimonials from '../home/Testimonials'
import Assoisiates from '../home/Assoisiates'
import Faq from '../home/Faq'

function page() {
    return (
        <div>
            <Header />
            <LicensingBanner />
            <Logo />
            <BusinessLicenses />
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