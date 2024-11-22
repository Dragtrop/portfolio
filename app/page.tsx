import Image from "next/image";
import Navbar from "@/components/navbar";
import Introduction from "@/components/introduction";
import AboutMe from "@/components/about-me";
import Services from "@/components/services";
import Portfolio from "@/components/portfolio";
import Contact from "@/components/contact";
export default function Home() {
  return (
  <main className="pb-40">
      <Navbar />
      <Introduction />
      <AboutMe/>
      <Services/>
      <Contact/>
  </main>);
}
