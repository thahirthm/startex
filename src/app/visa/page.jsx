import React from 'react'
import VIsaBanner from './VIsaBanner'
import Header from '../components/Header'
import Logo from '../home/Logo'
import VisaServices from './VisaServices'

function page() {
  return (
    <div>
        <Header />
        <VIsaBanner />
        <Logo />
        <VisaServices />
    </div>
  )
}

export default page