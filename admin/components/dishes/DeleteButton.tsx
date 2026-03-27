"use client";

import { Trash } from "lucide-react";
import { Button } from "../ui/button";
import { LoaderCircle } from "lucide-react";

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
import api from "@/lib/axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function DeleteButton({
  foodId,
  foodName,
}: {
  foodId: number;
  foodName: string;
}) {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState<unknown>();

  const router = useRouter();

  // console.log(foodId, foodName);

  const handleDelete = async () => {
    setLoading(true);

    try {
      await api.delete(`/foods/${foodId}`);
      console.log("Dish deleted Successfully!");
      router.refresh();
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
      setOpen(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          size="icon"
          className="absolute bottom-5 left-5 rounded-full bg-white hover:bg-gray-100 h-12 w-12 shadow-md bg-red-500"
        >
          <Trash className="h-5 w-5 text-white" />
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-sm bg-white">
        <DialogHeader>
          <DialogTitle>Delete {foodName}? </DialogTitle>
        </DialogHeader>
        <DialogFooter className="sm:justify-between">
          <DialogClose asChild>
            <Button type="button">Close</Button>
          </DialogClose>
          <Button className="bg-red-500 text-white" onClick={handleDelete}>
            {loading ? (
              <LoaderCircle className="animate-spin" />
            ) : (
              <p>Delete</p>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
