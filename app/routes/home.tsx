import Navbar from '~/components/Navbar';
import type { Route } from './+types/home';
import HeroSection from '~/components/HeroSection';
import Experience from '~/components/Experience/Experience';
import Techstack from '~/components/Techstack/Techstack';
import Connect from '~/components/Connect/Connect';
import Projects from '~/components/Projects/Projects';
import { BlurFade } from '~/components/magicui/blur-fade';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Shivam' },
    {
      name: 'description',
      content: "This is Shivam's portfolio website showcasing his work and projects.",
    },
  ];
}

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center bg-gray-100 dark:bg-[#090909]">
        <div className="max-w-[83rem] mx-auto">
        <BlurFade inView={true} >
          <HeroSection />
          <Projects />
          <Techstack />
          <Experience />
          <Connect />
        </BlurFade>
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
