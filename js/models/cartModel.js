import { request } from "../services/fetch.js";

const url = `http://localhost:4000/api/cart`;

/**
 * Funktion til at opdatere kurv med
 * @param {Number} productId
 * @param {Number} quantity
 * @returns Boolean
 */

export const addToCart = async (productId, quantity) => {
  console.log(productId, quantity);

  try {
    const data = await request(url, "POST", {
      productId,
      quantity,
    });
    return data;
  } catch (error) {
    console.error(`Fejl i cart model addToCart: ${error}`);
  }
};
