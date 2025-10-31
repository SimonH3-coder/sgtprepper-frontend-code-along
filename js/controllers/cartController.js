import { getCartList } from "../models/cartModel.js";
import { cartListView } from "../views/organisms/cartView.js";
import { Layout } from "../controllers/layoutController.js";

export const Cartpage = async () => {
  const data = await getCartList();
  const html = cartListView(data);
  return Layout("Indkøbskurv", html);
};
