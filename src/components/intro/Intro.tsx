import { ThemeContext } from "@/lib/context/ThemeContext";
import { Center, PerformanceMonitor } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { forwardRef, Suspense, useContext, useState } from "react";
import { NoSSR } from "../3d/Dynamic";
import { Loading } from "../3d/Loading";
import { PrimitiveModel } from "../3d/PrimitiveModel";
import { DivInview } from "../animations/DivInview";
import { Name } from "./Name";

export const Intro = forwardRef<HTMLDivElement>(function Intro(props, ref) {
  const theme = useContext(ThemeContext);
  const [dpr, setDpr] = useState(1);

  return (
    <DivInview>
      <div
        id="intro"
        className="flex h-screen flex-col items-center justify-center gap-5 p-5 pr-5  "
        ref={ref}
      >
        <div className="h-[25vh] w-[99vw] sm:h-[50vh] sm:w-[80vw] lg:h-[60vh] lg:w-[50vw]">
          <Canvas camera={{ fov: 3.5, zoom: 1, near: 0.1, far: 1000}} dpr={dpr} >
            <PerformanceMonitor onDecline={() => setDpr(0.5)}></PerformanceMonitor>
            <Suspense fallback={<Loading />}>
              <ambientLight intensity={theme === "dark" ? 1 : 0.5}>
                <Center>
                  <NoSSR>
                    <PrimitiveModel scale={[1,1,1]} rotation={0.005} model='/divergence-transformed.glb'></PrimitiveModel>
                  </NoSSR>
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
