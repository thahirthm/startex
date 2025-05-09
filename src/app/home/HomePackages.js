import Image from 'next/image'
import React from 'react'
import Fav from "../../../public/assets/images/home/fav.svg"
import PackageSlider from '../components/PackageSlider'
function HomePackages() {
    return (
        <div className='bg-primary h-auto relative '>
            <div className=' px-4 md:px-8 lg:px-[90px] pt-10 pb-10'>
                <div className='flex gap-4 items-center justify-center'>
                    <Image
                        src={Fav}
                        alt="HomeLogo"
                        width={300}
                        height={300}
                        className=" w-[30px] h-[30px]" />
                    <h6 className='text-[22px] font-[400] text-secondary'>Packages</h6>
                </div>
                <h3 className='text-gradient text-[50px] text-center'>All-inclusive Business Packages</h3>
                <p className='text-[16px] font-[300] pt-5 w-[70%] m-auto text-secondary text-center'>Startex Hub can help you navigate the process, ensuring that your business setup is smooth and efficient. Whether you're looking to establish a mainland company, free zone entity, or offshore business, our expert team can provide the guidance and support you need. With our knowledge of local regulations and business practices.</p>
              
              <div className='pt-7 flex justify-center'>
              <button className="br-gr-btn">Explore all Packages</button>
                </div>  

                <div>
                    <PackageSlider />
                </div>
            </div>
        </div>
    )
}

export default HomePackages

