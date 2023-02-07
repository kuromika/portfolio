import { ThemeContext } from "@/lib/context/ThemeContext";
import { Center, PerformanceMonitor } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import clsx from "clsx";
import { forwardRef, Suspense, useContext, useState } from "react";
import { NoSSR } from "../3d/Dynamic";
import { Loading } from "../3d/Loading";
import { PrimitiveModel } from "../3d/PrimitiveModel";
import { DivInview } from "../animations/DivInview";

export const About = forwardRef<HTMLElement>(function About(props, ref) {
  const theme = useContext(ThemeContext);
  const [dpr, setDpr] = useState(1);

  return (
    <DivInview>
      <section
        ref={ref}
        id="about"
        className="flex min-h-screen snap-start snap-always flex-col items-center pt-10 pl-5 pr-5  sm:justify-center mb-28"
      >
        <div className="flex flex-col justify-between sm:gap-10 md:w-[90%] md:flex-row md:text-xl lg:w-[80%]">
          <div className="flex flex-col items-center justify-center md:w-[50%]">
            <h2
              className={clsx(
                "mb-5 w-[100%] self-start border-b-2 border-b-black text-xl font-semibold md:text-4xl lg:pb-5 xl:text-5xl",
                { "border-b-white": theme === "dark" }
              )}
            >
              About me
            </h2>
            <p className="md:mt-10 font-light">
              My name is Jean, also known as Kuromika on social media. I’m a
              highly driven self-taught web developer. I have honed my skills
              through extensive experimentation and hands-on projects, and I am
              constantly seeking out new challenges and opportunities to improve
              my craft.
            </p>{" "}
            <p className="mt-3 sm:mt-5 font-light">
              {" "}
              When I am not coding, I like to immerse myself in the world of
              math rock and shoegaze, drawing inspiration from their complex
              rhythms and ethereal soundscapes.{" "}
            </p>
          </div>
          <div className="mt-5 flex flex-col sm:mt-0 sm:justify-center md:w-[50%] ">
            <div className="h-[30vw] w-[100%] sm:h-[30vh] lg:h-[40vh] lg:w-[40vw] xl:w-[40vw]">
              <Canvas camera={{ fov: 40, zoom: 1, near: 0.1, far: 1000}} dpr={dpr}>
                <PerformanceMonitor  onDecline={() => setDpr(0.5)}></PerformanceMonitor>
                <Suspense fallback={<Loading></Loading>}>
                  <ambientLight intensity={theme === "dark" ? 1 : 0.5}>
                    <Center>
                      <NoSSR>
                      <PrimitiveModel scale={[0.1,0.1,0.1]} model='/ibm_5110-transformed.glb' rotation={-0.01}></PrimitiveModel>
                      </NoSSR>
                    </Center>
                  </ambientLight>
                </Suspense>
              </Canvas>
            </div>
            <div className="flex justify-around md:w-[100%] md:flex-col md:items-center md:gap-10 lg:flex-row lg:items-start lg:justify-around ">
              <div className="flex flex-col gap-3">
                <h3 className="text-base font-bold uppercase sm:text-xl">
                  Front-end
                </h3>
                <ul className="flex flex-col gap-1 font-light">
                  <li>React</li>
                  <li>TypeScript</li>
                  <li>Tailwind</li>
                  <li>Next.js</li>
                </ul>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-base font-bold uppercase sm:text-xl">
                  Back-end
                </h3>
                <ul className="flex flex-col gap-1 font-light">
                  <li>Express</li>
                  <li>MongoDB</li>
                  <li>Firebase</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DivInview>
  );
});
