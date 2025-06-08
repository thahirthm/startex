'use client'
import React, { useState } from 'react'

const licenses = [
  { label: 'Prerequisites', key: 'freezone' },
  { label: 'Benefits', key: 'mainland' },
  { label: 'Documents Required', key: 'offshore' },
  { label: 'Company setup', key: 'commercial' },


]

const licenseContent = {
  mainland: (
    <div className='space-y-4 text-center'>
   
      <ul className='list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        <li>Identify the location that suits your business needs based on the type of activity your business is engaged in.
</li>
        <li>Determine what business activities should be included in the license and choose a unique trade name.</li>
        <li>
Obtain approvals from government authorities and attest the tenancy agreement by EJARI (Real Estate Regulatory Agency).</li>
      </ul>
    </div>
  ),
  freezone: (
    <div className='space-y-4 text-center'>
     
       <ul className='list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]'>
        <li>Identify the location that suits your business needs based on the type of activity your business is engaged in.
</li>
        <li>Determine what business activities should be included in the license and choose a unique trade name.</li>
        <li>
Obtain approvals from government authorities and attest the tenancy agreement by EJARI (Real Estate Regulatory Agency).</li>
      </ul>
    </div>
  ),
  offshore: <p className='text-white text-center'>Content for Offshore License.</p>,
  commercial: <p className='text-white text-center'>Content for Commercial License.</p>,
  professional: <p className='text-white text-center'>Content for Professional License.</p>,

}

function MainlandTabs  () {
  const [active, setActive] = useState('mainland') // 👈 default tab

  return (
    <div className='px-4 md:px-8 lg:px-[90px] pt-0 md:pt-10 pb-10'>
      <h3 className='text-gradient md:text-[50px] text-[27px] text-center'>
       Guide to Owning a Mainland Business in Dubai
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

export default MainlandTabs
