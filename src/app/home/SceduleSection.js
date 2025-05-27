"use client";
import React from 'react'
import Image from 'next/image';
import consultant1 from "../../../public/assets/images/home/consultant1.png"
import ArowVector from "../../../public/assets/images/home/arrow.png"


import ScheduleCallCard from '../components/ScheduleCallCard';
import ScheduleChat from '../components/ScheduleChat';
import VerticalSlider from '../components/VerticalSlider';
import { motion } from "framer-motion";
function SceduleSection() {
  return (
    <div className='px-4 md:px-8 lg:px-[250px]  m-auto'>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }} // controls when it triggers
      >
        <section className="  md:py-20 py-0  text-white">
          <div className='md:flex  justify-center'>
            <div className='md:w-[130px] md:h-[100px] md:block hidden w-[70px] h-[50px] pt-5 relative z-50'>
              <Image
                src={ArowVector}
                width={1000}
                height={1000}
                alt='arrow'
                className='md:w-full md:h-full w-[40px] h-[40px] asset1'
              />
            </div>
            <div className="text-center mb-12 relative z-50">
              <h2 className="md:text-[50px] text-[30px] font-[500] text-gradient">Schedule Meeting</h2>
              <div className='md:flex justify-center items-center'>
                <p className="mt-2 md:text-[16px] text-[14px] text-gray-300 ">Start Your Entrepreneurial Journey</p>
                <p className="md:text-sm text-[12px] text-blue-300 italic mt-2 ms-3">🚀 Build smarter. Grow faster. Start today.</p>
              </div>
            </div>
          </div>

          <div className="md:flex gap-12 w-full items-start">
            {/* Left Card */}
            <ScheduleCallCard />

            {/* Right Side */}
            <div className="flex md:w-[70%] pt-10 md:pt-0 flex-col gap-8">
              {/* Consultants */}
              <VerticalSlider />

              {/* Chat Box */}
              <ScheduleChat />

            </div>
          </div>
        </section>
      </motion.div>
    </div>
  )
}

export default SceduleSection