'use client';

import { useEffect, useState } from 'react';
import { BlurFade } from './magicui/blur-fade';
import { Button } from './ui/button';
import { Github, Linkedin, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

const heroData = {
  name: 'Shivam Gupta',
  title: 'Full Stack ',
  location: 'India',
  description:
    'I have 5 years of experience as a coding enthusiast and 3 years as a professional developer working mostly with Angular.',
  images: {
    profile: {
      src: 'https://images.unsplash.com/photo-1615109398623-88346a601842?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fHww',
      alt: 'Shivam Gupta profile',
      borderColor: 'border-black',
    },
    tech: {
      src: 'https://images.unsplash.com/photo-1581276879432-15e50529f34b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJvbnRlbmR8ZW58MHx8MHx8fDA%3D',
      alt: 'Full Stack Development',
      borderColor: 'border-blue-500',
    },
    location: {
      src: 'https://plus.unsplash.com/premium_photo-1661962542692-4fe7a4ad6b54?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW5kaWF8ZW58MHx8MHx8fDA%3D',
      alt: 'India',
      borderColor: 'border-orange-600',
    },
  },
  buttons: {
    primary: {
      text: "Let's talk",
      className:
        'px-8 py-3 rounded-full text-lg font-medium cursor-pointer hover:bg-foreground/90 bg-foreground',
    },
    secondary: {
      text: 'Open CV',
      className:
        'px-8 py-3 text-lg font-medium cursor-pointer hover:bg-foreground/20 bg-foreground/10',
    },
  },
  socialLinks: [
    {
      href: '#',
      icon: Github,
      label: 'GitHub',
    },
    {
      href: '#',
      icon: Linkedin,
      label: 'LinkedIn',
    },
    {
      href: '#',
      icon: MessageCircle,
      label: 'WhatsApp',
    },
  ],
};

const images = [
  {
    src: 'https://images.unsplash.com/photo-1581276879432-15e50529f34b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJvbnRlbmR8ZW58MHx8MHx8fDA%3D',
    alt: 'Shivam Gupta profile',
  },
  {
    src: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHxhbmltZXxlbnwwfHwwfHx8MA%3D%3D',
    alt: 'Shivam Gupta profile',
  },
  {
    src: 'https://plus.unsplash.com/premium_photo-1661963745503-8b3a86b8c2b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE3fHxhbmltZXxlbnwwfHwwfHx8MA%3D%3D',
    alt: 'Shivam Gupta profile',
  },
  {
    src: 'https://images.unsplash.com/photo-1494633114655-819eb91fde40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTZ8fGFuaW1lfGVufDB8fDB8fHww',
    alt: 'Shivam Gupta profile',
  },
];

export default function HeroSection() {
  const [slidePosition, setSlidePosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlidePosition((prev) => {
        // Move down by 25% each time, reset after 4 slides (100%)
        const nextPosition = (prev + 25) % 100;
        return nextPosition;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const headingElements = [
    {
      heading: (
        <div className="mb-2">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight bg-gradient-to-b from-white via-zinc-900 to-black dark:from-zinc-900 dark:via-white dark:to-white bg-clip-text text-transparent">
            <span className="text-zinc-500 dark:text-zinc-400">I'm</span>{' '}
            <span>{heroData.name}</span>{' '}
            <div
              className={`inline-block w-16 h-10 md:w-20 md:h-16 lg:w-28 lg:h-20 rounded-[40px] overflow-hidden border-4 ${heroData.images.profile.borderColor} ml-2 align-middle`}
            >
              <img
                src={heroData.images.profile.src}
                alt={heroData.images.profile.alt}
                width={96}
                height={96}
                className="w-full h-full object-cover"
              />
            </div>
          </h1>
        </div>
      ),
    },
    {
      heading: (
        <div className="mb-2">
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight bg-gradient-to-b from-white via-zinc-900 to-black dark:from-zinc-900 dark:via-white dark:to-white bg-clip-text text-transparent">
            <span>{heroData.title}</span>{' '}
            <div
              className={`inline-block w-16 h-10 md:w-20 md:h-16 lg:w-28 lg:h-20  rounded-[40px] overflow-hidden border-4 ${heroData.images.tech.borderColor} mx-2 align-middle`}
            >
              <motion.div
                className="flex flex-col w-full"
                style={{ height: '400%' }} // 4 images × 100% = 400% total height
                initial={{ opacity: 1, y: 0 }}
                animate={{ y: `-${slidePosition}%` }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                {images.map((image, index) => (
                  <div key={index} className="flex-shrink-0 w-full" style={{ height: '25%' }}>
                    <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
                  </div>
                ))}
              </motion.div>
            </div>
            <span className="text-zinc-500 dark:text-zinc-400">Developer</span>
          </h2>
        </div>
      ),
    },
    {
      heading: (
        <div className="mb-5">
          <h3 className="text-4xl lg:text-5xl font-bold leading-tight bg-gradient-to-b from-white via-zinc-900 to-black dark:from-zinc-900 dark:via-white dark:to-white bg-clip-text text-transparent">
            <span>based in</span> <span>{heroData.location}</span>{' '}
            <div
              className={`inline-block w-16 h-10 md:w-20 md:h-16 lg:w-28 lg:h-20  rounded-[40px] overflow-hidden border-4 ${heroData.images.location.borderColor} ml-2 align-middle`}
            >
              <img
                src={heroData.images.location.src}
                alt={heroData.images.location.alt}
                width={96}
                height={96}
                className="w-full h-full object-cover"
              />
            </div>
          </h3>
        </div>
      ),
    },
    {
      heading: (
        <div className="mb-8">
          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            {heroData.description}
          </p>
        </div>
      ),
    },
  ];

  const actionButtons = [
    {
      actionButton: (
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className={heroData.buttons.primary.className}>
            {heroData.buttons.primary.text}
          </Button>
          <Button variant="ghost" size="lg" className={heroData.buttons.secondary.className}>
            <span>{heroData.buttons.secondary.text}</span>
          </Button>
        </div>
      ),
    },
    {
      actionButton: (
        <div className="flex items-center gap-4 ml-0 sm:ml-8">
          {heroData.socialLinks.map((link, index) => {
            const IconComponent = link.icon;
            return (
              <a
                key={index}
                href={link.href}
                className="p-3 transition-colors hover:bg-foreground/10 rounded-full"
                aria-label={link.label}
              >
                <IconComponent className="w-6 h-6" />
              </a>
            );
          })}
        </div>
      ),
    },
  ];

  return (
    <section className=" flex items-center justify-center px-4 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        {headingElements.map((element, index) => (
          <BlurFade inView={true} key={index} delay={0.5 + index * 0.2}>
            {element.heading}
          </BlurFade>
        ))}

        {/* Action buttons and social links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          {actionButtons.map((button, index) => (
            <BlurFade inView={true} key={index} delay={1.2 + index * 0.2}>
              {button.actionButton}
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
