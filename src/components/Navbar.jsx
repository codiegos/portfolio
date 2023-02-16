import React, { useState } from "react";
import { Link } from "react-scroll";
import logo from "../assets/icons/mylogo.svg";
import spanishIcon from "../assets/icons/spanish-icon.svg";
import englishIcon from "../assets/icons/english-icon.svg";
import DarkModeButton from "../components/DarkModeButton";
import { useEnglishTranslate } from "../hooks/useTranslate";
const navItems = [
  {
    key: "home",
    to: "home",
    title: "Inicio",
    offset: -2,
  },
  {
    key: "about",
    to: "about",
    title: "Sobre mí",
    offset: -2,
  },
  {
    key: "skills",
    to: "skills",
    title: "Habilidades",
    offset: -2,
  },
  {
    key: "projects",
    to: "projects",
    title: "Proyectos",
    offset: -1,
  },
  {
    key: "contact",
    to: "contact",
    title: "Contacto",
    offset: -1,
  },
];
const Navbar = ({ toggleDarkMode }) => {
  const [closeMenu, setCloseMenu] = useState(false);
  const { translateText, setEnglish } = useEnglishTranslate();

  return (
    <nav className="fixed z-20 border-b bg-white w-full dark:bg-slate-900 dark:border-b-gray-700 duration-500">
      <div className="px-6 md:px-12 lg:container lg:mx-auto lg:px-6 lg:py-4">
        <div className="flex items-center justify-between lg:justify-around">
          <div className="relative z-20">
            <Link to="home" smooth href="#">
              <img
                src={logo}
                alt="logo-diego-zack"
                className="h-12 w-full lg:h-14 cursor-pointer"
              />
            </Link>
          </div>
          <span className="pl-6 inline-block lg:hidden">
            <DarkModeButton toggleDarkMode={toggleDarkMode} />
          </span>

          <div className="flex items-center justify-end">
            <input
              type="checkbox"
              name="hamburger"
              id="hamburger"
              checked={closeMenu}
              className="peer"
              onChange={(e) => setCloseMenu(e.target.checked)}
              hidden
            />
            <label
              htmlFor="hamburger"
              className="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden"
            >
              <div
                aria-hidden="true"
                className="m-auto h-0.5 w-6 rounded bg-sky-400 transition duration-300"
              ></div>
              <div
                aria-hidden="true"
                className="m-auto mt-2 h-0.5 w-6 rounded bg-sky-400 transition duration-300"
              ></div>
            </label>

            <div
              className={`peer-checked:translate-x-0 translate-x-[-136%] fixed inset-0 w-4/6 text-2xl font-semibold bg-white/95 lg:bg-transparent border-r shadow-xl transition duration-500 lg:text-xl lg:border-r-0 lg:w-auto lg:static lg:shadow-none lg:translate-x-0 dark:border-r-sky-400 dark:bg-slate-900/95 dark:lg:bg-transparent dark:border-gray-900`}
            >
              <div className="flex flex-col h-full justify-between lg:items-center lg:flex-row">
                <ul className="px-6 pt-32 text-gray-700 space-y-8 md:px-12 lg:space-y-0 lg:flex lg:space-x-12 lg:pt-0 dark:text-fuchsia-100 ">
                  {navItems.map(({ key, to, title, offset }, i) => (
                    <li key={key}>
                      <Link
                        href={`#${to}`}
                        activeStyle={{ color: "#C026D3" }}
                        spy={true}
                        to={to}
                        hashSpy
                        smooth
                        offset={offset}
                        onClick={() => setCloseMenu(!closeMenu)}
                        className="group relative cursor-pointer before:absolute before:inset-x-0 before:bottom-0 before:h-[6px] before:rounded-xl before:origin-right before:scale-x-0 before:bg-fuchsia-200 before:transition before:duration-300 hover:before:origin-left hover:before:scale-x-100 dark:before:bg-fuchsia-900"
                      >
                        <span className="relative group-hover:text-fuchsia-600 dark:group-hover:text-fuchsia-400 lg:text-base xl:text-xl">
                          {(translateText && translateText?.navbarOptions[i]) ||
                            title}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="px-6 border-t py-8 md:px-12 md:py-16 lg:border-t-0 lg:border-l lg:py-0 lg:pr-0 lg:pl-6 flex gap-3 justify-between dark:border-sky-400 items-center">
                  <div className="flex gap-3">
                    <img
                      src={englishIcon}
                      alt="english-language"
                      className="h-8 w-full cursor-pointer hover:scale-125 duration-300"
                      onClick={() => setEnglish(true)}
                    />
                    <img
                      src={spanishIcon}
                      alt="spanish-language"
                      className="h-8 w-full cursor-pointer hover:scale-125 duration-300"
                      onClick={() => setEnglish(false)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <span className="pl-6 lg:inline-block hidden">
            <DarkModeButton toggleDarkMode={toggleDarkMode} />
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
