"use client"
import Image from 'next/image'
import React from 'react'
import Fav from "../../../public/assets/images/home/fav.svg"
import PackageSlider from '../components/PackageSlider'
import grad from "../../../public/assets/images/home/gr.png"
import { motion } from "framer-motion";
function HomePackages() {
    return (
        <div className='bg-primary h-auto relative '>
           <motion.div
                initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
           >
            <div className=' px-4 md:px-8 lg:px-[90px] pt-10 pb-10'>
                <div className='flex gap-2 items-center justify-center'>
                    <Image
                        src={Fav}
                        alt="HomeLogo"
                        width={300}
                        height={300}
                        className=" md:w-[30px] w-[15px] h-[15px] md:h-[30px]" />
                    <h6 className='md:text-[22px] text=[16px] font-[400] text-secondary'>Packages</h6>
                </div>
                <h3 className='text-gradient md:text-[50px] text-[30px] text-center'>All-inclusive Business Packages</h3>
                <p className='md:text-[16px] text-[15px] font-[300] pt-5 md:w-[70%] m-auto text-secondary text-center'>Startex Hub can help you navigate the process, ensuring that your business setup is smooth and efficient. Whether you're looking to establish a mainland company, free zone entity, or offshore business, our expert team can provide the guidance and support you need. With our knowledge of local regulations and business practices.</p>
              
              <div className='pt-7 flex justify-center'>
              <button className="br-gr-btn">Explore all Packages</button>
                </div>  

                <div>
                    <PackageSlider />
                </div>
            </div>

 <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src={grad}
          alt="HomeLogo"
          width={1000}
          height={1000}
          className=" w-full h-full"
        />
      </div> 
      </motion.div> 
        </div>
       
    )
}

export default HomePackages

