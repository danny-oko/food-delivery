"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

import { CardContext } from "@/context/cartContext";
import { FoodType } from "@/lib/types";
import { Plus, X } from "lucide-react";
import { useContext, useState } from "react";

export const PlusButton = ({ food }: { food: FoodType }) => {
  const [open, setOpen] = useState(false);
  const { addCard } = useContext(CardContext);
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity((q) => q + 1);
  const decrement = () => setQuantity((q) => Math.max(1, q - 1));
  const totalPrice = (Number(food.price) * quantity).toFixed(2);

  const handleAddToCard = () => {
    addCard(food, quantity);
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(val) => {
        setOpen(val);
        setQuantity(1);
      }}
    >
      <DialogTrigger asChild>
        <Button
          aria-label="Add to cart"
          className="absolute right-3 bottom-3 flex h-11 w-11 items-center justify-center rounded-full bg-white text-2xl font-light shadow-lg transition-colors duration-150 hover:bg-red-400 hover:[&_svg]:text-white"
        >
          <Plus className="h-5 w-5 text-red-400 transition-colors duration-150" />
        </Button>
      </DialogTrigger>

      <DialogContent className="!max-w-6xl sm:!max-w-6xl gap-0 overflow-hidden rounded-2xl p-0 shadow-2xl [&>button]:hidden">
        <div className="flex">
          <div className="w-[48%] shrink-0 p-6">
            <img
              src={food.img || ""}
              alt={food.name}
              className="h-full w-full object-cover rounded-lg"
            />
          </div>

          <div className="relative flex flex-1 flex-col justify-between p-8">
            <DialogClose className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 transition-colors hover:bg-gray-100">
              <X className="h-4 w-4" />
            </DialogClose>

            <div className="mt-2 pr-8">
              <h2 className="text-3xl font-bold text-red-500">{food.name}</h2>
              <p className="mt-3 text-base leading-relaxed text-gray-600">
                {food.overview}
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-sm text-gray-500">Total price</p>
                  <p className="text-3xl font-bold text-gray-900">
                    ${totalPrice}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={decrement}
                    disabled={quantity <= 1}
                    aria-label="Decrease quantity"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-xl font-light text-gray-600 transition-colors hover:bg-gray-100 disabled:opacity-40"
                  >
                    −
                  </button>
                  <span className="w-4 text-center text-lg font-medium text-gray-800">
                    {quantity}
                  </span>
                  <button
                    onClick={increment}
                    aria-label="Increase quantity"
                    className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-800 bg-white text-xl font-light text-gray-800 transition-colors hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>

              <Button type="button" onClick={handleAddToCard}>
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
