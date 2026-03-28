import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Categories } from "@/lib/types";

export const HeroCarousel = ({ categories }: { categories: Categories[] }) => {
  // console.log(JSON.stringify(categories, null, 1));
  return (
    <div>
      <Carousel>
        <CarouselContent>
          {categories.flatMap((f) =>
            (f.results ?? []).map((i) => (
              <CarouselItem key={i.id}>
                <p>{i.name}</p>
              </CarouselItem>
            )),
          )}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

// <CarouselItem key={f.}>
//   <p>{f}</p>
// </CarouselItem>
