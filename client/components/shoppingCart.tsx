import { ShoppingCart } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

{
  /* <ShoppingCart
  className="bg-white p-4 rounded-full text-black"
  size={20}
  color="black"
/>; */
}

export const Cart = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          aria-label="Open cart"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-md transition-colors hover:bg-gray-100"
        >
          <ShoppingCart className="h-5 w-5 text-black" />
        </button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          <div className="grid gap-3">
            <Input id="sheet-demo-name" defaultValue="Pedro Duarte" />
          </div>
          <div className="grid gap-3">
            <Input id="sheet-demo-username" defaultValue="@peduarte" />
          </div>
        </div>
        <SheetFooter>
          <Button type="submit">Save changes</Button>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
