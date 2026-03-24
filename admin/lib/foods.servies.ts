// services/foodsService.ts
import api from "./axios";
import { Categories, FoodType } from "./types";

export const foodsService = () => {
  const getAllCategories = async (): Promise<Categories[]> => {
    const { data } = await api.get("/categories");
    console.log("service sided log:", data);
    return data.categories;
  };

  const getAllFoods = async (): Promise<FoodType[]> => {
    const { data } = await api.get("/foods");
    return data.foods;
  };

  const getFoodsByCategory = async ({
    id,
  }: Pick<Categories, "id">): Promise<Categories> => {
    const { data } = await api.get(`/categories/${id}`);
    return data;
  };

  return { getAllCategories, getAllFoods, getFoodsByCategory };
};
