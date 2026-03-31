import api from "./api";

export const foodsService = () => {
  const getAllCategories = async () => {
    const { data } = await api.get("/categories");
    return data;
  };

  const getAllFoods = async () => {
    const { data } = await api.get("/foods");
    return data;
  };
  return {
    getAllCategories,
    getAllFoods,
  };
};
