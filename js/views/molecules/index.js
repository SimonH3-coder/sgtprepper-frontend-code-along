import { Heading, Li, Link, Ul } from "../atoms/index.js";

export const HeaderView = (className = "") => {
  const element = document.createElement("header");
  element.className = "";
  const h1 = Heading("Sgt.Prepper");
  element.append(h1);
  return element;
};

export const NavBarView = (arrNavItems) => {
  const element = document.createElement("nav");
  element.className = "bg-sky-950";
  const ul = Ul("flex");

  arrNavItems.forEach((item) => {
    const { url, title } = item; // Destructure assigment - udskiller egenskaber fra objektet

    const li = Li();
    const item1 = Link(url, title, `block p-4 ${item.texColor}`);
    li.append(item1);
    ul.append(li);
  });

  element.append(ul);
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
