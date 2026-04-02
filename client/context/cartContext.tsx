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
};

type CardContextProviderType = {
  children: ReactNode;
};

export const CardContext = createContext({} as CardContextType);

export const CartContextProvider = ({ children }: CardContextProviderType) => {
  const [card, setCard] = useState<FoodCard[]>([]);

  const addCard = (food: FoodType, quantity: number) => {
    setCard((prev) => [...prev, { food, quantity }]);
  };

  const value = {
    card,
    addCard,
  };

  return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
};
