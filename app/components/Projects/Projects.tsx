import { TECHSTACK_ICONS, TECH_STACK_DATA } from "../Techstack/techstack-icons";
import { Card } from "../ui/card";

interface Project {
  id: string;
  title: string;
  category: string;
  heading: string;
  description: string;
  techstack: string;
  image: string;
  href: string;
  github: string;
  deployStatus?: 'online' | 'maintenance';
}

const projectsData: Project[] = [
  {
    id: "01",
    title: "CodeGen",
    category: "Full Stack Web Development / GenAI",
    heading: "CodeGen",
    description: "A AI Code Generator Site, Create Landing pages, components, etc using AI in seconds",
    techstack: "Next.js, Tailwind CSS , Framer Motion, Zustand, Express.js, PostgreSQL , Gemmini API , Realtime Streaming, AWS, Github Actions, Vercel",
    image: "https://res.cloudinary.com/dnvl8mqba/image/upload/v1752063831/Portfolio%C2%A0Pics%C2%A0/image6_vr7b8q.png",
    href: "https://codegen.elitedev.tech",
    github: "https://github.com/AshutoshDM1/CodeGen",
    deployStatus: "online"
  },
  {
    id: "02",
    title: "MangaHaven",
    category: "Full Stack Web Development / Design / Next.js",
    heading: "MangaHaven",
    description: "A comprehensive manga reading platform with advanced features and a clean design. Here you can read manga online for free.",
    techstack: "Next.js, Tailwind CSS, Shadcn UI, Recoil, Framer Motion ,Next.js API Routes, NextAuth, Prisma, PostgreSQL, Docker, AWS, Github Actions, Cloudinary",
    image: "https://res.cloudinary.com/dnvl8mqba/image/upload/v1752063830/Portfolio%C2%A0Pics%C2%A0/image1_r77d9w.png",
    href: "https://mangahaven.elitedev.tech",
    github: "https://github.com/AshutoshDM1/MangaHaven",
    deployStatus: "online"
  },
  {
    id: "03",
    title: "Insight AI.",
    category: "Full Stack Web Development / Ai / React",
    heading: "Insight AI",
    description: "An AI-powered ChatGpt Like Website , Ask your any Question and it Will Answer.",
    techstack: "React, TypeScript, Recoil, Tailwind CSS, FireBase, Hono, TypeScript, Gemmini API , Docker , Cloudflare Workers",
    image: "https://res.cloudinary.com/dnvl8mqba/image/upload/v1752063832/Portfolio%C2%A0Pics%C2%A0/image2_gpqog9.png",
    href: "https://insightai.pages.dev/",
    github: "https://github.com/AshutoshDM1/InsightAI",
    deployStatus: "online"
  }
];

