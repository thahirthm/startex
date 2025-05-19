"use client";

import { useState } from "react";
import Image from "next/image";
import banner1 from "../../../public/assets/images/home/banner-1.png";
import banner2 from "../../../public/assets/images/home/banner-2.png";
import banner3 from "../../../public/assets/images/home/banner-3.png";
import banner4 from "../../../public/assets/images/home/banner-4.png";

import { motion } from "framer-motion";

const tabs = [
  {
    name: "Restaurant",
    image: banner1,
    title: "Want to Setup",
    highlight: "Resturant in Dubai?",
    cta: "Schedule Meet",
    bgColor: "bg-first",
  },
  {
    name: "Industrial",
    image: banner2,
    title: "Looking for an",
    highlight: "Industrial License in Dubai?",
    cta: "Schedule Meet",
    bgColor: "bg-second",
  },
  {
    name: "Ecommerce",
    image: banner3,
    title: "Register an",
    highlight: "E-commerce License in Dubai",
    cta: "Schedule Meet",
    bgColor: "bg-third",
  },
  {
    name: "Fruits Trading",
    image: banner4,
    title: "Want to Export",
    highlight: "Fruits from Dubai?",
    cta: "Schedule Meet",
    bgColor: "bg-fourth",
  },
];

export default function BusinessTabs() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="  pt-0 md:p-10 pe-0 rounded-2xl text-white w-full mx-auto">
           <motion.div
                      initial={{ opacity: 0, y: 30 }} // starts slightly below with 0 opacity
                      animate={{ opacity: 1, y: 0 }} // animates to full opacity & original position
                      transition={{ duration: 1, ease: "easeOut" }} // smooth timing
                    >
      <div className="relative flex items-center justify-between p-6 pb-0 pt-0 pe-0">
        <div className="w-full ">
          <motion.div
            animate={{ y: [0, -10] }} // only two points for natural easing
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse", // enables smooth "up-down" oscillation
              ease: "easeInOut", // smooth curve
            }}
            className="md:w-[90%] h-full">
            <Image
              src={activeTab.image}
              alt={activeTab.name}
              width={1000}
              height={1000}
              className="rounded-lg w-full h-full object-contain"
            />
          </motion.div>
          <div className={`absolute md:top-10 card-b right-4 text-white p-4 rounded-xl shadow-lg md:w-56 transition-all duration-500 ${activeTab.bgColor}`}
          >
            <p className="md:text-[15px] text-[12px] font-[300]">{activeTab.title}</p>
            <h4 className="md:font-bold text-[14px]">{activeTab.highlight}</h4>
            <button className="mt-3 banner-sc px-4 py-1 rounded-full md:text-[14px] text-[12px] font-[300]">
              {activeTab.cta}
            </button>
          </div>
        </div>
      </div>
      <div className="md:flex gap-4 justify-center banner-tab mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full text-sm transition ${
              activeTab.name === tab.name
                ? "bg-[#2b2b2b] text-white font-semibold "
                : "bg-transparent text-[14px]"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      </motion.div>
    </div>
  );
}
