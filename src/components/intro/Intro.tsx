import { ThemeContext } from "@/lib/context/ThemeContext";
import { Center, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useContext, useEffect, useState } from "react";
import { DivergenceMeter } from "../3d/DivergenceMeter";
import { DivInview } from "../animations/DivInview";

type LinkedName = null | {
  name: string;
  next: null | LinkedName;
};

export const Intro = () => {
  const [name, setName] = useState("Jean Alvarez");
  const theme = useContext(ThemeContext);

  useEffect(() => {
    const first: LinkedName = { name: "Jean Alvarez", next: null };

    const second: LinkedName = { name: "Kuromika", next: first };

    first.next = second;

    let current: LinkedName = first;

    const interval = setInterval(() => {
      if (current) {
        setName(current.name);
        current = current.next;
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <DivInview>
      <div
        id="intro"
        className="flex h-screen snap-start snap-always items-center justify-center flex-col"
      >
        <h1 className="text-center text-lg font-bold uppercase sm:text-left sm:text-3xl">
          <span aria-hidden="true">{name}</span>
          <span className="sr-only">Jean Alvarez</span>
          <span className="block mt-3 sm:ml-20">full-stack developer</span>
        </h1>
        <div className="w-[99vw] h-[25vh] sm:h-[40vh]">
          <Canvas camera={{ fov: 3, zoom: 1, near: 0.1, far: 1000 }}>
            <OrbitControls autoRotate={true} />
            <ambientLight intensity={0.5}>
              <directionalLight color={'white'} intensity={theme === 'dark' ? 0.3 : 0} />
              <Center>
                  <DivergenceMeter></DivergenceMeter>
              </Center>
              </ambientLight>
          </Canvas>
        </div>
      </div>
    </DivInview>
  );
};
