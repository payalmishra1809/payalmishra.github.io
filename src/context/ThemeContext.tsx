import React, { createContext, useContext, useState, useEffect } from 'react';

export type ThemeMode = 'light' | 'dark';

interface ThemeContextType {
  mode: ThemeMode;
  toggleMode: () => void;
  setMode: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  mode: 'light',
  toggleMode: () => {},
  setMode: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Default to 'light' (high-end minimalistic white/alabaster aesthetic inspired by wolfpixel)
  const [mode, setModeState] = useState<ThemeMode>('light');

  const applyTheme = (targetMode: ThemeMode) => {
    if (typeof document !== 'undefined') {
      if (targetMode === 'dark') {
        document.documentElement.classList.add('dark');
        document.body.classList.add('dark');
        document.documentElement.style.colorScheme = 'dark';
      } else {
        document.documentElement.classList.remove('dark');
        document.body.classList.remove('dark');
        document.documentElement.style.colorScheme = 'light';
      }
    }
  };

  useEffect(() => {
    try {
      const saved = localStorage.getItem('payal_portfolio_theme_mode') as ThemeMode;
      if (saved === 'dark' || saved === 'light') {
        setModeState(saved);
        applyTheme(saved);
      } else {
        // Default to light
        applyTheme('light');
      }
    } catch {
      applyTheme('light');
    }
  }, []);

  const setMode = (newMode: ThemeMode) => {
    setModeState(newMode);
    applyTheme(newMode);
    try {
      localStorage.setItem('payal_portfolio_theme_mode', newMode);
    } catch {
      // sandbox safe
    }
  };

  const toggleMode = () => {
    const next = mode === 'light' ? 'dark' : 'light';
    setMode(next);
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleMode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const usePortfolioTheme = () => useContext(ThemeContext);
