import { ThemeContext } from "@/lib/context/ThemeContext";
import clsx from "clsx";
import { useContext } from "react";

export const NavAnchor = (props: { onclick?: () => void; text: string }) => {
  const theme = useContext(ThemeContext);

  return (
    <li>
      <a
        onClick={props.onclick}
        tabIndex={0}
        className={clsx(
          "block cursor-pointer p-3 font-semibold sm:pl-5 sm:pr-5 bg-black",
          { " text-black hover:bg-black hover:text-white bg-white": theme === "light" },
          {
            " text-white hover:bg-[#F2F2F2]/90 hover:text-black":
              theme === "dark",
          }
        )}
      >
        {props.text}
      </a>
    </li>
  );
};
