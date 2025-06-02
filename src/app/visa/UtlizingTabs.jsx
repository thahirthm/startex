"use client"
import { useState } from "react";

const licenses = [
    { label: "Business Visa", key: "freezone" },
    { label: "Dubai Investor Visa", key: "mainland" },
    { label: "Investor Visa", key: "offshore" },
    { label: "Family Visa", key: "commercial" },
    { label: "Family Visa", key: "professional" },
    { label: "Maid Visa", key: "industrial" },
    { label: "Tourist Visa", key: "tourism" },
    { label: "Freelance Visa", key: "tourism" },

];

const licenseContent = {
    mainland: (
        <div className=" space-y-4 text-center">
            <p className="text-white md:text-[16px] text-[15px]">
            A business visa in the UAE is allowed for expat citizens and their dependents and has long-term validity. The visa is focused on foreign investors and entrepreneurs. The business visa applicants must have considerable professional experience to apply.
            </p>
          
        </div>
    ),
    // Add other license contents below
    freezone: (
        <div className=" space-y-4 text-center">
            <p className="text-white md:text-[16px] text-[15px]">
                Mainland companies are business entities that are allowed to function
                and operate within the boundaries of Emirati jurisdiction that come
                under commercialized geographical regions. Obtaining a mainland license
                will be a lucrative option for investors and entrepreneurs.
            </p>
         
        </div>

    ),
    offshore: <p className="text-white">Content for Offshore License.</p>,
    commercial: <p className="text-white">Content for Commercial License.</p>,
    professional: <p className="text-white">Content for Professional License.</p>,
    industrial: <p className="text-white">Content for Industrial License.</p>,
    tourism: <p className="text-white">Content for Tourism License.</p>,
};

export default function UtlizingTabs() {
    const [active, setActive] = useState("freezone");

    return (
        <div className="px-4 md:px-8 lg:px-[90px] pt-10 pb-10">
            <div className="flex md:flex-wrap gap-4 mb-6 md:overflow-x-hidden overflow-x-auto no-scrollbar whitespace-nowrap justify-start md:justify-center px-2 md:px-0">
                {licenses.map((license) => (
                    <button
                        key={license.key}
                        onClick={() => setActive(license.key)}
                        className={`px-4 py-2 rounded text-sm font-medium transition ${active === license.key
                                ? "bg-gradient text-white"
                                : "bg-black border border-gray-500 text-white hover:bg-gray-800"
                            }`}
                    >
                        {license.label}
                    </button>
                ))}
            </div>

            <div className=" text-[18px]">{licenseContent[active]}</div>
        </div>
    );
}
