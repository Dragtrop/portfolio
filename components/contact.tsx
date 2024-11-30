"use client";

import { dataContact } from "@/data";
import Title from "./shared/title";
import Image from "next/image.js";
import { useState } from "react";

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Controla si el modal está abierto o cerrado
  const [linkToCopy, setLinkToCopy] = useState<string | null>(null); // Guarda el enlace a copiar
  
  const copyTextToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Texto copiado al portapapeles');
    });
  };

  const openGmail = () => {
    window.open("https://mail.google.com/mail/?view=cm&fs=1&to=jfhm56@gmail.com", "_blank", "width=800,height=600");
  };

  const openLinkedin = () => {
    window.open("https://www.linkedin.com/in/juan-francisco-h-25665412a/", "_blank", "width=800,height=600");
  };

  const handleDiscordClick = (link: string) => {
    setLinkToCopy(link); // Guardamos el enlace que se va a copiar
    setIsModalOpen(true); // Mostramos el modal
  };

  const handleCopy = () => {
    if (linkToCopy) {
      copyTextToClipboard(linkToCopy); // Copiamos el enlace al portapapeles
    }
    setIsModalOpen(false); // Cerramos el modal
  };

  const handleCancel = () => {
    setIsModalOpen(false); // Cerramos el modal si el usuario cancela
  };

  return (
    <div className="p-6 md:px-12 md:py-44 max-w-5xl mx-auto" id="contact">
      <Title title="Contact with me" subtitle="Get in touch with me. 👋" />

      <div className="flex justify-center flex md:gap-7 mt-8 items-start">
        <div className="flex flex-wrap gap-5">
          {dataContact.map((data) => (
            <div
              key={data.id}
              className="flex flex-col items-center dark:bg-slate-800 rounded-lg p-4 transition transform hover:scale-105 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {data.title === "Discord" ? (
                <button onClick={() => handleDiscordClick(data.link)} className="flex flex-col items-center">
                  <Image
                    src={data.icon}
                    alt="Image"
                    width={50}
                    height={50}
                    className="rounded-2xl"
                  />
                  <span className="mt-2 text-sm text-gray-300">{data.title}</span>
                </button>
              ) : data.title === "LinkedIn" ? (
                <div onClick={openLinkedin} className="cursor-pointer">
                  <Image
                    src={data.icon}
                    alt="Image"
                    width={50}
                    height={50}
                    className="rounded-2xl"
                  />
                  <span className="mt-2 text-sm text-gray-300">{data.title}</span>
                </div>
              ) : data.title === "Email" ? (
                <div onClick={openGmail} className="cursor-pointer">
                  <Image
                    src={data.icon}
                    alt="Image"
                    width={50}
                    height={50}
                    className="rounded-2xl"
                  />
                  <span className="mt-2 text-sm text-gray-300">{data.title}</span>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-black p-6 rounded-lg shadow-lg w-80">
            <h2 className="text-lg mb-4 text-red-500">Please click on 'Copy' and you will copy my discord nickname, open discord and send me a Friend Request.</h2>
            <div className="flex justify-between">
              <button
                onClick={handleCopy}
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Copy
              </button>
              <button
                onClick={handleCancel}
                className="bg-gray-500 text-white px-4 py-2 rounded-md"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
