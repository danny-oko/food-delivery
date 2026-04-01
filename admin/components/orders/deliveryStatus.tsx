import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDown } from "lucide-react";
import { MappedOrderItem } from "@/lib/types";

export function OrderStatus({ status, def }: { status: String, def: String }) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <p className="flex items-center justify-around cursor-pointer">
          {def}
        </p>
      </PopoverTrigger>
      <PopoverContent align="start">
        <div className="flex flex-col gap-2">

        </div>
      </PopoverContent>
    </Popover>
  );
}
