import Link from 'next/link'
import React from 'react'
import { ReDirect } from '../components/Icons'

function BusinessLicenses() {
    return (
        <div className='px-4 md:px-8 lg:px-[90px] pt-10 pb-10'>
            <h3 className='text-gradient md:text-[50px] text-[30px] text-center'>Our Business Licenses</h3>
            <p className='md:text-[16px] text-[15px] font-[300] pt-5 md:w-[70%] m-auto text-secondary text-center'>Discover the range of business licenses we offer, designed to support your venture's unique needs and help you succeed in Dubai’s dynamic market.</p>


            <div className='pt-20 flex items-end flex-wrap'>
                <div className='md:w-1/2'>
                    <h4 className='text-gradient md:text-[30px] text-[20px] text-end font-[500]'>Dubai Mainland License, UAE</h4>
                    <div className='md:w-[70%] ms-auto'>
                        <p className='md:text-[16px] text-[15px] font-[300] pt-5  m-auto text-secondary text-end'>Setting up a mainland company in Dubai offers lucrative investment opportunities. These businesses operate within Emirati jurisdiction in designated commercial areas.</p>
                        <div className='text-end ms-auto flex justify-end pt-5'>
                            <Link
                                href={""}
                                className='bg-gradient w-[50px] h-[50px] flex justify-center items-center !rounded-[90px]'
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

export default BusinessLicenses