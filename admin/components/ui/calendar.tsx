"use client";

import * as React from "react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: React.ComponentProps<typeof DayPicker>) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col gap-4 sm:flex-row sm:gap-6",
        month: "space-y-4",
        caption: "relative flex items-center justify-center pt-1",
        caption_label: "text-sm font-medium",
        nav: "flex items-center gap-1",
        nav_button:
          "h-7 w-7 rounded-md border border-neutral-200 text-neutral-700 hover:bg-neutral-50",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell:
          "w-9 rounded-md text-[0.8rem] font-normal text-neutral-500",
        row: "mt-2 flex w-full",
        cell: "relative h-9 w-9 p-0 text-center text-sm",
        day: "h-9 w-9 rounded-md p-0 font-normal hover:bg-neutral-100",
        day_selected:
          "bg-neutral-900 text-white hover:bg-neutral-900 hover:text-white",
        day_today: "border border-neutral-300",
        day_outside: "text-neutral-400 opacity-60",
        day_disabled: "text-neutral-300 opacity-50",
        day_range_middle:
          "rounded-none bg-neutral-100 text-neutral-900 hover:bg-neutral-100",
        day_hidden: "invisible",
        ...classNames,
      }}
      {...props}
    />
  );
}

export { Calendar };
