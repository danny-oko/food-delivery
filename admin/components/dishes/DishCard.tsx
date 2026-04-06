"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { FoodType } from "@/lib/types";
import { DeleteButton } from "./DeleteButton";
import { EditButton } from "./EditButton";

type DishCardProps = Pick<
  FoodType,
  "id" | "name" | "price" | "img" | "overview"
>;

const DishCard = ({ id, name, price, img, overview }: DishCardProps) => {
  return (
    <Card className="group relative gap-0 overflow-hidden rounded-[1.25rem] border border-neutral-100 bg-white p-0 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.06)] ring-0">
      <div className="relative p-4">
        <img
          src={img || `https://picsum.photos/seed/${id}/400/300`}
          alt={name}
          className="h-40 w-full object-cover rounded-xl"
        />
        <div className="absolute left-3 top-3 z-10 opacity-0 transition-opacity group-hover:opacity-100">
          <DeleteButton foodId={id} foodName={name} />
        </div>
        <EditButton
          id={id}
          name={name}
          price={price}
          img={img}
          overview={overview}
          categoryId={null}
          createdAt={null}
          updatedAt={null}
        />
      </div>
      <CardContent className="px-4 pb-4 pt-3">
        <div className="mb-1.5 flex items-start justify-between gap-2">
          <span className="line-clamp-2 text-base font-bold leading-snug text-red-500">
            {name}
          </span>
          <span className="shrink-0 text-base font-semibold text-neutral-900">
            ${price}
          </span>
        </div>
        <p className="line-clamp-3 text-xs leading-relaxed text-neutral-400">
          {overview ?? "No description available"}
        </p>
      </CardContent>
    </Card>
  );
};

export default DishCard;
