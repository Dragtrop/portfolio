import Link from "next/link";
import Image from "next/image";
import { Mail, Paperclip } from "lucide-react";

import { buttonVariants } from "./ui/button";
import Container from "./shared/container";


const Introduction = () => {
    return ( 
         <Container>
            <div className="text-center" id="home">
                <h3 className="text-xl mb-3">Hello I´m</h3>
                <h1 className="text-4xl font-bold mb-3">Juan Francisco Herrera y Morejon 🧑🏽‍💻</h1>
                <h2 className="text-2xl text-gray-400">Full-Stack Developer</h2>
                <div className="flex flex-col items-center gap-6">
                     <Image src="/perfil.jpg" alt="Profile pic" width={250} height={75}  />

                    <div className="flex flex-col md:flex-row gap-4 justify-between mt-10 mx-auto">
                        <Link className={buttonVariants()} href="#contact">
                            <Mail className="mr-2" /> Contacta conmigo
                        </Link>

                        <Link className={buttonVariants({ variant: 'secondary' })}
                            href="/cv-jfhm.pdf"
                            target="_blank">
                            <Paperclip className="mr-2" /> Descargar CV
                        </Link>
                    </div>
                </div>

            </div>
        </Container>

        
    );
}

export default Introduction;