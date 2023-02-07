import { ThemeContext } from "@/lib/context/ThemeContext";
import { Center, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import clsx from "clsx";
import { forwardRef, Suspense, useContext } from "react";
import { Bocchi } from "../3d/Bocchi";
import { Loading } from "../3d/Loading";

export const Contact = forwardRef<HTMLElement>(function Contact(props, ref) {

  const theme = useContext(ThemeContext);

  return (
    <section
      ref={ref}
      className="mt-10 flex min-h-screen snap-start snap-always flex-col items-center justify-center pt-5 pl-5 pr-5 pb-5 sm:pt-24 sm:pb-24">
        <div className="flex w-[100%] flex-col md:w-[90%] lg:w-[80%]">
            <h2 className={clsx("text-xl font-semibold md:text-4xl xl:text-5xl lg:pb-5 border-b-black border-b-2 ", {'border-b-white': theme === 'dark'})}>Contact</h2>
            <div className="flex flex-col gap-10 lg:flex-row lg:justify-around pt-20">
              <div className="flex flex-col items-center gap-5">
                <h3 className="uppercase font-semibold  text-xl">Email</h3>
                <a className="uppercase text-sm sm:text-lg text-[#ff4637] font-medium hover:border-b-4 border-b-[#ff4637] transition-[border-width] duration-100 ease-linear" href="mailto:kuromika.dev@gmail.com" target='_blank' rel="noreferrer" aria-describedby="new-window-1"><span aria-hidden={true}>↗</span> Kuromika.dev@gmail.com</a>
              </div>
                <div className="flex flex-col gap-5 items-center">
                  <h3 className="uppercase font-semibold text-xl">Social</h3>
                  <div className="flex justify-around w-[100%] lg:gap-10">
                    <a className="uppercase text-sm sm:text-lg text-[#ff4637] font-medium hover:border-b-4 border-b-[#ff4637] transition-[border-width] duration-100 ease-linear" href="https://github.com/kuromika" target='_blank' rel="noreferrer" aria-describedby="new-window-0"><span aria-hidden={true}>↗</span> Github </a>
                    <a className="uppercase text-sm sm:text-lg text-[#ff4637] font-medium hover:border-b-4 border-b-[#ff4637] transition-[border-width] duration-100 ease-in-linear" href="https://twitter.com/kuromika__" target='_blank' rel="noreferrer" aria-describedby="new-window-0"><span aria-hidden={true}>↗</span> Twitter</a>
                  </div>
                </div> 
            </div>
        </div>
        <div className="h-[45vh] w-[100%] sm:h-[60vh] lg:w-[40vw] xl:w-[40vw]">
        <Canvas camera={{ fov: 90, zoom: 1, near: 0.1, far: 1000 }}>
                <Suspense fallback={<Loading></Loading>}>
                  <OrbitControls autoRotate={true} autoRotateSpeed={1} />
                  <ambientLight intensity={theme === "dark" ? 1 : 0.5}>
                    <Center>
                      <Bocchi></Bocchi>
                    </Center>
                  </ambientLight>
                </Suspense>
              </Canvas>
          </div>
    </section>
  );
});
