import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import Image from 'next/image'
import Team1 from '../../../public/assets/images/about/team1.png'

const team = [
  {
    name: 'Ahmed Khan',
    title: 'Founder & CEO',
    img: Team1
  },
  {
    name: 'Omar Al Junaibi',
    title: 'Head of Legal & Compliance',
    img: Team1
  },
  {
    name: 'Sarah Al Farsi',
    title: 'Senior Business Consultant',
    img: Team1
  },
  {
    name: 'Lina Haddad',
    title: 'Client Success Manager',
    img: Team1
  }
]

export default function TeamSlider () {
  return (
    <div className=' py-10 px-4'>
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 }
        }}
        className='!pb-12'
      >
        {team.map((member, idx) => (
          <SwiperSlide key={idx}>
            <div className='bg-[#181818] rounded-xl overflow-hidden shadow-lg flex flex-col items-center'>
              <Image
                src={member.img}
                alt={member.name}
                className='w-full h-100 object-cover'
              />
              <div className='w-full bg-black/60 px-4 py-4 text-center absolute bottom-0 left-0'>
                <div className='text-white text-xl font-bold'>
                  {member.name}
                </div>
                <div className='text-gray-200 text-sm'>{member.title}</div>
              </div>
              {/* Overlay for name/title */}
             
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
