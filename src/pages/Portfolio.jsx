import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import ContactFooter from "../components/ContactFooter";
const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);

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
    <div className={`font-mono  ${darkMode ? "dark" : ""}`}>
      <header>
        <Navbar toggleDarkMode={handleDarkMode} />
      </header>
      <main>
        <section
          id="home"
          className="h-screen bg-linear-soft bg-no-repeat bg-cover bg-center bg-fixed font-semibold shadow-sm dark:bg-linear-soft-dark dark:text-white dark:selection:bg-indigo-500/40 duration-500"
        >
          <Home />
        </section>
        <section
          id="about"
          className="h-screen lg:px-36 3xl:px-96 dark:bg-slate-900 dark:text-white dark:selection:bg-indigo-200/25 duration-500"
        >
          <About />
        </section>
        <section
          id="skills"
          className="h-screen bg-linear-soft bg-no-repeat bg-cover bg-center bg-fixed dark:bg-linear-soft-dark dark:text-white dark:selection:bg-indigo-500/40 duration-500"
        >
          <Skills />
        </section>
        <section
          id="projects"
          className="h-screen dark:text-white dark:bg-slate-900 dark:selection:bg-indigo-500/25 duration-500"
        >
          <Projects />
        </section>
        <section
          id="contact"
          className="h-screen bg-linear-soft bg-no-repeat bg-cover bg-center bg-fixed dark:text-white dark:bg-linear-soft-dark dark:selection:bg-indigo-500/40 duration-500"
        >
          <div className="flex flex-col h-full">
            <Contact />
            <ContactFooter />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;
