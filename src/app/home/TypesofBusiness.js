"use client"
import Image from 'next/image';
import React from 'react'
import Logo1 from "../../../public/assets/images/home/l-1.svg";
import Card from "../../../public/assets/images/home/license-card.png";
import ResCard from "../../../public/assets/images/home/card-res.png";

import Asset1 from "../../../public/assets/images/home/card-asset.svg";
import Asset2 from "../../../public/assets/images/home/card-asset2.svg";
import consultantFav from '../../../public/assets/images/home/fav-i.png';



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
function TypesofBusiness() {
    // src/app/components/licensesData.js

    return (
        <div className='md:px-8 lg:px-[90px] px-4  md:py-20 py-10'>
            <div className='relative pt-8 pb-8'>
                <h3 className='md:text-[50px] text-[30px] font-[4000] text-white ps-5'>Types of Business Activities</h3>
                <p className='md:w-[70%] md:text-[18px] text-[16px] font-[300] pt-5 ps-5 text-white'>Considering your business segment is crucial during the license registration process in Dubai. With Startex expert team boasting years of experience, we ensure precise selection from the comprehensive category list.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6  pb-5 relative z-10">
                    {licenses.map((license, idx) => (
                        <div
                            key={idx}
                            className="flex items-center gap-5  rounded-xl px-4 py-3 l-box hover:shadow-lg transition"
                        >
                            <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center">
                                <Image
                                    src={license.icon}
                                    alt={license.name}
                                    width={40}
                                    height={40}
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-white text-base font-medium">{license.name}</span>
                        </div>
                    ))}

                </div>
                <div className='absolute top-0 left-0 w-full h-full !hidden md:!block '>
                    <Image
                        src={Card}
                        alt="License Card"
                        width={500}
                        height={500}
                        className=" w-full h-full md:rounded-[0px] rounded-[40px] "
                    />
                </div>


                <div className='absolute top-0 left-0 w-full h-full md:hidden block'>
                    <Image
                        src={ResCard}
                        alt="License Card"
                        width={500}
                        height={500}
                        className=" w-full h-full  "
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


                <div className='absolute top-0 right-[80px] w-[220px] z-[-5] h-[170px] opacity-45'>
                    <Image
                        src={consultantFav}
                        alt="Consultantfav"
                        width={500}
                        height={500}
                        className=" w-full h-full "
                    />
                </div>

            </div>
        </div>
    )
}

export default TypesofBusiness