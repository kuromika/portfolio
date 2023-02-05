import { ThemeContext } from "@/lib/context/ThemeContext";
import clsx from "clsx";
import { useContext } from "react";

export const NavAnchor = (props: { href: string; text: string }) => {

  const theme = useContext(ThemeContext);

  return (
    <li>
      <a
        href={props.href}
        className={clsx("block transition-colors duration-300 ease-linear sm:pl-5 sm:pr-5 p-3",
        {' text-black hover:bg-black hover:text-white' : theme === 'light'},
        {'bg-black text-white hover:bg-[#F2F2F2]/90 hover:text-black' : theme === 'dark'})}>
        {props.text}
      </a>
    </li>
  );
};
