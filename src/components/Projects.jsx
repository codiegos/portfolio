import turicuentroGif from "../assets/images/turicuentro.gif";
import djangoShopGif from "../assets/images/django-carrito.gif";
import { Fade } from "react-awesome-reveal";
import Modal from "./Modal";
import { useState } from "react";

const Projects = ({ englishTranslate }) => {
  const { title, subtitle } = englishTranslate;
  const [openModal, setOpenModal] = useState({ id:null, visible: false });


  return (
    <div className="h-full flex flex-col justify-center">
      <div className="text-center text-4xl sm:text-5xl">
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

      <div className="flex items-center justify-center text-xs lg:text-xl max-lg:flex-col max-lg:gap-y-6 gap-x-4 py-6 xs:py-24 sm:py-4 lg:py-20 xl:py-32 2xl:py-12">
        <Fade direction="left" duration={1750}>
          <img
            src={turicuentroGif}
            alt="reservation-project"
            className="p-[2px] bg-gray-200 dark:bg-gray-500 rounded-xl h-full w-[935px] max-sm:h-full max-lg:h-80 max-lg:w-full cursor-pointer hover:animate-pulse hover:scale-[1.01]"
            loading="lazy"
            onClick={() =>
              setOpenModal({id:"turicuentro", visible: true })
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
              setOpenModal({id:"djangoShop", visible: true })
            }
          />
        </Fade>
      </div>
      <Modal
        id={openModal?.id}
        open={openModal.visible}
        englishTranslate={englishTranslate}
        onClose={() => setOpenModal({ visible: false })}
      />
    </div>
  );
};

export default Projects;
