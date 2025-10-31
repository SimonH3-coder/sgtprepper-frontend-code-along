import { Cartpage } from "./controllers/cartController.js";

import { LoginPage } from "./controllers/loginController.js";
import { ProductPage } from "./controllers/productController.js";
import { router } from "./router/index.js";

const ROOT = document.getElementById("container");

router(
  {
    "/": () => ProductPage(), // Forside
    "/login": () => LoginPage(), // Login
    "/cart": () => Cartpage(), // Login
  },
  "#app"
);
