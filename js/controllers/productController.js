import { getList } from "../models/categoryModel.js";

import { ProductListView } from "../views/organisms/productViews.js";
import { Layout } from "./layoutController.js";

export const ProductPage = async () => {
  const { category = "vand-og-vandrensning" } = Object.fromEntries(new URLSearchParams(location.search));

  //Bygger prodkt liste
  const data = await getList(category);

  const formattedProducts = data.map((item) => ({
    ...item,
    stockText: item.stock ? "På lager" : "Forventes på lager indenfor få uger",
    stockClass: item.stock ? "text-green-600" : "text-red-600",
  }));

  const html = ProductListView(formattedProducts);

  // Samler og returnerer side layoutet
  const layout = Layout("Produkter", html);
  return layout;
};
