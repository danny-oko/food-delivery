import React from "react";
import Image from "next/image";
import { Facebook, Instagram } from "lucide-react";
import ScrollVelocity from "@/components/ScrollVelocity";

const Footer = () => {
  return (
    <footer className="w-full bg-[#18181B] text-white">
      <div className="w-full bg-[#E11D48] py-6 overflow-hidden border-y border-white/10">
        <ScrollVelocity
          texts={["Fresh Fast Delivered", "Always fresh"]}
          velocity={50}
          className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white"
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          <div className="md:col-span-3">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10">
                <Image
                  src="/logo.png"
                  alt="NomNom Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl leading-tight tracking-tight">
                  Nom<span className="text-[#E11D48]">Nom</span>
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-medium">
                  Swift delivery
                </span>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="mb-6 font-bold text-[11px] tracking-[0.2em] uppercase text-zinc-500">
              NomNom
            </h4>
            <ul className="space-y-3 text-[14px] text-zinc-400">
              <li className="transition hover:text-white cursor-pointer hover:translate-x-1 duration-200">
                Home
              </li>
              <li className="transition hover:text-white cursor-pointer hover:translate-x-1 duration-200">
                Contact us
              </li>
              <li className="transition hover:text-white cursor-pointer hover:translate-x-1 duration-200">
                Delivery zone
              </li>
            </ul>
          </div>

          <div className="md:col-span-5 grid grid-cols-2 gap-4">
            <div>
              <h4 className="mb-6 font-bold text-[11px] tracking-[0.2em] uppercase text-zinc-500">
                Menu
              </h4>
              <ul className="space-y-3 text-[14px] text-zinc-400">
                <li className="transition hover:text-white cursor-pointer hover:translate-x-1 duration-200">
                  Appetizers
                </li>
                <li className="transition hover:text-white cursor-pointer hover:translate-x-1 duration-200">
                  Salads
                </li>
                <li className="transition hover:text-white cursor-pointer hover:translate-x-1 duration-200">
                  Pizzas
                </li>
                <li className="transition hover:text-white cursor-pointer hover:translate-x-1 duration-200">
                  Main dishes
                </li>
                <li className="transition hover:text-white cursor-pointer hover:translate-x-1 duration-200">
                  Desserts
                </li>
              </ul>
            </div>
            <div className="pt-[41px]">
              {" "}
              <ul className="space-y-3 text-[14px] text-zinc-400">
                <li className="transition hover:text-white cursor-pointer hover:translate-x-1 duration-200">
                  Side dish
                </li>
                <li className="transition hover:text-white cursor-pointer hover:translate-x-1 duration-200">
                  Brunch
                </li>
                <li className="transition hover:text-white cursor-pointer hover:translate-x-1 duration-200">
                  Desserts
                </li>
                <li className="transition hover:text-white cursor-pointer hover:translate-x-1 duration-200">
                  Beverages
                </li>
                <li className="transition hover:text-white cursor-pointer hover:translate-x-1 duration-200">
                  Fish & Sea foods
                </li>
              </ul>
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="mb-6 font-bold text-[11px] tracking-[0.2em] uppercase text-zinc-500">
              Follow us
            </h4>
            <div className="flex gap-5 text-zinc-400">
              <Facebook
                size={22}
                className="transition-all hover:text-[#E11D48] hover:scale-110 cursor-pointer"
              />
              <Instagram
                size={22}
                className="transition-all hover:text-[#E11D48] hover:scale-110 cursor-pointer"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mt-24 pt-8 border-t border-zinc-800/50">
          <p className="text-[11px] text-zinc-500 font-medium">
            © 2026 NomNom LLC. All rights reserved.
          </p>
          <div className="flex gap-8 text-[11px] text-zinc-500 font-medium">
            <span className="transition hover:text-white cursor-pointer">
              Privacy policy
            </span>
            <span className="transition hover:text-white cursor-pointer">
              Terms & Conditions
            </span>
            <span className="transition hover:text-white cursor-pointer">
              Cookie policy
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
