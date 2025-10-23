import { Fragment } from "../views/atoms/index.js";
import { FooterView, HeaderView, MainView, NavBarView } from "../views/molecules/index.js";

export const Layout = (title, content) => {
  document.title = title;

  const arrNavItems = [
    { href: "/index.htm#/forside", title: "Forside" },
    { href: "/index.htm#/produkter", title: "Produkter" },
    { href: "/index.htm#/forhandler", title: "Forhandler" },
    { href: "/index.htm#/omos", title: "Om os" },
    { href: "/index.htm#/kontakt", title: "Kontakt" },
    { href: "/index.htm#/cart", title: "Indkøbskurv" },
  ];

  const element = Fragment();
  element.append(HeaderView(), NavBarView(arrNavItems), MainView(title, content), FooterView());

  return element;
};
