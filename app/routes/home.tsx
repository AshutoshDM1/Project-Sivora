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
  const siteUrl = 'https://project-sivora.vercel.app'; // Updated to match user's domain
  const title = 'Shivam Gupta - Full Stack Developer | React, Node.js, Angular Expert';
  const description = 'Experienced Full Stack Developer with 5+ years in coding and 3+ years professional experience. Specializing in React, Angular, Node.js, TypeScript, and modern web technologies. View my portfolio featuring AI-powered applications, manga platforms, and enterprise solutions.';
  const keywords = 'Shivam Gupta, Full Stack Developer, React Developer, Angular Developer, Node.js, TypeScript, JavaScript, Web Development, Frontend Developer, Backend Developer, Portfolio, Software Engineer, India, React Router, Next.js, Express.js, PostgreSQL, MongoDB, Prisma, AI Development, Web Applications';
  const ogImage = 'https://res.cloudinary.com/dnvl8mqba/image/upload/v1752170463/Vs%20Code%20Wallpapers/c9058b27-3bf8-4cf4-b62e-45a0d280ad4e.png';
  
  return [
    // Basic Meta Tags
    { title },
    { name: 'description', content: description },
    { name: 'keywords', content: keywords },
    { name: 'author', content: 'Shivam Gupta' },
    { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
    { name: 'language', content: 'en' },
    { name: 'revisit-after', content: '7 days' },
    { name: 'rating', content: 'General' },
    
    // Canonical URL
    { tagName: 'link', rel: 'canonical', href: siteUrl },
    
    // Open Graph Meta Tags
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'Shivam Gupta Portfolio' },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:url', content: siteUrl },
    { property: 'og:image', content: ogImage },
    { property: 'og:image:alt', content: 'Shivam Gupta - Full Stack Developer Portfolio' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:type', content: 'image/png' },
    { property: 'og:locale', content: 'en_US' },
    { property: 'og:updated_time', content: new Date().toISOString() },
    
    // Twitter Card Meta Tags
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@shivamgupta' }, // Replace with actual Twitter handle
    { name: 'twitter:creator', content: '@shivamgupta' }, // Replace with actual Twitter handle
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: ogImage },
    { name: 'twitter:image:alt', content: 'Shivam Gupta - Full Stack Developer Portfolio' },
    { name: 'twitter:domain', content: 'project-sivora.vercel.app' },
    { name: 'twitter:url', content: siteUrl },
    
    // LinkedIn specific tags
    { property: 'article:author', content: 'Shivam Gupta' },
    { property: 'article:publisher', content: siteUrl },
    
    // Additional SEO Meta Tags
    { name: 'theme-color', content: '#090909' },
    { name: 'msapplication-TileColor', content: '#090909' },
    { name: 'application-name', content: 'Shivam Gupta Portfolio' },
    { name: 'apple-mobile-web-app-title', content: 'Shivam Gupta' },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
    { name: 'format-detection', content: 'telephone=no' },
    
    // Professional/Business Meta Tags
    { name: 'geo.region', content: 'IN' },
    { name: 'geo.country', content: 'India' },
    { name: 'DC.title', content: title },
    { name: 'DC.creator', content: 'Shivam Gupta' },
    { name: 'DC.subject', content: 'Full Stack Web Development, Software Engineering' },
    { name: 'DC.description', content: description },
    { name: 'DC.publisher', content: 'Shivam Gupta' },
    { name: 'DC.contributor', content: 'Shivam Gupta' },
    { name: 'DC.language', content: 'en' },
    
    // Schema.org markup via meta tags (additional to JSON-LD)
    { name: 'category', content: 'Technology' },
    { name: 'coverage', content: 'Worldwide' },
    { name: 'distribution', content: 'Global' },
    { name: 'rating', content: 'General' },
  ];
}

const element = [
  {
    heading: (
      <div id="techstack">
        <Techstack />
      </div>
    ),
  },
  {
    heading: (
      <div id="experience">
        <Experience />
      </div>
    ),
  },
  {
    heading: (
      <div id="contact">
        <Connect />
      </div>
    ),
  },
];

export default function Home() {
  useLenis(() => {
    console.log('lenis');
  });
  return (
    <>
      <ReactLenis root />
      <div id="home" className="flex flex-col items-center bg-gray-100 dark:bg-[#090909]">
        <Navbar />
        <div className="max-w-[83rem] mx-auto">
          <div>
            <HeroSection />
          </div>
          <div id="projects">
            <Projects />
          </div>
          {element.map((element, index) => (
            <BlurFade inView={true} key={index} delay={0.3 + index * 0.2}>
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
