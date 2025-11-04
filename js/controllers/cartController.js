import { getCartList, removeFromCart } from "../models/cartModel.js";
import { Div } from "../views/atoms/index.js";
import { cartListHeaderView, cartListView, cartTotalView } from "../views/organisms/cartView.js";
import { Layout } from "../controllers/layoutController.js";
import { isLoggedIn } from "../services/auth.js";

export const Cartpage = async () => {
  if (!isLoggedIn()) {
    location.href = "/index.htm#/login";
    return false;
  }

  const data = await getCartList();

  const arrHeaderColumns = [
    { name: "Antal", className: "w-[10%] font-bold" },
    { name: "Produkt", className: "w-[60%] font-bold" },
    { name: "Pris", className: "w-[20%] font-bold" },
    { name: "Handling", className: "w-[10%] font-bold" },
  ];

  const totalPrice = data.reduce((sum, item) => {
    return sum + (item?.product?.price * item?.quantity || 0);
  }, 0);

  const html = Div();
  html.append(cartListHeaderView(arrHeaderColumns));
  html.append(cartListView(data));
  html.append(cartTotalView(totalPrice));
  attachCartListEvents(html);

  return Layout("Indkøbskurv", html);
};

const attachCartListEvents = (container) => {
  const deleteBtns = container.querySellectorAll("button[data-cartid]");
  deleteBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const cartId = e.target.dataset.cartid;
      removeFromCart(cartId);
    });
  });
};