const Projects = () => {
  // Helper function to map technology names to icon keys
  const mapTechToIconKey = (techName: string): keyof typeof TECHSTACK_ICONS | null => {
    const techMap: Record<string, keyof typeof TECHSTACK_ICONS> = {
      'React': 'react',
      'TypeScript': 'typescript',
      'Next.js': 'nextjs',
      'Next': 'nextjs',
      'Python': 'python',
      'Node.js': 'nodejs',
      'Express.js': 'express',
      'Express': 'express',
      'PostgreSQL': 'postgresql',
      'MongoDB': 'mongodb',
      'Prisma': 'prisma',
      'Redis': 'redis',
      'Tailwind CSS': 'tailwind',
      'Tailwind': 'tailwind',
      'Figma': 'figma',
      'HTML': 'html',
      'CSS': 'css',
      'Git': 'git',
      'Docker': 'docker',
      'AWS': 'aws',
      'Vercel': 'vercel',
      'Firebase': 'firebase',
      'FireBase': 'firebase',
      'Cloudflare': 'cloudflare',
      'Cloudflare Workers': 'cloudflare',
      'Framer Motion': 'framer',
      'Framer': 'framer',
      'Shadcn UI': 'shadcn',
      'Shadcn/UI': 'shadcn',
      'VS Code': 'vscode',
      'GitHub': 'github',
      'Github': 'github',
    };

    return techMap[techName] || null;
  };

  // Helper function to extract main technologies for icon display
  const getMainTechnologies = (project: Project) => {
    const allTech = `${project.techstack}`;
    const techArray = allTech.split(',').map(tech => tech.trim());
    
    // Map technology names to icon keys and filter out nulls
    const mappedTech = techArray
      .map(tech => mapTechToIconKey(tech))
      .filter((key): key is keyof typeof TECHSTACK_ICONS => key !== null);
    
    // Get first 4 unique technologies
    const uniqueTech = [...new Set(mappedTech)].slice(0, 4);
    return uniqueTech;
  };

  // Helper function to get color for a technology
  const getTechColor = (iconKey: keyof typeof TECHSTACK_ICONS): string => {
    const techData = TECH_STACK_DATA.find(tech => tech.icon === iconKey);
    return techData?.color || 'text-gray-600';
  };

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold  mb-6">
          My Projects
        </h2>
        <div className="inline-block bg-zinc-200 text-zinc-800 px-6 py-2 rounded-full text-sm font-medium">
          Take a look at what I've been cooking
        </div>
      </div>

      {/* Projects Grid */}
      <div className="flex justify-center flex-wrap lg:flex-nowrap gap-8">
        {projectsData.map((project) => (
          <Card key={project.id} className="rounded-2xl border-transparent dark:border-zinc-800 overflow-hidden transition-all duration-300 group py-0 min-w-[15rem] xl:min-w-[25rem] max-w-[25rem] bg-background cursor-pointer">
            {/* Project Image */}
            <div className="relative overflow-hidden p-4 rounded-t-2xl">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-[15rem] object-cover rounded-t-2xl transition-transform duration-300"
              />
            </div>

            {/* Project Content */}
            <div className="px-6 pb-4">
              {/* Category Badge */}
              <div className="mb-2">
                <span className="text-xs bg-foreground/10 px-2 py-1 rounded-md">
                  {project.category}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-2">{project.heading}</h3>
              <p className="text-zinc-600 dark:text-zinc-300 text-sm mb-4 leading-relaxed line-clamp-2 overflow-hidden hidden xl:block">
                {project.description.length > 100 ? `${project.description.substring(0, 80)}...` : project.description}
              </p>

              {/* Technology Icons */}
              <div className="flex items-center gap-[-2px] mb-4">
                {getMainTechnologies(project).map((tech, index) => (
                  <div 
                    key={index}
                    className="w-8 h-8 bg-white dark:bg-zinc-800 border-2 border-zinc-300 dark:border-zinc-600 mr-[-8px] rounded-full flex items-center justify-center text-xs font-medium text-zinc-800 dark:text-white shadow-sm"
                    title={tech}
                  > 
                    <div className={`w-5 h-5 flex items-center justify-center ${getTechColor(tech)} overflow-hidden`}>
                      {TECHSTACK_ICONS[tech]}
                    </div>
                  </div>
                ))}
              </div>

              {/* Deploy Status and Links */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-zinc-700 dark:text-zinc-300">Website:</span>
                  <div className="flex items-center gap-1">
                    <span className="text-xs ">{project.deployStatus || 'online'}</span>
                    <div 
                      className={`w-2 h-2 rounded-full animate-pulse ${
                        (project.deployStatus || 'online') === 'online' 
                          ? 'bg-green-500 shadow-sm shadow-green-500/50' 
                          : (project.deployStatus || 'online') === 'maintenance'
                            ? 'bg-yellow-500 shadow-sm shadow-yellow-500/50'
                            : 'bg-red-500 shadow-sm shadow-red-500/50'
                      }`}
                      title={`Status: ${project.deployStatus || 'online'}`}
                    />
                  </div>
                </div>

                {/* Action Links */}
                <div className="flex items-center gap-2">
                  {project.github && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-white transition-colors duration-200"
                      title="View on GitHub"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                      </svg>
                    </a>
                  )}
                  {project.href && (
                    <a 
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-white transition-colors duration-200"
                      title="View Live Demo"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;