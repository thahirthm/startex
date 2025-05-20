"use client"
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { EffectCoverflow, Autoplay, Navigation } from "swiper/modules";
import Fav from "../../../public/assets/images/home/fav.svg"




import Image from "next/image";
import Slider1 from "../../../public/assets/images/home/package.png";
// You might need a checkmark SVG/icon component or path
const CheckIcon = () => (
    <svg
        className="w-4 h-4 text-white mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
);

const PackageSlider = () => {


    return (
        <div className="md:px-8 lg:px-10 px-3 relative">
            <div>

                <Swiper

                    slidesPerView={"2"}
                    centeredSlides={true}
                    spaceBetween={30}
                    effect={"coverflow"}
                    autoplay={true}
                    delay={1000}
                    loop={true}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 1,
                        depth: 100,
                        modifier: 1.3,
                        slideShadows: true,
                    }}

                    navigation={false}
                    modules={[EffectCoverflow, Autoplay, Navigation]}
                    className="mySwiper md:!pt-20 !pt-10 !pb-20"

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
                            slidesPerView: 1.5,
                            spaceBetween: 30,
                        },
                    }}
                >
                    <SwiperSlide className="">
                        <div className="relative w-full  mx-auto rounded-lg overflow-hidden shadow-lg md:min-h-[400px]" >
                            {/* Background Image */}
                            <Image
                                src={Slider1}
                                alt="sliders"
                                className="w-full h-[400px] object-cover"
                            />

                            {/* Dark Overlay */}


                            {/* Card Content */}
                            <div className="absolute top-0 left-0 z-10 p-6 flex w-full flex-col h-full justify-between">
                                {/* Top Section (Logo and Price) */}
                                <div className="flex justify-between items-start mb-4">
                                    {/* Logo */}
                                    <div className="w-16 h-16 bg-[#3a6092] rounded-md flex items-center justify-center shadow-md">
                                        <Image src={Slider1} alt="SPC Logo" width={40} height={40} objectFit="contain" /> {/* Adjust width/height as needed for your logo */}
                                    </div>

                                    {/* Starting From Price */}
                                    <div className="text-right">
                                        <div className='flex gap-2 items-center justify-center'>
                                            <Image
                                                src={Fav}
                                                alt="HomeLogo"
                                                width={300}
                                                height={300}
                                                className=" w-[20px] h-[20px]" />
                                            <h6 className='md:text-[22px] text-[17px] font-[400] text-secondary'>Starting from</h6>
                                        </div>
                                        <div className="text-white md:text-2xl text-[18px] font-bold">AED 6375</div>
                                    </div>
                                </div>

                                {/* Checklist */}
                                <div className="flex-grow flex flex-col justify-center py-4"> {/* Added padding for vertical centering */}
                                    <ul className="text-white text-lg space-y-3">
                                        <li className="flex items-center">
                                            <CheckIcon />
                                            <span className="md:text-[18px] text-[16px]">Owning a professional license...</span>
                                        </li>
                                        <li className="flex items-center">
                                            <CheckIcon />
                                            <span className="md:text-[18px] text-[16px]">Business license</span>
                                        </li>
                                        <li className="flex items-center">
                                            <CheckIcon />
                                            <span className="md:text-[18px] text-[16px]">Flexi desk</span>
                                        </li>
                                        <li className="flex items-center">
                                            <CheckIcon />
                                            <span className="md:text-[18px] text-[16px]">Business activity</span>
                                        </li>
                                        <li className="flex items-center">
                                            <CheckIcon />
                                            <span className="md:text-[18px] text-[16px]">100% Foreign Ownership</span> {/* Corrected "Foriegn" to "Foreign Ownership" based on common terms, adjust if needed */}
                                        </li>
                                    </ul>
                                </div>

                                {/* Readmore Button */}
                                <div className="ms-auto">
                                    <button className="w-fit py-3 px-6 rounded-md text-white font-[400] text-[17px] bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-600 hover:to-yellow-600 transition duration-300">
                                        Readmore
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="">
                        <div className="relative w-full  mx-auto rounded-lg overflow-hidden shadow-lg md:min-h-[400px]" >
                            {/* Background Image */}
                            <Image
                                src={Slider1}
                                alt="sliders"
                                className="w-full h-[400px] object-cover"
                            />

                            {/* Dark Overlay */}


                            {/* Card Content */}
                            <div className="absolute top-0 left-0 z-10 p-6 flex w-full flex-col h-full justify-between">
                                {/* Top Section (Logo and Price) */}
                                <div className="flex justify-between items-start mb-4">
                                    {/* Logo */}
                                    <div className="w-16 h-16 bg-[#3a6092] rounded-md flex items-center justify-center shadow-md">
                                        <Image src={Slider1} alt="SPC Logo" width={40} height={40} objectFit="contain" /> {/* Adjust width/height as needed for your logo */}
                                    </div>

                                    {/* Starting From Price */}
                                    <div className="text-right">
                                        <div className='flex gap-2 items-center justify-center'>
                                            <Image
                                                src={Fav}
                                                alt="HomeLogo"
                                                width={300}
                                                height={300}
                                                className=" w-[20px] h-[20px]" />
                                            <h6 className='text-[22px] font-[400] text-secondary'>Starting from</h6>
                                        </div>
                                        <div className="text-white text-2xl font-bold">AED 6375</div>
                                    </div>
                                </div>

                                {/* Checklist */}
                                <div className="flex-grow flex flex-col justify-center py-4"> {/* Added padding for vertical centering */}
                                         <ul className="text-white text-lg space-y-3">
                                        <li className="flex items-center">
                                            <CheckIcon />
                                            <span className="md:text-[18px] text-[16px]">Owning a professional license...</span>
                                        </li>
                                        <li className="flex items-center">
                                            <CheckIcon />
                                            <span className="md:text-[18px] text-[16px]">Business license</span>
                                        </li>
                                        <li className="flex items-center">
                                            <CheckIcon />
                                            <span className="md:text-[18px] text-[16px]">Flexi desk</span>
                                        </li>
                                        <li className="flex items-center">
                                            <CheckIcon />
                                            <span className="md:text-[18px] text-[16px]">Business activity</span>
                                        </li>
                                        <li className="flex items-center">
                                            <CheckIcon />
                                            <span className="md:text-[18px] text-[16px]">100% Foreign Ownership</span> {/* Corrected "Foriegn" to "Foreign Ownership" based on common terms, adjust if needed */}
                                        </li>
                                    </ul>
                                </div>

                                {/* Readmore Button */}
                                <div className="ms-auto">
                                    <button className="w-fit py-3 px-6 rounded-md text-white font-[400] text-[17px] bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-600 hover:to-yellow-600 transition duration-300">
                                        Readmore
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="">
                        <div className="relative w-full  mx-auto rounded-lg overflow-hidden shadow-lg md:min-h-[400px]" >
                            {/* Background Image */}
                            <Image
                                src={Slider1}
                                alt="sliders"
                                className="w-full h-[400px] object-cover"
                            />

                            {/* Dark Overlay */}


                            {/* Card Content */}
                            <div className="absolute top-0 left-0 z-10 p-6 flex w-full flex-col h-full justify-between">
                                {/* Top Section (Logo and Price) */}
                                <div className="flex justify-between items-start mb-4">
                                    {/* Logo */}
                                    <div className="w-16 h-16 bg-[#3a6092] rounded-md flex items-center justify-center shadow-md">
                                        <Image src={Slider1} alt="SPC Logo" width={40} height={40} objectFit="contain" /> {/* Adjust width/height as needed for your logo */}
                                    </div>

                                    {/* Starting From Price */}
                                    <div className="text-right">
                                        <div className='flex gap-2 items-center justify-center'>
                                            <Image
                                                src={Fav}
                                                alt="HomeLogo"
                                                width={300}
                                                height={300}
                                                className=" w-[20px] h-[20px]" />
                                            <h6 className='text-[22px] font-[400] text-secondary'>Starting from</h6>
                                        </div>
                                        <div className="text-white text-2xl font-bold">AED 6375</div>
                                    </div>
                                </div>

                                {/* Checklist */}
                                <div className="flex-grow flex flex-col justify-center py-4"> {/* Added padding for vertical centering */}
                                         <ul className="text-white text-lg space-y-3">
                                        <li className="flex items-center">
                                            <CheckIcon />
                                            <span className="md:text-[18px] text-[16px]">Owning a professional license...</span>
                                        </li>
                                        <li className="flex items-center">
                                            <CheckIcon />
                                            <span className="md:text-[18px] text-[16px]">Business license</span>
                                        </li>
                                        <li className="flex items-center">
                                            <CheckIcon />
                                            <span className="md:text-[18px] text-[16px]">Flexi desk</span>
                                        </li>
                                        <li className="flex items-center">
                                            <CheckIcon />
                                            <span className="md:text-[18px] text-[16px]">Business activity</span>
                                        </li>
                                        <li className="flex items-center">
                                            <CheckIcon />
                                            <span className="md:text-[18px] text-[16px]">100% Foreign Ownership</span> {/* Corrected "Foriegn" to "Foreign Ownership" based on common terms, adjust if needed */}
                                        </li>
                                    </ul>
                                </div>

                                {/* Readmore Button */}
                                <div className="ms-auto">
                                    <button className="w-fit py-3 px-6 rounded-md text-white font-[400] text-[17px] bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-600 hover:to-yellow-600 transition duration-300">
                                        Readmore
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="">
                        <div className="relative w-full  mx-auto rounded-lg overflow-hidden shadow-lg md:min-h-[400px]" >
                            {/* Background Image */}
                            <Image
                                src={Slider1}
                                alt="sliders"
                                className="w-full h-[400px] object-cover"
                            />

                            {/* Dark Overlay */}


                            {/* Card Content */}
                            <div className="absolute top-0 left-0 z-10 p-6 flex w-full flex-col h-full justify-between">
                                {/* Top Section (Logo and Price) */}
                                <div className="flex justify-between items-start mb-4">
                                    {/* Logo */}
                                    <div className="w-16 h-16 bg-[#3a6092] rounded-md flex items-center justify-center shadow-md">
                                        <Image src={Slider1} alt="SPC Logo" width={40} height={40} objectFit="contain" /> {/* Adjust width/height as needed for your logo */}
                                    </div>

                                    {/* Starting From Price */}
                                    <div className="text-right">
                                        <div className='flex gap-2 items-center justify-center'>
                                            <Image
                                                src={Fav}
                                                alt="HomeLogo"
                                                width={300}
                                                height={300}
                                                className=" w-[20px] h-[20px]" />
                                            <h6 className='text-[22px] font-[400] text-secondary'>Starting from</h6>
                                        </div>
                                        <div className="text-white text-2xl font-bold">AED 6375</div>
                                    </div>
                                </div>

                                {/* Checklist */}
                                <div className="flex-grow flex flex-col justify-center py-4"> {/* Added padding for vertical centering */}
                                     <ul className="text-white text-lg space-y-3">
                                        <li className="flex items-center">
                                            <CheckIcon />
                                            <span className="md:text-[18px] text-[16px]">Owning a professional license...</span>
                                        </li>
                                        <li className="flex items-center">
                                            <CheckIcon />
                                            <span className="md:text-[18px] text-[16px]">Business license</span>
                                        </li>
                                        <li className="flex items-center">
                                            <CheckIcon />
                                            <span className="md:text-[18px] text-[16px]">Flexi desk</span>
                                        </li>
                                        <li className="flex items-center">
                                            <CheckIcon />
                                            <span className="md:text-[18px] text-[16px]">Business activity</span>
                                        </li>
                                        <li className="flex items-center">
                                            <CheckIcon />
                                            <span className="md:text-[18px] text-[16px]">100% Foreign Ownership</span> {/* Corrected "Foriegn" to "Foreign Ownership" based on common terms, adjust if needed */}
                                        </li>
                                    </ul>
                                </div>

                                {/* Readmore Button */}
                                <div className="ms-auto">
                                    <button className="w-fit py-3 px-6 rounded-md text-white font-[400] text-[17px] bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-600 hover:to-yellow-600 transition duration-300">
                                        Readmore
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    

                    {/* Add more slides as needed */}
                </Swiper>
            </div>




        </div>
    );
};

export default PackageSlider;
