"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Category } from "@/lib/types";

const pillBase =
  "inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition-colors";

export const CategoryChips = ({ results }: { results: Category[] }) => {
  const searchParams = useSearchParams();
  const activeId = searchParams.get("category");
  const total = results.reduce((sum, c) => sum + c.foods.length, 0);

  return (
    <>
      <Link
        href="/dashboard/menu"
        className={
          activeId == null
            ? `${pillBase} border-2 border-red-500 bg-neutral-900 text-white`
            : `${pillBase} border border-neutral-200 bg-white text-neutral-900 hover:border-neutral-300`
        }
      >
        <span>All Dishes</span>
        <span
          className={
            activeId == null
              ? "flex h-6 min-w-[22px] items-center justify-center rounded-full bg-white/15 px-1.5 text-xs font-semibold text-white"
              : "flex h-6 min-w-[22px] items-center justify-center rounded-full bg-neutral-900 px-1.5 text-xs font-semibold text-white"
          }
        >
          {total}
        </span>
      </Link>
      {results.map((category) => {
        const isActive = activeId === String(category.id);
        return (
          <Link
            key={category.id}
            href={`/dashboard/menu?category=${category.id}`}
            className={
              isActive
                ? `${pillBase} border-2 border-red-500 bg-neutral-900 text-white`
                : `${pillBase} border border-neutral-200 bg-white text-neutral-900 hover:border-neutral-300`
            }
          >
            <span>{category.name}</span>
            <span
              className={
                isActive
                  ? "flex h-6 min-w-[22px] items-center justify-center rounded-full bg-white/15 px-1.5 text-xs font-semibold text-white"
                  : "flex h-6 min-w-[22px] items-center justify-center rounded-full bg-neutral-900 px-1.5 text-xs font-semibold text-white"
              }
            >
              {category.foods.length}
            </span>
          </Link>
        );
      })}
    </>
  );
};
