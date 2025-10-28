import { Button, Form } from "../atoms/index.js";
import { FormGroup } from "../molecules/index.js";

export const LoginFormView = () => {
  const form = Form("POST");
  const username = FormGroup("Brugernavn", "username", "Indtast dit brugernavn", "text");
  const password = FormGroup("Adgangskode", "password", "Indtast dit password", "password");
  const button = Button("Send");
  form.append(username, password, button);
  return form;
};
