import { useWindowDimensions } from "@/lib/hooks/useWindowDimensions";
import { useEffect, useRef } from "react"

export const Petal = (props: {speed: number}) => {

    const petalRef = useRef<HTMLDivElement>(null);
    const { width, height } = useWindowDimensions();

    useEffect(() => {

        const myPetal = petalRef.current;

        if (myPetal && width && height) {

            let x = Math.floor(Math.random() * width);
            myPetal.style.left = `${x}px`

            let y = window.scrollY + 10;
            let direction = 0;

            const directionInterval = setInterval(() => {
                direction = Math.floor(Math.random() * 2);
            }, 1000);


            const movementeInterval = setInterval(() => {
              
                if (myPetal.getBoundingClientRect().right > width - 10 || myPetal.getBoundingClientRect().left < 10) {
                    x = Math.floor(Math.random() * width);
                    y = window.screenY + 10;
                }
                
                if (height - myPetal.getBoundingClientRect().bottom < 10 || myPetal.getBoundingClientRect().top < 10) {
                    y = window.scrollY + 10;
                }

                direction === 0 ? x++ : x--;
                y++;

                myPetal.style.left = `${x}px`;
                myPetal.style.top = `${y}px`;
            }, props.speed)

            return () => {
                clearInterval(movementeInterval)
                clearInterval(directionInterval);
            };
        }

        
    }, [width, height, props]);

    return (
        <div className="w-2 h-4 rounded-[50%] bg-[#ffb7c5]/50 -z-1 absolute" ref={petalRef}></div>
    )
}