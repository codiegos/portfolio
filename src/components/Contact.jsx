import React, { useState } from "react";
import fastPaperPlane from "../assets/icons/paperplane-fast-icon.svg";
import linkedInIcon from "../assets/icons/linkedin-icon.svg";
import githubIcon from "../assets/icons/github-icon.svg";
import gmailIcon from "../assets/icons/gmail-icon.svg";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Fade } from "react-awesome-reveal";

const Contact = ({ englishTranslate }) => {
  const [animatePaperPlane, setAnimatePaperPlane] = useState(true);
  const { title, subtitle, toastMessage } = englishTranslate;

  const handlePaperPlaneClick = () => {
    setAnimatePaperPlane(!animatePaperPlane);
    setTimeout(() => {
      setAnimatePaperPlane(true);
    }, 3000);
  };
  const handleGmailClick = () => {
    navigator.clipboard.writeText("diegosebsk@gmail.com");
    toast(toastMessage || "Correo copiado en el portapapeles!", {
      position: toast.POSITION.BOTTOM_RIGHT,
      className:
        "dark:bg-slate-900 dark:text-white rounded-sm border border-sky-400 sm:mb-24",
    });
    handlePaperPlaneClick();
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center flex-grow h-full">
        <div className="text-center text-4xl sm:text-5xl">
          <h1 className="after:content-['📫']">
            <Fade cascade duration={185}>
              {title || "Contacto"}
            </Fade>
          </h1>
          <h2 className="hidden xl:inline-block text-3xl">
            <Fade cascade duration={120}>
              {subtitle ||
                "Mis redes de contacto:"}
            </Fade>
          </h2>
        </div>

        <div className="flex flex-col items-center justify-center py-4 xs:py-24 md:py-2 xl:py-4">
          <div>
            <div className="flex justify-center items-center sm:gap-40">
              <Fade direction="left" duration={1500}>
                <a
                  href="https://www.linkedin.com/in/diego-sebasti%C3%A1n-rivera-2bbb52121/"
                  target="_blank"
                >
                  <img
                    src={linkedInIcon}
                    alt="linkedIn-icon"
                    className="h-32 w-32 hover:scale-110 duration-100"
                  />
                </a>
              </Fade>
              <Fade duration={1250}>
                <button
                  onClick={handleGmailClick}
                  disabled={!animatePaperPlane}
                >
                  <img
                    src={gmailIcon}
                    alt="gmail-icon"
                    className="h-32 w-32 mr-1 hover:scale-110 duration-100 cursor-pointer"
                  />
                </button>
              </Fade>

              <Fade direction="left" duration={1000}>
                <a href="https://github.com/diego-zack" target="_blank">
                  <img
                    src={githubIcon}
                    alt="github-icon"
                    className="h-[104px] w-[104px] hover:scale-105 duration-100 brightness-105"
                  />
                </a>
              </Fade>
            </div>
          </div>
          <button disabled={!animatePaperPlane} onClick={handlePaperPlaneClick}>
            <img
              src={fastPaperPlane}
              alt="paperplane-icon"
              className={`mt-24 h-32 w-64 lg:h-64 hue-rotate-30 cursor-pointer ${
                animatePaperPlane
                  ? "animate-default-paperplane"
                  : "animate-fast-paperplane"
              }`}
            />
          </button>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={1800}
        pauseOnFocusLoss={false}
        pauseOnHover={false}
      />
    </>
  );
};

export default Contact;
