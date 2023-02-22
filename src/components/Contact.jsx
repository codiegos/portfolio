import React, { useState } from "react";
import fastPaperPlane from "../assets/icons/paperplane-fast-icon.svg";
import linkedInIcon from "../assets/icons/linkedin-icon.svg";
import githubIcon from "../assets/icons/github-icon.svg";
import gmailIcon from "../assets/icons/gmail-icon.svg";
import clipboardIcon from "../assets/icons/clipboard-icon.svg";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Fade } from "react-awesome-reveal";
import { useEnglishTranslate } from "../hooks/useTranslate";
import ContactFooter from "./ContactFooter";

const Contact = () => {
  const [animatePaperPlane, setAnimatePaperPlane] = useState(true);
  const { translateText } = useEnglishTranslate();
  const { contact } = translateText;

  const handlePaperPlaneClick = () => {
    setAnimatePaperPlane(!animatePaperPlane);
    setTimeout(() => {
      setAnimatePaperPlane(true);
    }, 3000);
  };
  const handleGmailClick = () => {
    navigator.clipboard.writeText("diegosebsk@gmail.com");
    toast(contact?.toastMessage || "Correo copiado en el portapapeles!", {
      position: toast.POSITION.BOTTOM_RIGHT,
      className:
        "dark:bg-slate-900 rounded-sm border border-sky-400 sm:mb-20",
    });
    handlePaperPlaneClick();
  };

  return (
    <section
      id="contact"
      className="h-screen duration-500 flex flex-col"
    >
      <div className="flex flex-col justify-center items-center flex-grow h-full relative">
        <div className="text-center text-4xl sm:text-5xl absolute inset-0 top-24">
          <h1 className="after:content-['📫']">
            <Fade cascade duration={185}>
              {contact?.title || "Contacto"}
            </Fade>
          </h1>
          <h2 className="hidden xl:inline-block text-3xl">
            <Fade cascade duration={120}>
              {contact?.subtitle || "Mis redes de contacto:"}
            </Fade>
          </h2>
        </div>

        <div className="flex flex-col items-center justify-center pt-24 xl:pt-48">
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
                  className="relative hover:scale-110 duration-100 cursor-pointer"
                >
                  <img
                    src={gmailIcon}
                    alt="gmail-icon"
                    className="h-32 w-full"
                  />
                  <img
                    src={clipboardIcon}
                    alt="clipboard-icon"
                    className="absolute h-8 w-12 top-0 -right-3"
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
      <ContactFooter />

      <ToastContainer
        position="bottom-right"
        autoClose={1800}
        pauseOnFocusLoss={false}
        pauseOnHover={false}
      />
    </section>
  );
};

export default Contact;
