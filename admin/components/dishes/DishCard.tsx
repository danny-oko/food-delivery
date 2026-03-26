import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import { FoodType } from "@/lib/types";

type DishCardProps = Pick<
  FoodType,
  "id" | "name" | "price" | "img" | "overview"
>;

const DishCard = ({ id, name, price, img, overview }: DishCardProps) => {
  return (
    <Card className="overflow-hidden rounded-3xl shadow-sm border border-gray-100">
      <div className="relative p-2">
        <img
          src={img ?? `https://picsum.photos/seed/${id}/400/300`}
          alt={name}
          className="w-full h-36 object-cover rounded-xl"
        />
        <Button
          size="icon"
          className="absolute bottom-5 right-5 rounded-full bg-white hover:bg-gray-100 h-12 w-12 shadow-md"
        >
          <Pencil className="h-5 w-5 text-red-500" />
        </Button>
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