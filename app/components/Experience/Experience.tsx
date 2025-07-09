import React from 'react';
import { TECH_STACK_DATA, TECHSTACK_ICONS } from '../Techstack/techstack-icons';

interface TechStackItem {
  name: string;
  color: string;
}

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  techStack: TechStackItem[];
  responsibilities: string[];
  keyResults?: string[];
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      title: 'Frontend Intern',
      company: 'GFT Technologies',
      period: 'Jan 2025 - Present',
      techStack: [
        {
          name: 'HTML',
          color: 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400',
        },
        { name: 'CSS', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400' },
        {
          name: 'JavaScript',
          color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400',
        },
        {
          name: 'React',
          color: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/20 dark:text-cyan-400',
        },
        { name: 'Git', color: 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400' },
        {
          name: 'Figma',
          color: 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400',
        },
      ],
      responsibilities: [
        'Learn and apply frontend development best practices.',
        'Assist in creating responsive user interfaces.',
        'Participate in code reviews and team meetings.',
        'Shadow senior developers and contribute to small features.',
        'Practice version control with Git and collaborative workflows.',
      ],
      keyResults: [
        'Designed and developed 6 reusable Angular libraries, reducing development time by 60% and centralizing maintenance, resulting in a more efficient workflow across 10+ projects.',
        'Developed a dynamic dashboard web application similar to Microsoft Power BI, enabling users to create custom dashboards with flexible features for presenting data integrated from public data like CADASTUR and IBGE.',
        'Enhanced the UI/UX of an advanced table component with filtering, aggregation, and sorting functionalities, improving data access efficiency and user satisfaction.',
      ],
    },
  ];

  // Helper function to map technology names to icon keys
  const mapTechToIconKey = (techName: string): keyof typeof TECHSTACK_ICONS | null => {
    const techMap: Record<string, keyof typeof TECHSTACK_ICONS> = {
      'HTML': 'html',
      'CSS': 'css',
      'JavaScript': 'javascript',
      'React': 'react',
      'Git': 'git',
      'Figma': 'figma',
      'TypeScript': 'typescript',
      'Next.js': 'nextjs',
      'Python': 'python',
      'Node.js': 'nodejs',
    };
    return techMap[techName] || null;
  };

  const getTechColor = (tech: TechStackItem): string => {
    const techData = TECH_STACK_DATA.find(techItem => techItem.name === tech.name);
    return techData?.color || 'text-gray-600';
  };

  return (
    <section className="py-2 px-4 sm:px-6 lg:px-8 ">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          My Experience
        </h2>
      </div>

      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="relative bg-card rounded-lg border border-border p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-1">{experience.title}</h3>
                <p className="text-muted-foreground font-medium">{experience.company}</p>
              </div>
              <div className="mt-2 sm:mt-0">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20">
                  {experience.period}
                </span>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="mb-6">
              <div className="flex flex-wrap gap-2">
                {experience.techStack.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-sm font-medium ${tech.color}`}
                  >
                    <div
                      className={`w-4 h-4 flex items-center justify-center ${getTechColor(tech)} overflow-hidden flex-shrink-0 rounded-sm`}
                    >
                      {(() => {
                        const iconKey = mapTechToIconKey(tech.name);
                        return iconKey ? TECHSTACK_ICONS[iconKey] : <span className="text-xs">?</span>;
                      })()}
                    </div>
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Responsibilities */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">
                Responsibilities
              </h4>
              <ul className="space-y-2">
                {experience.responsibilities.map((responsibility, respIndex) => (
                  <li key={respIndex} className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-muted-foreground text-sm leading-relaxed">
                      {responsibility}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Results */}
            {experience.keyResults && (
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">
                  Key Results
                </h4>
                <ul className="space-y-2">
                  {experience.keyResults.map((result, resultIndex) => (
                    <li key={resultIndex} className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 bg-chart-1 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-muted-foreground text-sm leading-relaxed">
                        {result}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
