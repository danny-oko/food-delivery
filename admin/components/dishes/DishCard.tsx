"use client";
import React, { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FoodType } from "@/lib/types";
import { DeleteButton } from "./DeleteButton";
import { EditButton } from "./EditButton";
import { Pencil } from "lucide-react";
import { foodsService } from "@/lib/foods.servies";

type DishCardProps = Pick<
  FoodType,
  "id" | "name" | "price" | "img" | "overview"
>;

const DishCard = ({ id, name, price, img, overview }: DishCardProps) => {
  return (
    <Card className="overflow-hidden rounded-3xl shadow-sm border border-gray-100">
      <div className="relative p-2">
        <img
          src={img || `https://picsum.photos/seed/${id}/400/300`}
          alt={name}
          className="w-full h-36 object-cover rounded-xl"
        />
        <DeleteButton foodId={id} foodName={name} />
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
      <CardContent className="px-4 pb-5 pt-2">
        <div className="flex items-center justify-between mb-2">
          <span className="text-lg font-bold text-red-500">{name}</span>
          <span className="text-lg font-semibold text-gray-900">${price}</span>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed">
          {overview ?? "No description available"}
        </p>
      </CardContent>
    </Card>
  );
};

export default DishCard;
