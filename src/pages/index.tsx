import { About } from "@/components/about/About";
import { Intro } from "@/components/intro/Intro";
import { Navigation } from "@/components/navigation/Navigation";
import { ThemeContext, ThemeType } from "@/lib/context/ThemeContext";
import { useState } from "react";
import clsx from "clsx";
import { SwitchTheme } from "@/components/navigation/SwitchTheme";

export default function Home() {

  const [theme, setTheme] = useState<ThemeType>('dark');

  return (
    <ThemeContext.Provider value={theme}>
      <div className={clsx(
        'overflow-y-auto',
        { 'bg-[#F2F2F2] text-black': theme === 'light' },
        { 'bg-black text-white': theme === 'dark' }
      )}>
        <header className={clsx("fixed top-0 z-10 w-screen",
          { "bg-white/30": theme === 'light' }
        )}>
          <SwitchTheme setTheme={setTheme}></SwitchTheme>

          <Navigation setTheme={setTheme}></Navigation> 

        </header>
        <main className="h-screen snap-y snap-mandatory scroll-p-10 overflow-y-auto sm:scroll-p-0">
          <Intro></Intro>
          <About></About>
        </main>
      </div>
    </ThemeContext.Provider>
  );
}
