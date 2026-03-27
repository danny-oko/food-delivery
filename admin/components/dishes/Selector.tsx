import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { foodsService } from "@/lib/foods.servies";
import { Category } from "@/lib/types";
import { useEffect, useState } from "react";

type SelectorProps = {
  categories: Category[];
};

export const Selector = () => {
  const [data, setData] = useState<Category[]>();

  useEffect(() => {
    const categories = async () => {
      try {
        const { getAllCategories } = foodsService();
        const { results } = await getAllCategories();
        setData(results);
        // console.log(results);
      } catch (error) {
        console.log(error);
      }
    };
    categories();
  }, []);

  return (
    <Select>
      <SelectTrigger className="w-full max-w-48">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup className="bg-white">
          <SelectLabel>Choose categories</SelectLabel>
          {data?.map((category) => (
            <SelectItem key={category.id} value={category.name}>
              {category.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
