import { Heading } from "../atoms/index.js";

export const HeaderView = (className = "") => {
  const element = document.createElement("header");
  element.className = "bg-slate-500 shadow-md border rounded-lg p-4 text-white";
  const h1 = Heading("Sgt.Prepper");
  element.append(h1);
  return element;
};

export const MainView = (title, content) => {
  const element = document.createElement("main");
  const h1 = Heading(title);
  element.append(h1, content);
  return element;
};

export const FooterView = (className = "") => {
  const element = document.createElement("footer");
  element.innerHTML = "&copy; TECHCOLLEGE 2025";
  return element;
};
