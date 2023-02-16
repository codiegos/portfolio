import React from "react";
import { Fade } from "react-awesome-reveal";
import { useEnglishTranslate } from "../hooks/useTranslate";
import gridIcons from "../utils/skillsIcons";

const Skills = () => {
  const { translateText } = useEnglishTranslate();
  const { skills } = translateText;
  return (
    <div className="h-full flex flex-col justify-center relative">
      <div className="text-center text-4xl sm:text-5xl absolute inset-0 top-24">
        <h1 className="after:content-['🛠️']">
          <Fade cascade duration={185}>
            {skills?.title || "Habilidades"}
          </Fade>
        </h1>
        <h2 className="hidden xl:inline-block text-3xl">
          <Fade cascade duration={60}>
            {skills?.subtitle ||
              "Tecnologías que he aplicado en trabajos Freelance y de universidad:"}
          </Fade>
        </h2>
      </div>
      <div className="grid grid-cols-12 place-items-center gap-y-6 xs:gap-y-24 sm:gap-y-12 xl:mt-40 xl:px-60">
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
              className={`h-24 w-full 3xl:h-36 hover:scale-110 ${rotate} duration-200`}
            />
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default Skills;
