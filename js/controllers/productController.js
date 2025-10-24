import { getList } from "../models/categoryModel.js";

import { ProductListView } from "../views/organisms/productViews.js";
import { Layout } from "./layoutController.js";

export const ProductPage = async () => {
  const { category = "vand-og-vandrensning" } = Object.fromEntries(new URLSearchParams(location.search));

  //Bygger prodkt liste
  const data = await getList(category);
  const html = ProductListView(data);

  // Samler og returnerer side layoutet
  const layout = Layout("Produkter", html);
  return layout;
};
