import { useWindowDimensions } from "@/lib/hooks/useWindowDimensions"
import { mdiMenu } from "@mdi/js";
import Icon from "@mdi/react";
import { useEffect, useState } from "react";
import { NavAnchor } from "./NavAnchor";


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

        <nav className="pl-5 pr-5 pt-2 pb-2">
            {windowDimensions.width! < 640 ? 
                <div>
                    <button type="button" aria-label="navigation" onClick={handleMenuClick} className=' pt-2 relative flex items-center gap-1'>
                        <Icon path={mdiMenu} className='w-5'></Icon>
                        Menu
                    </button>
                    {hasMenu && <NavAnchors></NavAnchors>}
                </div>
                :
                <NavAnchors></NavAnchors>
            }
        </nav>

    )
}



export const NavAnchors = () => {
    return (
        <ul className="flex flex-col border-black border-2 bg-[#F2F2F2] absolute sm:static sm:flex-row sm:border-none">
            <NavAnchor href="#top" text="Top"></NavAnchor>
            <div className="sm:ml-auto sm:flex gap-2 items-center">
            <NavAnchor href="#about" text="About me"></NavAnchor>
            <NavAnchor href="#projects" text="Projects"></NavAnchor>
            <NavAnchor href="#contact" text="Contact"></NavAnchor>
            </div>
        </ul>
    );
}