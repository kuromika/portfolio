import { ThemeContext } from "@/lib/context/ThemeContext";
import { Center, OrbitControls, useProgress, Html } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { forwardRef, Suspense, useContext } from "react";
import { DivergenceMeter } from "../3d/DivergenceMeter";
import { DivInview } from "../animations/DivInview";
import { Name } from "./Name";

export const Intro = forwardRef<HTMLDivElement>(function Intro(props, ref) {
  const theme = useContext(ThemeContext);
  const { progress } = useProgress();

  return (
    <DivInview>
      <div
        id="intro"
        className="flex h-screen snap-start snap-always flex-col items-center justify-center gap-5"
        ref={ref}
      >
        <div className="h-[25vh] w-[99vw] sm:h-[40vh] sm:w-[80vw] lg:w-[40vw]">
          <Canvas camera={{ fov: 3, zoom: 1, near: 0.1, far: 1000 }}>
            <Suspense fallback={<Html center>{progress} % loaded</Html>}>
              <OrbitControls autoRotate={true} />
              <ambientLight intensity={theme === "dark" ? 0.7 : 0.5}>
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
