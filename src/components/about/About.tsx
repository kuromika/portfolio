import { ThemeContext } from "@/lib/context/ThemeContext";
import clsx from "clsx";
import { forwardRef, useContext } from "react";
import { DivInview } from "../animations/DivInview";

export const About = forwardRef<HTMLElement>(function About(props, ref) {
  const theme = useContext(ThemeContext);

  return (
    <DivInview>
      <section
        ref={ref}
        id="about"
        className="flex h-screen snap-start snap-always flex-col items-center justify-center pl-5 pr-5"
      >
        <div className="flex flex-col md:w-[80%] md:text-xl ">
          <h2 className="mb-5 text-xl font-semibold after:block after:h-1 after:w-10 after:bg-black/70 after:content-[''] md:text-4xl">
            About me:
          </h2>
          <p>
            My name is Jean, also known as Kuromika on social media. I’m a
            highly driven self-taught web developer. I have honed my skills
            through extensive experimentation and hands-on projects, and I am
            constantly seeking out new challenges and opportunities to improve
            my craft.
          </p>{" "}
          <p className="mt-3 sm:mt-5">
            {" "}
            When I am not coding, I like to immerse myself in the world of math
            rock and shoegaze, drawing inspiration from their complex rhythms
            and ethereal soundscapes.{" "}
          </p>
          <div className="mt-5 flex  justify-between sm:mt-14">
            <div className="flex flex-col gap-2">
              <h3 className="text-base font-semibold uppercase sm:text-2xl">
                Front-end
              </h3>
              <ul>
                <li>React</li>
                <li>TypeScript</li>
                <li>Tailwind</li>
                <li>Next.js</li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-base font-semibold uppercase sm:text-2xl">
                Back-end
              </h3>
              <ul>
                <li>Express</li>
                <li>MongoDB</li>
                <li>Firebase</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </DivInview>
  );
});
