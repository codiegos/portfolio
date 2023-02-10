import React from "react";

const Modal = ({ open, text, onClose }) => {
  const handleClose = (e) => {
    e.target.id === "modal-projects" && onClose()
  };
  return (
    <>
      {open && (
        <div
          id="modal-projects"
          className="fixed z-10 inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center lg:hidden"
          onClick={handleClose}
        >
          <div className="bg-white p-8 rounded-lg w-auto text-justify dark:bg-black border-2 border-sky-400">
            {text}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
