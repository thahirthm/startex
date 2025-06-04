import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import React from 'react'
import BusinessBanner from './BusinessBanner'
import Logo from '@/app/home/Logo'
import BusinessTab from './BusinessTab'

function page () {
  return (
    <div>
      <Header />

      <BusinessBanner />
      <Logo />
      <BusinessTab />

      <Footer />
    </div>
  )
}

export default page
