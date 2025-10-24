import { Div, Fragment, Heading, Paragraph, Image } from "../atoms/index.js";

export const ProductListView = (products) => {
  const element = Fragment();

  products.forEach((product) => {
    const { imageUrl, name, price, slug, stock, teaser } = product;

    const div = Div("border flex justify-between");
    const img = Image(`http://localhost:4000${imageUrl}`, name, "max-w-[200px]");

    div.append(img);

    const info = Div();
    const h2 = Heading(name, 2);
    const p = Paragraph();
    p.innerHTML = teaser;
    info.append(h2, p);
    div.append(info);

    const cost = Div("text-right border");
    cost.innerText = price;
    div.append(cost);

    element.append(div);
  });
  return element;
};
