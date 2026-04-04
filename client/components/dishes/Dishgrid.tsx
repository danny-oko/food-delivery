import type { FoodType } from "@/lib/types";
import { DishCard } from "./DishCard";

export const DishGrid = ({
  id,
  categoryName,
  foods,
}: {
  id: string;
  categoryName: string;
  foods: FoodType[];
}) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {foods.map((food) => (
        <DishCard key={food.id} food={food} />
      ))}
    </div>
  );
};
