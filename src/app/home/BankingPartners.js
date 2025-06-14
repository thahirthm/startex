// components/YoutubeSection.jsx
'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';
import YT from "../../../public/assets/images/home/l-logo1.png"
import YT2 from "../../../public/assets/images/home/l-logo2.png"
import YT3 from "../../../public/assets/images/home/l-logo3.png"
import YT4 from "../../../public/assets/images/home/l-logo4.png"
import YT5 from "../../../public/assets/images/home/l-logo5.png"
import YT6 from "../../../public/assets/images/home/l-logo6.png"



const youtubeData = [
  {

    thumbnail: YT,

  },
  {

    thumbnail: YT2,
  
  },
  {

    thumbnail: YT3,
  
  },
  {

    thumbnail: YT4,
  
  },
  {

    thumbnail: YT5,
  
  },
  {

    thumbnail: YT6,
  
  },
  {

    thumbnail: YT4,
  
  },
  {

    thumbnail: YT5,
  
  },
  {

    thumbnail: YT6,
  
  },
];

function BankingPartners() {
    return (
        <div className='px-4 lg:px-[90px] py-10 pb-10'>
            <h3 className='text-gradient md:text-[50px] text-[30px] font-[500]'>Banking Partners</h3>
<div  className='banking-flex pt-10'>
<div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            slidesPerView={7.3}
            spaceBetween={24}
              autoplay={true}
                delay={1000}
                speed={2000}
              loop={true}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            breakpoints={{
              320: { slidesPerView: 3},
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 7.3 },
            }}
          >
            {youtubeData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="relative  overflow-hidden shadow-md group">
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full  object-cover"
                  />
                  {/* <div className="absolute bottom-0 w-full flex justify-between items-center bg-gradient-to-t from-black/80 to-transparent text-white p-4">
                    <div className="flex items-center gap-2 text-lg font-medium">
                      <FaPlay className="text-sm" />
                      {item.title}
                    </div>
                    <a href={item.playlistUrl} className="text-sm underline hover:text-gray-300">
                      View Playlist
                    </a>
                  </div> */}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

    
        </div>
</div>

        </div>
    )
}

export default BankingPartners