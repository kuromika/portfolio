import { DivInview } from "../animations/DivInview";

export const About = () => {
  return (
    <DivInview>
      <section
        id="about"
        className="flex h-screen snap-start snap-always flex-col items-center justify-center gap-10 p-7"
      >
        <div className="md:w-[80%] md:text-xl">
          <h2 className="mb-5 text-2xl font-semibold after:block after:h-1 after:w-10 after:bg-black/70 after:content-[''] md:text-3xl">
            About me:
          </h2>
          <p>
            My name is Jean, also known as Kuromika on social media. I’m a
            highly driven self-taught web developer. I have honed my skills
            through extensive experimentation and hands-on projects, and I am
            constantly seeking out new challenges and opportunities to improve
            my craft.
          </p>{" "}
          <p className="mt-3">
            {" "}
            When I am not coding, I like to immerse myself in the eclectic world
            of Japanese math rock and shoegaze music, drawing inspiration from
            their complex rhythms and ethereal soundscapes.{" "}
          </p>
          <ul></ul>
        </div>
      </section>
    </DivInview>
  );
};
