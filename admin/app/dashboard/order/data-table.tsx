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

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
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
            className="h-10 rounded-full bg-neutral-200 px-5 text-sm font-medium text-neutral-500"
          >
            Change delivery state
          </button>
        </div>
      </div>

      <Table className="[&_td]:h-14 [&_td]:px-4 [&_th]:px-4">
        <TableHeader className="bg-neutral-50">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id} className="hover:bg-transparent">
              {headerGroup.headers.map((header) => {
                return (
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
                );
              })}
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
