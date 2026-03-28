"use client";

import React, { useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Plus, X } from "lucide-react";
import { LoaderCircle } from "lucide-react";
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
import api from "@/lib/axios";
import { useRouter } from "next/navigation";

type Food = {
  foodName: string;
  price: number;
  description: string;
  img: string;
  categoryId: null | number;
};

const AddDishCard = ({ category, id }: { category: string; id: string }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [food, setFood] = useState<Food>({
    foodName: "",
    price: 0,
    description: "",
    img: "",
    categoryId: Number(id),
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFood({ ...food, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.post("/foods", {
        name: food.foodName,
        price: food.price,
        categoryId: food.categoryId,
        img: food.img,
        overview: food.description,
      });
      setOpen(false);
      router.refresh();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Card className="flex min-h-[280px] cursor-pointer flex-col items-center justify-center gap-3 rounded-[1.25rem] border-2 border-dashed border-red-500 bg-white shadow-none transition-colors hover:bg-red-50/40">
          <Button
            size="icon"
            className="h-10 w-10 rounded-full bg-red-500 hover:bg-red-600"
            type="button"
          >
            <Plus className="h-5 w-5 text-white" strokeWidth={2.5} />
          </Button>
          <p className="max-w-[11rem] px-2 text-center text-sm text-neutral-500">
            Add new Dish to {category}
          </p>
        </Card>
      </DialogTrigger>

      <DialogContent className="sm:max-w-lg bg-white rounded-2xl p-6 gap-6 [&>button]:hidden">
        <DialogHeader className="flex flex-row items-center justify-between space-y-0">
          <DialogTitle className="text-xl font-semibold text-gray-900">
            Add new Dish to {category}
          </DialogTitle>
          <DialogClose className="rounded-full border border-gray-200 p-1.5 hover:bg-gray-100 transition-colors">
            <X className="h-4 w-4 text-gray-500" />
          </DialogClose>
        </DialogHeader>

        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <Label
                htmlFor="foodName"
                className="text-sm font-medium text-gray-700"
              >
                Food name
              </Label>
              <Input
                id="foodName"
                name="foodName"
                placeholder="Name"
                type="text"
                className="rounded-lg border-gray-200"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label
                htmlFor="price"
                className="text-sm font-medium text-gray-700"
              >
                Food price
              </Label>
              <Input
                id="price"
                name="price"
                placeholder="Price"
                type="number"
                className="rounded-lg border-gray-200"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <Label
              htmlFor="ingredients"
              className="text-sm font-medium text-gray-700"
            >
              Ingredients
            </Label>
            <Textarea
              id="ingredients"
              name="description"
              placeholder="Ingredients"
              className="rounded-lg border-gray-200 min-h-[120px] resize-none"
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <Label htmlFor="img" className="text-sm font-medium text-gray-700">
              Food image URL
            </Label>
            <Input
              id="img"
              name="img"
              placeholder="https://example.com/image.jpg"
              type="url"
              className="rounded-lg border-gray-200"
              onChange={handleChange}
            />
          </div>

          <div className="flex justify-end pt-1">
            <Button
              type="submit"
              className="bg-gray-900 hover:bg-gray-800 text-white rounded-xl px-6"
            >
              {loading ? (
                <LoaderCircle className="animate-spin" />
              ) : (
                <p>Add Dish</p>
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddDishCard;
