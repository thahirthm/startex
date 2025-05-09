"use client"
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { EffectCoverflow, Mousewheel, Navigation } from "swiper/modules";

import Image from "next/image";
import Slider1 from "../../../public/assets/images/home/package.png";


const PackageSlider = () => {
    const swiperRef = useRef(null);

    // Disable vertical scrolling
    const disableVerticalScrolling = () => {
        document.body.style.overflowY = "hidden";  // Disable vertical scrolling
    };

    // Enable vertical scrolling
    const enableVerticalScrolling = () => {
        document.body.style.overflowY = "auto";  // Enable vertical scrolling
    };

    const handleSlideChange = (swiper) => {
        // When slide change starts, disable vertical scrolling
        if (swiper.activeIndex !== swiper.previousIndex) {
            disableVerticalScrolling();
        }
    };

    const handleSlideTransitionEnd = (swiper) => {
        // When slide transition ends, enable vertical scrolling
        enableVerticalScrolling();
    };

    return (
        <div className="md:px-8 lg:px-10 px-3">
            <div>
        
                <Swiper
                    ref={swiperRef}
                    slidesPerView={"2"}
                    centeredSlides={true}
                    spaceBetween={50}
                    effect={"coverflow"}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 1,
                        depth: 100,
                        modifier: 1.3,
                        slideShadows: true,
                    }}

                    navigation={false}
                    modules={[EffectCoverflow, Mousewheel, Navigation]}
                    className="mySwiper md:!pt-20 !pt-10 !pb-20"
                    onSlideChange={handleSlideChange}
                    onSlideTransitionEnd={handleSlideTransitionEnd}
                    speed={2000} 
                    breakpoints={{
                        320: { // Small screens (e.g., mobile)
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        768: { // Medium screens (e.g., tablets)
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: { // Large screens (e.g., desktops)
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                >
                    <SwiperSlide className="">
                        <Image
                            src={Slider1}
                            alt="sliders"
                            className="w-full h-full object-contain"
                        />
                        <p className="pt-5">Inside the Design Studio: Crafting Comfort with Minister</p>
                    </SwiperSlide>
                    <SwiperSlide className="">
                        <Image
                            src={Slider1}
                            alt="sliders"
                            className="w-full h-full object-contain"
                        />
                        <p className="pt-5">The Evolution of Ergonomics: How Office Furniture Shapes Productivity</p>
                    </SwiperSlide>
                    <SwiperSlide className="">
                        <Image
                            src={Slider1}
                            alt="sliders"
                            className="w-full h-full object-contain"
                        />
                        <p className="pt-5">Trending Now: Futuristic Furniture for Contemporary Offices / Hospitals</p>
                    </SwiperSlide>
                    
                    <SwiperSlide className="">
                        <Image
                            src={Slider1}
                            alt="sliders"
                            className="w-full h-full object-contain"
                        />
                        <p className="pt-5">Inside the Design Studio: Crafting Comfort with Minister</p>
                    </SwiperSlide>
                    <SwiperSlide className="">
                        <Image
                            src={Slider1}
                            alt="sliders"
                            className="w-full h-full object-contain"
                        />
                        <p className="pt-5">The Evolution of Ergonomics: How Office Furniture Shapes Productivity</p>
                    </SwiperSlide>
                    <SwiperSlide className="">
                        <Image
                            src={Slider1}
                            alt="sliders"
                            className="w-full h-full object-contain"
                        />
                        <p className="pt-5">Trending Now: Futuristic Furniture for Contemporary Offices / Hospitals</p>
                    </SwiperSlide>
                 
                    {/* Add more slides as needed */}
                </Swiper>
            </div>
        </div>
    );
};

export default PackageSlider;
