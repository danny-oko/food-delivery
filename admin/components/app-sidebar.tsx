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
import { LayoutGrid, ShoppingBag } from "lucide-react";

const navItems = [
  { title: "Food menu", icon: LayoutGrid, href: "/menu" },
  { title: "Orders", icon: ShoppingBag, href: "/orders" },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar className="border-r border-gray-100 bg-white w-52">
      <SidebarHeader className="px-5 py-5">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-red-500 text-white text-lg shrink-0">
            🍽️
          </div>
          <div className="leading-tight">
            <p className="text-[15px] font-bold text-gray-900 leading-none">
              NomNom
            </p>
            <p className="text-[11px] text-gray-400 mt-0.5">Swift delivery</p>
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
                    flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium w-full
                    transition-colors
                    ${
                      isActive
                        ? "bg-gray-900 text-white"
                        : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                    }
                  `}
                >
                  <item.icon
                    className={`h-4 w-4 shrink-0 ${isActive ? "text-white" : "text-gray-400"}`}
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
