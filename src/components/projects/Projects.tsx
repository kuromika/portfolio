import { forwardRef, useContext } from "react";
import { DivInview } from "../animations/DivInview";
import clsx from "clsx";
import { ThemeContext } from "@/lib/context/ThemeContext";
import { Project } from "./Project";

export const Projects = forwardRef<HTMLDivElement>(function Projects(
  props,
  ref
) {

  const theme = useContext(ThemeContext);


  return (
    <DivInview>
      <section
        ref={ref}
        className="flex min-h-screen snap-start snap-always flex-col items-center pt-5 md:pt-24 pl-5 pr-5"
      >
        <div className="flex flex-col w-[100%] md:w-[90%] lg:w-[80%] ">
          <h2 className={clsx("mb-5 text-xl font-semibold after:block after:h-1 after:w-10 after:bg-black/70 after:content-[''] md:text-4xl md:mb-10", {
            'after:bg-white/70': theme === 'dark'
          })}>
            Projects
          </h2>
            <Project
              title="Kumodoro"
              description="A customizable pomodoro timer that works on desktop & mobile
                browsers. The aim of this app is to help you focus on any task you
                are working on, such as study, writing, or coding. This app is
                inspired by Pomodoro Technique."
              stack="Built using TypeScript, React, Next.js, Tailwind CSS and Firebase."
              alt="A demonstration of the Pomodoro timer"
            src="/kurodoro.gif"
            repo='https://github.com/kuromika/kurodoro'
            live='https://kurodoro.vercel.app/'
            ></Project>
        </div>
      </section>
    </DivInview>
  );
});
