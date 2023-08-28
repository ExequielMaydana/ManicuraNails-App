import { SliderHeader } from "@/components/carousel/SliderHeader";
import { Navbar } from "@/components/shared/Navbar";
import { Welcome } from "@/components/welcome/Welcome";
import { Karla } from "next/font/google";

const karla = Karla({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className={`w-full min-h-screen flex flex-col ${karla.className}`}>
      <Navbar />
      <section className="flex-1">
        <SliderHeader />
        <Welcome />
      </section>
    </main>
  );
}
