import { price2Dkk } from "../../utils/index.js";
import { Div, Fragment, Heading, Paragraph, Image, Link } from "../atoms/index.js";

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

  const element = Div("flex justfy-between gap-4 p-4 border rounded-lg");
  const img = Image(`http://localhost:4000${imageUrl}`, name, "w-[300px] flec-shrink-0");
  element.append(img);

  const infoElm = Div();
  const h3 = Heading(name, 3, "font-bold");
  infoElm.append(h3);

  const p = Paragraph();
  p.innerHTML = description;
  infoElm.append(p);
  element.append(infoElm);

  const priceElm = Div("text-2xl");
  priceElm.innerHTML = price2Dkk(price);
  element.append(priceElm);

  return element;
};
