import { useWindowDimensions } from "@/lib/hooks/useWindowDimensions"
import { mdiMenu } from "@mdi/js";
import Icon from "@mdi/react";
import { useEffect, useState } from "react";
import { NavAnchor } from "./NavAnchor";
import { easeIn, easeOut, motion } from 'framer-motion';


export const Navigation = (): JSX.Element => {

    const windowDimensions = useWindowDimensions();
    const [hasMenu, setHasMenu] = useState(false);

    const handleMenuClick = () => {
        setHasMenu((prev) => !prev);
    }

   

    useEffect(() => {

        if (windowDimensions !== undefined) {
            windowDimensions.width! < 639 && setHasMenu(false); 
        }

    }, [windowDimensions])




    return (

        <nav className="">
            {windowDimensions.width! < 640 ? 
                <>
                    <button type="button" aria-label="navigation" onClick={handleMenuClick} className=' pt-2 relative flex items-center gap-1 ml-2 mt-2'>
                        <Icon path={mdiMenu} className='w-5'></Icon>
                        Menu
                    </button>
                    {hasMenu && <NavAnchors></NavAnchors>}
                </>
                :
                <NavAnchors></NavAnchors>
            }
        </nav>

    )
}



export const NavAnchors = () => {

    return (
        <motion.div animate={{opacity: 1}} initial={{opacity: 0}} transition={{duration: 1, ease: 'linear'}}>
            <ul className="flex flex-col border-r-black border-b-black border-b-2 border-2 absolute sm:static sm:flex-row sm:border-none sm:ml-5">
                <NavAnchor href="#intro" text="Top"></NavAnchor>
                <div className="sm:ml-auto sm:flex items-center sm:mr-5">
                <NavAnchor href="#about" text="About me"></NavAnchor>
                <NavAnchor href="#projects" text="Projects"></NavAnchor>
                <NavAnchor href="#contact" text="Contact"></NavAnchor>
                </div>
            </ul>
        </motion.div>
    );
}