import { forwardRef, useContext } from "react";
import { DivInview } from "../animations/DivInview";
import clsx from "clsx";
import { ThemeContext } from "@/lib/context/ThemeContext";
import { Project } from "./Project";

export const Projects = forwardRef<HTMLElement>(function Projects(props, ref) {
  const theme = useContext(ThemeContext);

  return (
    <DivInview>
      <section
        ref={ref}
        className="mt-10 flex min-h-screen snap-start snap-always flex-col items-center pt-10 pl-5 pr-5 sm:pt-24 pb-28 sm:pb-56 lg:pb-96"
      >
        <div className="flex w-[100%] flex-col md:w-[90%] lg:w-[80%] ">
          <h2
            className={clsx(
              "mb-5 border-b-2 border-b-black text-xl font-semibold md:text-4xl lg:pb-5 xl:text-5xl ",
              { "border-b-white": theme === "dark" }
            )}
          >
            Projects
          </h2>
          <Project
            title="Kurodoro"
            description="A customizable pomodoro timer that works on desktop & mobile
                browsers. The aim of this app is to help you focus on any task you
                are working on, such as study, writing, or coding. This app is
                inspired by Pomodoro Technique."
            stack="Built with TypeScript, React, Next.js, Tailwind CSS and Firebase."
            alt="A demonstration of the Pomodoro timer"
            repo="https://github.com/kuromika/kurodoro"
            live="https://kurodoro.vercel.app/"
            static="/static-kuro.png"
          ></Project>
          <Project
            title="Where is Nostalgia"
            description="A fun and interactive web app that simulates the classic puzzle book game 'Where is Waldo'"
            stack="Built with React, JavaScript, CSS, Firebase and react-router"
            alt="A demonstration of a webpage similar to the where is waldo game"
            repo="https://github.com/kuromika/where-is-nostalgia"
            live="https://where-is-nostalgia.web.app/"
            static="/static-nostalgia.png"
          ></Project>
          <Project
            title="Memory Card"
            description="A fun and challenging web game inspired by the popular VA-11 HALL-A visual novel. In this game, players are transported to the dystopian world of the VA-11 HALL-A bar, where they must test their memory and recall skills by clicking iconic characters only once"
            stack="Built with React, JavaScript and CSS"
            alt="A demonstration of a web game where players can click on a same card twice"
            static="/static-memory.png"
            live="https://kuromika.github.io/memory-card/"
            repo="https://github.com/kuromika/memory-card"
          ></Project>
        </div>
      </section>
    </DivInview>
  );
});
