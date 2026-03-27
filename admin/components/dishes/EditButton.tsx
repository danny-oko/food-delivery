"use client";

import { Pencil, Plus, X } from "lucide-react";
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

export const EditButton = (
  {
    // id,
    // name,
    // price,
    // img,
    // overview,
    // categoryId,
  },
) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="icon"
          className="absolute bottom-5 right-5 rounded-full bg-white hover:bg-gray-100 h-12 w-12 shadow-md"
        >
          <Pencil className="h-5 w-5 text-red-500" />
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-lg bg-white rounded-2xl p-6 gap-6 [&>button]:hidden">
        <DialogHeader className="flex flex-row items-center justify-between space-y-0">
          <DialogTitle className="text-xl font-semibold text-gray-900">
            Add new Dish to
          </DialogTitle>
          <DialogClose className="rounded-full border border-gray-200 p-1.5 hover:bg-gray-100 transition-colors">
            <X className="h-4 w-4 text-gray-500" />
          </DialogClose>
        </DialogHeader>

        <form className="flex flex-col gap-5">
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
                // onChange={handleChange}
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
                // onChange={handleChange}
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
              // onChange={handleChange}
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
              // onChange={handleChange}
            />
          </div>

          <div className="flex justify-end pt-1">
            <Button
              type="submit"
              className="bg-gray-900 hover:bg-gray-800 text-white rounded-xl px-6"
            >
              {/* {loading ? (
                <LoaderCircle className="animate-spin" />
              ) : (
                <p>Add Dish</p>
              )} */}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
