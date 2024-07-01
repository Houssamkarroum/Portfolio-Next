import Image from "next/image";
import bg from '../../public/background/home.png';
import RenderModel from "@/components/RenderModel";
import Wizard from "@/components/models/Wizard";
import Scene from "@/components/models/scene";
import Navigation from "@/components/navigation/index";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image src={bg} alt="home" fill className="w-full h-full object-cover object-center opacity-80" />

      <div className="w-full h-screen relative">
        {/* Ensure Navigation is positioned absolutely with a higher z-index */}
        <div className="absolute animate z-50">
          <Navigation />
        </div>
        <RenderModel>
          <Scene />
        </RenderModel>
      </div>
    </main>
  );
}
