import { Intro } from "@/components/intro/Intro";
import { Navigation } from "@/components/navigation/Navigation";
import { Petal } from "@/components/rain/Petal";
import { Rain } from "@/components/rain/Rain";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F2F2F2]">
      <header className="bg-white/30 fixed top-0 w-screen">
        <Navigation></Navigation>
      </header>

      <main className="flex flex-col overflow-x-hidden">

        <Intro></Intro>
        <Rain></Rain>

        <section className="">
          <h2>About me</h2>
          <p>My name is Jean, also known as Kuromika on social media.  I’m a highly driven self-taught web developer. I have honed my skills through extensive experimentation and hands-on projects, and I am constantly seeking out new challenges and opportunities to improve my craft. When I am not coding, I like to immerse myself in the eclectic world of Japanese math rock and shoegaze music, drawing inspiration from their complex rhythms and ethereal soundscapes. </p>

          <h3>Technologies I use:</h3>

          <h4>Languages:</h4>
          <ul>
            <li>TypeScript</li>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>

          <h4>Frameworks:</h4>
          <ul>
            <li>React</li>
            <li>Next.js</li>
            <li>Tailwind CSS</li>
            <li>Jest</li>
          </ul>

          <h4>Libraries:</h4>
          <ul>
            <li>react-testing-library</li>
            <li>react-router</li>
          </ul>
        </section>
      
      </main>
    </div >
  )
}
