import { useGLTF } from "@react-three/drei"


export const Bocchi = () => {
    const gltf = useGLTF('/bocchi_rubbish_bin-transformed.glb');

    return(
        <primitive object={gltf.scene} scale={[0.5,0.5,0.5]}></primitive>
    )
}