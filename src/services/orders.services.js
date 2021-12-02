import axios from "axios";

const PRODUCTS_URL = "https://opticut-orders-api.herokuapp.com";

export const getAllOrders = async () => {
  const result = await axios.get(`${PRODUCTS_URL}/api/orders`);

  return result.data;
};

export const realizeOrder = async (order) => {
  console.log(order);
  try {
    const result = await axios.post(`${PRODUCTS_URL}/api/orders`, order);
    return result.data;
  } catch (e) {
    console.log(e.message);
    return { message: e.message };
  }
};
