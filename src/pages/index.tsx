import { About } from "@/components/about/About";
import { Intro } from "@/components/intro/Intro";
import { Navigation } from "@/components/navigation/Navigation";

export default function Home() {
  return (
    <div className="overflow-y-auto bg-[#F2F2F2]">
      <header className="bg-white/30 fixed top-0 w-screen z-10">
        <Navigation></Navigation>
      </header>

      <main className="h-screen scroll-p-10 snap-y snap-mandatory overflow-y-auto sm:scroll-p-0">
        <Intro></Intro>
        <About></About>
      </main>
    </div >
  )
}
