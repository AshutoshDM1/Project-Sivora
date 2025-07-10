import React from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '~/lib/utils';

interface InteractiveHoverButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ children, className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        'group relative overflow-hidden rounded-full  border border-border px-6 py-3 font-medium transition-all duration-300 cursor-pointer hover:shadow-lg',
        className
      )}
      {...props}
    >
      {/* Spinning Border Ring */}
      <div
        className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:animate-spin"
        style={{ animation: 'spin 2s linear infinite' }}
      />

      {/* Inner Background */}
      <div className="absolute inset-[2px] rounded-full  transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-blue-50 group-hover:to-purple-50 dark:group-hover:from-blue-950 dark:group-hover:to-purple-950" />

      {/* Content Container */}
      <div className="relative flex items-center justify-center gap-2">
        {/* Spinning Dot */}
        <div className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:animate-pulse" />

        {/* Text */}
        <span className="relative transition-all duration-300 group-hover:translate-x-1 group-hover:text-blue-600 dark:group-hover:text-blue-400">
          {children}
        </span>

        {/* Arrow */}
        <ArrowRight className="h-4 w-4 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div
          className="absolute top-1/4 left-1/4 h-1 w-1 rounded-full bg-blue-400 animate-ping"
          style={{ animationDelay: '0.1s' }}
        />
        <div
          className="absolute top-3/4 right-1/4 h-1 w-1 rounded-full bg-purple-400 animate-ping"
          style={{ animationDelay: '0.3s' }}
        />
        <div
          className="absolute top-1/2 left-3/4 h-1 w-1 rounded-full bg-pink-400 animate-ping"
          style={{ animationDelay: '0.5s' }}
        />
      </div>
    </button>
  );
});

InteractiveHoverButton.displayName = 'InteractiveHoverButton';
