import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero/Hero";   
import Services from "@/components/sections/Services/Services"; 
import Experience from "@/components/sections/Experience/Experience"; 
import Portfolio from "@/components/sections/Portfolio/Portfolio";
import CTA from "@/components/sections/Portfolio/CTA";
import Blog from "@/components/sections/Portfolio/Blog";
import Footer from "@/components/layout/Footer";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero/>
      <Services/>
      <Experience/>
      <Portfolio/>
      <CTA/>
      <Blog/>
      <Footer/>
    </main>
  );
}