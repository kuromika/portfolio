import Image from "next/image";
import { forwardRef } from "react";
import { DivInview } from "../animations/DivInview";

export const Projects = forwardRef<HTMLDivElement>(function Projects(
  props,
  ref
) {
  return (
    <DivInview>
      <div
        ref={ref}
        className="flex min-h-screen snap-start snap-always flex-col items-center md:pt-20"
      >
        <h2 className="mb-5 text-xl font-semibold after:block after:h-1 after:w-10 after:bg-black/70 after:content-[''] md:text-4xl">
          Projects
        </h2>
        <div className="flex w-[80%] items-center justify-between gap-5 border-t-[1px] border-t-white p-5">
          <div className="">
            <h3>Kumodoro</h3>
            <p>
              A customizable pomodoro timer that works on desktop & mobile
              browsers. The aim of this app is to help you focus on any task you
              are working on, such as study, writing, or coding. This app is
              inspired by Pomodoro Technique.
            </p>
            <p>
              Built using TypeScript, React, Next.js, Tailwind CSS and Firebase.
            </p>
          </div>
          <div className="relative h-[20rem] w-[50rem]">
            <Image src="/kurodoro.gif" fill alt={"Timer demonstration"}></Image>
          </div>
        </div>
      </div>
    </DivInview>
  );
});
