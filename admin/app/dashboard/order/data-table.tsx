"use client";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DatePickerWithRange } from "./date-picker-with-range";
import { useState } from "react";
import api from "@/lib/axios";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [pendingChanges, setPendingChanges] = useState<Record<number, string>>(
    {},
  );
  const [isSaving, setIsSaving] = useState(false);

  const changeCount = Object.keys(pendingChanges).length;

  const handleStatusChange = (id: number, newStatus: string) => {
    setPendingChanges((prev) => ({ ...prev, [id]: newStatus }));
  };

  const handleSaveChanges = async () => {
    if (changeCount === 0 || isSaving) return;
    setIsSaving(true);
    try {
      await Promise.all(
        Object.entries(pendingChanges).map(([id, status]) =>
          api.put(`/orders/${id}`, { status }),
        ),
      );
      setPendingChanges({});
    } catch (err) {
      console.error("Failed to update order statuses:", err);
    } finally {
      setIsSaving(false);
    }
  };

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    meta: {
      onStatusChange: handleStatusChange,
    },
  });

  return (
    <div className="rounded-2xl border border-neutral-200 bg-white">
      <div className="flex items-start justify-between gap-4 border-b border-neutral-200 px-6 py-4">
        <div>
          <h2 className="text-[30px] leading-none font-semibold tracking-tight text-neutral-900">
            Orders
          </h2>
          <p className="mt-2 text-sm text-neutral-500">{data.length} items</p>
        </div>
        <div className="flex items-center gap-3">
          <DatePickerWithRange />
          <button
            type="button"
            onClick={handleSaveChanges}
            disabled={changeCount === 0 || isSaving}
            className={`relative h-10 rounded-full px-5 text-sm font-medium transition-colors ${
              changeCount > 0
                ? "bg-neutral-900 text-white hover:bg-neutral-700"
                : "bg-neutral-200 text-neutral-400 cursor-not-allowed"
            }`}
          >
            {isSaving ? "Saving…" : "Change delivery state"}
            {changeCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-white border border-neutral-200 text-[11px] font-semibold text-neutral-900 shadow-sm">
                {changeCount}
              </span>
            )}
          </button>
        </div>
      </div>
      <Table className="[&_td]:h-14 [&_td]:px-4 [&_th]:px-4">
        <TableHeader className="bg-neutral-50">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id} className="hover:bg-transparent">
              {headerGroup.headers.map((header) => (
                <TableHead
                  key={header.id}
                  className="h-12 text-xs font-medium tracking-wide text-neutral-500 uppercase"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
                className="border-b border-neutral-100 text-sm text-neutral-700 hover:bg-neutral-50/60"
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={columns.length}
                className="h-24 text-center text-neutral-500"
              >
                No orders yet.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
