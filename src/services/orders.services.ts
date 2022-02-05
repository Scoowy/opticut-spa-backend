import axios from "axios";
import config from "../config";

const ORDERS_URL = config.SERVICE_ORDERS_API + "/api";

export const getAllOrders = async () => {
  const response = await axios.get(`${ORDERS_URL}/orders`);

  return response.data;
};

export const realizeOrder = async (order) => {
  console.log(order);
  try {
    const response = await axios.post(`${ORDERS_URL}/orders`, order);
    return response.data;
  } catch (e) {
    console.log(e.message);
    return { message: e.message };
  }
};
