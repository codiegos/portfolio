import turicuentroGif from "../assets/images/turicuentro.gif";
import djangoShopGif from "../assets/images/django-carrito.gif";
import handPointerIcon from "../assets/icons/hand-pointer-icon.svg";
import { Fade } from "react-awesome-reveal";
import Modal from "./Modal";
import { useState } from "react";
import { useEnglishTranslate } from "../hooks/useTranslate";

const Projects = () => {
  const { translateText } = useEnglishTranslate();
  const { projects } = translateText;
  const [openModal, setOpenModal] = useState({
    id: null,
    visible: false,
    repository: "#",
  });

  const turicuentroText =
    projects?.turicuentro ||
    "Proyecto Freelance realizado con React, Material-UI y Expressjs utilizando el ORM Sequalize. Enfocado en la administración de reservas de cabañas con despliegue en un calendario. Contempla autenticación con JWT y módulos de reserva, cliente, cabaña y algunas configuraciones extras.";

  const djangoShopText =
    projects?.djangoShop ||
    "En este proyecto de universidad utilicé Python, Bootstrap V5 y Django. Enfocado en la creación de un carrito de compras utilizando django sessions, también posee un apartado autenticado para la administración de productos e usuarios.";

  const repositoryText = projects?.repository || "Ver repositorio";

  return (
    <div className="h-full flex flex-col justify-center relative">
      <div className="text-center text-4xl sm:text-5xl absolute inset-0 top-24">
        <h1 className="after:content-['💻']">
          <Fade cascade duration={185}>
            {projects?.title || "Proyectos"}
          </Fade>
        </h1>
        <h2 className="hidden xl:inline-block text-3xl">
          <Fade cascade duration={70}>
            {projects?.subtitle || "Algunos de mis proyectos destacados:"}
          </Fade>
        </h2>
      </div>

      <div className="flex flex-col items-center justify-center text-xs lg:text-xl gap-y-6 lg:flex-row gap-x-4 pt-24 relative">
        <Fade
          className="absolute z-10 top-0 mt-[84px] mr-4 animate-pulse"
          direction="left"
          duration={1750}
        >
          <img
            src={handPointerIcon}
            alt="hand-pointer-icon"
            className="h-8 w-8 animate-bounce"
          />
        </Fade>
        <Fade direction="left" duration={1750}>
          <img
            src={turicuentroGif}
            alt="reservation-project"
            className="p-[2px] bg-gray-200 dark:bg-gray-500 rounded-xl h-full w-full sm:h-80 lg:h-full cursor-pointer hover:animate-pulse hover:scale-[1.01]"
            loading="lazy"
            onClick={() =>
              setOpenModal({
                id: "turicuentro",
                visible: true,
                repository: "https://github.com/ariverak/turicuentro-admin",
              })
            }
          />
        </Fade>
        <Fade direction="left" duration={1500}>
          <img
            src={djangoShopGif}
            alt="django-shop-project"
            className="p-[2px] bg-gray-200 dark:bg-gray-500 rounded-xl h-full w-full sm:h-80 lg:h-full cursor-pointer hover:animate-pulse hover:scale-[1.01]"
            loading="lazy"
            onClick={() =>
              setOpenModal({
                id: "djangoShop",
                visible: true,
                repository: "https://github.com/diego-zack/carrito-django",
              })
            }
          />
        </Fade>
      </div>
      <Modal
        open={openModal.visible}
        text={
          <>
            <span>
              {openModal.id === "turicuentro"
                ? turicuentroText
                : djangoShopText}
            </span>{" "}
            <a
              href={openModal.repository}
              className="text-sky-400 underline duration-100 hover:text-sky-600"
            >
              {repositoryText}
            </a>
            .
          </>
        }
        onClose={() => setOpenModal({ visible: false })}
      />
    </div>
  );
};

export default Projects;
