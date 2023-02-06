import { useGLTF } from "@react-three/drei";

export const Ibm = () => {
    const gltf = useGLTF('/ibm_5110-transformed.glb');

    return (
        <primitive object={gltf.scene} scale={[0.1,0.1,0.1]}></primitive>
    )
}