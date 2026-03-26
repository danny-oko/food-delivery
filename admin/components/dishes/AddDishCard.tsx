import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Pencil, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
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
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const AddDishCard = ({ category }: { category: string }) => {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Card className="border-2 border-dashed border-red-300 flex flex-col items-center justify-center gap-3 cursor-pointer hover:bg-red-50 transition-colors min-h-[220px] shadow-none">
            {" "}
            <Button
              size="icon"
              className="rounded-full bg-red-500 hover:bg-red-600 h-10 w-10"
            >
              <Plus className="h-5 w-5" />
            </Button>
            <p className="text-sm text-gray-500 text-center">
              Add new Dish to {category}
            </p>
          </Card>
        </DialogTrigger>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="name-1">Name</Label>
              <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
            </Field>
            <Field>
              <Label htmlFor="username-1">Username</Label>
              <Input id="username-1" name="username" defaultValue="@peduarte" />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
};

export default AddDishCard;
