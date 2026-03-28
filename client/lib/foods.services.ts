import api from "./api";
import { Categories } from "./types";

export const foodsService = () => {
  const getAllCategories = async () => {
    const { data } = await api.get("/categories");
    // console.log("service sided log:", data);
    return data;
  };
  return {
    getAllCategories,
  };
};
