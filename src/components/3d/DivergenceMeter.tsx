
import { useWindowDimensions } from '@/lib/hooks/useWindowDimensions';
import { Html, useProgress } from '@react-three/drei'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { Suspense, useEffect } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'


export function Loader() {
    const { progress } = useProgress();
    return <Html center>{progress} % loaded</Html>
}

export const DivergenceMeter = () => {
    const gltf = useLoader(GLTFLoader, '/divergence_meter_steinsgate.glb');
    const { width, height } = useWindowDimensions();

    
    return (
        <Suspense fallback={<Loader></Loader>}>
            <primitive object={gltf.scene}/>
        </Suspense>
    )
}