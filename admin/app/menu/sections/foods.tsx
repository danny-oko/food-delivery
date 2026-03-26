import { CategorySection } from "@/components/dishes/CategorySection";
import { foodsService } from "@/lib/foods.servies";

export const Foods = async () => {
  const { getAllCategories } = foodsService();
  const { results } = await getAllCategories();

  const categories = results.map((cat) => ({
    id: cat.id,
    name: cat.name,
    foods: cat.foods,
  }));
  return (
    <div className="flex flex-col gap-6">
      {categories.map((category) => (
        <CategorySection
          key={category.id}
          id={String(category.id)}
          name={category.name}
          foods={category.foods}
        />
      ))}
    </div>
  );
};
