import React from 'react'
import Image from 'next/image'
import Whychoose from '../../../public/assets/images/about/why.png'

function WhyChoose () {
  return (
    <div className='md:pt-20  pt-10 px-4 md:px-8 lg:px-[90px] '>
      <div className='relative'>
        <Image
          src={Whychoose}
          width={5000}
          height={5000}
          className='w-full h-full'
        />

        <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center'>
          <h3 className='text-gradient md:text-[50px] font-[400]'>
            Why Choose Us{' '}
          </h3>
          <ul className='text-white leading-10 text-center '>
            <li>In-depth knowledge of UAE business laws</li>
            <li> Dedicated consultants with multilingual support</li>
            <li> Fast and transparent processing</li>
            <li> Custom solutions tailored to your industry</li>
            <li> Strong network of legal and governmental contacts</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default WhyChoose
