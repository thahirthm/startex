import Image from 'next/image'
import React from 'react'
import CraftBg from "../../../public/assets/images/home/craft.png"
import StatsCounter from '../components/StatsCounter'
import InfiniteImageSlider from '../components/InfiniteImageSlider'

function Craft() {
    return (
        <div className=''>
            <div className='carft-bg px-4 md:px-8 lg:px-[90px] py-10'>
                <div className='md:flex md:gap-10 gap-5'>
                    <div className='md:w-[35%] w-full'>
                        <h3 className='text-gradient text-[50px] font-[500]'>Crafting Entrepreneurs Since 1999</h3>
                    </div>
                    <div className='md:w-[65%] w-full'>
                        <InfiniteImageSlider />
                    </div>
                </div>
            </div>
            <div className='relative w-full '>
                <Image
                    src={CraftBg}
                    alt="Crafting Entrepreneurs"
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover"
                />
                <div className='absolute top-0 left-0 w-full h-full z-1'>
                    <StatsCounter />
                </div>
            </div>
        </div>
    )
}

export default Craft