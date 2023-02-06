import { ThemeContext } from "@/lib/context/ThemeContext";
import { Center, OrbitControls, } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import clsx from "clsx";
import { forwardRef, Suspense, useContext } from "react";
import { Ibm } from "../3d/Ibm";
import { Loading } from "../3d/Loading";
import { DivInview } from "../animations/DivInview";

export const About = forwardRef<HTMLElement>(function About(props, ref) {
  const theme = useContext(ThemeContext);

  return (
    <DivInview>
      <section
        ref={ref}
        id="about"
        className="flex min-h-screen snap-start snap-always flex-col items-center pt-10 sm:justify-center sm:pt-0  pl-5 pr-5"
      >
        <div className="flex flex-col md:flex-row md:text-xl md:w-[90%] lg:w-[80%] justify-between sm:gap-10">
          <div className="md:w-[50%] flex flex-col items-center justify-center">
            <h2 className={clsx("mb-5 self-start text-xl font-semibold after:block after:h-1 after:w-10 after:bg-black/70 after:content-[''] md:text-4xl", {'after:bg-white/70' : theme=== 'dark'})}>
              About me:
            </h2>
            <p className="md:mt-10">
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
          </div>
          <div className="mt-5 flex flex-col sm:mt-0 sm:justify-center md:w-[50%] ">
             <div className="h-[30vw] w-[100%] sm:h-[30vh] lg:h-[40vh] lg:w-[40vw] xl:w-[40vw]">
               <Canvas camera={{ fov: 40, zoom: 1, near: 0.1, far: 1000 }}>
                  <Suspense fallback={<Loading></Loading>}>
                    <OrbitControls autoRotate={true} autoRotateSpeed={10}/>
                      <ambientLight intensity={theme === "dark" ? 1 : 0.5}>
                        <Center>
                            <Ibm></Ibm>
                        </Center>
                      </ambientLight>
                  </Suspense>
                </Canvas>
             </div>
            <div className="flex justify-around md:flex-col md:gap-10 md:items-center lg:flex-row lg:items-start lg:justify-around md:w-[100%] ">
              <div className="flex flex-col">
                <h3 className="text-base font-bold uppercase sm:text-xl">
                  Front-end
                </h3>
                <ul className="flex flex-col gap-1">
                  <li>React</li>
                  <li>TypeScript</li>
                  <li>Tailwind</li>
                  <li>Next.js</li>
                </ul>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-base font-bold uppercase sm:text-xl">
                  Back-end
                </h3>
                <ul  className="flex flex-col gap-1">
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
