import Image from 'next/image'
import React from 'react'
import officeSpace1 from '../../../public/assets/images/workspace/office-space-1.png'
import officeSpace2 from '../../../public/assets/images/workspace/office-space-2.png'
import officeSpace3 from '../../../public/assets/images/workspace/office-space-3.png'
import officeSpace4 from '../../../public/assets/images/workspace/office-space-4.png'



import Link from 'next/link'
import { ReDirect } from '../components/Icons'

function OfficeSpaces() {
    return (
        <div className='px-4 md:px-8 lg:px-[90px] pt-10 pb-10' >
            <h3 className='text-gradient md:text-[50px] text-[27px] text-center'>Office Space Solutions</h3>
            <p className='md:text-[16px] text-[15px] font-[300] pt-5 md:w-[70%] m-auto text-secondary text-center pb-10 md:pb-0'>Explore a diverse range of office solutions tailored to your business needs, including virtual offices, co-working spaces, executive suites, and more, all designed to support your growth in the UAE's dynamic market.</p>



            <div className='relative pt-10'>
                <Image
                    src={officeSpace1}
                    width={600}
                    height={600}
                    className="w-full h-full rounded-2xl"
                    alt="Office Space 1"
                />

                <div className='md:absolute top-0 left-0 w-[100%] h-full flex items-center justify-center '>
                    <div className='bg-office w-full md:w-[50%]'>
                        <h3 className='md:text-[32px] text-[24px] font-[400] text-center text-white'>Business Center Rental</h3>
                        <p className='md:text-[16px] text-[14px] font-[300] text-center text-white pt-5'>Begin your business ventures to establish yourself in Dubai’s economic landscape by renting a business center.</p>

                        <div className='pt-5 flex justify-center'>
                            <Link
                                href={""}
                                className="bg-gradient w-[50px] h-[50px] flex justify-center items-center !rounded-[90px]"
                            >
                                <ReDirect />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>


            <div className='relative pt-10'>
                <Image
                    src={officeSpace2}
                    width={600}
                    height={600}
                    className="w-full h-full rounded-2xl"
                    alt="Office Space 1"
                />

                <div className='md:absolute top-0 bottom-0 items-center left-0 w-[100%] h-full flex  justify-center '>
                    <div className='bg-office w-full md:w-[50%]'>
                        <h3 className='md:text-[32px] text-[24px] font-[400] text-center text-white'>Virtual Office</h3>
                        <p className='md:text-[16px] text-[14px] font-[300] text-center text-white pt-5'>Establish your business with a virtual office in the innovation hub of the Middle East, Dubai.</p>

                        <div className='pt-5 flex justify-center'>
                            <Link
                                href={""}
                                className="bg-gradient w-[50px] h-[50px] flex justify-center items-center !rounded-[90px]"
                            >
                                <ReDirect />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>




            <div className='relative pt-10'>
                <Image
                    src={officeSpace3}
                    width={600}
                    height={600}
                    className="w-full h-full rounded-2xl"
                    alt="Office Space 1"
                />

                <div className='md:absolute top-0 bottom-0 items-center left-0 w-[100%] h-full flex  justify-center '>
                    <div className='bg-office w-full md:w-[50%]'>
                        <h3 className='md:text-[32px] text-[24px] font-[400] text-center text-white'>Flexi Desk Office</h3>
                        <p className='md:text-[16px] text-[14px] font-[300] text-center text-white pt-5'>Join the business community in Dubai’s flourishing landscape with a Flexi desk office.</p>

                        <div className='pt-5 flex justify-center'>
                            <Link
                                href={""}
                                className="bg-gradient w-[50px] h-[50px] flex justify-center items-center !rounded-[90px]"
                            >
                                <ReDirect />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>


    <div className='relative pt-10'>
                <Image
                    src={officeSpace4}
                    width={600}
                    height={600}
                    className="w-full h-full rounded-2xl"
                    alt="Office Space 1"
                />

                <div className='md:absolute top-0 bottom-0 items-center left-0 w-[100%] h-full flex  justify-center '>
                    <div className='bg-office w-full md:w-[50%]'>
                        <h3 className='md:text-[32px] text-[24px] font-[400] text-center text-white'>Rent a Cabin in Dubai</h3>
                        <p className='md:text-[16px] text-[14px] font-[300] text-center text-white pt-5'>Fulfill basic amenities to kick start your business ventures by renting a cabin in Dubai, UAE</p>

                        <div className='pt-5 flex justify-center'>
                            <Link
                                href={""}
                                className="bg-gradient w-[50px] h-[50px] flex justify-center items-center !rounded-[90px]"
                            >
                                <ReDirect />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OfficeSpaces