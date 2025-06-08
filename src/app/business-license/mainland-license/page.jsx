import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import React from "react";
import MainlandBanner from "./MainlandBanner";
import MainlandTabs from "./MainlandTabs";
import ConsultantBanner from "@/app/components/ConsultantBanner";
import VideoTesti from "@/app/home/VideoTesti";
import Testimonials from "@/app/home/Testimonials";
import Assoisiates from "@/app/home/Assoisiates";
import Faq from "@/app/home/Faq";
import MainlandServices from "./MainlandServices";
import Logo from "@/app/home/Logo";
import MainlandVideo from "./MainlandVideo";

function page() {
  return (
    <div>
      <Header />
      <MainlandBanner />
      <Logo />
      <MainlandVideo />
      <MainlandServices />
      <MainlandTabs />
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
