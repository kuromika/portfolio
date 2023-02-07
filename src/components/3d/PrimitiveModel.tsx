import { useGLTF } from "@react-three/drei"
import { PrimitiveProps, useFrame } from "@react-three/fiber"
import { useRef } from "react"


type PrimitiveModelProps = {
    rotation: number
    model: string
    scale: number[]
}

export const PrimitiveModel = (props: PrimitiveModelProps) => {

    const gltf = useGLTF(props.model);
    const ref = useRef<PrimitiveProps>();

  useFrame(() => {
    if (ref.current){
      ref.current.rotation.y += props.rotation;
    }
  })


  return <primitive ref={ref} object={gltf.scene} scale={props.scale}></primitive>;
    
}