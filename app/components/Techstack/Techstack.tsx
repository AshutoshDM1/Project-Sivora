import { motion } from 'motion/react';
import { TECHSTACK_ICONS, TECH_STACK_DATA } from './techstack-icons';
import { useState } from 'react';

type TechItem = (typeof TECH_STACK_DATA)[number];

const Techstack = () => {
  const [techstackText, setTechstackText] = useState<{
    name: string;
    color: string;
    icon: string | null;
  }>({
    name: 'an constantly expanding stack',
    color: 'text-zinc-800 dark:text-zinc-100',
    icon: null,
  });

  const techstackTextAnimation = {
    initial: { opacity: 0, y: 10, filter: 'blur(4px)' },
    animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
    transition: { duration: 0.5 },
  };

  const handleTextChange = (tech: TechItem) => {
    setTechstackText({
      name: tech.name,
      color: tech.color,
      icon: tech.icon,
    });
  };

  const TechstackTextReset = () => {
    setTechstackText({
      name: 'an constantly expanding stack',
      color: 'text-zinc-800 dark:text-zinc-200',
      icon: null,
    });
  };
  
  const TechCard = ({ tech }: { tech: TechItem }) => (
    <div
      onMouseEnter={() => handleTextChange(tech)}
      onMouseLeave={() => TechstackTextReset()}
      className="cursor-pointer group relative bg-transparent rounded-xl p-5 shadow-lg border border-gray-200 dark:border-zinc-700"
    >
      <div className="flex flex-col items-center">
        <div className={`w-16 ${tech.color} transition-all duration-300 group-hover:scale-110`}>
          {TECHSTACK_ICONS[tech.icon]}
        </div>
        <h3 className="hidden text-sm font-semibold text-zinc-900 dark:text-zinc-100 text-center">
          {tech.name}
        </h3>
        <span className="hidden text-xs text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-700 px-2 py-1 rounded-full">
          {tech.category}
        </span>
      </div>
    </div>
  );

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-10">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Tech Stack
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Technologies and tools I use to bring ideas to life
        </p>
      </div>

      {/* All Technologies Grid */}
      <div className="mb-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
          <div className="border rounded-lg bg-foreground/5 border-zinc-200 dark:border-zinc-700 flex flex-col items-start justify-evenly col-span-2 lg:col-span-3 p-2">
            <div className="flex gap-1 mb-1">
              <div className="dark:bg-zinc-600 bg-zinc-800 h-2 w-12 rounded-lg animate-pulse"></div>
              <div className="dark:bg-zinc-400 bg-zinc-600 h-2 w-9 rounded-lg animate-pulse"></div>
              <div className="dark:bg-zinc-200 bg-zinc-400 h-2 w-5 rounded-lg animate-pulse delay-1000"></div>
            </div>
            <h1 className="text-xl font-light md:leading-[.6] leading-[1.2] text-zinc-800 dark:text-zinc-200">
              Solving real problems with
            </h1>
            <motion.h1
              key={techstackText.name}
              className={`text-xl  md:leading-[.6] leading-[1.2] ${techstackText.color}`}
              initial={techstackTextAnimation.initial}
              animate={techstackTextAnimation.animate}
              transition={techstackTextAnimation.transition}
            >
              {techstackText.name}
            </motion.h1>
          </div>
          <div className='flex flex-col items-start justify-center col-span-2 p-2 bg-gradient-to-r from-indigo-500 to-pink-400 rounded-lg'>
            <img src="/icons.png" alt="Techstack" className='w-20 h-20' />
          </div>
          {TECH_STACK_DATA.map((tech, index) => (
            <TechCard key={tech.name} tech={tech} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Techstack;
