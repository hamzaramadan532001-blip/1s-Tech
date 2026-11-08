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

  // كل ما الوضع يتغير، نحدّث الـ attribute على <html>
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // بنحفظ الوضع بس لما المستخدم يغيّره، عشان أول تحميل ما يكتبش "dark"
  // فوق اختياره المحفوظ قبل ما نقراه
  const setTheme = (next: Theme) => {
    setThemeState(next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // التخزين ممكن يكون مقفول — الوضع هيشتغل في الجلسة دي بس
    }
  };
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

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
