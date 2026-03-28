"use client";

import { useState } from "react";
import { Pencil, X, LoaderCircle } from "lucide-react";
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
import { Selector } from "./Selector";
import { FoodType } from "@/lib/types";
import { foodsService } from "@/lib/foods.servies";
import { useRouter } from "next/navigation";

export const EditButton = ({
  id,
  name,
  price,
  img,
  overview,
  categoryId,
}: FoodType) => {
  const [formData, setFormData] = useState({
    name: name ?? "",
    price: String(price ?? 0),
    img: img ?? "",
    overview: overview ?? "",
    categoryId: categoryId ?? "",
  });
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCategoryChange = (value: string) => {
    setFormData((prev) => ({ ...prev, categoryId: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { updateFood } = foodsService();
      await updateFood(id, {
        ...formData,
        price: Number(formData.price),
      });
      setOpen(false);
      router.refresh();
    } catch (error) {
      console.error("Failed to update food:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          size="icon"
          className="absolute bottom-3 right-3 z-10 h-9 w-9 rounded-full border border-neutral-100/90 bg-white shadow-md hover:bg-neutral-50"
        >
          <Pencil className="h-4 w-4 text-red-500" />
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-lg bg-white rounded-2xl p-6 gap-6 [&>button]:hidden">
        <DialogHeader className="flex flex-row items-center justify-between space-y-0">
          <DialogTitle className="text-xl font-semibold text-gray-900">
            Edit Dish
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
                name="name"
                value={formData.name}
                placeholder="Name"
                type="text"
                className="rounded-lg border-gray-200"
                onChange={handleChange}
              />

              <Label className="text-sm font-medium text-gray-700">
                Category
              </Label>
              {/* ⑥ Pass current categoryId & the updater callback */}
              <Selector
                defaultValue={String(categoryId ?? "")}
                onValueChange={handleCategoryChange}
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
                value={formData.price}
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
              name="overview"
              value={formData.overview}
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
              value={formData.img}
              placeholder="https://example.com/image.jpg"
              type="url"
              className="rounded-lg border-gray-200"
              onChange={handleChange}
            />
          </div>

          <div className="flex justify-end pt-1">
            <Button
              type="submit"
              disabled={loading}
              className="bg-gray-900 hover:bg-gray-800 text-white rounded-xl px-6"
            >
              {loading ? (
                <LoaderCircle className="animate-spin" />
              ) : (
                "Update Dish"
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
