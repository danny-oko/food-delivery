"use client";

import { useState } from "react";
import { Badge } from "../ui/badge";
import { Plus } from "lucide-react";
import { Categories } from "@/lib/types";

interface CategoryChipsProps {
  categories: Categories[];
}

export default function CategoryChips({ categories }: CategoryChipsProps) {
  const [active, setActive] = useState<number | "all">("all");

  const totalCount = categories.reduce((sum, c) => sum + c.foods.length, 0);

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        Dishes category
      </h2>

      <div className="flex flex-wrap gap-2 items-center">
        {/* All Dishes — static */}
        <button onClick={() => setActive("all")}>
          <Badge
            variant={active === "all" ? "default" : "outline"}
            className={`gap-2 px-3.5 py-1.5 text-sm font-medium rounded-full cursor-pointer transition-all
              ${
                active === "all"
                  ? "bg-gray-900 text-white hover:bg-gray-800 border-gray-900"
                  : "bg-white text-gray-900 border-gray-200 hover:border-gray-400"
              }`}
          >
            All Dishes
            <span
              className={`inline-flex items-center justify-center min-w-[22px] h-[22px] rounded-full text-xs font-semibold px-1
              ${active === "all" ? "bg-white text-gray-900" : "bg-gray-900 text-white"}`}
            >
              {totalCount}
            </span>
          </Badge>
        </button>

        {/* Dynamic chips from API */}
        {categories.map((cat) => {
          const isActive = active === cat.id;
          return (
            <button key={cat.id} onClick={() => setActive(cat.id)}>
              <Badge
                variant={isActive ? "default" : "outline"}
                className={`gap-2 px-3.5 py-1.5 text-sm font-medium rounded-full cursor-pointer transition-all
                  ${
                    isActive
                      ? "bg-gray-900 text-white hover:bg-gray-800 border-gray-900"
                      : "bg-white text-gray-900 border-gray-200 hover:border-gray-400"
                  }`}
              >
                {cat.name}
                <span
                  className={`inline-flex items-center justify-center min-w-[22px] h-[22px] rounded-full text-xs font-semibold px-1
                  ${isActive ? "bg-white text-gray-900" : "bg-gray-900 text-white"}`}
                >
                  {cat.foods.length}
                </span>
              </Badge>
            </button>
          );
        })}

        {/* Add category button */}
        <button className="w-9 h-9 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center transition-colors flex-shrink-0">
          <Plus size={16} color="white" strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
}
