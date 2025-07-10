import Navbar from '~/components/Navbar';
import type { Route } from './+types/home';
import HeroSection from '~/components/HeroSection';
import Experience from '~/components/Experience/Experience';
import Techstack from '~/components/Techstack/Techstack';
import Connect from '~/components/Connect/Connect';
import Projects from '~/components/Projects/Projects';
import { BlurFade } from '~/components/magicui/blur-fade';
import ReactLenis, { useLenis } from 'lenis/react';

export function meta({}: Route.MetaArgs) {
  const lenis = useLenis((lenis) => {
  })
  return [
    { title: 'Shivam' },
    {
      name: 'description',
      content: "This is Shivam's portfolio website showcasing his work and projects.",
    },
  ];
}

const element = [
  {
    heading : (
      <div id="techstack">
        <Techstack />
      </div>
    ),
  },
  {
    heading : (
      <div id="experience">
        <Experience />
      </div>
    ),
  },
  {
    heading : (
      <div id="contact">
        <Connect />
      </div>
    ),
  },
  
]


export default function Home() {
  return (
    <>
     <ReactLenis root />
      <div id="home" className="flex flex-col items-center bg-gray-100 dark:bg-[#090909]">
      <Navbar />
        <div className="max-w-[83rem] mx-auto">
          <div >
            <HeroSection />
          </div>
          <div id="projects">
            <Projects />
          </div>
          {element.map((element, index) => (
            <BlurFade inView={true} key={index} delay={.3 + index * 0.2}>
              {element.heading}
            </BlurFade>
          ))}
        </div>
        <div className="flex flex-col items-center py-6">
          <h1 className="text-center text-sm text-gray-500">
            Built with React, Tailwind, and Framer Motion thanks();
          </h1>
          <h1 className="text-center text-sm text-gray-500">©2025 Shivam. All rights reserved.</h1>
        </div>
      </div>
    </>
  );
}
