'use client'
import { useState } from 'react'

const licenses = [
  { label: 'Accounting & Bookkeeping', key: 'freezone' },
  { label: 'Auditing Services', key: 'mainland' },
  { label: 'VAT Return Filing', key: 'offshore' },
  { label: 'CFO Services', key: 'commercial' },
  { label: 'Tax Services', key: 'professional' }
]

const licenseContent = {
  mainland: (
    <div className=' space-y-4 text-center'>
      <p className='text-white md:text-[16px] text-[15px]'>
        Accounting and Bookkeeping services are not identical. Bookkeeping is a
        facet of Accounting. Accounting carries out the understanding,
        organizing, evaluating, reporting, and summing up of financial
        information.
      </p>
    </div>
  ),
  // Add other license contents below
  freezone: (
    <div className=' space-y-4 text-center'>
      <p className='text-white md:text-[16px] text-[15px]'>
        Accounting carries out the understanding,
        organizing, evaluating, reporting, and summing up of financial
        information. Accounting and Bookkeeping services are not identical. Bookkeeping is a
        facet of Accounting.
      </p>
    </div>
  ),
  offshore: <p className='text-white'>Content for Offshore License.</p>,
  commercial: <p className='text-white'>Content for Commercial License.</p>,
  professional: <p className='text-white'>Content for Professional License.</p>
}

export default function Businesstabs () {
  const [active, setActive] = useState('freezone')

  return (
    <div className='px-4 md:px-8 lg:px-[90px] pt-10 pb-10'>
      <div className='flex md:flex-wrap gap-4 mb-6 md:overflow-x-hidden overflow-x-auto no-scrollbar whitespace-nowrap justify-start md:justify-center px-2 md:px-0'>
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

      <div className=' text-[18px]'>{licenseContent[active]}</div>
    </div>
  )
}
