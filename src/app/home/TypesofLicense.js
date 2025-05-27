'use client';
import Image from 'next/image';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaIdBadge } from 'react-icons/fa';
import cardL from "../../../public/assets/images/home/l-card.png";
import assetSvg from "../../../public/assets/images/home/asset-2.png";

const licenses = [
  { number: '01', title: 'Professional License', desc: 'Owning a professional license...' },
  { number: '02', title: 'Professional License', desc: 'Owning a professional license...' },
  { number: '03', title: 'Professional License', desc: 'Owning a professional license...' },
  { number: '04', title: 'Professional License', desc: 'Owning a professional license...' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      delay: custom * 0.2,
    },
  }),
};

function TypesofLicense() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.2, once: false });

  return (
    <div className='px-4 md:px-8 lg:px-[90px] pt-10 pb-10' ref={sectionRef}>
      <h3 className='text-gradient md:text-[50px] text-[30px] mb-10'>Types of License</h3>
      <div className="md:flex gap-8 relative">
        {licenses.map((lic, index) => (
          <motion.div
            key={lic.number}
            className={`relative  rounded-xl p-6  h-64 flex flex-col justify-between shadow-lg transition-all md:w-[33%] mb-5 md:mb-0 z-40`}
            style={{ boxShadow: '0 0 30px 0 #000' }}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={index}
          >
            <div className="flex justify-between items-center relative z-50">
              <span className="text-gradient text-[35px] font-[400]">{lic.number}</span>
              <FaIdBadge className="text-white text-2xl" />
            </div>
            <div>
              <div className="text-white font-[400] text-lg mt-8">{lic.title}</div>
              <div className="text-gray-400 text-sm mt-2">{lic.desc}</div>
            </div>
            <div className=''>
              <Image
                src={cardL}
                width={500}
                height={500}
                alt='cardL'
                className='absolute w-full h-full top-0 left-0'
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default TypesofLicense;
