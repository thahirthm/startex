import Image from "next/image";
import visionImg from "../../../public/assets/images/about/vission.png";
import missionImg from "../../../public/assets/images/about/mission.png";
import commitmentImg from "../../../public/assets/images/about/commitment.png";
import servicesImg from "../../../public/assets/images/about/service.png";

const items = [
  {
    title: "Our Vision",
    color: "text-[#F08700]",
    image: visionImg,
    content:
      "At Startex Hub, we envision being the foremost choice for businesses seeking expert guidance in establishing and thriving in the UAE market. We aim to provide seamless solutions, ensuring our clients’ success in their ventures, and becoming a trusted partner in their business journey.",
  },
  {
    title: "Our Mission",
    color: "text-[#F08700]",
    image: missionImg,
    content:
      "Our mission at Startex Hub is to simplify the complexities of business setup in the UAE. We are committed to delivering unparalleled services, from legalities to market presence, empowering businesses to flourish. Through our expertise in PRO services and business consulting.",
  },
  {
    title: "Commitment",
    color: "text-[#F08700]",
    image: commitmentImg,
    content:
      "Our mission at Startex Hub is to simplify the complexities of business setup in the UAE. We are committed to delivering unparalleled services, from legalities to market presence, empowering businesses to flourish. Through our expertise in consulting, we strive to be the catalyst for our clients.",
  },
  {
    title: "Our Services",
    color: "text-[#F08700]",
    image: servicesImg,
    content:
      "At Startex Hub, we go beyond business setup. Our expertise extends to cover Employee Visa processes, Family Visa services, Documents Attestation, PRO Services, and Golden Visa services. We’re more than just consultants; we’re your reliable partners in navigating the intricate landscape of the UAE business environment.",
  },
];

export default function CompanyValues() {
  return (
    <div className="md:pt-20 pt-10 px-4 md:px-8 lg:px-[90px] bg-[#0B0B0B] space-y-10">
      {items.map((item, index) => {
        const isEven = index % 2 === 0;
        return (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${!isEven ? "md:flex-row-reverse" : ""} gap-6 items-center bg-[#1D1D1D] rounded-[15px] overflow-hidden shadow-md`}
          >
            <div className="relative w-full md:w-1/2 h-[220px] md:h-[300px]">
              <Image
                src={item.image}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-[15px] md:rounded-none md:rounded-l-[15px] md:rounded-r-none"
              />
            </div>
            <div className="w-full md:w-1/2 p-6">
              <h3 className={`text-[20px] md:text-[22px] font-semibold mb-3 ${item.color}`}>
                {item.title}
              </h3>
              <p className="text-[#CCCCCC] text-[14px] leading-[1.8] font-normal">
                {item.content}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
