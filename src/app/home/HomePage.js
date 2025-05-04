import React from 'react'
import Header from '../components/Header'
import Banner from './Banner'
import Logo from './Logo'
import SceduleSection from './SceduleSection'

function HomePage() {
  return (
    <div>
        <Header />
        <Banner />
      <Logo />
      <SceduleSection />
    </div>
  )
}

export default HomePage