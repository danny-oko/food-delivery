import { Dishes } from "@/app/_components/dishes/dishes";
import { Hero } from "../_components/hero/hero";
import Footer from "../widgets/footer";
import Navbar from "../widgets/navbar";

const HomeClient = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Dishes />
      <Footer />
    </div>
  );
};

export default HomeClient;
