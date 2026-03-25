import { AddButton } from "@/components/category/addButton";
import { CategoryChips } from "@/components/category/CategoryChip";
import api from "@/lib/axios";
import { foodsService } from "@/lib/foods.servies";
import { Categories } from "@/lib/types";

export const DisplayCategories = async () => {
  const { getAllCategories } = foodsService();
  const { results } = await getAllCategories();
  console.log(results);

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Dishes category</h2>
      <div className="flex flex-wrap gap-2">
        <CategoryChips results={results} />
        <AddButton />
      </div>
    </div>
  );
};
