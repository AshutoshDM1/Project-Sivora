'use client';

import { Globe, Moon, Sun } from 'lucide-react';
import { useRef, useState, useCallback } from 'react';
import { Link } from 'react-router';
import { Button } from './ui/button';
import { useTheme } from './theme-provider';
import { motion } from 'motion/react';

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [backgroundStyle, setBackgroundStyle] = useState({
    width: 0,
    left: 0,
    opacity: 0
  });
  
  const navContainerRef = useRef<HTMLDivElement>(null);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const handleMouseEnter = useCallback((event: React.MouseEvent<HTMLDivElement>, linkName: string) => {
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
        opacity: 1
      });
      setHoveredLink(linkName);
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    setBackgroundStyle(prev => ({
      ...prev,
      opacity: 0
    }));
    setHoveredLink(null);
  }, []);

  return (
    <nav className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <div className="text-white dark:text-black bg-black dark:bg-white rounded-full flex items-center justify-center px-7 hidden">
                <span className="font-bold text-lg py-1">S</span>
              </div>
            </Link>
          </div>
          
          <div 
            ref={navContainerRef}
            className="flex items-center rounded-full p-1 border border-zinc-700 relative"
            onMouseLeave={handleMouseLeave}
          >
            <motion.div 
              className="bg-foreground/10 rounded-full absolute top-1 h-[calc(100%-8px)]"
              animate={{
                width: backgroundStyle.width,
                left: backgroundStyle.left,
                opacity: backgroundStyle.opacity
              }}
              transition={{
                duration: 0.25,
                ease: 'easeInOut',
              }}
            />

            <div className="flex items-center rounded-full relative z-10">
              <div 
                className="cursor-pointer px-4 py-2 text-[13px] font-medium transition-colors rounded-full"
                onMouseEnter={(e) => handleMouseEnter(e, 'home')}
              >
                <Link to="/">Home</Link>
              </div>
              <div 
                className="cursor-pointer px-4 py-2 text-[13px] font-medium transition-colors rounded-full"
                onMouseEnter={(e) => handleMouseEnter(e, 'projects')}
              >
                <Link to="/">Projects</Link>
              </div>
              <div 
                className="cursor-pointer px-4 py-2 text-[13px] font-medium transition-colors rounded-full"
                onMouseEnter={(e) => handleMouseEnter(e, 'experience')}
              >
                <Link to="/">Experience</Link>
              </div>
              <div 
                className="cursor-pointer px-4 py-2 text-[13px] font-medium transition-colors rounded-full"
                onMouseEnter={(e) => handleMouseEnter(e, 'contact')}
              >
                <Link to="/">Contact</Link>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="hover:bg-foreground/20 bg-foreground/10 cursor-pointer"
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="hidden">
            <Button variant="ghost" size="sm" className="hover:bg-zinc-800">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
