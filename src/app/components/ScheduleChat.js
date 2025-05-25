import React from 'react'
import { Call, WhatsApp } from './Icons'
import ScAasset from "../../../public/assets/images/home/asset-1.svg"
import Image from 'next/image'

function ScheduleChat() {
  return (
    <div>
      <div className="bg-white text-black py-6 px-10 rounded-xl relative z-50">
        <div>
          <h4 className="md:text-[27px] text-[20px] font-[500]">Hurry? Get Support Right Away!</h4>
          <p className="md:text-[14px] text-[12px] pt-3 ">Short on time? Call us or chat with us on WhatsApp instantly.</p>
        </div>
        <div className="flex items-center gap-3 pt-5">
          <button>
            <WhatsApp />
          </button>
          <button>
            <Call />
          </button>
          <div className='ms-auto'>
            <button className="bg-[#221D23] text-white md:px-9 px-3 py-3 rounded-[6px] md:text-[17px] text-[14px]  font-[300]">
              Chat Now
            </button>
          </div>
        </div>
        <div>
          <Image
            src={ScAasset}
            alt="asset"
            width={1000}
            height={1000}
            className="absolute top-0 left-[-10px] w-[25px] h-full"
          />
        </div>

      </div>
    </div>
  )
}

export default ScheduleChat