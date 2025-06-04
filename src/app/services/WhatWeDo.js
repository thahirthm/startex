import Image from 'next/image'
import React from 'react'
import S1 from "../../../public/assets/images/services/s1.png"
import S2 from "../../../public/assets/images/services/s2.png"
import S3 from "../../../public/assets/images/services/s3.png"
import S4 from "../../../public/assets/images/services/s4.png"
import S5 from "../../../public/assets/images/services/s5.png"
import S6 from "../../../public/assets/images/services/s6.png"


import Link from 'next/link'
import { ReDirect } from '../components/Icons'


const services = [
    {
        id: 1,
        image: S1,
        title: 'Trademark Registration',
        description: 'A trademark protects a brand’s name, product, or service from unauthorized use, helping consumers identify authentic goods and their source.',
        link: '/services/trademark-registration'
    },
    {
        id: 2,
        image: S2,
        title: 'Find Local Sponser',
        description: 'In UAE Mainland LLC formation, a local sponsor holds 51% ownership, while professional companies and representative offices allow 100% foreign ownership',
        link: '/services/sponsorship-services'
    },
    {
        id: 3,
        image: S3,
        title: 'Bank Account Opening',
        description: 'Startex financial consultants assist you in opening personal and business bank accounts in Dubai, home to the Middle Easts largest banking sector.',
        link: '/services/open-bank-account'
    },
    {
        id: 4,
        image: S4,
        title: 'Company Liquidation',
        description: 'Startex Hub offers company liquidation services for LLCs, offshore, and Free Zone companies in Dubai, helping businesses close operations during financial crises and debt challenges.',
        link: '/services/company-liquidation'
    },
    {
        id: 5,
        image: S5,
        title: 'PRO Services',
        description: 'Startex Hub offers expert PRO services, assisting startups and established businesses in the UAE with government document processing and company formation across various zones',
        link: '/services/pro-services'
    },
    {
        id: 6,
        image: S6,
        title: 'Brand protection',
        description: 'Startex Hub provides comprehensive brand protection services in Dubai and the UAE, helping clients register intellectual property, monitor brands, and prevent infringement and brand abuse.',
        link: '/services/brand-protection'
    },
]

function WhatWeDo() {
    return (
        <div className='px-4 md:px-8 lg:px-[90px] pt-10 pb-10'>
          
            <h3 className='text-gradient md:text-[50px] text-[27px] font-[500] text-center'>What We Do.</h3>
            <p className='md:text-[16px] text-[15px] font-[300] pt-5 md:w-[70%] m-auto text-secondary text-center pb-10 md:pb-0'>
                At Kiltons Business Setup Services, we help businesses succeed in the UAE by providing company formation, liquidation, PRO services, bank account assistance, trademark registration, brand protection, and expert consulting — delivering end-to-end support for every stage of your business journey.
            </p>

            <div className='pt-10 pb-10 flex flex-wrap gap-6'>
                {services.map((service) => (
                    <div className='w-full md:w-[32%]' key={service.id}>
                        <div className='relative'>
                            <Image
                                src={service.image}
                                width={500}
                                height={500}
                                className="w-full h-full rounded-2xl"
                                alt={service.title}
                            />

                            <div className='absolute top-0 left-0 p-3 w-full h-full flex flex-col justify-between'>
                                <div className='service-box'>
                                    <h3 className='text-[22px] font-[400] text-white'>{service.title}</h3>
                                    <p className='text-[14px] font-[200] pt-3 text-white'>{service.description}</p>
                                </div>
                                <div className='pt-5 flex justify-end'>
                                    <Link
                                        href={service.link}
                                        className="bg-gradient w-[50px] h-[50px] flex justify-center items-center !rounded-[90px]"
                                    >
                                        <ReDirect />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WhatWeDo