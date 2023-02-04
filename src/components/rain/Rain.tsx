import { Petal } from "./Petal";

export const Rain = () => {

    const petals = [];

    for (let i = 0; i < 30; i++){
        const speed = Math.floor(Math.random() * 40 + 10);
        petals.push(<Petal key={i} speed={speed}></Petal>)
    }


    return (
        <>
            {petals}
        </>
    )
}