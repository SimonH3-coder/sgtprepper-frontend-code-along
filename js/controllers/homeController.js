import { Paragraph } from "../views/atoms/index.js";
import { Layout } from "./layoutController.js";

export const HomePage = () => {
  const title = "Velkommen";
  const p = Paragraph();
  p.innerText = "Velkommen til Sgt.Prepper webshop";
  return Layout(title, p);
};
