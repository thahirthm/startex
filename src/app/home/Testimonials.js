'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useState } from 'react';
import Image from 'next/image';
import testiCcard from '../../../public/assets/images/home/testi-card.png';
import Fav from "../../../public/assets/images/home/fav.svg"


const testimonials = [
    {
        name: 'Yadhu Krishna',
        quote:
            '“Our experience with Startex Business Set-Up Services has been remarkable. We are grateful for their expertise and support.”',
    },
    {
        name: 'Priya R.',
        quote:
            '“Startex made starting our business in Dubai seamless and stress-free. Highly recommended!”',
    },
    {
        name: 'Ali M.',
        quote:
            '“From start to finish, their team was professional and supportive throughout the process.”',
    },
];

function Testimonials() {
    return (
        <div className="px-4 md:px-8 lg:px-[90px] pt-10 pb-10">
            <div className='flex gap-2 items-center '>
                <Image
                    src={Fav}
                    alt="HomeLogo"
                    width={300}
                    height={300}
                    className=" w-[20px] h-[20px]" />
                    <p className="text-secondary text-[16px]">Testimonials.</p>
            </div>
      


            <div className='pt-8'>
                <Swiper
                    modules={[Navigation, Pagination]}
                    pagination={{ clickable: false }}
                    spaceBetween={30}
                    slidesPerView={1.2}
                    breakpoints={{
                        768: {
                            slidesPerView: 3,
                        },
                    }}
                    className="px-6"
                >
                    {testimonials.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="relative w-full h-[300px] rounded-xl overflow-hidden text-white">
                                {/* Background Image */}
                                <Image
                                    src={testiCcard}
                                    alt="testimonial card"
                                    fill
                                    className=""
                                    quality={100}
                                />

                                {/* Content */}
                                <div className="relative z-10 h-full w-full p-6 flex flex-col justify-between bg-black/40">
                                    <p className="font-light text-[18px]">{item.quote}</p>
                                    <h6 className="font-semibold mt-4">{item.name}</h6>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default Testimonials;
