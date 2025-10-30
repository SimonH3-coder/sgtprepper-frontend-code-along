// Impoerter funktioner og komponenter vi skal bruge
import { Authenticate } from "../models/loginModel.js";
import { getToken, setToken } from "../services/auth.js";
import { LoginFormView, UserInfoView } from "../views/organisms/loginView.js";
import { Layout } from "./layoutController.js";

// Funktion der laver hele login-siden
export const LoginPage = () => {
  if (getToken()) {
    const token = getToken();
    const html = UserInfoView(token.user);
    return Layout("Din side", html);
  } else {
  }

  // Henter login-formularen som et HTML-element
  const element = LoginFormView();

  // Lytter efter når når brugeren trykker "log in"
  element.addEventListener("submit", (e) => {
    handleLogin(e); // Kalder funktioner herunder
  });

  //Returner hele siden med layout og formular
  return Layout("Login", element);
};

// Funktion der håndterer selve login processen
export const handleLogin = async (e) => {
  e.preventDefault(); // Stopper siden fra at reloade (standard for forms)
  const form = e.currentTarget; // Formularen der blev sendt

  // Henter værdier fra felterne og fjerner mellemrum
  const username = form.username.value.trim();
  const password = form.password.value.trim();

  // Tjekker at begge felter er udfyldt
  if (username && password) {
    // Kalder funktionen  der tjekker login på serveren
    const data = await Authenticate(username, password);

    if (data.accessToken) {
      setToken(data);

      location.href = "./index.htm";
    }
  }
};
