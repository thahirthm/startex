"use client";

import React from "react";

import { motion } from "framer-motion";
import BusinessTabs from "../components/BusinessTabs";
import grad from "../../../public/assets/images/home/gr.png"
import aboutbanner from "../../../public/assets/images/about/abt-banner.png";
// import aboutbanner2 from "../../../public/assets/images/about/abt-banner2.png";


import Image from "next/image";

function AboutBanner() {
    return (
        <div className="bg-primary h-auto relative pb-10">
            <div className=" pt-10 items-center main-pt px-4 md:px-8 lg:px-[90px] relative z-40 gap-20">
                <div className="">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }} // starts slightly below with 0 opacity
                        animate={{ opacity: 1, y: 0 }} // animates to full opacity & original position
                        transition={{ duration: 1, ease: "easeOut" }} // smooth timing
                    >
                        <h6 className="md:text-[18px] text-[16px] text-center font-[300] text-gradient">
                           About Us
                        </h6>
                        <h1 className="md:text-[50px] text-[27px] font-[500] pt-3 text-center text-gradient">
                        Business Setup in Dubai- Empowering Your Business Dreams in Dubai

                        </h1>
                    
                    </motion.div>
                </div>
                <div className=" ms-auto w-full pt-10 md:pt-10">
                    <Image
                        src={aboutbanner}
                        alt="accountingBannerimg"
                        width={1000}
                        height={1000}
                        className="object-cover w-full"
                    />
                      {/* <Image
                        src={aboutbanner2}
                        alt="accountingBannerimg"
                        width={1000}
                        height={1000}
                        className="object-contain"
                    /> */}
                </div>
            </div>

            <div className="absolute top-0 left-0 w-full h-full ">
                <Image
                    src={grad}
                    alt="HomeLogo"
                    width={1000}
                    height={1000}
                    className=" w-full h-full "
                />
            </div>
        </div>
    );
}

export default AboutBanner;
