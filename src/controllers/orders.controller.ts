import { Request, Response } from "express";
import { getAllOrders, realizeOrder } from "../services/orders.services";

export const getOrders = async (req: Request, res: Response) => {
  const result = await getAllOrders();

  res.json(result);
};

export const newOrder = async (req: Request, res: Response) => {
  const order = req.body;

  const result = await realizeOrder(order);

  res.json(result);
};
