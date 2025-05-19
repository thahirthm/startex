// components/YoutubeSection.jsx
'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FaPlay } from 'react-icons/fa';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';
import YT from "../../../public/assets/images/home/yt.png"
import YT2 from "../../../public/assets/images/home/yt2.png"
import YT3 from "../../../public/assets/images/home/yt3.png"


const youtubeData = [
  {
    title: 'Arabic',
    thumbnail: YT,
    playlistUrl: '#',
  },
  {
    title: 'Malayalam',
    thumbnail: YT2,
    playlistUrl: '#',
  },
  {
    title: 'Tamil',
    thumbnail: YT3,
    playlistUrl: '#',
  },
  {
    title: 'Tamil',
    thumbnail: YT3,
    playlistUrl: '#',
  },
];

export default function YoutubeSection() {
  return (
    <section className="bg-black text-white py-12 px-4 md:px-8 lg:px-[90px]">
      <div className=" mx-auto">
        <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
          {/* <Image src="/youtube-icon.svg" alt="YouTube" className="w-5 h-5" /> */}
          YouTube Channels
        </h2>

        <div className="relative">
          <Swiper
            modules={[Navigation]}
            slidesPerView={3}
            spaceBetween={24}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            breakpoints={{
              320: { slidesPerView: 1.1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {youtubeData.map((item, index) => (
              <SwiperSlide key={index} className=''>
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

          {/* <button className="swiper-button-prev absolute top-1/2 -left-6 z-10 transform -translate-y-1/2 text-white bg-black/60 p-2 rounded-full">
            <FaChevronLeft />
          </button>
          <button className="swiper-button-next absolute top-1/2 -right-6 z-10 transform -translate-y-1/2 text-white bg-black/60 p-2 rounded-full">
            <FaChevronRight />
          </button> */}
        </div>
      </div>
    </section>
  );
}
