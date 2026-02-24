'use client';

import { useTheme } from './ThemeProvider';
import { useState, useRef, useEffect } from 'react';

const themes = [
  {
    value: 'light' as const,
    label: 'Hell',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    value: 'dark' as const,
    label: 'Dunkel',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    ),
  },
  {
    value: 'system' as const,
    label: 'System',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export interface ThemeSwitcherProps {
  variant?: 'button' | 'dropdown';
  showLabel?: boolean;
  isTransparentHome?: boolean;
}

export default function ThemeSwitcher({ variant = 'dropdown', showLabel = false, isTransparentHome = false }: ThemeSwitcherProps) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Debug Logging - entferne das später
  console.log('ThemeSwitcher:', { theme, resolvedTheme, htmlClass: document.documentElement.className });

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentTheme = themes.find(t => t.value === theme) || themes[0];
  const currentIcon = theme === 'system' 
    ? (resolvedTheme === 'dark' ? themes[1].icon : themes[0].icon)
    : currentTheme.icon;

  if (variant === 'button') {
    // Simple toggle button (light <-> dark)
    const toggleTheme = () => {
      setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
    };

    return (
      <button
        onClick={toggleTheme}
        className={`relative w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group ${
          isTransparentHome 
            ? "bg-white/50 backdrop-blur-md border border-zinc-900/20 text-zinc-800 hover:text-zinc-950 hover:bg-white/70"
            : "bg-slate-100 dark:bg-slate-800 border border-slate-200/50 dark:border-slate-700/50 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-200 dark:hover:bg-slate-700"
        }`}
        aria-label="Theme wechseln"
      >
        <div className="relative">
          {/* Sun Icon */}
          <svg 
            className={`absolute w-4 h-4 transition-all duration-500 ${
              resolvedTheme === 'dark' 
                ? 'opacity-0 rotate-90 scale-0' 
                : 'opacity-100 rotate-0 scale-100'
            }`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          
          {/* Moon Icon */}
          <svg 
            className={`w-4 h-4 transition-all duration-500 ${
              resolvedTheme === 'dark' 
                ? 'opacity-100 rotate-0 scale-100' 
                : 'opacity-0 -rotate-90 scale-0'
            }`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        </div>
      </button>
    );
  }

  // Dropdown variant
  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200/50 dark:border-slate-700/50 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300"
        aria-label="Theme auswählen"
      >
        <span className="flex items-center justify-center w-4 h-4">
          {currentIcon}
        </span>
        {showLabel && (
          <>
            <span className="text-sm font-medium">{currentTheme.label}</span>
            <svg 
              className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </>
        )}
      </button>

      {/* Dropdown Menu */}
      <div
        className={`absolute right-0 top-full mt-2 py-2 bg-white dark:bg-slate-800 border border-slate-200/50 dark:border-slate-700/50 rounded-2xl shadow-lg backdrop-blur-xl min-w-[140px] transition-all duration-200 origin-top-right ${
          isOpen
            ? 'opacity-100 scale-100 pointer-events-auto'
            : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        {themes.map((themeOption) => (
          <button
            key={themeOption.value}
            onClick={() => {
              setTheme(themeOption.value);
              setIsOpen(false);
            }}
            className={`w-full flex items-center space-x-3 px-4 py-2 text-left text-sm transition-colors duration-200 ${
              theme === themeOption.value
                ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10'
                : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-700/50'
            }`}
          >
            <span className="flex items-center justify-center w-4 h-4">
              {themeOption.icon}
            </span>
            <span className="font-medium">{themeOption.label}</span>
            {theme === themeOption.value && (
              <svg className="w-3 h-3 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}