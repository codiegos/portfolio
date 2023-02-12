import myPic from "../assets/images/my-pic.svg";
import doubleDownIcon from "../assets/icons/double-down-icon.svg";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-scroll";

const Home = ({ englishTranslateHome }) => {
  const { subtitle } = englishTranslateHome;

  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-col md:flex-row items-center justify-around flex-grow">
        <div className="flex flex-col text-5xl max-[280px]:text-3xl md:text-6xl lg:text-7xl gap-y-3 text-center mt-4">
          <Fade cascade duration={185}>
            {"Diego Rivera"}
          </Fade>
          <Fade
            className="text-2xl xs:text-3xl text-fuchsia-500"
            cascade
            duration={120}
          >
            {subtitle || "Analista Progamador"}
          </Fade>
        </div>
        <img
          className="h-64 xs:h-80 w-min lg:h-96 pt-2 rounded-tl-[33%]  rounded-br-[33%] bg-slate-400/20 brightness-125 dark:brightness-95 bg-gradient-to-r from-blue-400 via-red-400 to-blue-400 animate-text dark:from-indigo-900 dark:via-fuchsia-700 dark:to-indigo-900 border-sky-400 border"
          src={myPic}
          alt="my-profile-picture"
        />
      </div>
      <Fade direction="down">
        <Link to="about" smooth className="animate-pulse" href="#">
          <img
            src={doubleDownIcon}
            alt="double-down-icon"
            className="h-12 md:h-16 w-min mx-auto mb-8 animate-bounce cursor-pointer "
          />
        </Link>
      </Fade>
    </div>
  );
};

export default Home;
