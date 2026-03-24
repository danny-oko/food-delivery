import { foodsService } from "@/lib/foods.servies";
import { Categories } from "@/lib/types";
import { useEffect, useState } from "react";

export const useCategories = () => {
  const [categories, setCategories] = useState<Categories[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const { getAllCategories } = foodsService();
    getAllCategories()
      .then(setCategories)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  return { categories, loading, error };
};
