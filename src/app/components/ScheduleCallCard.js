'use client';
import { useRef, useState } from 'react';
import { motion, useInView } from "framer-motion";

const days = [
  { date: '18', day: 'Fr' },
  { date: '19', day: 'Sa' },
  { date: '20', day: 'Su' },
  { date: '21', day: 'Mo' },
  { date: '22', day: 'Tu' },
  { date: '23', day: 'We' },
  { date: '24', day: 'Th' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function ScheduleCallCard() {
  const [selectedDate, setSelectedDate] = useState('18');
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { amount: 0.3, once: false });

  return (
    <motion.div
      ref={cardRef}
      variants={fadeUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="relative z-10 w-full md:w-[33%] mb-10 md:mb-0"
    >
      {/* Background skew box */}
      <div className="absolute top-0 left-0 w-full h-full skew-box custom-gradient-bg -z-10 rounded-2xl"></div>

      <div className="custom-gradient-bg border border-[#6E6E6E] rounded-2xl px-6 py-8 shadow-lg relative z-20">
        <h2 className="text-[25px] md:text-[35px] font-medium mb-3">Schedule a Call</h2>
        <p className="text-sm text-gray-300 mb-6">
          Set up a convenient time to speak with our expert consultant and get the personalized assistance you need.
        </p>

        {/* Date Selector */}
        <div className="flex flex-wrap gap-3 mb-6">
          {days.map((d) => (
            <div
              key={d.date}
              onClick={() => setSelectedDate(d.date)}
              className={`cursor-pointer w-12 h-14 flex flex-col items-center justify-center rounded-xl text-sm font-semibold
                ${selectedDate === d.date ? 'bg-white text-[#FC5A5A] border-2 border-[#FC5A5A]' : 'text-gray-400'}`}
            >
              <span>{d.date}</span>
              <span>{d.day}</span>
            </div>
          ))}
        </div>

        {/* Schedule Button */}
        <button className="w-full bg-[#564A5A] hover:bg-[#6d5d95] text-white py-3 rounded-xl text-sm font-semibold flex items-center justify-between px-4">
          Schedule meeting
          <span className="ml-2 text-lg">›</span>
        </button>
      </div>
    </motion.div>
  );
}
