import { useGLTF } from "@react-three/drei";

export const DivergenceMeter = () => {
  const gltf = useGLTF("/divergence-transformed.glb");

  return <primitive object={gltf.scene} />;
};
