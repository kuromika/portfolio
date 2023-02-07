import { ThemeContext } from "@/lib/context/ThemeContext";
import { Center, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { forwardRef, Suspense, useContext } from "react";
import { DivergenceMeter } from "../3d/DivergenceMeter";
import { Loading } from "../3d/Loading";
import { DivInview } from "../animations/DivInview";
import { Name } from "./Name";

export const Intro = forwardRef<HTMLDivElement>(function Intro(props, ref) {
  const theme = useContext(ThemeContext);

  return (
    <DivInview>
      <div
        id="intro"
        className="flex h-screen snap-start snap-always flex-col items-center justify-center gap-5"
        ref={ref}
      >
        <div className="h-[25vh] w-[99vw] sm:h-[40vh] sm:w-[80vw] lg:w-[40vw]">
          <Canvas camera={{ fov: 3, zoom: 1, near: 0.1, far: 1000 }}>
            <Suspense fallback={<Loading />}>
              <OrbitControls autoRotate={true} autoRotateSpeed={6} />
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
