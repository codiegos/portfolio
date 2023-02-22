import myPic from "../assets/images/my-pic.svg";
import doubleDownIcon from "../assets/icons/double-down-icon.svg";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-scroll";
import { useEnglishTranslate } from "../hooks/useTranslate";
const Home = () => {
  const { translateText } = useEnglishTranslate();
  return (
    <section id="home" className="h-screen font-semibold shadow duration-500">
      <div className="flex flex-col md:flex-row items-center justify-around h-full">
        <div className="flex flex-col text-3xl xs:text-5xl md:text-6xl lg:text-7xl gap-y-3 text-center mt-4">
          <Fade cascade duration={185}>
            {"Diego Rivera"}
          </Fade>
          <Fade
            className="text-2xl xs:text-3xl text-fuchsia-500"
            cascade
            duration={120}
          >
            {translateText?.home?.subtitle || "Analista Progamador"}
          </Fade>
        </div>
        <img
          className="h-64 xs:h-80 w-min lg:h-96 pt-2 rounded-tl-[33%] rounded-br-[33%] bg-slate-400/20 brightness-125 dark:brightness-95 bg-gradient-to-r from-blue-400 via-red-400 to-blue-400 animate-text dark:from-indigo-900 dark:via-fuchsia-700 dark:to-indigo-900 border-sky-400 border"
          src={myPic}
          alt="my-profile-picture"
        />
      </div>
      <Fade className="hidden sm:block">
        <Link
          to="about"
          smooth
          className="animate-pulse flex justify-center"
          href="#about"
        >
          <img
            src={doubleDownIcon}
            alt="double-down-icon"
            className="h-12 w-12 absolute bottom-4 animate-bounce cursor-pointer"
          />
        </Link>
      </Fade>
    </section>
  );
};

export default Home;
