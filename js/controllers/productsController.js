import { Paragraph } from "../views/atoms/index.js";
import { Layout } from "./layoutController.js";

export const ProductPage = () => {
  const title = "Se vores produkter";
  const p = Paragraph();
  p.innerText = "Liste over produkter";
  return Layout(title, p);
};
