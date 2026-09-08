"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Theme = "light" | "dark";

interface ThemeContextValue {
  theme: Theme;
  setTheme: (next: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  // الوضع الافتراضي "dark" عشان يتماشى مع تصميم الموقع الحالي (الهيرو والخدمات...)
  const [theme, setThemeState] = useState<Theme>("dark");

  // نجيب الوضع المحفوظ من قبل (لو المستخدم زار الموقع قبل كده)
  // أو نعتمد على تفضيل نظام التشغيل لو مفيش حاجة محفوظة
  useEffect(() => {
    const saved = localStorage.getItem("theme") as Theme | null;

    if (saved === "light" || saved === "dark") {
      setThemeState(saved);
      return;
    }

    const prefersLight =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: light)").matches;

    if (prefersLight) {
      setThemeState("light");
    }
  }, []);

  // كل ما الوضع يتغير، نحدّث الـ attribute على <html> ونحفظه
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const setTheme = (next: Theme) => setThemeState(next);
  const toggleTheme = () =>
    setThemeState((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme لازم تتستخدم جوه ThemeProvider");
  }
  return ctx;
}
