import React from 'react'
import { Call, WhatsApp } from './Icons'

function ScheduleChat() {
  return (
    <div>
          <div className="bg-white text-black p-6 rounded-xl ">
            <div>
              <h4 className="text-[27px] font-[500]">Hurry? Get Support Right Away!</h4>
              <p className="text-[14px] pt-3 ">Short on time? Call us or chat with us on WhatsApp instantly.</p>
            </div>
            <div className="flex gap-3">
                <button>
              <WhatsApp />
              </button>
              <button>
              <Call />
              </button>
              <button className="bg-zinc-900 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Chat Now
              </button>
            </div>
          </div>
    </div>
  )
}

export default ScheduleChat