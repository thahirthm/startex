import React from 'react'
import LicensingBanner from './LicensingBanner'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Logo from '../home/Logo'
import BusinessLicenses from './BusinessLicenses'

function page() {
    return (
        <div>
            <Header />
            <LicensingBanner />
            <Logo />
            <BusinessLicenses />
            <Footer />
        </div>
    )
}

export default page