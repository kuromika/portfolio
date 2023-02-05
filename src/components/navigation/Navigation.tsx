import { useWindowDimensions } from "@/lib/hooks/useWindowDimensions";
import { mdiMenu } from "@mdi/js";
import Icon from "@mdi/react";
import { useContext, useEffect, useState } from "react";
import { NavAnchor } from "./NavAnchor";
import { motion } from "framer-motion";
import { ThemeContext, ThemeType } from "@/lib/context/ThemeContext";
import clsx from "clsx";

export const Navigation = (props: {setTheme: (mode: ThemeType) => void}): JSX.Element => {
  const windowDimensions = useWindowDimensions();
  const [hasMenu, setHasMenu] = useState(false);

  const handleMenuClick = () => {
    setHasMenu((prev) => !prev);
  };


  useEffect(() => {
    if (windowDimensions !== undefined) {
      windowDimensions.width! < 639 && setHasMenu(false);
    }
  }, [windowDimensions]);

  return (
    <nav className="">
      {windowDimensions.width! < 640 ? (
        <>
          <button
            type="button"
            aria-label="navigation"
            onClick={handleMenuClick}
            className=" relative ml-2 mt-2 flex items-center gap-1 pt-2"
          >
            <Icon path={mdiMenu} className="w-5"></Icon>
            Menu
          </button>
          {hasMenu && <NavAnchors></NavAnchors>}
        </>
      ) : (
        <NavAnchors></NavAnchors>
      )}
    </nav>
  );
};

export const NavAnchors = () => {
  const theme = useContext(ThemeContext);
  
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 1, ease: "linear" }}
    >
      <ul className={clsx("absolute flex flex-col border-r-2 border-b-2 sm:static sm:ml-5 sm:flex-row sm:border-none",
        { 'border-r-black/50 border-b-black/50': theme === 'light' },
      {'border-r-white/50, border-b-white/50' : theme === 'dark'})}>
        <NavAnchor href="#intro" text="Top"></NavAnchor>
        <div className="items-center sm:ml-auto sm:mr-5 sm:flex">
          <NavAnchor href="#about" text="About me"></NavAnchor>
          <NavAnchor href="#projects" text="Projects"></NavAnchor>
          <NavAnchor href="#contact" text="Contact"></NavAnchor>
        </div>
      </ul>
    </motion.div>
  );
};
