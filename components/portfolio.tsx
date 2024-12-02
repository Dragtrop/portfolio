import { dataPortfolio } from "@/data";
import Title from "./shared/title";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

const Portfolio = () => {
    return (
        <div className="p-4 max-w-4xl md:py-24 mx-auto text-center" id="portfolio">
            <Title title="Portfolio" subtitle="Some of My Projects 💼" />

            <div className="grid md:grid-cols-3 gap-10 mt-4">
                {dataPortfolio.map((data) => (
                    <div key={data.id}>
                        <h3 className="text-xl mb-4">{data.title}</h3>
                        <Image
                            src={data.image}
                            alt="Image"
                            width={250} height={250} className="rounded-2xl w-auto h-auto mx-auto"
                        />

                        <div className="mt-5 flex gap-5 flex justify-center">
                            <Link
                                className={buttonVariants({ variant: "outline" })}
                                href={data.urlGithub}
                                target="_blank"
                            >
                                Github
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;