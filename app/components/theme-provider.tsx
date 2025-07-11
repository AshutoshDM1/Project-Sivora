import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light' | 'system';

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  isTransitioning: boolean;
};

const initialState: ThemeProviderState = {
  theme: 'dark',
  setTheme: () => null,
  isTransitioning: false,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = 'dark',
  storageKey = 'vite-ui-theme',
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem(storageKey) as Theme) || defaultTheme;
    }
    return defaultTheme;
  });

  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const root = window.document.documentElement;

    // Add transition styles to root for smooth theme switching
    root.style.setProperty('--theme-transition-duration', '500ms');
    root.style.setProperty('--theme-transition-timing', 'cubic-bezier(0.4, 0, 0.2, 1)');

    // Add CSS transitions to all elements that change with theme
    const style = document.createElement('style');
    style.textContent = `
      * {
        transition: 
          background-color var(--theme-transition-duration) var(--theme-transition-timing),
          border-color var(--theme-transition-duration) var(--theme-transition-timing),
          color var(--theme-transition-duration) var(--theme-transition-timing),
          fill var(--theme-transition-duration) var(--theme-transition-timing),
          stroke var(--theme-transition-duration) var(--theme-transition-timing),
          box-shadow var(--theme-transition-duration) var(--theme-transition-timing);
      }
      
      /* Prevent transitions on page load */
      .no-transition * {
        transition: none !important;
      }
    `;

    if (!document.head.querySelector('#theme-transitions')) {
      style.id = 'theme-transitions';
      document.head.appendChild(style);
    }

    // Temporarily disable transitions on initial load
    root.classList.add('no-transition');
    setTimeout(() => {
      root.classList.remove('no-transition');
    }, 100);

    root.classList.remove('light', 'dark');

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  const handleSetTheme = (newTheme: Theme) => {
    if (typeof window === 'undefined') return;

    setIsTransitioning(true);

    // Apply the new theme immediately
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');

    if (newTheme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
      root.classList.add(systemTheme);
    } else {
      root.classList.add(newTheme);
    }

    // Create a reveal overlay that shows the transition progressively from left to right
    const revealOverlay = document.createElement('div');
    revealOverlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: ${newTheme === 'dark' ? '#090909' : '#F3F4F6'};
      clip-path: inset(0 100% 0 0);
      pointer-events: none;
      z-index: 9999;
      transition: clip-path 750ms cubic-bezier(0.23, 1, 0.32, 1);
      transform-origin: left center;
    `;

    document.body.appendChild(revealOverlay);

    // Start the progressive reveal animation from left to right
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        // Animate from left to right by changing the clip-path
        revealOverlay.style.clipPath = 'inset(0 0% 0 0)';

        setTimeout(() => {
          // After showing completely, animate out to the right
          revealOverlay.style.clipPath = 'inset(0 0 0 100%)';
          revealOverlay.style.transition = 'clip-path 700ms cubic-bezier(0.4, 0, 0.2, 1)';

          setTimeout(() => {
            document.body.removeChild(revealOverlay);
            setIsTransitioning(false);
          }, 700);
        }, 350);
      });
    });

    localStorage.setItem(storageKey, newTheme);
    setTheme(newTheme);
  };

  const value = {
    theme,
    setTheme: handleSetTheme,
    isTransitioning,
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined) throw new Error('useTheme must be used within a ThemeProvider');

  return context;
};
