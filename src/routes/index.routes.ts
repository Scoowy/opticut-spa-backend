import { Request, Response, Router } from "express";
import productsRoutes from "./products.routes";
import ordersRoutes from "./orders.routes";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  const response = {
    status: "OK",
    message: "Welcome to OptiCut-SPA Backend",
    code: 200,
  };
  res.json(response);
});

router.use("/products", productsRoutes);
router.use("/orders", ordersRoutes);

export default router;
