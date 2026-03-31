import type { FoodType } from "@/lib/types";
import { DishCard } from "./DishCard";

export const DishGrid = ({ foods }: { foods: FoodType[] }) => {
  //   console.log("foods", foods);
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {foods.map((food) => (
        <DishCard key={food.id} food={food} />
      ))}
    </div>
  );
};
