'use client';
import React from 'react'

const ContactSection = () => {
  return (
    <div className="pt-10 main-pt px-4 md:px-8 lg:px-[150px]  py-10 ">


                        <h1 className="md:text-[50px] text-[27px] font-[500] pt-3 text-center text-gradient">
                        Let’s Get in Touch
                        </h1>

                        <p className="text-[16px] text-center text-white font-[400]">Drop us a line! We're here to help with your business setup inquiries.</p>

      {/* Contact Form */}
      <div className="border bg-[#99999932] border-gray-600 p-5 md:p-8 rounded-xl space-y-5  mt-10 text-white">
        <div className="grid md:grid-cols-2 gap-5">
          <input type="text" placeholder="Your Name" className="bg-transparent border border-gray-600 rounded-xl px-4 py-2 w-full" />
          <input type="text" placeholder="+971" className="bg-transparent border border-gray-600 rounded-xl px-4 py-2 w-full" />
          <input type="email" placeholder="Your Email" className="bg-transparent border border-gray-600 rounded-xl px-4 py-2 w-full" />
          <input type="text" placeholder="Business Requirement" className="bg-transparent border border-gray-600 rounded-xl px-4 py-2 w-full" />
        </div>
        <textarea rows={4} placeholder="Type your query here" className="bg-transparent border border-gray-600 rounded-xl px-4 py-2 w-full resize-none"></textarea>
        <button className="w-full bg-gradient-to-r from-orange-500 to-yellow-400 text-white py-2 rounded-xl font-semibold">Submit Message</button>
      </div>

      {/* Chat / Map Boxes */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        <div className="border bg-[#99999932]  border-gray-700 rounded-xl text-white p-6 flex flex-col justify-between">
          <div>
            <p className="text-sm bg-gray-700 px-3 py-1 inline-block rounded-full mb-3">Contact Us</p>
            <h3 className="text-lg font-medium">Streamline your business setup process</h3>
          </div>
          <button className="mt-6 bg-gradient-to-r from-red-500 to-yellow-400 text-white py-2 rounded-xl text-sm font-medium">💬 Chat With Us</button>
        </div>

        <div className="border bg-[#99999932]  border-gray-700 rounded-xl p-6 flex flex-col justify-between text-white">
          <div>
            <p className="text-sm bg-gray-700 px-3 py-1 inline-block rounded-full mb-3">Find us on map</p>
            <p className="text-sm leading-6">
              G06, Bin Thani Building, near Emirates<br />
              Islamic Bank – Al Qusais – Al Qusais 2 –<br />
              Dubai – United Arab Emirates
            </p>
          </div>
          <button className="mt-6 bg-gradient-to-r from-red-500 to-yellow-400 text-white py-2 rounded-xl text-sm font-medium">📍 Map</button>
        </div>

        <div className="md:col-span-2 lg:col-span-1 border border-gray-700 bg-[#99999932]  rounded-xl text-white p-6 flex flex-col justify-between">
          <div>
            <p className="text-sm bg-gray-700 px-3 py-1 inline-block rounded-full mb-3">Assistance</p>
            <h3 className="text-lg font-medium">Get Personal Assistant for you.</h3>
          </div>
          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <button className="w-full md:w-auto bg-gradient-to-r from-red-500 to-yellow-400 text-white py-2 px-6 rounded-xl text-sm font-medium">Schedule Meet</button>
            <button className="w-full md:w-auto border border-yellow-400 text-yellow-400 py-2 px-6 rounded-xl text-sm font-medium">Get Call Back</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ContactSection;
