import { AddButton } from "@/components/category/addButton";
import { CategoryChips } from "@/components/category/CategoryChip";
import { foodsService } from "@/lib/foods.servies";
import { Suspense } from "react";

export const DisplayCategories = async () => {
  const { getAllCategories } = foodsService();
  const { results } = await getAllCategories();

  return (
    <div className="rounded-[1.25rem] bg-white p-6 shadow-[0_2px_16px_-4px_rgba(0,0,0,0.08)]">
      <h2 className="mb-4 text-lg font-bold text-neutral-900">
        Dishes category
      </h2>
      <div className="flex flex-wrap items-center gap-2.5">
        <Suspense
          fallback={
            <div className="h-10 w-36 shrink-0 animate-pulse rounded-full bg-neutral-100" />
          }
        >
          <CategoryChips results={results} />
        </Suspense>
        <AddButton />
      </div>
    </div>
  );
};
