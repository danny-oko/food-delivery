import { CategorySection } from "@/components/dishes/CategorySection";
import { foodsService } from "@/lib/foods.servies";

type FoodsProps = {
  categoryId?: string;
};

export const Foods = async ({ categoryId }: FoodsProps) => {
  const { getAllCategories } = foodsService();
  const { results } = await getAllCategories();

  const categories = results.map((cat) => ({
    id: cat.id,
    name: cat.name,
    foods: cat.foods,
  }));

  const visible =
    categoryId != null && categoryId !== ""
      ? categories.filter((c) => String(c.id) === categoryId)
      : categories;

  if (visible.length === 0) {
    return (
      <div className="rounded-[1.25rem] border border-dashed border-neutral-200 bg-white p-10 text-center text-sm text-neutral-500 shadow-[0_2px_16px_-4px_rgba(0,0,0,0.08)]">
        {categoryId
          ? "No category matches this filter."
          : "No categories yet."}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      {visible.map((category) => (
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
