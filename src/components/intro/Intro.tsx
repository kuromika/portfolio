import { ThemeContext } from "@/lib/context/ThemeContext";
import { Center, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { forwardRef, useContext } from "react";
import { DivergenceMeter } from "../3d/DivergenceMeter";
import { DivInview } from "../animations/DivInview";
import { Name } from "./Name";



export const Intro = forwardRef<HTMLDivElement>(function Intro(props, ref){
 
  const theme = useContext(ThemeContext);

  return (
    <DivInview>
      <div
        id="intro"
        className="flex h-screen snap-start snap-always items-center justify-center flex-col gap-5"
        ref={ref}
      >
        <div className="w-[99vw] h-[25vh] sm:w-[80vw] sm:h-[40vh] lg:w-[40vw]">
          <Canvas camera={{ fov: 3, zoom: 1, near: 0.1, far: 1000 }}>
            <OrbitControls autoRotate={true}/>
            <ambientLight intensity={0.5}>
              <directionalLight color={'white'} intensity={theme === 'dark' ? 0.3 : 0} />
              <Center>
                  <DivergenceMeter></DivergenceMeter>
              </Center>
              </ambientLight>
          </Canvas>
        </div>
       <Name></Name>
      </div>
    </DivInview>
  );
});
