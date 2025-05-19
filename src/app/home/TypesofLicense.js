import Image from 'next/image'
import React from 'react'
import { FaIdBadge } from 'react-icons/fa'
import card from "../../../public/assets/images/home/license-card.png"

const licenses = [
  { number: '01', title: 'Professional License', desc: 'Owning a professional license...' },
  { number: '02', title: 'Professional License', desc: 'Owning a professional license...' },
  { number: '03', title: 'Professional License', desc: 'Owning a professional license...' },
  { number: '04', title: 'Professional License', desc: 'Owning a professional license...' },
]

function TypesofLicense() {
  return (
    <div className='px-4 md:px-8 lg:px-[90px] pt-10 pb-10'>
      <h3 className='text-gradient text-[50px] mb-10'>Types of License</h3>
      <div className="flex gap-8">
        {licenses.map((lic) => (
          <div
            key={lic.number}
            className={`relative bg-[#181818]  rounded-xl p-6 w-64 h-64 flex flex-col justify-between shadow-lg transition-all
              before:content-[''] before:absolute before:inset-0 before:bg-[url('https://www.transparenttextures.com/patterns/noise.png')] before:opacity-30 before:rounded-xl before:pointer-events-none
            `}
            style={{ boxShadow: '0 0 30px 0 #000' }}
          >
            <div className="flex justify-between items-center">
              <span className="text-orange-400 text-3xl font-semibold">{lic.number}</span>
              <FaIdBadge className="text-white text-2xl" />
            </div>
            <div>
              <div className="text-white font-semibold text-lg mt-8">{lic.title}</div>
              <div className="text-gray-400 text-sm mt-2">{lic.desc}</div>
            </div>

            <div className=''>
<Image
src={card}
width={500}
height={500}
className='absolute w-full h-full top-0 left-0'
/>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TypesofLicense