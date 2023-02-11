import React from "react";
import { Fade } from "react-awesome-reveal";
import gridIcons from "../utils/skillsIcons";

const Skills = ({ englishTranslateSkills }) => {
  const { title, subtitle } = englishTranslateSkills;
  return (
    <div className="h-full flex flex-col justify-center">
      <div className="text-center text-4xl sm:text-5xl">
        <h1 className="after:content-['🛠️']">
          <Fade cascade duration={185}>
            {title || "Habilidades"}
          </Fade>
        </h1>
        <h2 className="hidden xl:inline-block text-3xl">
          <Fade cascade duration={60}>
            {subtitle ||
              "Tecnologías que he aplicado en trabajos Freelance y de universidad:"}
          </Fade>
        </h2>
      </div>
      <div className="grid grid-cols-12 place-items-center py-4 xs:py-32 xl:py-12 gap-y-12 lg:py-24 xl:px-64">
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
    </div>
  );
};

export default Skills;
