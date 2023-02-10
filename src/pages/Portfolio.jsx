import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import translationTexts from "../utils/translationPortfolio";
import Home from "../components/Home";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import ContactFooter from "../components/ContactFooter";
const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [englishTranslate, setEnglishTranslate] = useState(false);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      localStorage.removeItem("darkmode");
      return;
    }
    localStorage.setItem("darkmode", !darkMode);
  };

  useEffect(() => {
    if (localStorage) {
      setDarkMode(localStorage.getItem("darkmode"));
    }
  }, []);

  return (
    <div className={`font-mono ${darkMode && "dark"}`}>
      <header>
        <Navbar
          toggleDarkMode={handleDarkMode}
          englishTranslate={englishTranslate && translationTexts.navbarOptions}
          toggleEnglishTranslate={setEnglishTranslate}
        />
      </header>
      <main className="h-screen">
        <section
          id="home"
          className="h-full bg-linear-soft bg-no-repeat bg-cover bg-center bg-fixed font-semibold shadow-sm dark:bg-linear-soft-dark dark:text-white dark:selection:bg-indigo-500/40 duration-500"
        >
          <Home
            englishTranslateHome={englishTranslate && translationTexts.home}
          />
        </section>
        <section
          id="about"
          className="h-full px-2 pt-20 lg:pt-24 lg:px-36 min-[1820px]:px-96 dark:bg-slate-900 dark:text-white dark:selection:bg-indigo-200/25 duration-500"
        >
          <About
            englishTranslate={englishTranslate && translationTexts.about}
          />
        </section>
        <section
          id="skills"
          className="h-full px-2 pt-20 bg-linear-soft bg-no-repeat bg-cover bg-center bg-fixed dark:bg-linear-soft-dark dark:text-white dark:selection:bg-indigo-500/40 lg:pt-24 lg:px-36 duration-500"
        >
          <Skills
            englishTranslateSkills={englishTranslate && translationTexts.skills}
          />
        </section>
        <section
          id="projects"
          className="h-full dark:text-white dark:bg-slate-900 dark:selection:bg-indigo-500/25 duration-500"
        >
          <Projects
            englishTranslate={englishTranslate && translationTexts.projects}
          />
        </section>
        <section
          id="contact"
          className="h-full bg-linear-soft bg-no-repeat bg-cover bg-center bg-fixed dark:text-white dark:bg-linear-soft-dark dark:selection:bg-indigo-500/40 duration-500"
        >
          <div className="flex flex-col h-full">
            <Contact
              englishTranslate={englishTranslate && translationTexts.contact}
            />
            <ContactFooter englishTranslate={englishTranslate && translationTexts.contact.footer} />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;
