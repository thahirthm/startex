import React from 'react'
import Image from 'next/image';
import consultant1 from "../../../public/assets/images/home/consultant1.png"
import ScheduleCallCard from '../components/ScheduleCallCard';
import ScheduleChat from '../components/ScheduleChat';
import VerticalSlider from '../components/VerticalSlider';

function SceduleSection() {
  return (
    <div className='px-4 md:px-8 lg:px-[250px]  m-auto'>
       <section className="  md:py-20 py-10  text-white">
      <div className="text-center mb-12">
        <h2 className="md:text-[50px] text-[30px] font-[500] text-gradient">Schedule Meeting</h2>
        <div className='md:flex justify-center items-center'>
        <p className="mt-2 md:text-[16px] text-[14px] text-gray-300 ">Start Your Entrepreneurial Journey</p>
        <p className="md:text-sm text-[12px] text-blue-300 italic mt-2 ms-3">🚀 Build smarter. Grow faster. Start today.</p>
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
    </div>
  )
}

export default SceduleSection