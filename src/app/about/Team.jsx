'use client' // if you're using Next.js App Router

import React from 'react'
import dynamic from 'next/dynamic'

// 👇 Import TeamSlider dynamically and disable SSR
const TeamSlider = dynamic(() => import('./TeamSlider'), { ssr: false })

function Team() {
  return (
    <div className='md:pt-20 pt-10 px-4 md:px-8 lg:px-[90px]'>
      <h3 className='text-gradient md:text-[50px] text-[27px] font-[500] text-center'>
        Meet Our Team
      </h3>
      <p className='md:text-[16px] text-[15px] font-[300] pt-5 md:w-[70%] m-auto text-secondary text-center pb-10 md:pb-0'>
        At Startex Hub, our strength lies in our people. With decades of combined experience in UAE business setup, legal compliance, and client service, our team is dedicated to turning your entrepreneurial vision into reality.
      </p>

      <TeamSlider />
    </div>
  )
}

export default Team
