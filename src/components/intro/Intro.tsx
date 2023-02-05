import { Center } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import { DivergenceMeter } from "../3d/DivergenceMeter";
import { DivInview } from "../animations/DivInview";

type LinkedName = null | {
    name: string,
    next: null | LinkedName
}

export const Intro = () => {

    const [name, setName] = useState('Jean Alvarez');

    useEffect(() => {

        
        const first: LinkedName = { name: 'Jean Alvarez', next: null };

        const second: LinkedName = { name: 'Kuromika', next: first };

        first.next = second;

        let current: LinkedName = first;

        const interval = setInterval(() => {
            if (current) {
                setName(current.name);
                current = current.next;
            }
           

        }, 2000);

        return () => clearInterval(interval);
       
    }, [])




    return (
        <DivInview>
            <div id='intro' className="h-screen snap-start snap-always flex flex-col justify-center items-center md:flex-row sm:justify-start sm:ml-[10%]">
                <h1 className="font-bold text-lg text-center uppercase sm:text-4xl sm:text-left"><span aria-hidden='true'>{name}</span><span className="sr-only">Jean Alvarez</span><span className="block sm:ml-20">full-stack developer</span></h1>
                <div className="w-[90%] h-[40%] md:w-[80%] md:h-[60%]">
                    <Canvas camera={{ fov: 5, zoom: 1, near: 0.1, far: 1000 }}>
                        <ambientLight intensity={0.3}>
                            <directionalLight />
                            <Center>
                                <DivergenceMeter></DivergenceMeter>
                            </Center>
                        </ambientLight>
                    </Canvas>
                </div>
            </div>
        </DivInview>
    )
}