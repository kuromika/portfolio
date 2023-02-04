import { useState } from "react";

export const Intro = () => {

    const [name, setName] = useState('Jean Alvarez');


    const handleHover = () => {
        setName('Kuromika');
    }

    const handleLeave = () => {
        setName('Jean Alvarez');
    }


    return (
        <div id='intro' className="h-screen snap-start snap-always flex items-center justify-center sm:justify-start sm:ml-[10%]">
            <h1 className="font-bold text-lg text-center uppercase sm:text-4xl sm:text-left"><span onMouseOver={handleHover} onMouseLeave={handleLeave}>{name}</span><span className="block sm:ml-20">full-stack developer</span></h1>
        </div>
    )
}