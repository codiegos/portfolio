import React from "react";

const DarkModeButton = ({ toggleDarkMode }) => {
  return (
    <button
      type="checkbox"
      className="border-2 rounded-full text-xl border-sky-400"
      onClick={toggleDarkMode}
    >
      <span className="hidden dark:inline-block">
        <span className="bg-fuchsia-700/40 rounded-full pr-[1px] py-[3px]">🌙</span>
        <span>☀️</span>
      </span>
      <span className="inline-block dark:hidden">
        <span>🌙</span>
        <span className="bg-red-400/40 rounded-full pl-[1px] py-[3px]">☀️</span>
      </span>
    </button>
  );
};

export default DarkModeButton;
