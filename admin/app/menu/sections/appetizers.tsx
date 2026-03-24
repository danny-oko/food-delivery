import AddDishCard from "@/components/dishes/AddDishCard";
import DishCard from "@/components/dishes/DishCard";
import axios from "axios";
import api from "@/lib/axios";
import { FoodType } from "@/lib/types";

export const dynamic = "force-dynamic";

const Appetizers = async () => {
  const { data } = await api.get("/foods");
  const res: FoodType[] = data.foods;
  // console.log(res);

  return (
    <div className="bg-white rounded-2xl p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">
        Appetizers<span className="font-normal">({res.length})</span>
      </h2>
      <div className="grid grid-cols-4 gap-4">
        <AddDishCard category="Appetizers" />
        {res.map((dish) => (
          <DishCard key={dish.id} {...dish} />
        ))}
      </div>
    </div>
  );
};
export default Appetizers;
