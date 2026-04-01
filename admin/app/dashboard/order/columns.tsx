"use client";

import { OrderStatus } from "@/components/orders/deliveryStatus";
import { OrderedItems } from "@/components/orders/orderedFoods";
import { MappedOrder } from "@/lib/types";
import { ColumnDef } from "@tanstack/react-table";

const formatCurrency = (amount: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);

const formatDate = (date: string) => {
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return date;
  return parsed.toLocaleDateString("en-CA");
};

export const columns: ColumnDef<MappedOrder>[] = [
  {
    id: "select",
    header: () => (
      <input
        type="checkbox"
        aria-label="Select all orders"
        className="size-4 cursor-pointer rounded border border-neutral-300"
      />
    ),
    cell: () => (
      <input
        type="checkbox"
        aria-label="Select order"
        className="size-4 cursor-pointer rounded border border-neutral-300"
      />
    ),
  },
  {
    accessorKey: "id",
    header: "№",
  },
  {
    accessorKey: "userEmail",
    header: "Customer",
  },
  {
    id: "food",
    header: "Food",
    cell: ({ row }) => <OrderedItems items={row.original.items} />,
  },
  {
    accessorKey: "createdAt",
    header: "Date",
    cell: ({ row }) => formatDate(row.original.createdAt),
  },
  {
    accessorKey: "totalAmount",
    header: "Total",
    cell: ({ row }) => formatCurrency(row.original.totalAmount),
  },
  {
    id: "deliveryAddress",
    header: "Delivery Address",
    cell: () => <span className="text-neutral-400">-</span>,
  },
  {
    accessorKey: "status",
    header: "Delivery state",
    cell: ({ row }) => {
      const stateText =
        row.original.status === "PENDING"
          ? "Pending"
          : row.original.status === "DELIVERED"
            ? "Delivered"
            : "Cancelled";

        const def = row.original.status; 
      
      return (
        <span className="inline-flex h-8 min-w-[96px] items-center justify-center rounded-full border border-neutral-200 bg-white px-3 text-xs font-medium text-neutral-700">
          <OrderStatus status={stateText} def={def} />
        </span>
      );
    },
  },
];
