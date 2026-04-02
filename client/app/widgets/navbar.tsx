import React from "react";
import Image from "next/image";
import { MapPin, ShoppingCart, User } from "lucide-react";
import { Cart } from "@/components/shoppingCart";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between w-full h-18 px-32 border-b border-zinc-800 bg-[#18181B]">
      <div className="flex items-center gap-2">
        <div className="relative w-10 h-10">
          <Image
            src="/logo.png"
            alt="NomNom Logo"
            fill
            className="object-contain"
          />
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-lg leading-tight text-white">
            Nom<span className="text-[#E11D48]">Nom</span>
          </span>
          <span className="text-xs text-zinc-400">Swift delivery</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="md:flex hidden items-center gap-2 px-4 py-2 rounded-full bg-white text-sm">
          <MapPin size={18} className="text-[#E11D48]" />
          <span className="text-zinc-500">Delivery address:</span>
          <span className="font-medium text-zinc-800">Add Location</span>
          <span className="ml-1 text-zinc-400">›</span>
        </button>

        <Cart />

        <button className="flex items-center justify-center w-10 h-10 rounded-full bg-[#E11D48] text-white">
          <User size={20} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
