"use client"
import Image from "next/image";
import React, { useState } from "react";

import Logo1 from "../../../public/assets/images/home/l-logo1.png";
import Logo2 from "../../../public/assets/images/home/l-logo2.png";
import Logo3 from "../../../public/assets/images/home/l-logo3.png"; 
import Logo4 from "../../../public/assets/images/home/l-logo4.png";
import Logo5 from "../../../public/assets/images/home/l-logo5.png";

const tabs = [
    { label: "Mainland License", value: "mainland" },
    { label: "Freezone License", value: "freezone" },
    { label: "Offshore License", value: "offshore" },
];

const logos = [
  Logo1,
  Logo2,
  Logo3,
  Logo4,
  Logo5,



];

const tabContent = {
    mainland: (
        <p>
            Setting up a mainland company in Dubai is a lucrative investment option for investors and business establishments. Mainland companies are business entities that are allowed to function and operate within the boundaries of Emirati jurisdiction that come under commercialized geographical regions.
        </p>

    ),
    freezone: (
        <p>
            Freezone licenses are permits granted to a geographical region or jurisdiction that is allowed to conduct a predefined trading activity or set of activities in the UAE. The licenses issued offer favorable conditions for businesses, for example, tax exemptions, 100% foreign ownership, and streamlined bureaucratic procedures.
        </p>
    ),
    offshore: (
        <p>
            An offshore license gives authorizations to businesses that conduct operations outside of their location of registration. Businesses may be allowed to legally operate while following the regulations of the jurisdiction they are conducting their business activities.
        </p>
    ),
};

function LicenseTab() {
    const [active, setActive] = useState("mainland");




    return (
        <div className='md:px-8 lg:px-[90px] px-4  md:py-20 py-10'>
            <p className='text-[15px] text-white text-center'>What are you looking for?</p>


            <div className='pt-5'>
                <div className="w-full flex flex-col items-center">
                    <div className="flex gap-10 justify-center mb-6 w-full pt-5">
                        {tabs.map((tab) => (
                            <button
                                key={tab.value}
                                onClick={() => setActive(tab.value)}
                                className={`text-[32px] font-semibold transition-all duration-200 w-1/3 text-center
              ${active === tab.value
                                        ? "text-gradient text-[35px] font-[500] active-activity-tab"
                                        : "text-gradient text-[35px] font-[500]"
                                    }
            `}

                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                    <div className="text-center text-white text-lg max-w-3xl pt-10">
                        {tabContent[active]}
                    </div>
                    <div className="flex flex-wrap justify-center gap-6 pt-5">
                        {logos.map((logo, idx) => (
                            <Image
                                key={idx}
                                src={logo}
                                alt={`Logo ${idx + 1}`}
                                width={150}
                                height={150}
                                className="object-contain"
                            />
                        ))}
                    </div>
                </div>
            </div>

        </div >
    )
}

export default LicenseTab