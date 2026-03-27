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
import { Category, SelectorProps } from "@/lib/types";
import { useEffect, useState } from "react";

export const Selector = ({ defaultValue, onValueChange }: SelectorProps) => {
  const [data, setData] = useState<Category[]>();

  useEffect(() => {
    const categories = async () => {
      try {
        const { getAllCategories } = foodsService();
        const { results } = await getAllCategories();
        setData(results);
      } catch (error) {
        console.log(error);
      }
    };
    categories();
  }, []);

  return (
    <Select defaultValue={defaultValue} onValueChange={onValueChange}>
      <SelectTrigger className="w-full max-w-48">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup className="bg-white">
          <SelectLabel>Choose categories</SelectLabel>
          {data?.map((category) => (
            <SelectItem key={category.id} value={category.id.toString()}>
              {category.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
