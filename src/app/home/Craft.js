"use client"
import Image from 'next/image'
import React from 'react'
import CraftBg from "../../../public/assets/images/home/craft.png"
import StatsCounter from '../components/StatsCounter'
import InfiniteImageSlider from '../components/InfiniteImageSlider'
import { motion } from "framer-motion";

function Craft() {
    return (
        <div className=''>
            <div className='carft-bg px-4 md:px-8 lg:px-[90px] py-10 pb-0 md:pb-10'>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }} // controls when it triggers
                >
                    <div className='md:flex md:gap-10 gap-5'>
                        <div className='md:w-[35%] w-full'>
                            <h3 className='text-gradient md:text-[50px] text-[30px] font-[500]'>Crafting Entrepreneurs Since 1999</h3>
                        </div>
                        <div className='md:w-[65%] w-full'>
                            <InfiniteImageSlider />
                        </div>
                    </div>
                </motion.div>
            </div>
            <div className='relative w-full '>
                <Image
                    src={CraftBg}
                    alt="Crafting Entrepreneurs"
                    width={1000}
                    height={1000}
                    className="w-full md:h-full h-[250px] object-cover"
                />
                <div className='absolute top-0 left-0 w-full h-full z-1'>
                    <StatsCounter />
                </div>
            </div>
        </div>
    )
}

export default Craft