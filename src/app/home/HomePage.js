import React from 'react'
import Header from '../components/Header'
import Banner from './Banner'
import Logo from './Logo'
import SceduleSection from './SceduleSection'
import HomePackages from './HomePackages'
import LicenseTab from './LicenseTab'
import TypesofBusiness from './TypesofBusiness'
import Craft from './Craft'
import BankingPartners from './BankingPartners'

function HomePage() {
  return (
    <div>
        <Header />
        <Banner />
      <Logo />
      <SceduleSection />
      <Craft />
      {/* <HomePackages />  */}
      <LicenseTab />
      <TypesofBusiness />
      <BankingPartners />
    </div>
  )
}

export default HomePage