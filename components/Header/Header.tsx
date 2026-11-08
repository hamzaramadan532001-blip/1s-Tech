"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { profilePdfLink } from "@/lib/nav-links";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { useTheme } from "@/lib/theme/ThemeContext";
import { SA, US } from "country-flag-icons/react/3x2";
import styles from "./Header.module.css";

export default function Header() {
  const pathname = usePathname();
  const { locale, t, setLocale } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (!document.querySelector(`.${styles.langSwitcher}`)?.contains(target)) {
        setIsLangOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // بنعرف إذا المستخدم نزل تحت عشان نضيف ظل للنافبار
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { key: "home", href: "/", label: t.nav.home },
    { key: "about", href: "/about", label: t.nav.about },
    { key: "services", href: "/services", label: t.nav.services },
    { key: "useCases", href: "/use-cases", label: t.nav.useCases },
    { key: "contact", href: "/contact", label: t.nav.contact },
    { key: "careers", href: "/careers", label: t.nav.careers },
  ];

  return (
    <header className={`${styles.siteHeader} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.headerInner}>
        <div className={styles.logo}>
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="1s Tech Logo"
              width={120}
              height={40}
              priority
            />
          </Link>
        </div>

        <button
          type="button"
          className={`${styles.hamburgerBtn} ${isMobileMenuOpen ? styles.isOpen : ""}`}
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className={styles.hamburgerLine} />
          <span className={styles.hamburgerLine} />
          <span className={styles.hamburgerLine} />
        </button>

        <nav
          className={`${styles.mainNav} ${
            isMobileMenuOpen ? styles.mobileOpen : ""
          }`}
        >
          <ul className={styles.navList}>
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <li key={item.key} className={styles.navItem}>
                  <Link
                    href={item.href}
                    className={isActive ? styles.active : ""}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}

            <li className={styles.navItem}>
              <a
                href={profilePdfLink.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.nav.profile}
              </a>
            </li>

            <li className={`${styles.navItem} ${styles.langSwitcher}`}>
              <button
                type="button"
                className={styles.langSwitcherBtn}
                onClick={() => setIsLangOpen((prev) => !prev)}
              >
                <span className={styles.langCurrent}>
                  {locale === "ar" ? "العربية" : "English"}
                </span>

                <span className={styles.chevron}>▾</span>
              </button>

              {isLangOpen && (
                <ul className={styles.langDropdown}>
                  <li>
                    <button
                      type="button"
                      onClick={() => {
                        setLocale("ar");
                        setIsLangOpen(false);
                      }}
                    >
                      <span className={styles.langName}>العربية</span>
                      <span className={styles.langFlag}>
                        <SA title="Saudi Arabia" />
                      </span>
                    </button>
                  </li>

                  <li>
                    <button
                      type="button"
                      onClick={() => {
                        setLocale("en");
                        setIsLangOpen(false);
                      }}
                    >
                      <span className={styles.langName}>English</span>
                      <span className={styles.langFlag}>
                        <US title="United States" />
                      </span>
                    </button>
                  </li>
                </ul>
              )}
            </li>

            <li className={styles.navItem}>
              <button
                type="button"
                className={styles.themeToggleBtn}
                onClick={toggleTheme}
                aria-label={
                  theme === "dark" ? "التبديل للوضع الفاتح" : "التبديل للوضع الداكن"
                }
                title={
                  theme === "dark" ? "التبديل للوضع الفاتح" : "التبديل للوضع الداكن"
                }
              >
                {theme === "dark" ? (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.8" />
                    <path
                      d="M12 2.5v2.2M12 19.3v2.2M21.5 12h-2.2M4.7 12H2.5M18.6 5.4l-1.55 1.55M6.95 17.05 5.4 18.6M18.6 18.6l-1.55-1.55M6.95 6.95 5.4 5.4"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                ) : (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.5 14.4A8.5 8.5 0 0 1 9.6 3.5a8.5 8.5 0 1 0 10.9 10.9Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}