import { FoodType } from "@/lib/types";
import { DishGrid } from "./DishGrid";

type CategorySectionProps = {
  id: string;
  name: string;
  foods: FoodType[];
};

export const CategorySection = ({ id, name, foods }: CategorySectionProps) => {
  return (
    <section className="bg-white rounded-2xl p-6 shadow-sm">
      <h2 className="text-xl font-bold text-gray-900 mb-4">
        {name}{" "}
        <span className="text-gray-400 font-normal">({foods.length})</span>
      </h2>
      <DishGrid categoryName={name} foods={foods} />
    </section>
  );
};
