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
  onValueChange: (value: string) => void;
};

export type UpdateFoodPayload = {
  name: string;
  price: number;
  img: string;
  overview: string;
  categoryId: string | number;
};

export type Order = {
  id: number;
  userId: number;
  status: "PENDING" | "DELIVERED" | "CANCELED";
  totalAmount: number;
  createdAt: string;
  user: User;
  items: OrderItems[];
};

export type User = {
  id: number;
  role: "ADMIN" | "USER";
  name: string;
  email: string;
  password: string;
  age: number;
  tel: string;
  items: OrderItems[];
};

export type OrderItems = {
  id: number;
  quantity: number;
  foodId: number;
  foodOrderId: number;
  food: FoodType[];
};

export type MappedOrderItem = {
  foodName: string;
  quantity: number;
  price: string;
};

export type MappedOrder = {
  id: number;
  status: "PENDING" | "CANCELED" | "DELIVERED";
  userEmail: string;
  totalAmount: number;
  createdAt: string;
  items: MappedOrderItem[];
};
