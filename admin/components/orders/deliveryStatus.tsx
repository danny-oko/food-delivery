"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const STATUSES = ["PENDING", "DELIVERED", "CANCELLED"] as const;
type Status = (typeof STATUSES)[number];

const STATUS_LABEL: Record<Status, string> = {
  PENDING: "Pending",
  DELIVERED: "Delivered",
  CANCELLED: "Cancelled",
};

export function OrderStatus({
  def,
  onStatusChange,
}: {
  def: string;
  onStatusChange?: (newStatus: string) => void;
}) {
  const [current, setCurrent] = useState<string>(def);
  const [open, setOpen] = useState(false);

  const handleSelect = (status: Status) => {
    setCurrent(status);
    onStatusChange?.(status);
    setOpen(false);
  };

  const label = STATUS_LABEL[current as Status] ?? current;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          className="flex w-full items-center justify-between gap-1 cursor-pointer"
        >
          <span>{label}</span>
          <ChevronDown size={14} className="shrink-0 text-neutral-400" />
        </button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-36 p-1">
        <div className="flex flex-col">
          {STATUSES.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => handleSelect(s)}
              className={`rounded-md px-3 py-2 text-left text-sm transition-colors hover:bg-neutral-100 ${
                current === s
                  ? "font-medium text-neutral-900"
                  : "text-neutral-600"
              }`}
            >
              {STATUS_LABEL[s]}
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
