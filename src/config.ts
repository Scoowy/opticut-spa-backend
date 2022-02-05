import dotenv from "dotenv";

dotenv.config();

const SERVICE_PRODUCTS_API =
  process.env.SERVICE_PRODUCTS_API_URL || "SEVICE_URL";
const SERVICE_ORDERS_API = process.env.SERVICE_ORDERS_API_URL || "SERVICE_URL";
const PORT = process.env.PORT || 3000;
const CORS_ORIGIN = process.env.CORS_ORIGIN || "*";

export default { SERVICE_PRODUCTS_API, SERVICE_ORDERS_API, PORT, CORS_ORIGIN };
