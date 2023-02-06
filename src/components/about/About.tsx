import { forwardRef } from "react";
import { DivInview } from "../animations/DivInview";

export const About = forwardRef<HTMLElement>( function About(props, ref){
  return (
    <DivInview>
      <section ref={ref}
        id="about"
        className="flex h-screen snap-center snap-always flex-col items-center justify-center p-7"
      >
        <div className="md:w-[80%] md:text-xl flex flex-col">
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
            When I am not coding, I like to immerse myself in the world
            of math rock and shoegaze, drawing inspiration from
            their complex rhythms and ethereal soundscapes.{" "}
          </p>
          <div className="flex justify-between  mt-5 sm:mt-14">
            <div className="flex flex-col gap-2">
              <h3 className="text-base font-semibold sm:text-2xl uppercase">Front-end</h3>
              <ul>
                <li>React</li>
                <li>TypeScript</li>
                <li>Tailwind</li>
                <li>Next.js</li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-base font-semibold sm:text-2xl uppercase">Back-end</h3>
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
