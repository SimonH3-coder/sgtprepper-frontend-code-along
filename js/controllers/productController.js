import { getDetails, getList } from "../models/productModel.js";
import { ProductDetailsView, ProductListView } from "../views/organisms/productViews.js";
import { Layout } from "./layoutController.js";

export const ProductPage = async () => {
  const { category = "vand-og-vandrensning", product } = Object.fromEntries(new URLSearchParams(location.search));
  let html = "";

  if (!product) {
    html = ProductList();
  } else {
    html = ProductDetails(product);
  }
  return html;
};

export const ProductList = async () => {
  const { category = "vand-og-vandrensning" } = Object.fromEntries(new URLSearchParams(location.search));

  //Bygger produkt liste
  const data = await getList(category);

  const formattedProducts = data.map((item) => ({
    ...item,
    stockText: item.stock ? "På lager" : "Forventes på lager indenfor få uger",
    stockClass: item.stock ? "text-green-600" : "text-red-600",
  }));

  const html = ProductListView(formattedProducts, category);

  // Samler og returnerer side layoutet
  const layout = Layout("Produkter", html);
  return layout;
};

export const ProductDetails = async (product) => {
  const data = await getDetails(product);

  const html = ProductDetailsView(data);
  const layout = Layout("produkt", html);
  return layout;
};
