"use client"
import { useState } from "react";

const licenses = [
    { label: "Free Zone License", key: "freezone" },
    { label: "Mainland License", key: "mainland" },
    { label: "Offshore License", key: "offshore" },
    { label: "Commercial License", key: "commercial" },
    { label: "Professional License", key: "professional" },
    { label: "Industrial License", key: "industrial" },
    { label: "Tourism License", key: "tourism" },
];

const licenseContent = {
    mainland: (
        <div className=" space-y-4 text-center">
            <p className="text-white md:text-[16px] text-[15px]">
                Mainland companies are business entities that are allowed to function
                and operate within the boundaries of Emirati jurisdiction that come
                under commercialized geographical regions. Obtaining a mainland license
                will be a lucrative option for investors and entrepreneurs.
            </p>
            <ul className="list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]">
                <li>
                    Non-GCC nationals require a local sponsor or service agent to obtain
                    a mainland license.
                </li>
                <li>
                    Companies that own a mainland license can bid for government contracts
                    and projects.
                </li>
                <li>
                    Businesses can own or rent office spaces anywhere in Dubai.
                </li>
            </ul>
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
            <ul className="list-disc list-inside space-y-2 pt-5 text-white md:text-[16px] text-[15px]">
                <li>
                    Non-GCC nationals require a local sponsor or service agent to obtain
                    a mainland license.
                </li>
                <li>
                    Companies that own a mainland license can bid for government contracts
                    and projects.
                </li>
                <li>
                    Businesses can own or rent office spaces anywhere in Dubai.
                </li>
            </ul>
        </div>

    ),
    offshore: <p className="text-white">Content for Offshore License.</p>,
    commercial: <p className="text-white">Content for Commercial License.</p>,
    professional: <p className="text-white">Content for Professional License.</p>,
    industrial: <p className="text-white">Content for Industrial License.</p>,
    tourism: <p className="text-white">Content for Tourism License.</p>,
};

export default function LicenseTabs() {
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
