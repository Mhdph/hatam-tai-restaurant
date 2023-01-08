import ar from "./ar.json";
import en from "./en.json";

export const translate = (key: any, language: any) => {
  let langData: any = {};

  if (language === "EN") {
    langData = ar;
  } else if (language === "AR") {
    langData = en;
  }
  return langData[key];
};
