'use client'
import React, { useState } from 'react'

const licenses = [
  { label: 'Individual Local Sponsor', key: 'freezone' },
  { label: 'Corporate Sponsorship', key: 'mainland' },
  { label: 'Local Service Agent', key: 'offshore' }
]

const licenseContent = {
  mainland: (
    <div className='space-y-4 text-center'>
        <p className='space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        The individual local sponsor is a UAE national who holds 51% of the
        total share of the company. The remaining 49% goes to the foreign
        national. Ideal for establishing commercial endeavors, and manufacturing
        firms in Dubai or UAE.
      </p>
    </div>
  ),
  freezone: (
    <div className='space-y-4 text-center'>
      <p className='space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        The individual local sponsor is a UAE national who holds 51% of the
        total share of the company. The remaining 49% goes to the foreign
        national. Ideal for establishing commercial endeavors, and manufacturing
        firms in Dubai or UAE.
      </p>

    </div>
  ),
  offshore: (
    <p className='text-white text-center'>Content for Offshore License.</p>
  )
}

function SponserTabs () {
  const [active, setActive] = useState('mainland') // 👈 default tab

  return (
    <div className='px-4 md:px-8 lg:px-[90px] pt-0 md:pt-10 pb-10'>
      <h3 className='text-gradient md:text-[50px] text-[27px] text-center'>
        Things you should know
      </h3>

      <div className='flex md:flex-wrap mt-10 gap-4 mb-6 md:overflow-x-hidden overflow-x-auto no-scrollbar whitespace-nowrap justify-start md:justify-center px-2 md:px-0'>
        {licenses.map(license => (
          <button
            key={license.key}
            onClick={() => setActive(license.key)}
            className={`px-4 py-2 rounded text-sm font-medium transition ${
              active === license.key
                ? 'bg-gradient text-white'
                : 'bg-black border border-gray-500 text-white hover:bg-gray-800'
            }`}
          >
            {license.label}
          </button>
        ))}
      </div>

      <div className='text-[18px]'>{licenseContent[active]}</div>
    </div>
  )
}

export default SponserTabs
