"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { translations, Locale } from "./translations";

interface LanguageContextValue {
  locale: Locale;
  t: (typeof translations)["ar"];
  setLocale: (next: Locale) => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("ar");

  // نجيب اللغة المحفوظة من قبل (لو المستخدم زار الموقع قبل كده)
  useEffect(() => {
    const saved = localStorage.getItem("locale") as Locale | null;
    if (saved === "ar" || saved === "en") {
      setLocaleState(saved);
    }
  }, []);

  // كل ما اللغة تتغير، نحدّث اتجاه الصفحة كلها ونحفظها
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
    localStorage.setItem("locale", locale);
  }, [locale]);

  const setLocale = (next: Locale) => setLocaleState(next);

  return (
    <LanguageContext.Provider value={{ locale, t: translations[locale], setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage لازم تتستخدم جوه LanguageProvider");
  }
  return ctx;
}