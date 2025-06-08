import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import React from "react";
import PackageBanner from "./PackageBanner";
import Logo from "../home/Logo";
import PackageVideo from "./packageVideo";
import VisaPackages from "./VisaPackages";
import ConsultantBanner from "../components/ConsultantBanner";
import VideoTesti from "../home/VideoTesti";
import Testimonials from "../home/Testimonials";
import Assoisiates from "../home/Assoisiates";
import Faq from "../home/Faq";

function page() {
  return (
    <div>
      <Header />
      <PackageBanner />
      <Logo />
      <PackageVideo />
      <VisaPackages />
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
