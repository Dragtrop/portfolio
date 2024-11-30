
import { dataAboutMe, dataSlider } from "@/data";

import Title from "./shared/title";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import Image from "next/image";

const AboutMe = () => {
    return (
        <div className="p-6 md:px-12 md:py-30 max-w-5xl mx-auto" id="about-me">
            <Title title="About me" subtitle="Get to know me" />

            <div className="grid md:grid-cols-2">
                <div className="py-12 md:py-0 flex items-center justify-center">
                    {/* CAROUSEL */}
                    <Carousel
                        opts={{
                            align: "start"
                        }}
                        orientation="vertical"
                        className="w-full max-w-xs h-fit"
                    >
                        <CarouselContent className="-mt-1 h-[200px]">
                            {dataSlider.map((data) => (
                                <CarouselItem key={data.id}>
                                    <div className="flex items-center justify-center">
                                        <Image
                                            src={data.url}
                                            alt="Image"
                                            width={250} height={400}
                                            className="w-full h-auto rounded-lg" />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext /> 
                    </Carousel>
                </div>
                <div>
                    <div className="grid md:grid-cols-3 mt-7 gap-4"
                    >
                        {dataAboutMe.map((data) => (
                            <div key={data.id} className="border border-white-10 
                        rounded-xl p-4 shadow-md shadow-slate-100 dark:bg-slate-800">
                                {data.icon}
                                <p className="my-2">{data.name}</p>
                                <p className="text-gray-400">{data.description}</p>
                            </div>
                        ))}
                    </div>
                    <p className="my-8">I am a passionate developer who started programming at the age of 17.
                    The ample free time I had at that age allowed me to learn a lot about various programming languages,
                     focusing mainly on web development.I specialize primarily in TypeScript,
                      Python, and JavaScript. Additionally, I also have knowledge of C, C++, and Java.
                      I am a calm and creative person with strong teamwork skills. My main focus is to 
                      professionalize myself as a Full-Stack developer, with a particular emphasis on Back-End 
                      development.
                        </p>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;