'use client';
import { useState } from 'react';

const days = [
  { date: '18', day: 'Fr' },
  { date: '19', day: 'Sa' },
  { date: '20', day: 'Su' },
  { date: '21', day: 'Mo' },
  { date: '22', day: 'Tu' },
  { date: '23', day: 'We' },
  { date: '24', day: 'Th' },
];

export default function ScheduleCallCard() {
  const [selectedDate, setSelectedDate] = useState('18');

  return (
    <div className=" text-white  flex flex-col w-[33%]  relative z-30">
      <div className='custom-gradient-bg rounded-2xl border border-[#6E6E6E] px-6 py-8 shadow-lg relative z-30'>
      <h2 className="text-[35px] font-[400] mb-3">Schedule a Call</h2>
      <p className="text-sm text-gray-300 mb-6 pt-3">
        Set up a convenient time to speak with our expert consultant and get the personalized assistance you need.
      </p>

      {/* Date Selector */}
      <div className="flex items-center gap-3 mb-6">
        {days.map((d) => (
          <div
            key={d.date}
            onClick={() => setSelectedDate(d.date)}
            className={`cursor-pointer w-10 h-15 flex flex-col items-center justify-center rounded-xl text-sm font-semibold
              ${selectedDate === d.date ? 'bg-white text-[#FC5A5A]' : 'text-gray-400'}`}
            style={selectedDate === d.date ? { border: '2px solid #FC5A5A' } : {}}
          >
            <span>{d.date}</span>
            <span>{d.day}</span>
          </div>
        ))}
      </div>

      {/* Button */}
      <button className="w-full bg-[#564A5A] mt-5 mb-5 hover:bg-[#6d5d95] text-white py-3 rounded-xl text-sm font-semibold flex items-center justify-between px-4">
        Schedule meeting
        <span className="ml-2 text-lg">›</span>
      </button>
      </div>

<div className='absolute  custom-gradient-bg z-0 top-0 left-0 w-full h-full skew-box'>

</div>

    </div>
  );
}
