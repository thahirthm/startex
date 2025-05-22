"use client";
import React from 'react';
import Image from 'next/image';
import consultantImg from '../../../public/assets/images/home/consultant.png'; 
import consultantFav from '../../../public/assets/images/home/fav-i.png'; 



export default function ConsultantBanner() {
  return (
    <div className='px-4 md:px-8 lg:px-[90px] pt-10 pb-10'>
    <section className="bg-[#FCD1B1] rounded-3xl  pt-5 pb-5 md:pt-0 md:pb-0 px-5 flex flex-col md:flex-row items-center justify-between gap-8 relative">
      {/* Left Side */}
      <div className="flex-1">
        <h2 className="text-3xl md:text-[50px] font-[400] text-[#C13A17] leading-tight">
          Connect with our <br />
          <span className="font-[400]">expert consultants</span>
        </h2>
      </div>

      {/* Middle Image */}
      <div className="relative w-48 h-64 md:w-56 md:h-72 z-30">
        <Image
          src={consultantImg}
          alt="Consultant"
          layout="fill"
          objectFit="contain"
          className="z-10 relative"
        />
        <div className="absolute inset-0 m-auto w-0 h-0 border-l-[80px] border-r-[80px] border-b-[140px] border-transparent border-b-[#f9be95] opacity-50 -z-10 rotate-[30deg]" />
      </div>

      {/* Right Side */}
      <div className="flex-1 ">
        <p className="text-[#C13A17] mb-4 text-sm md:text-left ">
          We have tailored our services to support your business’s growth. <br />
          Approach us to launch efficiently and effectively.
        </p>
        <button className="inline-flex items-center gap-2 bg-[#2A2328] text-white px-5 py-2 rounded-md hover:bg-[#3a3138] transition">
          Schedule meeting
         
        </button>
      </div>


      <div className='absolute top-0 right-0 z-20 left-0 m-auto text-center md:h-full flex justify-center'>
         <Image 
          src={consultantFav}
          alt="Consultantfav"
        
          objectFit="contain"
          className="  w-[250px] md:h-full me-10"/>
      </div>



    </section>

    </div>
  );
}


