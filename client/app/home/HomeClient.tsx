import React from "react";
import Navbar from "../widgets/navbar";
import Footer from "../widgets/footer";
import { Hero } from "../_components/hero/hero";

const HomeClient = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
};

export default HomeClient;
