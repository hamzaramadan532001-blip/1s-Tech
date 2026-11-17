"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { usePathname } from "next/navigation";
import { translations, Locale } from "./translations";

const SITE_NAME = "1s Tech";

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

  // كل ما اللغة تتغير، نحدّث اتجاه الصفحة كلها
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
  }, [locale]);

  // اسم التبويب بنفس شكل الموقع الحالي: "اسم الصفحة – 1s Tech"
  // والرئيسية "1s Tech – We Dream, Innovate & Achieve"، وبيتغير مع اللغة
  const pathname = usePathname();
  useEffect(() => {
    const nav = translations[locale].nav;
    const titles: Record<string, string> = {
      "/about": nav.about,
      "/services": nav.services,
      "/products": nav.products,
      "/use-cases": nav.useCases,
      "/contact": nav.contact,
      "/careers": nav.careers,
    };
    const page = titles[pathname];
    document.title = page ? `${page} – ${SITE_NAME}` : `${SITE_NAME} – We Dream, Innovate & Achieve`;
  }, [locale, pathname]);

  // بنحفظ اللغة بس لما المستخدم يختارها، عشان أول تحميل ما يكتبش "ar"
  // فوق اختياره المحفوظ قبل ما نقراه (كان بيسبب لخبطة لو فيه أكتر من تاب)
  const setLocale = (next: Locale) => {
    setLocaleState(next);
    try {
      localStorage.setItem("locale", next);
    } catch {
      // التخزين ممكن يكون مقفول (وضع التصفح الخاص) — اللغة هتشتغل في الجلسة دي بس
    }
  };

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