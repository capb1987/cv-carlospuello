import dayjs from "dayjs";

import customParseFormat from "dayjs/plugin/customParseFormat";

import "dayjs/locale/es";

dayjs.extend(customParseFormat);

//FECHAS
export const parsedDate = (date) => {
  dayjs.locale("es");
  const fechaParseada = dayjs(date);
  const formatedDate = fechaParseada.format("DD-MMM-YYYY");

  return formatedDate;
};

export const formatedFechaCompleta = (date) => {
  dayjs.locale("es");
  const fechaParseada = dayjs(date);
  const formatedDate = fechaParseada.format("DD  MMMM YYYY");

  return formatedDate;
};

//URL

export const miURL = `${import.meta.env.URL_API}/resume.json`;

//Desde IconoRedes se retorna el valor:

export const misRedesIconos = (miRed) => {
  const redes = {
    Twitter: "twitter-x",
    LinkedIn: "linkedin",
    default: "null",
  };

  const selectSocialMedia = redes[miRed] || redes["default"];

  return `${selectSocialMedia}`;
};

//Exportar para cambiar logos y colores: mdi

export const iconosTech = (techIcono) => {
  const tecnologias = {
    Webpack: "webpack",
    Javascript: "language-javascript",
    HTML: "language-html5",
    React: "react",
    Tailwind: "tailwind",
    CSS: "language-css3",
    default: "null",
  };

  const selectIconTech = tecnologias[techIcono] || tecnologias["default"];

  return `${selectIconTech}`;
};

export const iconosTechColor = (techIcono) => {
  const coloresIconos = {
    webpack: "bg-blue-500 text-white",
    "language-javascript": "bg-yellow-500 text-black",
    "language-html5": "bg-orange-500 text-white",
    react: "bg-sky-500 text-white",
    tailwind: "bg-cyan-500 text-white",
    "language-css3": "bg-blue-700 text-white",
    default: "null",
  };

  const selectIcon = coloresIconos[techIcono] || coloresIconos["default"];

  return `${selectIcon}`;
};
