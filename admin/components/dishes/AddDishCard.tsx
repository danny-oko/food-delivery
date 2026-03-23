import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pencil, Plus } from "lucide-react";

const AddDishCard = ({ category }: { category: string }) => {
  return (
    <Card className="border-2 border-dashed border-red-300 flex flex-col items-center justify-center gap-3 cursor-pointer hover:bg-red-50 transition-colors min-h-[220px] shadow-none">
      <Button
        size="icon"
        className="rounded-full bg-red-500 hover:bg-red-600 h-10 w-10"
      >
        <Plus className="h-5 w-5" />
      </Button>
      <p className="text-sm text-gray-500 text-center">
        Add new Dish to {category}
      </p>
    </Card>
  );
};

export default AddDishCard;
