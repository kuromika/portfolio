import { Center } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";
import { DivergenceMeter } from "../3d/DivergenceMeter";
import { DivInview } from "../animations/DivInview";

type LinkedName = null | {
  name: string;
  next: null | LinkedName;
};

export const Intro = () => {
  const [name, setName] = useState("Jean Alvarez");

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
        className="flex h-screen snap-start snap-always flex-col items-center justify-center sm:ml-[10%] sm:justify-start md:flex-row"
      >
        <h1 className="text-center text-lg font-bold uppercase sm:text-left sm:text-4xl">
          <span aria-hidden="true">{name}</span>
          <span className="sr-only">Jean Alvarez</span>
          <span className="block sm:ml-20">full-stack developer</span>
        </h1>
        <div className="h-[40%] w-[90%] md:h-[60%] md:w-[80%]">
          <Canvas camera={{ fov: 5, zoom: 1, near: 0.1, far: 1000 }}>
            <ambientLight intensity={1}>
              <directionalLight />
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
