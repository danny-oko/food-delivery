"use client";

import { OrderStatus } from "@/components/orders/deliveryStatus";
import { OrderedItems } from "@/components/orders/orderedFoods";
import { MappedOrder } from "@/lib/types";
import { ColumnDef } from "@tanstack/react-table";

// Extend TanStack's TableMeta so TypeScript knows about our custom callback
declare module "@tanstack/react-table" {
  interface TableMeta<TData> {
    onStatusChange?: (id: number, newStatus: string) => void;
  }
}

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
    cell: ({ row, table }) => {
      const { onStatusChange } = table.options.meta ?? {};

      return (
        <span className="inline-flex h-8 min-w-[110px] items-center justify-between rounded-full border border-neutral-200 bg-white px-3 text-xs font-medium text-neutral-700">
          <OrderStatus
            def={row.original.status}
            onStatusChange={(newStatus) =>
              onStatusChange?.(row.original.id, newStatus)
            }
          />
        </span>
      );
    },
  },
];
