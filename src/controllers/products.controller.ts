import { Request, Response } from "express";
import { getAllPlanks } from "../services/products.services";

export const getPlanks = async (req: Request, res: Response) => {
  const planks = await getAllPlanks();

  res.json(planks).status(200);
};
