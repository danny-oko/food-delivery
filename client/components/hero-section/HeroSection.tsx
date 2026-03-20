import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";

const HeroSection = () => {
  return (
    <section className="w-full">
      <Carousel className="w-full">
        <CarouselContent>
          <CarouselItem className="w-full h-[60vh]">
            <img
              src="https://picsum.photos/1920/1080?random=1"
              alt="Hero Slide 1"
              className="w-full h-full object-cover"
            />
          </CarouselItem>

          <CarouselItem className="w-full h-[60vh]">
            <img
              src="https://picsum.photos/1920/1080?random=2"
              alt="Hero Slide 2"
              className="w-full h-full object-cover"
            />
          </CarouselItem>

          <CarouselItem className="w-full h-[60vh]">
            <img
              src="https://picsum.photos/1920/1080?random=3"
              alt="Hero Slide 3"
              className="w-full h-full object-cover"
            />
          </CarouselItem>
        </CarouselContent>

        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </section>
  );
};

export default HeroSection;
