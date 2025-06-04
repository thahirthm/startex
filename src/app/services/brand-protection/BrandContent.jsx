import Image from 'next/image'
import React from 'react'
import S1 from "../../../../public/assets/images/services/s1.png"
import S2 from "../../../../public/assets/images/services/s2.png"
import S3 from "../../../../public/assets/images/services/s3.png"
import S4 from "../../../../public/assets/images/services/s4.png"
import S5 from "../../../../public/assets/images/services/s5.png"
import S6 from "../../../../public/assets/images/services/s6.png"


import Link from 'next/link'
import { ReDirect } from '@/app/components/Icons'


const services = [
    {
        id: 1,
        image: S1,
        title: 'Copyright Registration',
        description: 'Copyright registration in the UAE protects artistic, literary, and intellectual works from unauthorized use.',
        link: ''
    },
    {
        id: 2,
        image: S2,
        title: 'Trademark Registration',
        description: 'A trademark protects brand names, products, or services from unauthorized use and counterfeiting.',
        link: ''
    },
    {
        id: 3,
        image: S3,
        title: 'Intellectual Property  ',
        description: 'Intellectual Property Registration in the UAE protects creations of the mind with commercial value, such as inventions, designs, music, and software.',
        link: ''
    },
    {
        id: 4,
        image: S4,
        title: 'Patent Registration',
        description: 'Patent registration in the UAE protects inventions with scientific or technical relevance, whether entirely new or innovative upgrades of existing ideas.',
        link: ''
    },
     {
        id: 4,
        image: S5,
        title: 'Trade Secret Registration',
        description: 'Trade secrets are a form of intellectual property used by businesses to protect confidential assets like formulas, processes, or designs.',
        link: ''
    },

]

function BrandContent() {
    return (
        <div className='px-4 md:px-8 lg:px-[90px] pt-10 pb-10'>
          
            <h3 className='text-gradient md:text-[50px] text-[27px] font-[500] text-center'>Brand Protection.</h3>
          

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

export default BrandContent