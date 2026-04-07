import { PlusButton } from "@/components/plus";
import type { FoodType } from "@/lib/types";

export const DishCard = ({ food }: { food: FoodType }) => {
  return (
    <div className="group cursor-pointer overflow-hidden rounded-3xl bg-white shadow-sm transition-shadow duration-200 hover:shadow-md">
      <div className="relative aspect-4/3 overflow-hidden p-4">
        <img
          src={food.img || ""}
          alt={food.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 rounded-xl"
        />
        <PlusButton food={food} />
      </div>

      <div className="px-4 py-3">
        <div className="mb-2 flex items-center justify-between gap-2">
          <span className="text-xl font-bold text-red-500">{food.name}</span>
          <span className="text-xl font-bold whitespace-nowrap text-gray-900">
            ${food.price}
          </span>
        </div>
        <p className="line-clamp-2 text-sm leading-snug text-gray-500">
          {food.overview}
        </p>
      </div>
    </div>
  );
};
