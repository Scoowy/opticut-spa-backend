import { getAllOrders, realizeOrder } from "../services/orders.services";

export const getOrders = async (req, res) => {
  const result = await getAllOrders();

  res.json(result);
};

export const newOrder = async (req, res) => {
  const order = req.body;

  const result = await realizeOrder(order);

  res.json(result);
};
