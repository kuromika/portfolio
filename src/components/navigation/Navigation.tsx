import { useWindowDimensions } from "@/lib/hooks/useWindowDimensions";
import { mdiMenu } from "@mdi/js";
import Icon from "@mdi/react";
import { RefObject, useContext, useEffect, useState } from "react";
import { ThemeType } from "@/lib/context/ThemeContext";
import { Anchors } from "./Anchors";

type NavigationProps = {
  intro: RefObject<HTMLDivElement>;
  about: RefObject<HTMLElement>;
  projects: RefObject<HTMLDivElement>;
  contact: RefObject<HTMLDivElement>;
  setTheme: (mode: ThemeType) => void;
};

export const Navigation = (props: NavigationProps): JSX.Element => {
  const windowDimensions = useWindowDimensions();
  const [hasMenu, setHasMenu] = useState(false);

  const handleMenuClick = () => {
    setHasMenu((prev) => !prev);
  };

  const scrollTo = (ref: RefObject<HTMLDivElement | HTMLElement>) => {
    return function scroll() {
      ref.current?.scrollIntoView({ block: "start" });
    };
  };

  const scrollToIntro = scrollTo(props.intro);
  const scrollToAbout = scrollTo(props.about);
  const scrollToProjects = scrollTo(props.projects);
  const scrollToContact = scrollTo(props.contact);

  useEffect(() => {
    if (windowDimensions !== undefined) {
      windowDimensions.width! < 639 && setHasMenu(false);
    }
  }, [windowDimensions]);

  const anchors = (
    <Anchors
      intro={scrollToIntro}
      about={scrollToAbout}
      projects={scrollToProjects}
      contact={scrollToContact}
    ></Anchors>
  );

  return (
    <nav className="pl-5 sm:pl-10 sm:pr-10">
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
          {hasMenu && anchors}
        </>
      ) : (
        anchors
      )}
    </nav>
  );
};
