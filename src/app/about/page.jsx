import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AboutBanner from './AboutBanner'
import AboutDetail from './AboutDetail'
import CompanyValues from './CompanyValues'
import OurService from './OurService'
import WhyChoose from './WhyChoose'
import Team from './Team'
import AbouFaq from './AbouFaq'
import ConsultantBanner from '../components/ConsultantBanner'
import VideoTesti from '../home/VideoTesti'
import Testimonials from '../home/Testimonials'
import Assoisiates from '../home/Assoisiates'
import Faq from '../home/Faq'

export default function Page() {
  return (
    <div>
      <Header />
      <AboutBanner />
      <AboutDetail />
      <CompanyValues />
      <OurService />
      <WhyChoose />
      <Team />
      <AbouFaq />


        <ConsultantBanner />
      <VideoTesti />
      <Testimonials />
      <Assoisiates />

      <Footer />
    </div>
  );
}