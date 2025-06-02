import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BlogBanner from './BlogBanner'
import BlogListing from './BlogListing'
import Logo from '../home/Logo'
import Assoisiates from '../home/Assoisiates'
import ConsultantBanner from '../components/ConsultantBanner'

function page() {
  return (
    <div >
<Header />

<BlogBanner />
<Logo />
<BlogListing />
            <Assoisiates />
            <ConsultantBanner />
            


<Footer />
    </div>
  )
}

export default page