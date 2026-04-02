"use client";
import { FoodType } from "@/lib/types";
import { ReactNode, useState, createContext } from "react";

type FoodCard = {
  food: FoodType;
  quantity: number;
};

type CardContextType = {
  card: FoodCard[];
  addCard: (food: FoodType, quantity: number) => void;
  removeCard: (foodId: number) => void;
  clearCard: () => void;
};

type CardContextProviderType = {
  children: ReactNode;
};

export const CardContext = createContext({} as CardContextType);

export const CartContextProvider = ({ children }: CardContextProviderType) => {
  const [card, setCard] = useState<FoodCard[]>(() => {
    if (typeof window === "undefined") return [];
    const stored = localStorage.getItem("cardItems");
    return stored ? JSON.parse(stored) : [];
  });

  const addCard = (food: FoodType, quantity: number) => {
    setCard((prev) => {
      const existing = prev.find((item) => item.food.id === food.id);
      const updated = existing
        ? prev.map((item) =>
            item.food.id === food.id
              ? { ...item, quantity: item.quantity + quantity }
              : item,
          )
        : [...prev, { food, quantity }];

      localStorage.setItem("cardItems", JSON.stringify(updated));
      return updated;
    });
  };

  const removeCard = (foodId: number) => {
    setCard((prev) => {
      const updated = prev.filter((item) => item.food.id !== foodId);
      localStorage.setItem("cardItems", JSON.stringify(updated));
      return updated;
    });
  };

  const clearCard = () => {
    setCard([]);
    localStorage.removeItem("cardItems");
  };

  return (
    <CardContext.Provider value={{ card, addCard, removeCard, clearCard }}>
      {children}
    </CardContext.Provider>
  );
};
