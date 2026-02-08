'use client';

import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { useThemeMode } from '@/components/providers/theme-provider';

const iconClasses = 'h-4 w-4';

function SunIcon() {
  return (
    <svg className={iconClasses} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32 1.41-1.41" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg className={iconClasses} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21 15.5A8.5 8.5 0 0 1 12.5 7 8.5 8.5 0 0 1 14 2.458 10 10 0 1 0 21 15.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ThemeToggle() {
  const { theme, setTheme } = useThemeMode();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = theme !== 'light';

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="border border-border/60 bg-muted/40"
      disabled={!mounted}
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
}
