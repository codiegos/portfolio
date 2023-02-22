import React from "react";
import { Fade } from "react-awesome-reveal";
import mario from "../assets/images/mario.gif";
import { useEnglishTranslate } from "../hooks/useTranslate";

const About = () => {
  const { translateText } = useEnglishTranslate();
  const { about } = translateText;
  return (
    <section
      id="about"
      className="h-screen lg:px-36 3xl:px-96 bg-white dark:bg-slate-900 dark:selection:bg-indigo-200/25 duration-500"
    >
      <div className="h-full flex flex-col justify-center relative">
        <h1 className="text-center text-4xl sm:text-5xl absolute inset-0 top-24">
          <Fade cascade duration={185}>
            {about?.title || "¡Hola!"}
          </Fade>
          <span className="inline-block animate-wave">🖐️</span>
        </h1>
        <div className="xs:text-xl sm:text-2xl 3xl:text-3xl flex flex-col justify-center gap-y-2 pt-24">
          <Fade
            className=" bg-gradient-to-b from-fuchsia-50 to-blue-50 p-4 md:p-8 border rounded-lg dark:bg-linear-soft-dark dark:bg-cover dark:bg-right-bottom dark:border-gray-700 text-justify"
            direction="left"
            duration={1500}
          >
            <p>
              {about?.whoIm ||
                "Me llamo Diego Sebastián Rivera, tengo 22 años y soy Analista Programador. Terminé una parte de mi carrera como profesional el año 2022, abriéndome paso para entrar a desarrollarme como programador y futuro Ingeniero"}
              .
            </p>
          </Fade>
          <Fade
            className="bg-gradient-to-r from-fuchsia-50 to-blue-50 p-4 md:p-8 border rounded-lg dark:bg-linear-soft-dark dark:bg-cover dark:bg-center dark:border-gray-700 text-justify"
            duration={1850}
            direction="left"
          >
            <p>
              {about?.howIm ||
                "Me considero tolerante y flexible, me adecúo a los nuevos ambientes y me siento cómodo trabajando en diferentes modalidades"}
              .
            </p>
          </Fade>
          <Fade direction="left" duration={2000}>
            <div className="hidden tall:flex items-center justify-between sm:justify-evenly border p-4 bg-gradient-to-t from-fuchsia-50 to-blue-50 rounded-lg dark:bg-linear-soft-dark dark:bg-cover dark:bg-left-bottom dark:border-gray-700 ">
              <p>
                {about?.hobbie ||
                  "Suelo jugar videojuegos en mis tiempos libres e intento aprender programación e inglés todos los días"}
                .
              </p>
              <img
                className="animate-bounce duration-75 h-24 w-24"
                src={mario}
                alt="supermario3-fly"
              />
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default About;
