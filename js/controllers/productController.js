import { addToCart } from "../models/cartModel.js";
import { getDetails, getList } from "../models/productModel.js";
import { isLoggedIn } from "../services/auth.js";
import { ProductDetailsView, ProductListView } from "../views/organisms/productViews.js";
import { Layout } from "./layoutController.js";

// Funktion der styrer hvilken produktside der skal vises
export const ProductPage = async () => {
  isLoggedIn();
  // Henter værdier fra URL'en (fx ?category=mad&product=123)
  const { category = "vand-og-vandrensning", product } = Object.fromEntries(new URLSearchParams(location.search));
  let html = "";

  // Hvis der IKKE er valgt et specifikt produkt - vis produktliste
  if (!product) {
    html = ProductList();
  }
  // Ellers - vis detaljer for det valgte produkt
  else {
    html = ProductDetails(product);
  }

  //Returner det færdige HTML-indhold til siden
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
  // Laver HTML for produktlisten
  const html = ProductListView(formattedProducts, category);

  // Pakker det hele ind i layoutet (header, footer osv.)
  const layout = Layout("Produkter", html);

  //Returner den færdige side
  return layout;
};

//Funktion der viser detaljer om et specifik produkt
export const ProductDetails = async (product) => {
  //Henter detaljer om det valgte produkt fra API'et
  const data = await getDetails(product);

  // Laver HTML for produktdetaljerne
  const html = ProductDetailsView(data);
  const form = html.querySelector("form");

  form.addEventListener("submit", (e) => {
    handleAddToCart(e);
  });

  //pakker ind i layout (uden titel)
  const layout = Layout("produkt", html);

  //Returner hele siden klar til visning
  return layout;
};

export const handleAddToCart = async (e) => {
  e.preventDefault();
  const form = e.currentTarget;

  console.dir(form);

  const productId = form.productId.value;
  const quantity = form.quantity.value;

  if (quantity && productId) {
    const data = await addToCart(productId, quantity);
  }
};
