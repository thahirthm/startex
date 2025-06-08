import Image from "next/image";
import React from "react";
import SetubVideoBg from "../../../../public/assets/images/services/trade-yt.png";
import YtpIcon from "../../../../public/assets/images/guide/ytp.png";

function MainlandVideo() {
  return (
    <div className="px-4 md:px-8 lg:px-[90px] pt-10 pb-10">
      <h3 className="text-gradient md:text-[50px] text-[27px] text-center">
        How to set up a mainland company in Dubai?
      </h3>
      <p className="md:text-[16px] text-[15px] font-[300] pt-5 md:w-[70%] m-auto text-secondary text-center pb-10 md:pb-0">
        Acquire a trade license in Dubai, UAE to successfully navigate the
        city's intricate and dynamic business landscape. With Kiltons, setting
        up a mainland company in Dubai’s economic playground is made easy and
        hassle-free. Their expert team ensures smooth licensing, legal
        compliance, and end-to-end support for a successful business launch.
      </p>

      <div className="pt-10 relative">
        <Image
          src={SetubVideoBg}
          alt="SetubVideoBg"
          width={1000}
          height={1000}
          className="w-full h-full"
        />

        <div className="absolute md:top-0 top-3  left-0 w-full h-full flex  flex-col justify-center items-center">
          <Image
            src={YtpIcon}
            alt="YtpIcon"
            width={200}
            height={200}
            className="md:w-[70px] w-[40px] h-[40px] md:h-[70px]"
          />
        </div>
      </div>
    </div>
  );
}

export default MainlandVideo;
