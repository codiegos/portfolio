import myPic from "../assets/images/my-pic.svg";
import { Fade } from "react-awesome-reveal";

const Home = ({ englishTranslateHome }) => {
  const { subtitle } = englishTranslateHome;

  return (

      <div className="flex flex-col md:flex-row items-center justify-around h-full">
          <div className="flex flex-col text-5xl max-[280px]:text-3xl md:text-6xl lg:text-7xl gap-y-3 text-center">
            <Fade cascade duration={185}>
              {"Diego Rivera"}
            </Fade>
            <Fade className="text-2xl min-[281px]:text-3xl text-fuchsia-500" cascade duration={120}>
              {subtitle || "Analista Progamador"}
            </Fade>
          </div>
          <img
            className="h-80 w-80 lg:h-96 pt-2 rounded-tl-[33%]  rounded-br-[33%] bg-slate-400/20 brightness-125 dark:brightness-95 bg-gradient-to-r from-blue-400 via-red-400 to-blue-400 animate-text dark:from-indigo-900 dark:via-fuchsia-700 dark:to-indigo-900 border-sky-400 border"
            src={myPic}
            alt="my-profile-picture"
          />
      </div>
  );
};

export default Home;
