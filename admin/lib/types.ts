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

export type Categories = {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  foods: FoodType[];
};
