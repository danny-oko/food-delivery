import { DishGrid } from "@/components/dishes/Dishgrid";
import { foodsService } from "@/lib/foods.services";
import type { Category } from "@/lib/types";

export const Dishes = async () => {
  const { getAllCategories } = foodsService();
  const { results } = await getAllCategories();

  const foods = await results.filter(
    (category: Category) => category.foods.length > 0,
  );

  return (
    <div className="min-h-screen bg-[#1c1c1c] px-4 py-6">
      <div className="max-w-[80%] mx-auto space-y-8">
        {foods.map((category: Category) => (
          <section key={category.id}>
            <h2 className="text-white text-xl font-semibold mb-4">
              {category.name}
            </h2>
            <DishGrid key={category.id} id={category.id.toString()} categoryName={category.name} foods={category.foods} />
          </section>
        ))}
      </div>
    </div>
  );
};
