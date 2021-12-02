import { Router } from "express";
import * as ordersCtrl from "../controllers/orders.controller";

const router = Router();

router.get("/", ordersCtrl.getOrders);

router.post("/new-order", ordersCtrl.newOrder);

export default router;
