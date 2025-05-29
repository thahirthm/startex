import Link from 'next/link'
import React from 'react'
import { ReDirect } from '../components/Icons'
import Image from 'next/image'
import Bl from "../../../public/assets/images/home/bl.png"
import B2 from "../../../public/assets/images/home/bl2.png"
import B3 from "../../../public/assets/images/home/bl3.png"


function BusinessLicenses() {

    const imageList = [Bl, B2, B3]
    return (
        <div className='px-4 md:px-8 lg:px-[90px] pt-10 pb-10'>
            <h3 className='text-gradient md:text-[50px] text-[27px] text-center'>Our Business Licenses</h3>
            <p className='md:text-[16px] text-[15px] font-[300] pt-5 md:w-[70%] m-auto text-secondary text-center pb-10 md:pb-0'>Discover the range of business licenses we offer, designed to support your venture&#39;s unique needs and help you succeed in Dubai&#39;s dynamic market.</p>


            {imageList.map((img, index) => {
                const isEven = index % 2 === 0;
                const imageFirstDesktop = isEven ? 'md:order-2' : 'md:order-1';
                const contentFirstDesktop = isEven ? 'md:order-1' : 'md:order-2';

                return (
                    <div key={index} className="md:pt-10 flex flex-col md:flex-row flex-wrap items-end">
                        <div className={`md:w-1/2 w-full ${imageFirstDesktop}`}>
                            <Image
                                src={img}
                                width={600}
                                height={600}
                                className="w-full h-full rounded-2xl"
                                alt="Business Setup"
                            />
                        </div>

                        <div className={`md:w-1/2 w-full ${contentFirstDesktop}`}>
                            <h4 className={`text-gradient md:text-[30px] text-[20px] font-[500] pt-5 ${isEven ? 'md:text-end md:pe-10' : 'md:ps-10'}`}>
                                Dubai Mainland License, UAE
                            </h4>
                            <div className={`md:w-[70%] pt-5 text-left ${isEven ? 'md:ms-auto md:pe-10 md:text-end' : 'md:me-auto md:ps-10'}`}>
                                <p className="md:text-[16px] text-[15px] font-[300] text-secondary">
                                    Setting up a mainland company in Dubai offers lucrative investment opportunities. These businesses operate within Emirati jurisdiction in designated commercial areas.
                                </p>
                                <div className={`pt-5 pb-10 flex ${isEven ? 'justify-end' : ''}`}>
                                    <Link
                                        href=""
                                        className="bg-gradient w-[50px] h-[50px] flex justify-center items-center !rounded-[90px]"
                                    >
                                        <ReDirect />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}

export default BusinessLicenses