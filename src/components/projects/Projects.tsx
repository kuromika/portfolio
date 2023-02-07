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
        className="mt-10 flex min-h-screen snap-start snap-always flex-col items-center pt-5 pl-5 pr-5 pb-5 md:pt-24 md:pb-24"
      >
        <div className="flex w-[100%] flex-col md:w-[90%] lg:w-[80%] ">
          <h2
            className={clsx(
              "mb-5 text-xl font-semibold after:block after:h-1 after:w-10 after:bg-black/70 after:content-[''] md:mb-10 md:text-4xl",
              {
                "after:bg-white/70": theme === "dark",
              }
            )}
          >
            Projects
          </h2>
          <Project
            title="Kumodoro"
            description="A customizable pomodoro timer that works on desktop & mobile
                browsers. The aim of this app is to help you focus on any task you
                are working on, such as study, writing, or coding. This app is
                inspired by Pomodoro Technique."
            stack="Built with TypeScript, React, Next.js, Tailwind CSS and Firebase."
            alt="A demonstration of the Pomodoro timer"
            src="/kurodoro.gif"
            repo="https://github.com/kuromika/kurodoro"
            live="https://kurodoro.vercel.app/"
            static="/static-kuro.png"
          ></Project>
          <Project
            title="Where is Nostalgia"
            description="A fun and interactive web app that simulates the classic puzzle book game 'Where is Waldo'"
            stack="Built with React, JavaScript, CSS, Firebase and react-router"
            alt="A demonstration of a webpage similar to the where is waldo game"
            src="/waldo.gif"
            repo="https://github.com/kuromika/where-is-nostalgia"
            live="https://where-is-nostalgia.web.app/"
            static="/static-waldo.png"
          ></Project>
          <Project
            title="Memory Card"
            description="A fun and challenging web game inspired by the popular VA-11 HALL-A visual novel. In this game, players are transported to the dystopian world of the VA-11 HALL-A bar, where they must test their memory and recall skills by clicking iconic characters only once"
            stack="Built with React, JavaScript and CSS"
            alt="A demonstration of a web game where players can click on a same card twice"
            src="/memory.gif"
            static="/static-memory.png"
            live="https://kuromika.github.io/memory-card/"
            repo="https://github.com/kuromika/memory-card"
          ></Project>
        </div>
      </section>
    </DivInview>
  );
});
