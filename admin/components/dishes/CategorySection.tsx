import { FoodType } from "@/lib/types";
import { DishGrid } from "./DishGrid";

type CategorySectionProps = {
  id: string;
  name: string;
  foods: FoodType[];
};

export const CategorySection = ({ id, name, foods }: CategorySectionProps) => {
  return (
    <section className="rounded-[1.25rem] bg-white p-6 shadow-[0_2px_16px_-4px_rgba(0,0,0,0.08)]">
      <h2 className="mb-5 text-lg font-bold text-neutral-900">
        {name} ({foods.length})
      </h2>
      <DishGrid id={id} categoryName={name} foods={foods} />
    </section>
  );
};
