import Image from 'next/image';
import React from 'react'
import bl1 from "../../../public/assets/images/about/bl1.png"
import bl2 from "../../../public/assets/images/about/bl2.png"
import bl3 from "../../../public/assets/images/about/bl3.png"
import bl4 from "../../../public/assets/images/about/bl4.png"
import bl5 from "../../../public/assets/images/about/bl5.png"
import bl6 from "../../../public/assets/images/about/bl6.png"





const categories = [
    { title: 'Business Setup', image: bl1 },
    { title: 'Breaking News', image: bl2 },
    { title: 'Legal', image: bl3 },
    { title: 'Real Estate', image: bl4 },
    { title: 'Mainland', image: bl5 },
    { title: 'Freezone', image: bl6 },
  ];

function BlogBanner() {
  return (
    <div className="pt-10 main-pt px-4 md:px-8 lg:px-[90px]  z-40 ">
 <h6 className="md:text-[18px] text-[16px] text-center font-[300] text-gradient">
 Satrtex Guide
                        </h6>
                        <h1 className="md:text-[50px] text-[27px] font-[500] pt-3 text-center text-gradient">
                        Business Setup Insights for Every Entrepreneur
                        </h1>


                        <div className="pt-10 pb-10">
                        <div className=" mx-auto flex flex-wrap justify-between gap-3">
        {categories.map((cat, i) => (
          <div
            key={i}
            className="relative w-[200px] h-[220px] rounded-xl overflow-hidden shadow-lg group"
          >
            <Image
              src={cat.image}
              alt={cat.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105 w-full"
            />
            <div className="absolute bottom-2 left-2 right-2 bg-black/60 text-white text-sm text-center py-1 rounded-md">
              {cat.title}
            </div>
          </div>
        ))}
      </div>
                        </div>
    </div>
  )
}

export default BlogBanner