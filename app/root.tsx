import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'react-router';

import type { Route } from './+types/root';
import './app.css';
import { ThemeProvider } from './components/theme-provider';

export const links: Route.LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://project-sivora.vercel.app/#person",
        "name": "Shivam Gupta",
        "givenName": "Shivam",
        "familyName": "Gupta",
        "url": "https://project-sivora.vercel.app",
        "image": {
          "@type": "ImageObject",
          "url": "https://project-sivora.vercel.app/shivam-profile.jpg",
          "width": 400,
          "height": 400
        },
        "jobTitle": "Full Stack Developer",
        "description": "Experienced Full Stack Developer with 5+ years in coding and 3+ years professional experience. Specializing in React, Angular, Node.js, TypeScript, and modern web technologies.",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "IN",
          "addressRegion": "India"
        },
        "alumniOf": {
          "@type": "EducationalOrganization",
          "name": "Computer Science Education"
        },
        "knowsAbout": [
          "Full Stack Development",
          "React",
          "Angular",
          "Node.js",
          "TypeScript",
          "JavaScript",
          "MongoDB",
          "PostgreSQL",
          "Express.js",
          "Next.js",
          "React Router",
          "Prisma",
          "Tailwind CSS",
          "AI Development",
          "Web Development",
          "Software Engineering"
        ],
        "hasOccupation": {
          "@type": "Occupation",
          "name": "Full Stack Developer",
          "occupationLocation": {
            "@type": "Country",
            "name": "India"
          },
          "skills": "React, Angular, Node.js, TypeScript, JavaScript, MongoDB, PostgreSQL"
        },
        "sameAs": [
          "https://github.com/shivamgupta",
          "https://linkedin.com/in/shivamgupta",
          "https://twitter.com/shivamgupta"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://project-sivora.vercel.app/#website",
        "url": "https://project-sivora.vercel.app",
        "name": "Shivam Gupta Portfolio",
        "description": "Portfolio website of Shivam Gupta, a Full Stack Developer specializing in React, Angular, Node.js, and modern web technologies.",
        "publisher": {
          "@id": "https://project-sivora.vercel.app/#person"
        },
        "inLanguage": "en-US",
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://project-sivora.vercel.app/?s={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://project-sivora.vercel.app/#organization",
        "name": "Shivam Gupta Development",
        "url": "https://project-sivora.vercel.app",
        "logo": {
          "@type": "ImageObject",
          "url": "https://project-sivora.vercel.app/logo.png",
          "width": 512,
          "height": 512
        },
        "founder": {
          "@id": "https://project-sivora.vercel.app/#person"
        },
        "description": "Professional Full Stack Development services specializing in modern web technologies and AI-powered applications.",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "IN",
          "addressRegion": "India"
        },
        "sameAs": [
          "https://github.com/shivamgupta",
          "https://linkedin.com/in/shivamgupta"
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://project-sivora.vercel.app/#webpage",
        "url": "https://project-sivora.vercel.app",
        "name": "Shivam Gupta - Full Stack Developer Portfolio",
        "isPartOf": {
          "@id": "https://project-sivora.vercel.app/#website"
        },
        "about": {
          "@id": "https://project-sivora.vercel.app/#person"
        },
        "description": "Professional portfolio showcasing full stack development projects, skills, and experience in React, Angular, Node.js, and modern web technologies.",
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://project-sivora.vercel.app"
            }
          ]
        }
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
        <Meta />
        <Links />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('vite-ui-theme') || '  ';
                  var root = document.documentElement;
                  
                  root.classList.remove('light', 'dark');
                  
                  if (theme === 'system') {
                    var systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                    root.classList.add(systemTheme);
                  } else {
                    root.classList.add(theme);
                  }
                } catch (e) {
                  // Fallback to dark theme if there's an error
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          {children}
        </ThemeProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = 'Oops!';
  let details = 'An unexpected error occurred.';
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? '404' : 'Error';
    details =
      error.status === 404 ? 'The requested page could not be found.' : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  // For 404 errors, show the animated page
  if (isRouteErrorResponse(error) && error.status === 404) {
    return (
      <div className="min-h-screen bg-white dark:bg-black relative overflow-hidden flex items-center justify-center">
        {/* Animated Background Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full opacity-10 dark:opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                background: `rgba(0, 0, 0, ${Math.random() * 0.3 + 0.1})`,
                animation: `float-${i % 3} ${Math.random() * 3 + 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        {/* Animated Gradient Orbs */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gray-200 dark:bg-gray-800 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20 animate-pulse" />
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-gray-300 dark:bg-gray-700 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-15 animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-gray-400 dark:bg-gray-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        {/* Main Content */}
        <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
          {/* 404 Number */}
          <div className="mb-8">
            <h1 className="text-[8rem] md:text-[12rem] font-bold text-black dark:text-white animate-pulse leading-none">
              404
            </h1>
          </div>

          {/* Error Message */}
          <div className="mb-8 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
              Page Not Found
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-md mx-auto leading-relaxed">
              The page you're looking for seems to have wandered off into the digital void.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/"
              className="group relative px-8 py-3 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-black/25 dark:hover:shadow-white/25 hover:scale-105 active:scale-95"
            >
              <span className="relative z-10">Go Home</span>
              <div className="absolute inset-0 bg-gray-800 dark:bg-gray-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <button
              onClick={() => window.history.back()}
              className="px-8 py-3 border-2 border-black dark:border-white text-black dark:text-white font-semibold rounded-full transition-all duration-300 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black hover:shadow-lg hover:shadow-black/25 dark:hover:shadow-white/25 hover:scale-105 active:scale-95"
            >
              Go Back
            </button>
          </div>

          {/* Animated Elements */}
          <div className="mt-12 space-y-4">
            <div className="flex justify-center items-center space-x-2">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 bg-black dark:bg-white rounded-full animate-bounce"
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* CSS Animations */}
        <style dangerouslySetInnerHTML={{
          __html: `
            @keyframes float-0 {
              0%, 100% { transform: translateY(0px) rotate(0deg); }
              50% { transform: translateY(-20px) rotate(180deg); }
            }
            @keyframes float-1 {
              0%, 100% { transform: translateY(0px) rotate(0deg); }
              50% { transform: translateY(-30px) rotate(-180deg); }
            }
            @keyframes float-2 {
              0%, 100% { transform: translateY(0px) rotate(0deg); }
              50% { transform: translateY(-25px) rotate(360deg); }
            }
          `
        }} />
      </div>
    );
  }

  // For other errors, show the simple error page
  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
