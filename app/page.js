import About from "@/components/About";
import Hero from "@/components/Hero";
import Tokenomics from "@/components/Tokenomics";
import Image from "next/image";
import imgLine from "@/public/line.png"
import Buy from "@/components/Buy";

export default function Home() {
  return (
    <main >
      <Hero/>
      <About/>
      <Image src={imgLine} alt="Line" />
      <Tokenomics/>
      <Buy/>
      
    </main>
  );
}
