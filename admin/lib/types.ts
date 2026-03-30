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
  createdAt: string;
  updatedAt: string;
  foods: FoodType[];
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

export type User = {
  id: number;
  role: string;
  name: string;
  email: string;
  password: string;
  age: number;
  tel: string;
};

export type Order = {
  id: number;
  userId: number;
  status: "PENDING" | "CANCELED" | "DELIVERED";
  totalAmount: number;
  createdAt: string;
  user: User;
  items: FoodType[];
};

export type OrdersResponse = {
  orders: Order[];
};