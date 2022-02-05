import axios from "axios";

const PRODUCTS_URL = "https://opticut-products-api.herokuapp.com";

export const getAllPlanks = async () => {
  const respuesta = await axios.get(`${PRODUCTS_URL}/api/products/planks`);

  return respuesta.data;
};
