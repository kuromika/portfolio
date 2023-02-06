import { Html, useProgress } from '@react-three/drei'

export const Loading = () => {
    const { progress } = useProgress();

    return <Html center>{progress}% loaded</Html>
}