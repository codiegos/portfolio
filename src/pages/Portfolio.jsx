import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

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
    <div className={`font-mono   ${darkMode ? "dark" : ""}`}>
      <header>
        <Navbar toggleDarkMode={handleDarkMode} />
      </header>
      <main className="dark:text-white bg-linear-soft bg-no-repeat bg-cover bg-center bg-fixed dark:bg-linear-soft-dark dark:selection:bg-indigo-500/40">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default Portfolio;
