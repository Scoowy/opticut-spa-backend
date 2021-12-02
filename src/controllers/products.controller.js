import { getAllPlanks } from "../services/products.services";

export const getPlanks = async (req, res) => {
  const planks = await getAllPlanks();

  res.json(planks).status(200);
};
