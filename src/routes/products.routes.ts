import { Router } from "express";

import * as productCtrl from "../controllers/products.controller";

const router = Router();

router.get("/", productCtrl.getPlanks);

export default router;
