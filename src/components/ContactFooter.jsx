import React from "react";

const ContactFooter = ({ englishTranslate }) => {
  const { designed, repository } = englishTranslate;
  return (
    <div className="font-mono text-xl w-full h-20 flex justify-between items-center border-t-2 dark:border-t-gray-700">
      <span className="text-bold ml-4">
        {designed || "Diseñado por Diego Rivera"}
      </span>
      <a
        href="https://github.com/diego-zack"
        target="_blank"
        className="text-bold mr-4 underline hover:text-sky-400 duration-500"
      >
        {repository || "Revisa el repositorio en Github"}
      </a>
    </div>
  );
};

export default ContactFooter;
