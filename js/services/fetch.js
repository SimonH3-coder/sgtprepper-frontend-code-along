// En fælles funktion til at hente data fra serveren (API'et)
// Kan bruges til både GET, POST, PUT og DELETE osv.

import { getToken } from "./auth.js";

export const request = async (url, method = "GET", body = {}) => {
  // Stopper funktionen hvis der ikke er angivet en url
  if (!url) throw new Error("Missing URL");

  const token = getToken();

  // Tjekker om der skal sendes data med (kun ved fx POST eller PUT)
  const hasBody = body !== undefined && body !== null && method !== "GET";

  // Bygger de indstillinger, der skal sendes med i fetch-kaldet
  const options = {
    method,
    headers: {
      Accept: "application/json", // Vi foventer JSON tilbage
      "Content-Type": "application/json", // Vi sender JSON til serveren
      ...(token?.accessToken ? { Authorization: `Bearer ${token.accessToken}` } : {}),
    },
    // Tilføjer body (data) kun hvis der faktisk skal sendes noget
    ...(hasBody ? { body: JSON.stringify(body) } : {}),
  };

  try {
    // Sender anmodningen til serveren og venter på svar
    const response = await fetch(url, options);

    // Fortolker svaret som JSON
    const result = await response.json();

    // Returnerer resultatet til den funktion, der kaldte request()
    return result;
  } catch (error) {
    console.error(error);
  }
};
