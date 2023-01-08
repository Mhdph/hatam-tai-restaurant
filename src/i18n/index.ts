import en from "./ar.json";
import fa from "./fa.json";

export const translate = (key: any, language: any) => {
  let langData: any = {};

  if (language === "EN") {
    langData = en;
  } else if (language === "FA") {
    langData = fa;
  }
  return langData[key];
};
