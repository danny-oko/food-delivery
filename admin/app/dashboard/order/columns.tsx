"use client";

import { Order } from "@/lib/types";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Order>[] = [
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "userEmail",
    header: "Email",
  },
  {
    accessorKey: "totalAmount",
    header: "Amount",
  },
];
