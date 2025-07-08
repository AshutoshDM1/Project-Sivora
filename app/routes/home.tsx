import Navbar from '~/components/Navbar';
import type { Route } from './+types/home';
import HeroSection from '~/components/HeroSection';
import Experience from '~/components/Experience/Experience';
import Techstack from '~/components/Techstack/Techstack';
import Connect from '~/components/Connect/Connect';

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
      <div className="flex flex-col items-center min-h-screen bg-gray-100 dark:bg-[#090909]">
        <div className="max-w-5xl mx-auto">
          <Navbar />
          <HeroSection />
          <Experience />
          <Techstack />
          <Connect />
        </div>
      </div>
    </>
  );
}
