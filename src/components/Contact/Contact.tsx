import { ThemeContext } from "@/lib/context/ThemeContext";
import { Center, PerformanceMonitor } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import clsx from "clsx";
import { forwardRef, Suspense, useContext, useState } from "react";
import { NoSSR } from "../3d/Dynamic";
import { Loading } from "../3d/Loading";
import { PrimitiveModel } from "../3d/PrimitiveModel";
import { DivInview } from "../animations/DivInview";

export const Contact = forwardRef<HTMLElement>(function Contact(props, ref) {
  const theme = useContext(ThemeContext);
  const [dpr, setDpr] = useState(1);

  return (
    <DivInview>
      <section
        ref={ref}
        className="mt-10 flex min-h-screen snap-start snap-always flex-col items-center justify-center pt-5 pl-5 pr-5 pb-5 sm:pt-24 sm:pb-24"
      >
        <div className="flex w-[100%] flex-col md:w-[90%] lg:w-[80%]">
          <h2
            className={clsx(
              "border-b-2 border-b-black text-xl font-semibold md:text-4xl lg:pb-5 xl:text-5xl ",
              { "border-b-white": theme === "dark" }
            )}
          >
            Contact
          </h2>
          <div className="flex flex-col gap-10 pt-20 lg:flex-row lg:justify-around">
            <div className="flex flex-col items-center gap-5">
              <h3 className="text-xl font-semibold  uppercase">Email</h3>
              <a
                className="border-b-[#ff4637] text-sm font-medium uppercase text-[#ff4637] transition-[border-width] duration-100 ease-linear hover:border-b-4 sm:text-lg"
                href="mailto:kuromika.dev@gmail.com"
                target="_blank"
                rel="noreferrer"
                aria-describedby="new-window-1"
              >
                <span aria-hidden={true} className='font-bold sm:text-lg'>↗</span> Kuromika.dev@gmail.com
              </a>
            </div>
            <div className="flex flex-col items-center gap-5">
              <h3 className="text-xl font-semibold uppercase">Social</h3>
              <div className="flex w-[100%] justify-around lg:gap-10">
                <a
                  className="border-b-[#ff4637] text-sm font-medium uppercase text-[#ff4637] transition-[border-width] duration-100 ease-linear hover:border-b-4 sm:text-lg"
                  href="https://github.com/kuromika"
                  target="_blank"
                  rel="noreferrer"
                  aria-describedby="new-window-0"
                >
                  <span aria-hidden={true} className='font-bold sm:text-lg'>↗</span> Github{" "}
                </a>
                <a
                  className="ease-in-linear border-b-[#ff4637] text-sm font-medium uppercase text-[#ff4637] transition-[border-width] duration-100 hover:border-b-4 sm:text-lg"
                  href="https://twitter.com/kuromika__"
                  target="_blank"
                  rel="noreferrer"
                  aria-describedby="new-window-0"
                >
                  <span aria-hidden={true} className='font-bold sm:text-lg'>↗</span> Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[35vh] w-[100%] sm:h-[60vh] lg:w-[40vw] xl:w-[40vw] p-10">
          <Canvas camera={{ fov: 90, zoom: 1, near: 0.1, far: 1000 }}  dpr={dpr}>
            <PerformanceMonitor onDecline={() => setDpr(0.4)}></PerformanceMonitor>
            <Suspense fallback={<Loading></Loading>}>
              <ambientLight intensity={theme === "dark" ? 1 : 0.5}>
                <Center>
                  <NoSSR>
                    <PrimitiveModel model='/bocchi_rubbish_bin-transformed.glb' scale={[0.5,0.5,0.5]} rotation={0.01}></PrimitiveModel>
                  </NoSSR>
                </Center>
              </ambientLight>
            </Suspense>
          </Canvas>
        </div>
      </section>
    </DivInview>
  );
});
