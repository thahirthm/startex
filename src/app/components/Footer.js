import Image from "next/image";
import Logo from "../../../public/assets/images/main-logo.png";
import watermark from "../../../public/assets/images/home/start.png";

import React from "react";
import WhatsAppButton from "./WhatsAppButton";
import CallButton from "./CallButton";
import ChatbotButton from "./ChatbotButton";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-8 pb-2 relative overflow-hidden">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row md:justify-between md:items-start  pb-8 mb-8">
        {/* Logo and Contact */}
        <div className="md:w-1/4 mb-8 md:mb-0 flex flex-col gap-4">
          <div className="min-w-[250px]"> {/* Added min-width to ensure logo area doesn't shrink too much */}
            <Image src={Logo} alt="Startex Hub" width={250} height={40} priority />
          </div>
        </div>
        {/* Contact, Hours, Social (aligned to match the image layout) */}
        <div className="md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Get in Touch */}
          <div className="text-white text-sm">
            <div className="font-[300] text-[14px] mb-2">Get in Touch</div>
            <div className="mb-1 font-[300] text-[16px]">+971 00 000 0000</div>
            <div className="mb-1 font-[300] text-[16px]">info@startex.ae</div>
            <div className="font-[300] text-[16px]leading-snug mt-2">
              API Trio Office Tower, Office Suite 2701, Sheikh Zayed Road, Dubai, UAE, PO Box 49638
            </div>
          </div>
          {/* Working Hours */}
          <div className="text-white text-sm">
            <div className="font-[300] text-[14px] mb-2">Working Hours</div>
            <div className="mb-1 font-[300] text-[16px]">Monday to Friday – 9:00 AM to 6:00 PM</div>
            <div className="mb-1 font-[300] text-[16px]">Saturday – 12:00 PM to 4:00 PM</div>
          </div>
          {/* Social */}
          <div className="flex flex-col items-start">
            <div className="font-[300] text-[14px] mb-2">Connect with us on Social Networks</div>
            <div className="flex gap-4 items-center">
              <a href="#" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500 transition">
                <FaFacebookF size={22} />
              </a>
              <a href="#" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500 transition">
                <FaInstagram size={22} />
              </a>
              <a href="#" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-700 transition">
                <FaLinkedinIn size={22} />
              </a>
              <a href="#" aria-label="YouTube" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-600 transition">
                <FaYoutube size={22} />
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Middle Section (Links) */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-sm mb-8">
        <div>
          <div className="font-semibold mb-2">Company</div>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Licensing</div>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Mainland License</a></li>
            <li><a href="#" className="hover:underline">Free Zone License</a></li>
            <li><a href="#" className="hover:underline">Offshore License</a></li>
          </ul>
        </div>
        {/* <div>
            <div className="font-semibold mb-2">Guide</div>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Where</a></li>
              <li><a href="#" className="hover:underline">How</a></li>
              <li><a href="#" className="hover:underline">Why</a></li>
            </ul>
          </div> */}
        <div>
          <div className="font-semibold mb-2">Service</div>
          <ul className="space-y-1">
            <li><a href="/services/trademark-registration" className="hover:underline">Trade Service</a></li>
            <li><a href="/services/open-bank-account" className="hover:underline">Open Bank Account</a></li>
            <li><a href="/services/company-liquidation" className="hover:underline">Company Liquidation</a></li>
            <li><a href="/services/pro-services" className="hover:underline">Pro Services</a></li>
            <li><a href="/services/brand-protection" className="hover:underline">Brand Protection</a></li>
            <li><a href="/services/sponsorship-services" className="hover:underline">UAE National Sponsorship</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Workspace</div>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Business Center</a></li>
            <li><a href="#" className="hover:underline">Virtual Office</a></li>
            <li><a href="#" className="hover:underline">Flexi Desks</a></li>
            <li><a href="#" className="hover:underline">Rent a Cabin</a></li>
            <li><a href="#" className="hover:underline">Rent a Office</a></li>
            <li><a href="#" className="hover:underline">Find an Office Space</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Accounting</div>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">VAT Registration</a></li>
            <li><a href="#" className="hover:underline">Accounting & Bookkeeping</a></li>
            <li><a href="#" className="hover:underline">Auditing services</a></li>
            <li><a href="#" className="hover:underline">VAT Return Filing</a></li>
            <li><a href="#" className="hover:underline">CFO Services</a></li>
          </ul>
        </div>
        <div> {/* Added Visa section */}
          <div className="font-semibold mb-2">Visa</div>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Dubai Investors Visa</a></li>
            <li><a href="#" className="hover:underline">UAE Investors Visa</a></li>
            <li><a href="#" className="hover:underline">Dubai Employment Visa</a></li>
            <li><a href="#" className="hover:underline">Dubai Family Residence Visa</a></li>
            <li><a href="#" className="hover:underline">Dubai Tourist Visa</a></li>
            <li><a href="#" className="hover:underline">Dubai Freelance Visa</a></li>
            <li><a href="#" className="hover:underline">Dubai Maid Visa</a></li>
            <li><a href="#" className="hover:underline">Dubai Business Visa</a></li>
          </ul>
        </div>
      </div>

      {/* Watermark */}
      <div className="absolute left-0 right-0 bottom-12 flex justify-center pointer-events-none select-none ">
        {/* <span className="text-[7vw] font-bold tracking-widest" style={{fontFamily: "Futura, Arial, sans-serif"}}>STARTEX HUB</span> */}
        <Image src={watermark} alt="Watermark" width={1000} height={1000} className="opacity-50 w-full " />
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-3 mt-8 text-xs">
        <div>
          © Copyright 2025 Startex Hub, All Rights Reserved
        </div>
        <div className="flex items-center gap-4 mt-2 md:mt-0"> {/* Increased gap slightly */}
          {/* Assumed powered icon path */}
          {/* <Image src="/powered-icon.svg" alt="Powered" width={16} height={16} /> */}
          <a href="#" className="hover:underline">Terms and Conditions</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
        </div>
      </div>

      <div>
        <WhatsAppButton />
        <CallButton />
        <ChatbotButton />
      </div>

    </footer>
  );
}