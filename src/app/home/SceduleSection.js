"use client";
import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import ArowVector from "../../../public/assets/images/home/arrow.png";
import ScheduleCallCard from '../components/ScheduleCallCard';
import ScheduleChat from '../components/ScheduleChat';
import VerticalSlider from '../components/VerticalSlider';
import { motion, useInView, useAnimation } from "framer-motion";

function SceduleSection() {
  const headingRef = useRef(null);
  const callCardRef = useRef(null);
  const sliderRef = useRef(null);
  const chatRef = useRef(null);

  const headingInView = useInView(headingRef, { amount: 0.3, once: false });
  const callCardInView = useInView(callCardRef, { amount: 0.3, once: false });
  const sliderInView = useInView(sliderRef, { amount: 0.3, once: false });
  const chatInView = useInView(chatRef, { amount: 0.3, once: false });

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className='px-4 md:px-8 lg:px-[250px] mx-auto text-white'>
      <section className="py-0 md:py-20">
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

        <div className="flex flex-col md:flex-row gap-12 w-full items-start mt-10">
        
            <ScheduleCallCard />
       

          <div className="flex flex-col gap-8 w-full md:w-[70%]">
            <motion.div
              ref={sliderRef}
              variants={fadeUp}
              initial="hidden"
              animate={sliderInView ? "visible" : "hidden"}
            >
              <VerticalSlider />
            </motion.div>
            <motion.div
              ref={chatRef}
              variants={fadeUp}
              initial="hidden"
              animate={chatInView ? "visible" : "hidden"}
            >
              <ScheduleChat />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SceduleSection;
