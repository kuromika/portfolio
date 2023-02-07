import { ThemeContext } from "@/lib/context/ThemeContext";
import { Center, OrbitControls, PerformanceMonitor } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { forwardRef, Suspense, useContext, useState } from "react";
import { DivergenceMeter } from "../3d/DivergenceMeter";
import { Loading } from "../3d/Loading";
import { DivInview } from "../animations/DivInview";
import { Name } from "./Name";

export const Intro = forwardRef<HTMLDivElement>(function Intro(props, ref) {
  const theme = useContext(ThemeContext);
  const [dpr, setDpr] = useState(1);

  return (
    <DivInview>
      <div
        id="intro"
        className="flex h-screen snap-start snap-always flex-col items-center justify-center gap-5 p-5 pr-5"
        ref={ref}
      >
        <div className="h-[25vh] w-[99vw] sm:h-[50vh] sm:w-[80vw] lg:h-[60vh] lg:w-[50vw]">
          <Canvas camera={{ fov: 3.5, zoom: 1, near: 0.1, far: 1000}} frameloop={"demand"} dpr={dpr}>
            <PerformanceMonitor onIncline={() => setDpr(0.75)} onDecline={() => setDpr(0.5)}></PerformanceMonitor>
            <Suspense fallback={<Loading />}>
              <OrbitControls autoRotate={true} autoRotateSpeed={1} enableZoom={false} enableDamping={false} enablePan={false} />
              <ambientLight intensity={theme === "dark" ? 1 : 0.5}>
                <Center>
                  <DivergenceMeter></DivergenceMeter>
                </Center>
              </ambientLight>
            </Suspense>
          </Canvas>
        </div>
        <Name></Name>
      </div>
    </DivInview>
  );
});
