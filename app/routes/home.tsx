import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import HeroSection from "~/components/HeroSection";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Shivam" },
    { name: "description", content: "This is Shivam's portfolio website showcasing his work and projects." },
  ];
}

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center min-h-screen bg-gray-100 dark:bg-[#090909]">
      <Navbar />
      <HeroSection />
    </div>
    </>
  );
}
