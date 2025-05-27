"use client"
import Image from 'next/image';
import React from 'react'
import Logo1 from "../../../public/assets/images/home/l-1.svg";
import Card from "../../../public/assets/images/home/license-card.png";
import Asset1 from "../../../public/assets/images/home/card-asset.svg";
import Asset2 from "../../../public/assets/images/home/card-asset2.svg";
import FaqAccordion from '../components/FaqAccordion';



export const licenses = [
    { name: "Logistics License", icon: Logo1 },
    { name: "Logistics License", icon: Logo1 },
    { name: "Logistics License", icon: Logo1 },
    { name: "Logistics License", icon: Logo1 },
    { name: "Logistics License", icon: Logo1 },
    { name: "Logistics License", icon: Logo1 },
    { name: "Logistics License", icon: Logo1 },
    { name: "Logistics License", icon: Logo1 },
    { name: "Logistics License", icon: Logo1 },
    { name: "Logistics License", icon: Logo1 },
    { name: "Logistics License", icon: Logo1 },
    { name: "Logistics License", icon: Logo1 },
    { name: "Logistics License", icon: Logo1 },
    { name: "Logistics License", icon: Logo1 },
    { name: "Logistics License", icon: Logo1 },
    { name: "Logistics License", icon: Logo1 },
    { name: "Logistics License", icon: Logo1 },
    { name: "Logistics License", icon: Logo1 },
    { name: "Logistics License", icon: Logo1 },
    { name: "Logistics License", icon: Logo1 },
    { name: "Logistics License", icon: Logo1 },
    { name: "Logistics License", icon: Logo1 },
    { name: "Logistics License", icon: Logo1 },
    { name: "Logistics License", icon: Logo1 },
    { name: "Logistics License", icon: Logo1 },
    { name: "Logistics License", icon: Logo1 },
    // { name: "Restaurant License", icon: "/assets/icons/restaurant.svg" },
    // { name: "Medical Clinic License", icon: "/assets/icons/medical.svg" },
    // { name: "Gold Trading License", icon: "/assets/icons/gold.svg" },
    // { name: "Delivery Services License", icon: "/assets/icons/delivery.svg" },
    // { name: "Consultancy License", icon: "/assets/icons/consultancy.svg" },
    // { name: "Education License", icon: "/assets/icons/education.svg" },
    // { name: "Industrial Trade License", icon: "/assets/icons/industrial.svg" },
    // { name: "E-commerce License", icon: "/assets/icons/ecommerce.svg" },
    // { name: "Trade License", icon: "/assets/icons/trade.svg" },
    // { name: "Advertising License", icon: "/assets/icons/advertising.svg" },
    // { name: "Tourism License", icon: "/assets/icons/tourism.svg" },
    // { name: "Regulatory License", icon: "/assets/icons/regulatory.svg" },
    // { name: "Construction Business License", icon: "/assets/icons/construction.svg" },
    // { name: "IT Business License", icon: "/assets/icons/it.svg" },
    // { name: "Transportation License", icon: "/assets/icons/transportation.svg" },
    // { name: "Crypto Trading License", icon: "/assets/icons/crypto.svg" },
    // { name: "Holding License", icon: "/assets/icons/holding.svg" },
    // { name: "Real Estate License", icon: "/assets/icons/realestate.svg" },
    // { name: "Accounting License", icon: "/assets/icons/accounting.svg" },
    // { name: "Brokerage License", icon: "/assets/icons/brokerage.svg" },
    // { name: "Used Car Trading License", icon: "/assets/icons/car.svg" },
];
function Faq() {
    // src/app/components/licensesData.js

    return (
        <div className='md:px-8 lg:px-[90px] px-4  md:py-20 py-10'>
            <div className='relative pt-10 pb-10'>
                <p className='md:text-[18px] text-center text-[16px] font-[300] pt-5  text-white'>FAQ&#39;S.</p>
                <h3 className='md:text-[50px] text-[30px] text-center font-[4000] text-white ps-5'>Have questions ?</h3>

               <div className='md:p-10 relative z-50'>
                <FaqAccordion />
               </div>
                <div className='absolute top-0 left-0 w-full h-full '>
                    <Image
                        src={Card}
                        alt="License Card"
                        width={500}
                        height={500}
                        className=" w-full h-full md:rounded-[0px] rounded-[40px] "
                    />
                </div>
                <div className='absolute bottom-0 md:right-[-80px] w-[170px] z-[-5] h-full'>
                    <Image
                        src={Asset1}
                        alt="License Card"
                        width={500}
                        height={500}
                        className=" w-full h-full asset1"
                    />
                </div>

                <div className='absolute bottom-0 left-[-80px] w-[170px] z-[-5] h-[170px]'>
                    <Image
                        src={Asset2}
                        alt="License Card"
                        width={500}
                        height={500}
                        className=" w-full h-full asset1"
                    />
                </div>

            </div>
        </div>
    )
}

export default Faq