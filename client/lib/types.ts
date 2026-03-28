export type FoodType = {
  id: number;
  name: string;
  price: string;
  categoryId: number | null;
  img: string | null;
  overview: string | null;
  createdAt: Date | null;
  updatedAt: Date | null;
};

export type Genre = {
  id: number;
  name: string;
  createdAt: number;
  updatedAt: number;
};

export type Category = {
  id: number;
  name: string;
  foods: FoodType[];
  createdAt: string;
  updatedAt: string;
};
export type Categories = {
  results: Category[];
};

export type SelectorProps = {
  defaultValue?: string;
  onValueChange: (value: string) => void; // ← lift state up to EditButton
};

export type UpdateFoodPayload = {
  name: string;
  price: number;
  img: string;
  overview: string;
  categoryId: string | number;
};
