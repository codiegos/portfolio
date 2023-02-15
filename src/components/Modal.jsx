import React from "react";

const Modal = ({ open, onClose, text }) => {
  const handleClose = (e) => {
    e.target.id === "modal-projects" && onClose();
  };

  return (
    <>
      {open && (
        <div
          className="fixed z-10 inset-0 bg-black bg-opacity-50 flex justify-center items-center lg:px-[25%]"
          id="modal-projects"
          onClick={handleClose}
        >
          <div className="relative">
            <div className=" absolute font-extrabold text-2xl cursor-pointer right-4" onClick={onClose}>
              x
            </div>
            <div className="bg-white p-8 rounded-lg w-auto text-justify dark:bg-slate-900 border-2 border-sky-400 lg:text-xl">
              {text}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
