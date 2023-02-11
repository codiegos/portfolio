import React from "react";

const Modal = ({ id, open, englishTranslate, onClose }) => {
  const { turicuentro, djangoShop } = englishTranslate;

  const text = (id === "turicuentro" && (turicuentro ||
        "Proyecto Freelance realizado con React, Material-UI y Expressjs utilizando el ORM Sequalize. Enfocado en la administración de reservas de cabañas con despliegue en un calendario. Contempla autenticación con JWT y módulos de reserva, cliente, cabaña y algunas configuraciones extras.")) 
        || (id === "djangoShop" && (djangoShop ||
        "En este proyecto de universidad utilicé Python, Bootstrap V5 y Django. Enfocado en la creación de un carrito de compras utilizando django sessions, también posee un apartado autenticado para la administración de productos e usuarios."));

  const handleClose = (e) => {
    e.target.id === "modal-projects" && onClose();
  };

  return (
    <>
      {open && (
        <div
          id="modal-projects"
          className="fixed z-10 inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center lg:px-[25%]"
          onClick={handleClose}
        >
          <div className="bg-white p-8 rounded-lg w-auto text-justify dark:bg-slate-900 border-2 border-sky-400 lg:text-xl">
            {text}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
