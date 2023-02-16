import { createContext, useState } from "react";
import translateText from "../utils/translationPortfolio";

export const EnglishContext = createContext();

export const EnglishProvider = ({ children }) => {
  const [english, setEnglish] = useState(false);
  return (
    <EnglishContext.Provider
      value={{ translateText: english && translateText, setEnglish }}
    >
      {children}
    </EnglishContext.Provider>
  );
};
