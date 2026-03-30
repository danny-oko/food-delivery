import { ordersService } from "@/lib/order.services";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { MappedOrder, Order } from "@/lib/types";

async function getData(): Promise<MappedOrder[]> {
  const { getAllOrders } = ordersService();
  const data = await getAllOrders();

  return data.orders.map((order: Order) => ({
    id: order.id,
    status: order.status,
    userEmail: order.user.email,
    totalAmount: order.totalAmount,
    createdAt: order.createdAt,
    items: order.items.map((item) => {
      const food = Array.isArray(item.food) ? item.food[0] : item.food;
      return {
        foodName: food?.name ?? "Food",
        quantity: item.quantity,
        price: food?.price ?? "0",
      };
    }),
  }));
}
export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="mx-auto w-full max-w-[1240px] px-6 py-6">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
