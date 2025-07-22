'use client';

import { useEffect, useState, createContext, useContext } from 'react';

type Theme = 'light' | 'dark' | 'blue';
const ThemeContext = createContext({ toggle: () => {}, theme: 'dark' as Theme });

export const useTheme = () => useContext(ThemeContext);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    const html = document.documentElement;
    html.classList.remove('dark', 'light', 'blue');
    if (theme === 'blue') {
      html.classList.add('dark'); // blue still uses dark mode base
      html.style.setProperty('--tw-bg-opacity', '1');
      html.style.backgroundColor = '#0f172a';
    } else {
      html.classList.add(theme);
      html.style.backgroundColor = '';
    }
  }, [theme]);

  const toggle = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : prev === 'light' ? 'blue' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ toggle, theme }}>
      {children}
    </ThemeContext.Provider>
  );
}
