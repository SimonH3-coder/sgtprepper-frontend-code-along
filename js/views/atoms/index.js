export const Div = (className = "normal") => {
  const element = document.createElement("div");
  return element;
};

export const Paragraph = (className = "normal") => {
  const element = document.createElement("p");
  element.className = className;
  return element;
};

export const Heading = (num = 1) => {
  const element = document.createElement(`h${num}`);
  return element;
};
