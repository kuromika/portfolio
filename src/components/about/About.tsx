import { Tech } from "./Tech"


const languages = [
    { url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg", name: 'TypeScript' },
    { url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg", name: 'JavaScript' },
    { url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg", name: 'HTML5' },
    { url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg", name: 'CSS3' }
];

const frameworks = [
    { url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", name: 'React' },
    { url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", name: 'NextJS' },
    { url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg", name: 'Tailwind CSS' },
    { url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg", name: 'Jest' }
];

const libraries = [
    { url: '/framer.png', name: 'Framer motion' },
    { url: '/react-testing.png', name: 'React testing library' },
]

export const About = () => {

    return (
       <section id="about" className="h-screen snap-start snap-always flex flex-col gap-10 p-7 items-center justify-center">
            <div className="md:w-[80%] md:text-xl text-black/80">
              <h2 className="text-black text-2xl mb-5 font-semibold after:content-[''] after:w-10 after:h-1 after:bg-black/70 after:block md:text-3xl">About me:</h2>
              <p>My name is Jean, also known as Kuromika on social media.  I’m a highly driven self-taught web developer. I have honed my skills through extensive experimentation and hands-on projects, and I am constantly seeking out new challenges and opportunities to improve my craft.</p> <p className="mt-3"> When I am not coding, I like to immerse myself in the eclectic world of Japanese math rock and shoegaze music, drawing inspiration from their complex rhythms and ethereal soundscapes. </p>
            </div>

            {/* <div className="flex flex-col items-center gap-7">
                <h3 className="text-lg font-medium">The tools that allow me to create the future gadgets: </h3>
                <Tech header="Languages:" stack={languages}></Tech>
                <Tech header="Frameworks:" stack={frameworks}></Tech>
                <Tech header="Libraries" stack={libraries}></Tech>
            </div> */}
        </section>
    )

    
}