import Navbar from "@/components/navbar";
import Introduction from "@/components/introduction";
import AboutMe from "@/components/about-me";
import Services from "@/components/services";
import Contact from "@/components/contact";
import Portfolio from "@/components/portfolio";
import Footer from "@/components/footer"
export default function Home() {
  return (
  <main className="pb-40">
      <Navbar />
      <Introduction />
      <AboutMe/>
      <Services/>
      <Portfolio/>
      <Contact/>
      <Footer/>
  </main>);
}
