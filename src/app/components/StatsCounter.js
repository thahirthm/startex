import React from "react";

const stats = [
  { value: "99%", label: "Client Satisfaction Rate" },
  { value: "10K+", label: "Successful Business Establishment" },
  { value: "20+", label: "Government Conglomerate Partnership" },
  { value: "20+", label: "Industry-Experienced Consultants" },
  { value: "1999", label: "Crafting Empowers in UAE" },
];

const StatsCounter = () => (
  <div className="w-full py-10 px-4 lg:px-[90px] h-full items-center flex justify-center">
    <div className="flex flex-wrap justify-between gap-3 w-full">
      {stats.map((stat, idx) => (
        <div key={idx} className=" min-w-[120px]">
          <h6 className="text-3xl md:text-4xl font-[300] text-[#F9CDAF]  text-start">{stat.value}</h6>
          <p className="text-sm md:text-[16px] text-[#F9CDAF] mt-2 text-start w-[80%]">{stat.label}</p>
        </div>
      ))}
    </div>
  </div>
);

export default StatsCounter;