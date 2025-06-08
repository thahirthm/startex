import Link from 'next/link';
import React from 'react';
import { ReDirect } from '../../components/Icons';
import Image from 'next/image';
import Bl from "../../../../public/assets/images/home/bl.png";
import B2 from "../../../../public/assets/images/home/bl2.png";
import B3 from "../../../../public/assets/images/home/bl3.png";

function MainlandServices() {
  const licenseData = [
    {
      image: Bl,
      heading: "Professional License Dubai, UAE",
      description: "A professional license is issued for service-based businesses, such as consulting, and is typically more affordable than other license types.",
      link: "/business-license/mainland-license"
    },
    {
      image: B2,
      heading: "Commercial Licenses Dubai ,UAE",
      description: "A commercial license is issued for businesses involved in buying, selling, or trading goods and services. It’s commonly used in Dubai, with many opting for a general trading license to cover multiple activities under one license.",
      link: "/business-license/freezone-license"
    },
    {
      image: B3,
      heading: "Industrial License in Dubai, UAE",
      description: "An industrial license is issued to businesses involved in manufacturing or industrial activities. Depending on the nature of operations, additional approvals from external ministries and government bodies may be required.",
      link: "/business-license/offshore-license"
    }
  ];

  return (
    <div className='px-4 md:px-8 lg:px-[90px] pt-10 pb-10'>
      <h3 className='text-gradient md:text-[50px] text-[27px] text-center'>Our Business Licenses</h3>
      <p className='md:text-[16px] text-[15px] font-[300] pt-5 md:w-[70%] m-auto text-secondary text-center pb-10 md:pb-0'>
        Discover the range of business licenses we offer, designed to support your venture's unique needs and help you succeed in Dubai's dynamic market.
      </p>

      {licenseData.map((item, index) => {
        const isEven = index % 2 === 0;
        const imageFirstDesktop = isEven ? 'md:order-2' : 'md:order-1';
        const contentFirstDesktop = isEven ? 'md:order-1' : 'md:order-2';

        return (
          <div key={index} className="md:pt-10 flex flex-col md:flex-row flex-wrap items-end">
            <div className={`md:w-1/2 w-full ${imageFirstDesktop}`}>
              <Image
                src={item.image}
                width={600}
                height={600}
                className="w-full h-full rounded-2xl"
                alt={item.heading}
              />
            </div>

            <div className={`md:w-1/2 w-full ${contentFirstDesktop}`}>
              <h4 className={`text-gradient md:text-[30px] text-[20px] font-[500] pt-5 ${isEven ? 'md:text-end md:pe-10' : 'md:ps-10'}`}>
                {item.heading}
              </h4>
              <div className={`md:w-[70%] pt-5 text-left ${isEven ? 'md:ms-auto md:pe-10 md:text-end' : 'md:me-auto md:ps-10'}`}>
                <p className="md:text-[16px] text-[15px] font-[300] text-secondary">
                  {item.description}
                </p>
                <div className={`pt-5 pb-10 flex ${isEven ? 'justify-end' : ''}`}>
                  <Link
                    href={item.link}
                    className="bg-gradient w-[50px] h-[50px] flex justify-center items-center !rounded-[90px]"
                  >
                    <ReDirect />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MainlandServices;
