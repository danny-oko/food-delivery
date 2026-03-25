import Link from "next/link";
import { Categories, Category } from "@/lib/types";

export const CategoryChips = ({ results }: { results: Category[] }) => {
  return (
    <>
      {results.map((category, index) => (
        <Link
          key={category.id}
          href={`?category=${category.id}`}
          className={`
            flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium
            transition-colors hover:border-red-400
            ${
              index < 2
                ? "border-red-400 text-gray-900"
                : "border-gray-300 text-gray-700"
            }
          `}
        >
          <span>{category.name}</span>
          <span className="bg-gray-900 text-white text-xs font-semibold rounded-full min-w-[24px] h-6 flex items-center justify-center px-1.5">
            {category.foods.length}
          </span>
        </Link>
      ))}
    </>
  );
};
