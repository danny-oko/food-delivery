"use client";

import { ShoppingCart, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { useContext, useEffect, useState } from "react";
import { CardContext } from "@/context/cartContext";

const SHIPPING = 0.99;

// need help!

export const Cart = () => {
  // useEffect(() => {
  //   async () => {
  //     try {
  //     } catch (error) {}
  //   };
  // });

  const { card } = useContext(CardContext);
  // const foodCard = card.map((food) => {
  //   return {
  //     food: food.food,
  //     quantity: food.quantity,
  //   };
  // });

  // console.log("foodCard:", foodCard);

  console.log("card on card sheet:", card);
  const [activeTab, setActiveTab] = useState<"cart" | "order">("cart");

  const itemsTotal = card.reduce(
    (sum, item) => sum + Number(item.food.price) * item.quantity,
    0,
  );
  const total = itemsTotal + SHIPPING;

  const handleOrder = () => {
    // const payload = {
    // card.
    // }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          aria-label="Open cart"
          className="relative flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-md transition-colors hover:bg-gray-100"
        >
          <ShoppingCart className="h-5 w-5 text-black" />
          {card.length > 0 && (
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
              {card.length}
            </span>
          )}
        </button>
      </SheetTrigger>

      <SheetContent className="flex w-full flex-col gap-0 overflow-y-auto bg-[#2a2a2a] p-5 sm:max-w-md [&>button]:text-white">
        <SheetHeader className="mb-5">
          <SheetTitle className="flex items-center gap-2 text-white">
            <ShoppingCart className="h-5 w-5" />
            Order detail
          </SheetTitle>
        </SheetHeader>

        <div className="mb-5 flex rounded-full bg-white p-1">
          <button
            onClick={() => setActiveTab("cart")}
            className={`flex-1 rounded-full py-2 text-sm font-semibold transition-colors ${
              activeTab === "cart"
                ? "bg-red-500 text-white"
                : "text-gray-500 hover:text-gray-800"
            }`}
          >
            Cart
          </button>
          <button
            onClick={() => setActiveTab("order")}
            className={`flex-1 rounded-full py-2 text-sm font-semibold transition-colors ${
              activeTab === "order"
                ? "bg-red-500 text-white"
                : "text-gray-500 hover:text-gray-800"
            }`}
          >
            Order
          </button>
        </div>

        {activeTab === "cart" && (
          <div className="flex flex-col gap-4">
            <div className="rounded-2xl bg-white p-4">
              <h2 className="mb-4 text-lg font-bold text-gray-900">My cart</h2>

              {card.length === 0 ? (
                <p className="py-6 text-center text-sm text-gray-400">
                  Your cart is empty
                </p>
              ) : (
                <div className="flex flex-col">
                  {card.map((item, index) => (
                    <div key={`${item.food.id}-${index}`}>
                      {index > 0 && (
                        <div className="my-4 border-t border-dashed border-gray-200" />
                      )}
                      <div className="flex gap-3">
                        <img
                          src={item.food.img || ""}
                          alt={item.food.name}
                          className="h-24 w-24 flex-shrink-0 rounded-xl object-cover"
                        />

                        <div className="flex flex-1 flex-col justify-between">
                          <div className="flex items-start justify-between">
                            <div className="flex-1 pr-2">
                              <p className="font-bold text-red-500">
                                {item.food.name}
                              </p>
                              <p className="mt-0.5 text-xs leading-snug text-gray-500 line-clamp-2">
                                {item.food.overview}
                              </p>
                            </div>
                            <button
                              // onClick={() => removeFromCard(item.food.id)}
                              className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-red-400 text-red-400 transition-colors hover:bg-red-50"
                              aria-label="Remove item"
                            >
                              <X className="h-3.5 w-3.5" />
                            </button>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <button
                                // onClick={() =>
                                //   updateQuantity(
                                //     item.food.id,
                                //     Math.max(1, item.quantity - 1),
                                //   )
                                // }
                                className="text-lg font-light text-gray-600 hover:text-gray-900"
                                aria-label="Decrease"
                              >
                                −
                              </button>
                              <span className="w-5 text-center font-bold text-gray-900">
                                {item.quantity}
                              </span>
                              <button
                                // onClick={() =>
                                //   updateQuantity(
                                //     item.food.id,
                                //     item.quantity + 1,
                                //   )
                                // }
                                className="text-lg font-light text-gray-600 hover:text-gray-900"
                                aria-label="Increase"
                              >
                                +
                              </button>
                            </div>
                            <span className="font-bold text-gray-900">
                              $
                              {(
                                Number(item.food.price) * item.quantity
                              ).toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <button className="mt-4 w-full rounded-full border border-red-400 py-3 text-sm font-semibold text-red-500 transition-colors hover:bg-red-50">
                Add food
              </button>
            </div>

            <div className="rounded-2xl bg-white p-4">
              <h2 className="mb-4 text-lg font-bold text-gray-900">
                Payment info
              </h2>
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Items</span>
                  <span className="font-bold text-gray-900">
                    ${itemsTotal.toFixed(2)}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Shipping</span>
                  <span className="font-bold text-gray-900">
                    {SHIPPING.toFixed(2)}$
                  </span>
                </div>
                <div className="border-t border-dashed border-gray-200" />
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Total</span>
                  <span className="font-bold text-gray-900">
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>

              <button
                className="mt-4 w-full rounded-full bg-red-500 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-600 active:scale-[0.98]"
                onClick={handleOrder}
              >
                Checkout
              </button>
            </div>
          </div>
        )}

        {activeTab === "order" && (
          <div className="rounded-2xl bg-white p-6 text-center">
            <p className="text-sm text-gray-400">No active orders yet.</p>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};
