import Image from 'next/image'
import React from 'react'
import SetubVideoBg from "../../../public/assets/images/guide/videobg.png"
import YtpIcon from "../../../public/assets/images/guide/ytp.png"



function HowToSetup() {
    return (
        <div className='px-4 md:px-8 lg:px-[90px] pt-10 pb-10' >
            <h3 className='text-gradient md:text-[50px] text-[27px] text-center'>How to Setup Business in Dubai?</h3>
            <p className='md:text-[16px] text-[15px] font-[300] pt-5 md:w-[70%] m-auto text-secondary text-center pb-10 md:pb-0'>At Startex Hub, we help entrepreneurs and businesses launch or expand in Dubai and the UAE with expert support in company setup, legal services, visas, and market entry—everything you need to grow with confidence.</p>



            <div className='pt-10 relative'>
                <Image
                    src={SetubVideoBg}
                    alt='SetubVideoBg'
                    width={1000}
                    height={1000}
                    className='w-full h-full'
                />


                <div className='absolute md:top-0 top-3  left-0 w-full h-full flex  flex-col justify-center items-center'>
                    <Image
                        src={YtpIcon}
                        alt='YtpIcon'
                        width={200}
                        height={200}
                        className='md:w-[70px] w-[40px] h-[40px] md:h-[70px]'
                    />
                    <h6 className='md:text-[25px] text-[14px]  text-white font-[400] md:pt-5'>Get Expert Help from </h6>
                    <h3 className='md:text-[50px] text-[18px] text-white font-[600]'>Business Guide Consultancy</h3>

                </div>
            </div>

        </div>
    )
}

export default HowToSetup