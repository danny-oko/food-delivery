import { ordersService } from "@/lib/order.services";
import { MappedOrder, Order } from "@/lib/types";
import { columns } from "./columns";
import { DataTable } from "./data-table";

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
        id: food?.id,
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
    <div className="mx-auto w-full max-w-full pr-12 py-12">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
