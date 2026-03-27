import { FoodType } from "@/lib/types";
import AddDishCard from "./AddDishCard";
import DishCard from "./DishCard";

type DishGridProps = {
  id: string;
  categoryName: string;
  foods: FoodType[];
};

export const DishGrid = ({ id, categoryName, foods }: DishGridProps) => {
  // console.log("names", categoryName);
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      <AddDishCard id={id} category={categoryName} />

      {foods.map((dish) => (
        <DishCard
          key={dish.id}
          id={dish.id}
          name={dish.name}
          price={dish.price}
          img={dish.img}
          overview={dish.overview}
        />
      ))}
    </div>
  );
};
