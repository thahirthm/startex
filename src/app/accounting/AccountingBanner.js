"use client";

import React from "react";

import { motion } from "framer-motion";
import BusinessTabs from "../components/BusinessTabs";
import grad from "../../../public/assets/images/home/gr.png"
import accountingBannerimg from "../../../public/assets/images/accounting/ac-banner.png";

import Image from "next/image";

function AccountingBanner() {
    return (
        <div className="bg-primary h-auto relative pb-10">
            <div className="md:flex pt-10 items-center main-pt px-4 md:px-8 lg:px-[90px] relative z-40 gap-20">
                <div className="md:w-1/2">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }} // starts slightly below with 0 opacity
                        animate={{ opacity: 1, y: 0 }} // animates to full opacity & original position
                        transition={{ duration: 1, ease: "easeOut" }} // smooth timing
                    >
                        <h6 className="md:text-[18px] text-[16px] font-[300] text-gradient">
                            Every great business starts with the right license
                        </h6>
                        <h1 className="md:text-[50px] text-[27px] font-[500] pt-3 text-gradient">
                            Business License  <br />
                            Services
                        </h1>
                        <p className="font-[300] md:text-[17px] text-[14px] text-secondary pt-3">
                            Unlock your entrepreneurial journey with a business license in Dubai! Choose from options like commercial, industrial, or professional licenses, and launch your venture in Dubai’s thriving economy.
                        </p>
                        <div className="pt-10 flex gap-8">
                            <button className="gr-btn">Business Licenses</button>
                            <button className="br-gr-btn">Schedule meetup</button>
                        </div>
                    </motion.div>
                </div>
                <div className="md:w-1/2 ms-auto pt-10 md:pt-0">
                    <Image
                        src={accountingBannerimg}
                        alt="accountingBannerimg"
                        width={1000}
                        height={1000}
                        className="object-contain"
                    />
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

export default AccountingBanner;
