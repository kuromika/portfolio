import clsx from "clsx";
import { useContext } from "react";
import { NavAnchor } from "./NavAnchor";
import { motion } from "framer-motion";
import { ThemeContext } from "@/lib/context/ThemeContext";

type AnchorsProps = {
  intro: () => void;
  about: () => void;
  projects: () => void;
  contact: () => void;
};

export const Anchors = (props: AnchorsProps) => {
  const theme = useContext(ThemeContext);

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "linear" }}
    >
      <ul
        className={clsx(
          "absolute flex flex-col border-r-2 border-b-2 sm:static sm:ml-5 sm:flex-row sm:border-none",
          { "border-r-black/50 border-b-black/50": theme === "light" },
          { "border-r-white/50, border-b-white/50": theme === "dark" }
        )}
      >
        <NavAnchor onclick={props.intro} text="Top"></NavAnchor>
        <div className="items-center sm:ml-auto sm:mr-5 sm:flex">
          <NavAnchor onclick={props.about} text="About me"></NavAnchor>
          <NavAnchor onclick={props.projects} text="Projects"></NavAnchor>
          <NavAnchor onclick={props.contact} text="Contact"></NavAnchor>
        </div>
      </ul>
    </motion.div>
  );
};
