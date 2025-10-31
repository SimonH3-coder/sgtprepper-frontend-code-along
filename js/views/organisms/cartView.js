import { Div, Li, Ul } from "../atoms/index.js";

export const cartListView = (data = []) => {
  const element = Ul();

  data.forEach((item) => {
    const li = Li("flex justify-between");

    const quantity = Div("w-[50px]");
    quantity.innerText = item.quantity;
    li.append(quantity);

    const name = Div();
    name.innerText = item.product.name;
    li.append(name);

    const price = Div("text-right");
    price.innerText = price2Dkk(item.product.price);
    li.append(price);

    const action = Div();
    action.innerText = "Slet";
    li.append(action);

    element.append(li);
  });

  return element;
};
