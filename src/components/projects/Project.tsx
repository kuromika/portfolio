import { ThemeContext } from "@/lib/context/ThemeContext";
import clsx from "clsx";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";

export type ProjectProps = {
  title: string;
  description: string;
  stack: string;
  alt: string;
  repo: string;
  live: string;
  static: string;
};

export const Project = (props: ProjectProps) => {
  const theme = useContext(ThemeContext);

  return (
    <div
      className={clsx(
        "project flex flex-col items-center gap-5 border-b-2 border-b-white/30  p-5  hover:text-[#ff4637] md:flex-row md:justify-center md:gap-10",
        { "border-b-black/30": theme === "light" },
        { "hover:text-red-900": theme === "light" }
      )}
    >
      <div className="flex flex-col justify-around gap-5 md:w-[60%]">
        <h3 className="font-bold md:text-2xl ">{props.title}</h3>
        <p className="text-base md:text-lg md:font-light">
          {props.description}
        </p>
        <p className="text-base md:text-lg md:font-light">{props.stack}</p>
        <div className="flex gap-10">
          <a
            target="_blank"
            rel="noreferrer"
            className={clsx(
              "font-bold text-black underline transition-[color] duration-100 ease-in hover:text-[#ff4637]",
              { "text-white": theme === "dark" },
              { "hover:text-red-900": theme === "light" }
            )}
            href={props.live}
          >
            Live <span aria-hidden={true}>→</span>
            <span className="sr-only">opens a new window</span>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            className={clsx(
              "font-bold text-black underline transition-[color] duration-100 ease-in hover:text-[#ff4637]",
              { "text-white": theme === "dark" },
              { "hover:text-red-900": theme === "light" }
            )}
            href={props.repo}
          >
            Repo <span aria-hidden={true}>→</span>{" "}
            <span className="sr-only">opens a new window</span>
          </a>
        </div>
      </div>
      <div className="relative z-[2] h-[20vh] w-[90%] sm:h-[30vh] lg:w-[40%]">
        <Image fill src={props.static} alt={props.alt} sizes={"100%"}></Image>
      </div>
    </div>
  );
};
