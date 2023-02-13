import turicuentroGif from "../assets/images/turicuentro.gif";
import djangoShopGif from "../assets/images/django-carrito.gif";
import { Fade } from "react-awesome-reveal";
import Modal from "./Modal";
import { useState } from "react";

const Projects = ({ englishTranslate }) => {
  const { title, subtitle } = englishTranslate;
  const [openModal, setOpenModal] = useState({ id:null, visible: false, repository:"" });


  return (
    <div className="h-full flex flex-col justify-center relative">
      <div className="text-center text-4xl sm:text-5xl absolute inset-0 top-24">
        <h1 className="after:content-['💻']">
          <Fade cascade duration={185}>
            {title || "Proyectos"}
          </Fade>
        </h1>
        <h2 className="hidden xl:inline-block text-3xl">
          <Fade cascade duration={70}>
            {subtitle || "Algunos de mis proyectos destacados:"}
          </Fade>
        </h2>
      </div>

      <div className="flex flex-col items-center justify-center text-xs lg:text-xl gap-y-6 lg:flex-row gap-x-4 pt-24">
        <Fade direction="left" duration={1750}>
          <img
            src={turicuentroGif}
            alt="reservation-project"
            className="p-[2px] bg-gray-200 dark:bg-gray-500 rounded-xl h-full w-[935px] max-sm:h-full max-lg:h-80 max-lg:w-full cursor-pointer hover:animate-pulse hover:scale-[1.01]"
            loading="lazy"
            onClick={() =>
              setOpenModal({id:"turicuentro", visible: true, repository: "https://github.com/ariverak/turicuentro-admin"})
            }
          />
        </Fade>
        <Fade direction="left" duration={1500}>
          <img
            src={djangoShopGif}
            alt="django-shop-project"
            className="p-[2px] bg-gray-200 dark:bg-gray-500 rounded-xl h-full w-[935px] max-sm:h-full max-lg:h-80 max-lg:w-full cursor-pointer hover:animate-pulse hover:scale-[1.01]"
            loading="lazy"
            onClick={() =>
              setOpenModal({id:"djangoShop", visible: true, repository: "https://github.com/diego-zack/carrito-django"})
            }
          />
        </Fade>
      </div>
      <Modal
        id={openModal.id}
        open={openModal.visible}
        repository={openModal.repository}
        englishTranslate={englishTranslate}
        onClose={() => setOpenModal({ visible: false })}
      />
    </div>
  );
};

export default Projects;
