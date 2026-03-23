"use client";
import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pencil, Plus } from "lucide-react";
import AddDishCard from "@/components/dishes/AddDishCard";
import DishCard from "@/components/dishes/DishCard";
import axios from "axios";

const dummyDishes = [
  {
    id: 1,
    name: "Brie Crostini Appetizer",
    price: 12.99,
    description:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
    image:
      "https://images.unsplash.com/photo-1541014741259-de529411b96a?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    name: "Bruschetta Classic",
    price: 9.99,
    description:
      "Toasted bread topped with fresh tomatoes, garlic, basil, and olive oil.",
    image:
      "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    name: "Stuffed Mushrooms",
    price: 11.49,
    description:
      "Button mushrooms stuffed with cream cheese, herbs, and breadcrumbs.",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop",
  },
  {
    id: 4,
    name: "Shrimp Cocktail",
    price: 14.99,
    description:
      "Chilled jumbo shrimp served with zesty cocktail sauce and lemon wedges.",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop",
  },
  {
    id: 5,
    name: "Spinach Artichoke Dip",
    price: 10.99,
    description:
      "Creamy blend of spinach, artichoke hearts, and melted cheese with pita chips.",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop",
  },
];

const Appetizers = () => {
  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const data = await axios.get(`http://localhost:8787/categories`);
  //       console.log(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getData();
  // }, []);

  return (
    <div className="bg-white rounded-2xl p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">
        Appetizers <span className="font-normal">({dummyDishes.length})</span>
      </h2>
      <div className="grid grid-cols-4 gap-4">
        <AddDishCard category="Appetizers" />
        {dummyDishes.map((dish) => (
          <DishCard key={dish.id} dish={dish} />
        ))}
      </div>
    </div>
  );
};
export default Appetizers;
