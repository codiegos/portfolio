import React from "react";
import { Fade } from "react-awesome-reveal";
import mario from "../assets/images/mario.gif";

const About = ({ englishTranslate }) => {
  return (

      <div className="-mt-8 min-[376px]:mt-0 min-[376px]:text-xl sm:text-2xl lg:text-3xl">
        <div className="flex justify-center items-center text-3xl sm:text-5xl pt-2 lg:text-6xl lg:pb-12">
          <Fade cascade duration={185}>
            {englishTranslate.title || "¡Hola!"}
          </Fade>
          <span className="inline-block animate-wave">🖐️</span>
        </div>
        <Fade
          className="my-4 bg-gradient-to-b from-fuchsia-50 to-blue-50 from- py-8 px-8 border rounded-lg dark:bg-linear-soft-dark dark:bg-cover dark:bg-right-bottom dark:border-gray-700 text-justify"
          direction="left"
          duration={1500}
        >
          <p>
            {englishTranslate.whoIm ||
              "Me llamo Diego Sebastián Rivera, tengo 22 años y soy Analista Programador. Terminé una parte de mi carrera como profesional el año 2022, abriéndome paso para entrar a desarrollarme como programador y futuro Ingeniero"}
            .
          </p>
        </Fade>
        <Fade
          className="my-4 bg-gradient-to-r from-fuchsia-50 to-blue-50  py-8 px-8 border rounded-lg dark:bg-linear-soft-dark dark:bg-cover dark:bg-center dark:border-gray-700"
          duration={1850}
          direction="left"
        >
          <p className="text-justify">
            {englishTranslate.howIm ||
              "Me considero tolerante y flexible, me adecúo a los nuevos ambientes y me siento cómodo trabajando en diferentes modalidades"}
            .
          </p>
        </Fade>
        <Fade direction="left" duration={2000}>
          <div className="hidden min-[281px]:flex items-center justify-between sm:justify-evenly border p-8 bg-gradient-to-t from-fuchsia-50 to-blue-50 rounded-lg dark:bg-linear-soft-dark dark:bg-cover dark:bg-left-bottom dark:border-gray-700">
            <p className="text-justify">
              {englishTranslate.hobbie ||
                "Suelo jugar videojuegos en mis tiempos libres e intento aprender programación e inglés todos los días"}
              .
            </p>
            <img
              className="hidden min-[281px]:inline-block animate-bounce duration-75 h-24 w-24"
              src={mario}
              alt="supermario3-fly"
            />
          </div>
        </Fade>
      </div>
  );
};

export default About;
