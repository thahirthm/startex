import React from 'react'
import Header from '../components/Header'
import Banner from './Banner'
import Logo from './Logo'
import SceduleSection from './SceduleSection'
import HomePackages from './HomePackages'

function HomePage() {
  return (
    <div>
        <Header />
        <Banner />
      <Logo />
      <SceduleSection />
      <HomePackages /> 
    </div>
  )
}

export default HomePage