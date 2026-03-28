// components/app-sidebar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { LayoutGrid, Truck } from "lucide-react";

const navItems = [
  { title: "Food menu", icon: LayoutGrid, href: "/dashboard/menu" },
  { title: "Orders", icon: Truck, href: "/dashboard/order" },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar className="w-52 border-r border-neutral-100 bg-white">
      <SidebarHeader className="px-5 py-5">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-500 text-white">
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M7 11h10v8a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-8z" />
              <path d="M5 11V9a7 7 0 0 1 14 0v2" />
            </svg>
          </div>
          <div className="leading-tight">
            <p className="text-[15px] font-bold leading-none text-neutral-900">
              NomNom
            </p>
            <p className="mt-0.5 text-[11px] text-neutral-400">Swift delivery</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-3 pt-2">
        <SidebarMenu>
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <SidebarMenuItem key={item.title}>
                <Link
                  href={item.href}
                  className={`
                    flex w-full items-center gap-3 rounded-full px-3 py-2.5 text-sm font-medium transition-colors
                    ${
                      isActive
                        ? "bg-neutral-900 text-white"
                        : "text-neutral-900 hover:bg-neutral-100"
                    }
                  `}
                >
                  <item.icon
                    className={`h-4 w-4 shrink-0 ${isActive ? "text-white" : "text-neutral-400"}`}
                  />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
