import { FoodType, Order, OrdersResponse } from "@/lib/types";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { ordersService } from "@/lib/order.services";

type MappedOrder = {
  id: number;
  userEmail: string;
  foods: FoodType[];
  date: number;
  totalAmount: number;
  status: string;
};

// userId: number;

async function getData(): Promise<any> {
  const { getAllOrders } = ordersService();
  const data = await getAllOrders();
  const res = await data.json();
  return res;
  //   return data.orders.map((order: Order) => ({
  //     id: order.id,
  //     userEmail: order.user.email,
  //     totalAmount: order.totalAmount,
  //     status: order.status,
  //     userId: order.userId,
  //     items: order.items,
  //   }));
}

export default async function DemoPage() {
  const data = await getData();
  console.log(data);
  return;
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
