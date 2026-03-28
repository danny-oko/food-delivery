import { HeroCarousel } from "@/components/hero/heroCarouse";
import { foodsService } from "@/lib/foods.services";
import { stringify } from "querystring";

export const Hero = async () => {
  const { getAllCategories } = foodsService();
  const { results } = await getAllCategories();
  // console.log(results);

  return <HeroCarousel categories={results} />;
};
