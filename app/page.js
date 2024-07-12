import About from "@/components/About";
import Hero from "@/components/Hero";
import Tokenomics from "@/components/Tokenomics";
import Image from "next/image";
import imgLine from "@/public/line.png"
import Buy from "@/components/Buy";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main >
      <Hero/>
      <About/>
      <div className="blue-bg">
      <Image src={imgLine} alt="Line" />
      </div>
      <Tokenomics/>
      <Buy/>
      <Footer/>
      
    </main>
  );
}
