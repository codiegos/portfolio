import { useContext } from "react";
import { EnglishContext } from "../context/englishTranslation";

export const useEnglishTranslate = () => {
  const context = useContext(EnglishContext);
  if (context === undefined) {
    throw new Error('useEnglishTranslate must be used within a CartProvider')
  }
  return context
}
