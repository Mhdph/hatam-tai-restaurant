import ar from "./ar.json";
import en from "./en.json";

export const translate = (key: any, language: any) => {
  let langData: any = {};

  if (language === "EN") {
    langData = en;
  } else if (language === "AR") {
    langData = ar;
  }
  return langData[key];
};
