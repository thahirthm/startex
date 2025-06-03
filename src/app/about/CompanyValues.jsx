import Image from "next/image";
import visionImg from "../../../public/assets/images/about/vission.png";
import missionImg from "../../../public/assets/images/about/mission.png";
import commitmentImg from "../../../public/assets/images/about/commitment.png";
import servicesImg from "../../../public/assets/images/about/service.png";

const items = [
  {
    title: "Our Vision",
    color: "text-gradient",
    image: visionImg,
    content:
      "At Startex Hub, we envision being the foremost choice for businesses seeking expert guidance in establishing and thriving in the UAE market. We aim to provide seamless solutions, ensuring our clients’ success in their ventures, and becoming a trusted partner in their business journey.",
  },
  {
    title: "Our Mission",
    color: "text-gradient",
    image: missionImg,
    content:
      "Our mission at Startex Hub is to simplify the complexities of business setup in the UAE. We are committed to delivering unparalleled services, from legalities to market presence, empowering businesses to flourish. Through our expertise in PRO services and business consulting.",
  },
  {
    title: "Commitment",
    color: "text-gradient",
    image: commitmentImg,
    content:
      "Our mission at Startex Hub is to simplify the complexities of business setup in the UAE. We are committed to delivering unparalleled services, from legalities to market presence, empowering businesses to flourish. Through our expertise in consulting, we strive to be the catalyst for our clients.",
  },
  {
    title: "Our Services",
    color: "text-gradient",
    image: servicesImg,
    content:
      "At Startex Hub, we go beyond business setup. Our expertise extends to cover Employee Visa processes, Family Visa services, Documents Attestation, PRO Services, and Golden Visa services. We’re more than just consultants; we’re your reliable partners in navigating the intricate landscape of the UAE business environment.",
  },
];

export default function CompanyValues() {
  return (
    <div className="md:pt-20  pt-10 px-4 md:px-8 lg:px-[90px] flex flex-wrap ">
      {items.map((item, index) => (
        <div key={index} className="w-full md:w-1/2 flex gap-6  rounded-xl overflow-hidden shadow-lg py-10 px-4">
          {/* Image */}
          <div className="bg-[#181818] rounded-xl overflow-hidden shadow-lg flex-1 flex items-center justify-center min-h-[350px]">
            <Image
              src={item.image}
              alt={item.title}
              className="object-cover w-full h-full"
              priority={true}
            />
          </div>

          {/* Text */}
          <div className="bg-[#9999991c] border-1 border-[grey] rounded-xl shadow-lg flex-1 p-8 flex flex-col justify-center min-h-[350px]">
            <h2 className={`text-[38px] font-[400]mb-4  ${item.color}`}>{item.title}</h2>
            <p className="text-gray-200 text-[18px] pt-4">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
