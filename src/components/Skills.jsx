import React from "react";
import { Fade } from "react-awesome-reveal";
import gridIcons from "../utils/skillsIcons";

const Skills = ({ englishTranslateSkills }) => {
  const { title, subtitle } = englishTranslateSkills;
  return (
    <>
      <div className="flex flex-col gap-y-6 text-center">
        <Fade
          className="text-3xl sm:text-5xl after:content-['🛠️']"
          cascade
          duration={185}
        >
          {title || "Habilidades"}
        </Fade>
        <div className="hidden xl:inline-block text-xl sm:text-3xl">
          <Fade cascade duration={60}>
            {subtitle ||
              "Tecnologías que he aplicado en trabajos Freelance y de universidad:"}
          </Fade>
        </div>
      </div>
      <div className="container grid grid-cols-12 grid-rows-5 mx-auto place-items-center h-full pt-12 lg:px-32">
        {gridIcons.map(({ icon, colSpan, alt, rotate }, i) => (
          <Fade
            className={`${colSpan}`}
            key={i}
            duration={1000 + i * 250}
            direction="left"
          >
            <img
              src={icon}
              alt={alt}
              className={`h-24 w-full lg:h-32 hover:scale-110 ${rotate} duration-200`}
            />
          </Fade>
        ))}
      </div>
    </>
  );
};

export default Skills;
