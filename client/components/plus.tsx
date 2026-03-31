import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export const PlusButton = () => {
  return (
    <Button
      aria-label="Add to cart"
      className="absolute right-3 bottom-3 flex h-11 w-11 items-center justify-center rounded-full bg-white text-2xl font-light shadow-lg transition-colors duration-150 hover:bg-red-400"
    >
      <Plus className="h-5 w-5 text-red-400" />
    </Button>
  );
};
