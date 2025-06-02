import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import visaBanner from '../../../public/assets/images/visa/visa-banner.png'
import visaCard from '../../../public/assets/images/visa/visa.png'

const visaCards = [
  {
    title: 'Business Visa',
    description: 'Owning a business visa is your ticket to unlocking golden opportunities in Dubai, UAE',
    link: '/visa/business',
    image: visaCard,
  },
  {
    title: 'Tourist Visa',
    description: 'Explore the wonders of the UAE with a hassle-free tourist visa.',
    link: '/visa/tourist',
    image: visaCard,
  },
  {
    title: 'Freelance Visa',
    description: 'Empower your independent career in Dubai with a freelance visa.',
    link: '/visa/freelance',
    image: visaCard,
  },
  {
    title: 'Investor Visa',
    description: 'Set up your investments and secure long-term residency in the UAE.',
    link: '/visa/investor',
    image: visaCard,
  },
  {
    title: 'Family Visa',
    description: 'Set up your investments and secure long-term residency in the UAE.',
    link: '/visa/investor',
    image: visaCard,
  },
  {
    title: 'Maid Visa',
    description: 'Set up your investments and secure long-term residency in the UAE.',
    link: '/visa/investor',
    image: visaCard,
  },
  {
    title: 'Work Visa',
    description: 'Set up your investments and secure long-term residency in the UAE.',
    link: '/visa/investor',
    image: visaCard,
  },
  {
    title: 'Dubai Investor',
    description: 'Set up your investments and secure long-term residency in the UAE.',
    link: '/visa/investor',
    image: visaCard,
  },
]

function VisaServices() {
  return (
    <div className='px-4 md:px-8 lg:px-[90px] pt-0 md:pt-10 pb-10'>
      <h3 className='text-gradient md:text-[50px] text-[27px] text-center'>
        Visa Services
      </h3>
      <p className='md:text-[16px] text-[15px] font-[300] pt-5 md:w-[70%] m-auto text-secondary text-center pb-10 md:pb-0'>
        Startex offers comprehensive visa assistance in Dubai and across the
        UAE, catering to both individuals and businesses. Their services
        encompass the entire visa process, from documentation to issuance,
        ensuring a smooth experience.
      </p>

      <div className='md:pt-20 gap-5 flex flex-wrap '>
        {visaCards.map((card, index) => (
          <Link href={card.link} key={index} className='md:w-[23%] w-full  mb-5'>
            <div className='bg-[#404040] p-5 border h-[400px] flex flex-col justify-end border-white rounded-lg relative group overflow-hidden cursor-pointer hover:shadow-lg transition'>
              <div className='relative z-10'>
                <h3 className='text-gradient md:text-[33px] font-[500]'>
                  {card.title}
                </h3>
                <p className='font-[300] md:text-[18px] text-white pt-5'>
                  {card.description}
                </p>
              </div>

              {/* Hover background image */}
              <div className='absolute inset-0 hidden group-hover:block z-0'>
                <Image
                  src={card.image}
                  alt={card.title}
                  className='w-full h-full object-cover rounded-lg'
                  fill
                />
                <div className='absolute inset-0 bg-black/50 rounded-lg' />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default VisaServices
