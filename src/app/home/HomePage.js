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
import YoutubeSection from './YoutubeSection'
import TypesofLicense from './TypesofLicense'
import ConsultantBanner from '../components/ConsultantBanner'
import VideoTesti from './VideoTesti'
import Testimonials from './Testimonials'
import Assoisiates from './Assoisiates'
import Faq from './Faq'
import Footer from '../components/Footer'
import GoldenVisa from './GoldenVisa'

function HomePage() {
  return (
    <div>
        <Header />
        <Banner />
      <Logo />
      <SceduleSection />
      <Craft />
      <HomePackages /> 
      <LicenseTab />
      <YoutubeSection />
      <TypesofLicense />
      <TypesofBusiness />
      <BankingPartners />
<ConsultantBanner />
<GoldenVisa />
<VideoTesti />
<Testimonials />
<Assoisiates />
<Faq />
<Footer />
    </div>
  )
}

export default HomePage