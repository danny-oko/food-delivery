"use client";

import React, { useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Plus, X, ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FoodType } from "@/lib/types";

const AddDishCard = ({ category }: { category: string }) => {
  const [data, setData] = useState<{
    foodName: string;
    price: number;
    categoryId: null | number;
    ingredients: string;
  }>({ foodName: "", price: 0, categoryId: null, ingredients: "" });

  // const handleChange = (e) => {};

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="border-2 border-dashed border-red-300 flex flex-col items-center justify-center gap-3 cursor-pointer hover:bg-red-50 transition-colors min-h-[220px] shadow-none">
          <Button
            size="icon"
            className="rounded-full bg-red-500 hover:bg-red-600 h-10 w-10"
            type="button"
          >
            <Plus className="h-5 w-5" />
          </Button>
          <p className="text-sm text-gray-500 text-center">
            Add new Dish to {category}
          </p>
        </Card>
      </DialogTrigger>

      <DialogContent className="sm:max-w-lg bg-white rounded-2xl p-6 gap-6">
        <DialogHeader className="flex flex-row items-center justify-between space-y-0">
          <DialogTitle className="text-xl font-semibold text-gray-900">
            Add new Dish to {category}
          </DialogTitle>
          <DialogClose className="rounded-full border border-gray-200 p-1.5 hover:bg-gray-100 transition-colors">
            <X className="h-4 w-4 text-gray-500" />
          </DialogClose>
        </DialogHeader>

        <form className="flex flex-col gap-5">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <Label className="text-sm font-medium text-gray-700">
                Food name
              </Label>
              <Input
                name="name"
                placeholder="Placeholder"
                type="text"
                className="rounded-lg border-gray-200"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label className="text-sm font-medium text-gray-700">
                Food price
              </Label>
              <Input
                name="price"
                placeholder="Placeholder"
                type="number"
                className="rounded-lg border-gray-200"
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Ingredients textarea */}
          <div className="flex flex-col gap-1.5">
            <Label className="text-sm font-medium text-gray-700">
              Ingredients
            </Label>
            <Textarea
              name="ingredients"
              placeholder="Placeholder"
              className="rounded-lg border-gray-200 min-h-[120px] resize-none"
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <Label className="text-sm font-medium text-gray-700">
              Food image
            </Label>
            <div
              onClick={() => fileInputRef.current?.click()}
              onDragOver={(e) => {
                e.preventDefault();
                setDragOver(true);
              }}
              onDragLeave={() => setDragOver(false)}
              onDrop={handleDrop}
              className={`flex flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed cursor-pointer transition-colors min-h-[130px]
                ${
                  dragOver
                    ? "border-blue-400 bg-blue-100"
                    : "border-blue-200 bg-blue-50 hover:bg-blue-100"
                }`}
            >
              <ImageIcon className="h-7 w-7 text-gray-400" />
              <p className="text-sm text-gray-500">
                {fileName ?? "Choose a file or drag & drop it here"}
              </p>
              <input
                ref={fileInputRef}
                type="file"
                name="img"
                accept="image/*"
                className="hidden"
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-end pt-1">
            <Button
              type="submit"
              className="bg-gray-900 hover:bg-gray-800 text-white rounded-lg px-6"
            >
              Add Dish
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddDishCard;
