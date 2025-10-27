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
    cost.innerText = price;

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

  const element = Div("flex");
  const img = Image(`http://localhost:4000${imageUrl}`, name, "max-w-[250px]");
  element.append(img);

  const div1 = Div();
  const h3 = Heading(name, 3);
  div1.append(h3);

  const p = Paragraph();
  p.innerHTML = description;
  div1.append(p);

  const priceSection = Paragraph();
  priceSection.innerHTML = price;
  div1.append(priceSection);

  element.append(div1);

  return element;
};
