import React from "react";
import { useEnglishTranslate } from "../hooks/useTranslate";

const ContactFooter = () => {
  const { translateText } = useEnglishTranslate();
  const { contact } = translateText;
  return (
    <div className="text-xs md:text-lg lg:text-xl w-full h-20 flex justify-between items-center border-t-2 dark:border-t-gray-700">
      <span className="text-bold p-4">
        {contact?.footer?.designed || "Diseñado y Desarrollado por Diego Rivera"}
      </span>
      <a
        href="https://github.com/diego-zack/portfolio"
        target="_blank"
        className="text-bold p-4 underline hover:text-sky-400 duration-500"
      >
        {contact?.footer?.repository || "Revisar repositorio en Github"}
      </a>
    </div>
  );
};

export default ContactFooter;
