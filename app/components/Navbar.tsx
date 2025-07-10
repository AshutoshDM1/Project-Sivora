'use client';

import { Globe, Moon, Sun } from 'lucide-react';
import { useRef, useState, useCallback } from 'react';
import { Link } from 'react-router';
import { Button } from './ui/button';
import { useTheme } from './theme-provider';
import { motion } from 'motion/react';

export default function Navbar() {
  const { theme, setTheme, isTransitioning } = useTheme();
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [backgroundStyle, setBackgroundStyle] = useState({
    width: 0,
    left: 0,
    opacity: 0,
  });

  const navContainerRef = useRef<HTMLDivElement>(null);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const handleMouseEnter = useCallback(
    (event: React.MouseEvent<HTMLDivElement>, linkName: string) => {
      const target = event.currentTarget;
      const container = navContainerRef.current;

      if (target && container) {
        const targetRect = target.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        const left = targetRect.left - containerRect.left;
        const width = targetRect.width;

        setBackgroundStyle({
          width,
          left,
          opacity: 1,
        });
        setHoveredLink(linkName);
      }
    },
    []
  );

  const handleMouseLeave = useCallback(() => {
    setBackgroundStyle((prev) => ({
      ...prev,
      opacity: 0,
    }));
    setHoveredLink(null);
  }, []);

  const links = [
    {
      name: 'Home',
      sectionId: 'home',
    },
    {
      name: 'Projects',
      sectionId: 'projects',
    },
    {
      name: 'Experience',
      sectionId: 'experience',
    },
    {
      name: 'Contact',
      sectionId: 'contact',
    },
  ];

  // Animation variants
  const navVariants = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const themeButtonVariants = {
    hidden: {
      scale: 0,
      rotate: -180,
      opacity: 0,
    },
    visible: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
        delay: 0.5,
      },
    },
  };

  const linkVariants = {
    hidden: {
      y: -20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut" as const,
      },
    },
  };

  const navContainerVariants = {
    hidden: {
      scale: 0.8,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
        staggerChildren: 0.08,
      },
    },
  };

  return (
    <>
      <motion.div 
        className="flex items-center space-x-4 fixed right-4 top-2 z-[100]"
        variants={themeButtonVariants}
        initial="hidden"
        animate="visible"
      >
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleTheme}
          className="hover:bg-foreground/20 bg-foreground/10 cursor-pointer backdrop-blur-sm"
        >
          <motion.div
            animate={{ 
              rotate: isTransitioning ? 360 : 0,
              scale: isTransitioning ? 1.1 : 1,
            }}
            transition={{ 
              duration: 0.5, 
              ease: "easeInOut",
              type: "spring",
              stiffness: 200,
              damping: 15
            }}
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </motion.div>
        </Button>
      </motion.div>
      
      <motion.nav 
        className="w-full sticky top-0 z-50 hidden md:block"
        variants={navVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center">
                <div className="text-white dark:text-black bg-black dark:bg-white rounded-full items-center justify-center px-7 hidden">
                  <span className="font-bold text-lg py-1">S</span>
                </div>
              </Link>
            </div>

            <motion.div
              ref={navContainerRef}
              className="flex items-center rounded-full p-1 border border-zinc-700 relative backdrop-blur-sm"
              variants={navContainerVariants}
              onMouseLeave={handleMouseLeave}
            >
              <motion.div
                className="bg-foreground/20 rounded-full absolute top-1 h-[calc(100%-8px)]"
                animate={{
                  width: backgroundStyle.width,
                  left: backgroundStyle.left,
                  opacity: backgroundStyle.opacity,
                }}
                transition={{
                  duration: 0.25,
                  ease: 'easeInOut',
                }}
              />

              <div className="flex items-center rounded-full relative z-10 bg-foreground/5">
                {links.map((link, index) => (
                  <motion.div
                    key={index}
                    variants={linkVariants}
                    className="cursor-pointer px-4 py-2 text-[13px] font-medium transition-colors rounded-full"
                    onMouseEnter={(e) => handleMouseEnter(e, link.name)}
                    onClick={() => scrollToSection(link.sectionId)}
                    whileHover={{ 
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ 
                      scale: 0.95,
                      transition: { duration: 0.1 }
                    }}
                  >
                    <div>{link.name}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.nav>
    </>
  );
}
