import turicuentro from "../assets/images/turicuentro.gif";
import shoppingCartDjango from "../assets/images/django-carrito.gif";
import { Fade } from "react-awesome-reveal";
import Modal from "./Modal";
import { useState } from "react";

const Projects = ({ englishTranslate }) => {
  const [openModal, setOpenModal] = useState({ visible: false, text: "Modal" });

  const turicuentroText =
    englishTranslate.turicuentro ||
    "Proyecto Freelance realizado con React, Material-UI y Expressjs utilizando el ORM Sequalize. Enfocado en la administración de reservas de cabañas con despliegue en un calendario. Contempla autenticación con JWT y módulos de reserva, cliente, cabaña y algunas configuraciones extras.";
  const djangoShopText =
    englishTranslate.djangoShop ||
    "En este proyecto de universidad utilicé Python, Bootstrap V5 y Django. Enfocado en la creación de un carrito de compras utilizando django sessions, también posee un apartado autenticado para la administración de productos e usuarios.";

  return (
    <>

        <div className="flex flex-col gap-y-6 text-center pt-16 sm:pt-24 pb-8">
          <Fade
            className="text-2xl sm:text-5xl after:content-['💻']"
            cascade
            duration={185}
          >
            {englishTranslate.title || "Proyectos"}
          </Fade>
          <div className="hidden min-[281px]:inline-block sm:text-3xl">
            <Fade cascade duration={70}>
              {englishTranslate.subtitle ||
                "Algunos de mis proyectos destacados:"}
            </Fade>
          </div>
        </div>
        <div className="flex items-center justify-center text-xs lg:text-xl max-lg:flex-col max-lg:gap-y-6">
          <Fade className="" direction="left" duration={1750}>
            <div className="">
              <img
                src={turicuentro}
                alt="reservation-project"
                className="p-[2px] bg-gray-200 dark:bg-gray-500 rounded-xl h-full w-[935px] max-sm:h-full max-lg:h-80 max-lg:w-full"
                loading="lazy"
                onClick={() =>
                  setOpenModal({ visible: true, text: turicuentroText })
                }
              />
              <p className="lg:absolute p-4 max-lg:hidden">
                {turicuentroText}
              </p>
            </div>
          </Fade>
          <Fade direction="left" duration={1500}>
            <div className="">
              <img
                src={shoppingCartDjango}
                alt="shopping-cart"
                className="p-[2px] bg-gray-200 dark:bg-gray-500 rounded-xl h-full w-[935px] max-sm:h-full max-lg:h-80 max-lg:w-full"
                loading="lazy"
                onClick={() =>
                  setOpenModal({ visible: true, text: djangoShopText })
                }
              />
              <p className="lg:absolute p-4 max-lg:hidden">
                {djangoShopText}
              </p>
            </div>
          </Fade>
        </div>
        <Modal
          open={openModal.visible}
          text={openModal.text}
          onClose={() => setOpenModal({ visible: false })}
        />

    </>
  );
};

export default Projects;
