import { price2Dkk } from "../../utils/index.js";
import { Div, Fragment, Heading, Paragraph, Image, Link, Form, Input, Button } from "../atoms/index.js";

export const ProductListView = (products, category) => {
  const element = Fragment();

  products.forEach((product) => {
    const { imageUrl, name, price, slug, stockText, stockClass, teaser } = product;

    const link = Link(`?category=${category}&product=${slug}`);

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
    cost.innerText = price2Dkk(price);

    const stockElm = Paragraph(stockClass);
    stockElm.innerText = stockText;
    cost.append(stockElm);

    div.append(cost);

    link.append(div);

    element.append(link);
  });
  return element;
};

export const ProductDetailsView = (product) => {
  const { id, name, imageUrl, description, price } = product;

  console.log(id);

  const element = Div("flex justify-between gap-4 p-4 border rounded-lg");

  const imageCol = Div("shrink-0 w-[300px");
  const img = Image(`http://localhost:4000${imageUrl}`, name, "w-[90%] flex-shrink-0 rounded");
  element.append(img);

  const infoCol = Div("flex-1 min-w-0");
  const h3 = Heading(name, 1, "font-bold mb-2");
  infoCol.append(h3);

  const p = Paragraph();
  p.innerHTML = description;
  infoCol.append(p);

  const form = Form("POST");
  const productId = Input("productId", "", "hidden", id);
  const quantity = Input("quantity", "", number, 0);
  const button = Button("Læg i kurv", "submit");

  form.append(productId, quantity, button);
  infoCol.append(form);

  const priceCol = Div("text-2xl");
  priceCol.innerHTML = price2Dkk(price);

  element.append(imageCol, infoCol, priceCol);
  return element;
};
