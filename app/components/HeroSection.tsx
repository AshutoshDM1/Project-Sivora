'use client';

import { BlurFade } from './magicui/blur-fade';
import { Button } from './ui/button';
import { Github, Linkedin, MessageCircle } from 'lucide-react';

const heroData = {
  name: 'Shivam Gupta',
  title: 'Full Stack ',
  location: 'India',
  description: 'I have 5 years of experience as a coding enthusiast and 3 years as a professional developer working mostly with Angular.',
  images: {
    profile: {
      src: 'https://images.unsplash.com/photo-1648218943004-5ec604ef627a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGElMjBwZXJzb24lMjBtYW58ZW58MHx8MHx8fDA%3D',
      alt: 'Shivam Gupta profile',
      borderColor: 'border-black'
    },
    tech: {
      src: 'https://images.unsplash.com/photo-1581276879432-15e50529f34b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJvbnRlbmR8ZW58MHx8MHx8fDA%3D',
      alt: 'Full Stack Development',
      borderColor: 'border-blue-500'
    },
    location: {
      src: 'https://plus.unsplash.com/premium_photo-1661962542692-4fe7a4ad6b54?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW5kaWF8ZW58MHx8MHx8fDA%3D',
      alt: 'India',
      borderColor: 'border-orange-600'
    }
  },
  buttons: {
    primary: {
      text: "Let's talk",
      className: 'px-8 py-3 rounded-full text-lg font-medium cursor-pointer hover:bg-foreground/90 bg-foreground'
    },
    secondary: {
      text: 'Open CV',
      className: 'px-8 py-3 text-lg font-medium cursor-pointer hover:bg-foreground/20 bg-foreground/10'
    }
  },
  socialLinks: [
    {
      href: '#',
      icon: Github,
      label: 'GitHub'
    },
    {
      href: '#',
      icon: Linkedin,
      label: 'LinkedIn'
    },
    {
      href: '#',
      icon: MessageCircle,
      label: 'WhatsApp'
    }
  ]
};

export default function HeroSection() {

  return (
    <section className=" flex items-center justify-center px-4 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main heading with profile image */}
        <div className="mb-2">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight bg-gradient-to-b from-white via-zinc-900 to-black dark:from-zinc-900 dark:via-white dark:to-white bg-clip-text text-transparent">
            <span className='text-zinc-500 dark:text-zinc-400' >I'm</span> <span>{heroData.name}</span>{' '}
            <div className={`inline-block w-16 h-10 md:w-20 md:h-16 lg:w-28 lg:h-20 rounded-[40px] overflow-hidden border-4 ${heroData.images.profile.borderColor} ml-2 align-middle`}>
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

        {/* Second line with car image */}
        <div className="mb-2">
        <h2 className="text-4xl lg:text-5xl font-bold leading-tight bg-gradient-to-b from-white via-zinc-900 to-black dark:from-zinc-900 dark:via-white dark:to-white bg-clip-text text-transparent">
            <span>{heroData.title}</span>{' '}
            <div className={`inline-block w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden border-4 ${heroData.images.tech.borderColor} mx-2 align-middle`}>
              <img
                src={heroData.images.tech.src}
                alt={heroData.images.tech.alt}
                width={96}
                height={96}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-zinc-500 dark:text-zinc-400">Developer</span>
          </h2>
        </div>

        {/* Third line with Brazil/toucan image */}
        <div className="mb-5">
          <h3 className="text-4xl lg:text-5xl font-bold leading-tight bg-gradient-to-b from-white via-zinc-900 to-black dark:from-zinc-900 dark:via-white dark:to-white bg-clip-text text-transparent">
            <span>based in</span> <span>{heroData.location}</span>{' '}
            <div className={`inline-block w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden border-4 ${heroData.images.location.borderColor} ml-2 align-middle`}>
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

        {/* Description */}
        <div className="mb-8">
          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            {heroData.description}
          </p>
        </div>

        {/* Action buttons and social links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          {/* Primary actions */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className={heroData.buttons.primary.className}
            >
              {heroData.buttons.primary.text}
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className={heroData.buttons.secondary.className}
            >
              <span>{heroData.buttons.secondary.text}</span>
            </Button>
          </div>

          {/* Social links */}
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
        </div>
      </div>
    </section>
  );
}
