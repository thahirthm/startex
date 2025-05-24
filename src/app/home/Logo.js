import Image from 'next/image'
import React from 'react'
import LogoMain from "../../../public/assets/images/home/logo.png"

function Logo() {
  return (
    <div className='px-4 md:px-8 lg:px-[90px] pb-10'>
      <Image
        src={LogoMain}
        alt="HomeLogo"
        width={1000}
        height={1000}
        className=" w-full h-full object-contain"
      />
    </div>
  )
}

export default Logo