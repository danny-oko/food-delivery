"use client";
import { Plus } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { ChangeEventHandler, useState } from "react";
import api from "@/lib/axios";
import { useRouter } from "next/navigation";

export const AddButton = () => {
  const router = useRouter();

  const [categoryName, setCategoryName] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setCategoryName(event.target.value);
    // console.log(event.target.value);
  };

  const handleAddCategory = async () => {
    setLoading(true);
    try {
      await api.post("/categories", { name: categoryName });
      setOpen(false);
      router.refresh();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="w-10 h-10 rounded-full bg-red-500 hover:bg-red-600 transition-colors flex items-center justify-center text-white text-xl font-light shadow-sm">
          <Plus size={16} />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-white">
        <DialogHeader className="flex flex-col gap-3">
          <DialogTitle>Add new Category</DialogTitle>
          <DialogDescription>Category Name</DialogDescription>
        </DialogHeader>
        <div className="flex items-center gap-2">
          <div className="grid flex-1 gap-2">
            {/* <Label htmlFor="categoryName">Category Name</Label> */}
            <Input
              id="categoryName"
              placeholder="e.g Fast Food"
              onChange={onChange}
            />
          </div>
        </div>
        <DialogFooter className="sm:justify-end">
          <Button
            type="button"
            variant={"outline"}
            onClick={handleAddCategory}
            disabled={loading}
          >
            {loading ? "Adding..." : "Add category"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
