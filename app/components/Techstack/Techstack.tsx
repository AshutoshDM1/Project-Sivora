import { TECHSTACK_ICONS, TECH_STACK_DATA } from './techstack-icons';

type TechItem = typeof TECH_STACK_DATA[number];

const Techstack = () => {

  const TechCard = ({ tech }: { tech: TechItem }) => (
    <div className="group relative bg-transparent rounded-xl p-5 shadow-lg border border-gray-200 dark:border-gray-700">
      <div className="flex flex-col items-center">
        <div className={`${tech.color} transition-all duration-300 group-hover:scale-110`}>
          {TECHSTACK_ICONS[tech.icon]}
        </div>
        <h3 className="hidden text-sm font-semibold text-gray-900 dark:text-gray-100 text-center">
          {tech.name}
        </h3>
        <span className="hidden text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
          {tech.category}
        </span>
      </div>
    </div>
  );

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16">
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
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6 text-center">
          All Technologies
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
          {TECH_STACK_DATA.map((tech, index) => (
            <TechCard key={tech.name} tech={tech} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Techstack;
