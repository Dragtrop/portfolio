"use client";

import { dataContact } from "@/data";
import Title from "./shared/title";
import Link from "next/link";
import Image from "next/image.js";

const Contact = () => {
    const copyTextToClipboard = (text: string) => {
        navigator.clipboard.writeText(text).then(() => {
            alert('Texto copiado al portapapeles');
        });
    };
const openGmail = () => {
    window.open("https://mail.google.com/mail/?view=cm&fs=1&to=jfhm56@gmail.com", "_blank", "width=800,height=600");
};
const openLinkedin= () => {
    window.open("https://www.linkedin.com/in/juan-francisco-h-25665412a/", "_blank", "width=800,height=600");
};
    return (
        <div className="p-6 md:px-12 md:py-44 max-w-5xl mx-auto" id="contact">
            <Title title="Contacta conmigo" subtitle="Ponte en contacto conmigo 👋" />

            <div className="flex justify-center flex md:gap-7 mt-8 items-start">
                <div className="flex  flex-wrap gap-5">
                {dataContact.map((data) => (
                        <div key={data.id}
                            className="flex flex-col items-center dark:bg-slate-800 rounded-lg p-4 transition transform hover:scale-105 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            {data.title === "Discord" ? (
                                <button onClick={() => copyTextToClipboard(data.link)} className="flex flex-col items-center">
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
                                <data onClick={openLinkedin} className="cursor-pointer">
                                        <Image
                                            src={data.icon}
                                            alt="Image"
                                            width={50}
                                            height={50}
                                            className="rounded-2xl"
                                        />
                                        <span className="mt-2 text-sm text-gray-300">{data.title}</span>
                                </data>
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
        </div>
    );
}

export default Contact;