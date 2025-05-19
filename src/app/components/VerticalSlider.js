// components/VerticalSlider.js
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import consult from "../../../public/assets/images/home/c1.png"
import Image from 'next/image';

const consultants = [
  {
    title: 'License Consultant',
    image: consult,
  },
  {
    title: 'Pro Consultant',
    image: consult,
  },
  {
    title: 'License Consultant',
    image: consult,
  },
  {
    title: 'Pro Consultant',
    image: consult,
  },
  {
    title: 'License Consultant',
    image: consult,
  },
  {
    title: 'Pro Consultant',
    image: consult,
  },
];

export default function VerticalSlider() {
  return (
    <div className="h-auto w-full bg-[#0b0b0b] flex items-center justify-center">
      <Swiper
        direction="vertical"
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        mousewheel
        modules={[Pagination, Mousewheel]}
        className="md:w-[600px] md:h-[250px] h-[200px]"
      >
        {/* Group slides into rows of 3 */}
        {Array.from({ length: Math.ceil(consultants.length / 3) }).map((_, i) => (
          <SwiperSlide key={i}>
            <div className="flex justify-between gap-6">
              {consultants.slice(i * 3, i * 3 + 3).map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-[24px] bg-[#bde1f9] w-1/3 relative overflow-hidden md:h-[250px]  h-[200px] flex flex-col justify-end px-4 pb-4 shadow-lg"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="absolute top-0 left-0 w-full h-full object-cover object-top"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-to-t from-black/80 to-transparent z-10" />
                  <div className="relative z-20 text-white flex justify-between items-center">
                    <p className=" text-[14px] font-[300]">{item.title}</p>
                    <span className="text-2xl">{'>'}</span>
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
