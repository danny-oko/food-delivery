import api from "./axios";

export const ordersService = () => {
  const getAllOrders = async () => {
    const { data } = await api.get("/orders");
    return data;
  };

  return { getAllOrders };
};
