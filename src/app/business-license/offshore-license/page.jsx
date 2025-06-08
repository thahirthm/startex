import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import React from "react";
import OffBanner from "./OffBanner";
import Logo from "@/app/home/Logo";
import OffTabs from "./OffTabs";
import ConsultantBanner from "@/app/components/ConsultantBanner";
import VideoTesti from "@/app/home/VideoTesti";
import Testimonials from "@/app/home/Testimonials";
import Assoisiates from "@/app/home/Assoisiates";
import Faq from "@/app/home/Faq";

function page() {
  return (
    <div>
      <Header />
      <OffBanner />
      <Logo />
      <OffTabs />

           <ConsultantBanner />
      <VideoTesti />
      <Testimonials />
      <Assoisiates />
      <Faq />

      <Footer />
    </div>
  );
}

export default page;
