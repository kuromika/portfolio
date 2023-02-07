import { ThemeContext } from "@/lib/context/ThemeContext"
import clsx from "clsx"
import Image from "next/image"
import { useContext, useEffect, useState } from "react"


export type ProjectProps = {
    title: string,
    description: string,
    stack: string,
    src: string,
    alt: string
    repo: string,
    live: string,
    static:string
}


export const Project = (props: ProjectProps) => {

    const theme = useContext(ThemeContext);
    const [image, setImage] = useState(props.static);

    const checkMobile = () => {
        return /Android|iPhone/i.test(navigator.userAgent);
    }

    useEffect(() => {

        if (window){
            if (checkMobile()){
                setImage(props.src);
            }
        }
    }, [props])


    const handleMouseEnter = () => {
        setImage(props.src);
    }

    const handleMouseLeave = () => {
        setImage(props.static);
    }

    return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={clsx("flex flex-col items-center gap-5 md:justify-center md:gap-10 p-5  md:flex-row project first-of-type:border-t-2 first-of-type:border-t-white/30 border-b-2 border-b-white/30 hover:text-[#ff4637]", { 'first-of-type:border-t-black/30': theme === 'light' }, {'border-b-black/30' : theme === 'light'}, {'hover:text-red-900' : theme === 'light'})}>
            <div className="flex flex-col justify-around gap-5 md:w-[60%]">
                <h3 className="text-xl font-bold ">{props.title}</h3>
                <p>{props.description}</p>
                <p>{props.stack}</p>
                <div className="flex gap-10">
                    <a target='_blank' rel="noreferrer" className={clsx("text-black underline transition-[color] duration-100 ease-in hover:text-[#ff4637] font-bold", {'text-white': theme === 'dark'}, {'hover:text-red-900':theme === 'light'})} href={props.live}>Live → <span className="sr-only">opens a new window</span></a>
                    <a target='_blank' rel="noreferrer" className={clsx("text-black underline transition-[color] duration-100 ease-in hover:text-[#ff4637] font-bold", {'text-white': theme === 'dark'}, {'hover:text-red-900':theme === 'light'})} href={props.repo}>Repo → <span className="sr-only">opens a new window</span></a>
                </div>
            </div>
            <div className="relative h-[20vh] w-[90%] sm:h-[30vh] lg:w-[40%] z-[2]">
                <Image fill src={image} alt={props.alt}></Image>
            </div>
        </div>
    )
}   