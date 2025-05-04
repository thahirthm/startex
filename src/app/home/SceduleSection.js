import React from 'react'
import Image from 'next/image';
import consultant1 from "../../../public/assets/images/home/consultant1.png"
import ScheduleCallCard from '../components/ScheduleCallCard';
import ScheduleChat from '../components/ScheduleChat';

function SceduleSection() {
  return (
    <div className='px-4 md:px-8 lg:px-[200px]  m-auto'>
       <section className="  py-20  text-white">
      <div className="text-center mb-12">
        <h2 className="text-[50px] font-[500] text-gradient">Schedule Meeting</h2>
        <div className='flex justify-center items-center'>
        <p className="mt-2 text-[16px] text-gray-300 ">Start Your Entrepreneurial Journey</p>
        <p className="text-sm text-blue-300 italic mt-2 ms-3">🚀 Build smarter. Grow faster. Start today.</p>
        </div>
      </div>

      <div className="flex gap-12 w-full items-start">
        {/* Left Card */}
  <ScheduleCallCard />

        {/* Right Side */}
        <div className="flex w-[70%] flex-col gap-8">
          {/* Consultants */}
          <div className="flex gap-4 overflow-x-auto">
            {[
              { name: "License Consultant", src:  consultant1 },
              { name: "Pro Consultant", src: consultant1},
              { name: "License Consultant", src: consultant1 },
            ].map((consultant, idx) => (
              <div key={idx} className="bg-zinc-800 rounded-xl p-4 min-w-[150px] text-center">
                <Image
                  src={consultant.src}
                  alt={consultant.name}
                  width={100}
                  height={100}
                  className="mx-auto rounded-full"
                />
                <p className="mt-2 text-sm">{consultant.name}</p>
              </div>
            ))}
          </div>

          {/* Chat Box */}
        <ScheduleChat />



        </div>
      </div>
    </section>
    </div>
  )
}

export default SceduleSection