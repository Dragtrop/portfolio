import { dataExperience } from "@/data"; 
import Image from "next/image";

const Services = () => {
    return (
        <div className="p-6 md:px-12 md:py-24 max-w-5xl mx-auto" id="services">
            <div className="grid md:grid-cols-3 gap-5 mt-7">
                {dataExperience.map((service) => (
                    <div key={service.id} className="rounded-xl border-slate-400 border-2 p-6 dark:bg-slate-800 h-fit">
                        <h4 className="mb-4 text-center text-xl">
                            {service.title}
                        </h4>
                        <ul>
                            {service.experience.map((feature, index) => (
                                <li key={index}
                                className="flex flex-col items-center gap-2 text-center rounded-xl border-slate-400 border-2 p-4 dark:bg-slate-800 h-fit shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"                            >
                                    <span className="font-bold text-lg">{feature.name}</span>
                                    <Image
                                        src={feature.url}
                                        alt="Image"
                                        width={50}
                                        height={50}
                                        className="rounded-2xl"
                                    />
                                    <span className="text-gray-500">{feature.subtitle}</span>
                                    </li>
                                
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Services;