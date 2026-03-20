import React from "react";
import Navbar from "../components/widgets/navbar";
import Footer from "../components/widgets/footer";
import HeroSection from "@/components/hero-section/HeroSection";

const HomeClient = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  );
};

export default HomeClient;
