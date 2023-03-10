import { About } from "@/components/about/About";
import { Intro } from "@/components/intro/Intro";
import { Navigation } from "@/components/navigation/Navigation";
import { ThemeContext, ThemeType } from "@/lib/context/ThemeContext";
import { createRef, useState } from "react";
import clsx from "clsx";
import { SwitchTheme } from "@/components/theme/SwitchTheme";
import { Projects } from "@/components/projects/Projects";
import { Contact } from "@/components/contact/Contact";
import Head from "next/head";

export default function Home() {
  const [theme, setTheme] = useState<ThemeType>("dark");
  const intro = createRef<HTMLDivElement>();
  const about = createRef<HTMLElement>();
  const projects = createRef<HTMLDivElement>();
  const contact = createRef<HTMLDivElement>();

  return (
    <ThemeContext.Provider value={theme}>
      <Head>
        <title>Kuromika - Portfolio</title>
        <link href="/sailor.ico" rel="shortcut icon"></link>
        <meta property="og:title" content="Kuromika Portfolio" key="title" />
        <meta lang="en"/>
        <meta name="description" content="Kuromika - Full-Stack Developer"/>
        <meta name="author" content="Jean Alvarez"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta
          property="og:image"
          content="https://kuromika.vercel.app/ogimage2.jpg"
        />
        <meta property="og:url" content="https://kuromika.vercel.app/" />
        <meta property="og:description" content="Kuromika - Full-Stack Developer" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Kuromika__" />
        <meta name="twitter:title" content="Kuromika Portfolio" />
        <meta name="twitter:description" content="Kuromika - Full-Stack Developer"/>
        <meta name="twitter:image" content="https://kuromika.vercel.app/ogimage2.jpg"/>
        <meta name="twitter:image:alt" content="Kuromika's Portfolio Banner"></meta>

      </Head>
      <div
        className={clsx("section-white overflow-y-auto text-black", {
          "section-black text-white": theme == "dark",
        })}
      >
        <header
          className={clsx("fixed top-0  z-10 w-screen bg-white/70", {
            "bg-black/70": theme === "dark",
          })}
        >
          <Navigation
            intro={intro}
            about={about}
            projects={projects}
            contact={contact}
            setTheme={setTheme}
          ></Navigation>

          <SwitchTheme setTheme={setTheme}></SwitchTheme>
        </header>
        <main className="h-screen overflow-y-auto scroll-smooth scroll-p-14">
          <div hidden>
            <span id="new-window-0">Opens in a new window</span>
            <span id="new-window-1">Opens send email application</span>
          </div>
          <Intro ref={intro}></Intro>
          <About ref={about}></About>
          <Projects ref={projects}></Projects>
          <Contact ref={contact}></Contact>
        </main>
      </div>
    </ThemeContext.Provider>
  );
}
