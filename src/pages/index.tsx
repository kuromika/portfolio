import { About } from "@/components/about/About";
import { Intro } from "@/components/intro/Intro";
import { Navigation } from "@/components/navigation/Navigation";
import { ThemeContext, ThemeType } from "@/lib/context/ThemeContext";
import { createRef, useState } from "react";
import clsx from "clsx";
import { SwitchTheme } from "@/components/theme/SwitchTheme";
import { Projects } from "@/components/projects/Projects";

export default function Home() {

  const [theme, setTheme] = useState<ThemeType>('dark');
  const intro = createRef<HTMLDivElement>();
  const about = createRef<HTMLElement>();
  const projects = createRef<HTMLDivElement>();
  const contact = createRef<HTMLDivElement>();

  return (
    <ThemeContext.Provider value={theme}>
      <div className={clsx(
        'overflow-y-auto section-white text-black', 
        { 'section-black text-white': theme == 'dark' }
      )}>
        <header className={clsx("fixed top-0  w-screen",
          { "bg-white/30": theme === 'light' }
        )}>
          <SwitchTheme setTheme={setTheme}></SwitchTheme>

          <Navigation intro={intro} about={about} projects={projects} setTheme={setTheme}></Navigation> 

        </header>
        <main className="h-screen snap-y snap-mandatory scroll-p-10 overflow-y-auto sm:scroll-p-0 scroll-smooth">
          <Intro ref={intro}></Intro>
          <About ref={about}></About>
          <Projects ref={projects}></Projects>
        </main>
      </div>
    </ThemeContext.Provider>
  );
}
