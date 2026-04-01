import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDown } from "lucide-react";
import { MappedOrderItem } from "@/lib/types";

export function OrderedItems({ items }: { items: MappedOrderItem[] }) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <p className="flex items-center justify-around cursor-pointer">
          {items.length} {items.length === 1 ? "food" : "foods"}
          <ChevronDown size={16} />
        </p>
      </PopoverTrigger>
      <PopoverContent align="start" className="">
        <div className="flex flex-col gap-2">
          {items.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <p className="text-sm text-neutral-700">{item.foodName}</p>
              <div className="flex items-center gap-3">
                <p className="text-sm text-neutral-500">${item.price}</p>
                <p className="text-sm text-neutral-500">x{item.quantity}</p>
              </div>
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
