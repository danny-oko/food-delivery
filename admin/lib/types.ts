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
