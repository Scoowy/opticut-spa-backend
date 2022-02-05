import axios from "axios";
import config from "config";

const PRODUCTS_URL = config.SERVICE_PRODUCTS_API + "/api";

export const getAllPlanks = async () => {
  const response = await axios.get(`${PRODUCTS_URL}/products/planks`);

  return response.data;
};
