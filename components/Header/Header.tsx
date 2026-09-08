// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { usePathname } from "next/navigation";
// import { useEffect, useState } from "react";
// import { profilePdfLink } from "@/lib/nav-links";
// import { useLanguage } from "@/lib/i18n/LanguageContext";
// import { SA, US } from "country-flag-icons/react/3x2";

// export default function Header() {
//   const pathname = usePathname();
//   const { locale, t, setLocale } = useLanguage();
//   const [isLangOpen, setIsLangOpen] = useState(false);

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       const target = event.target as Node;

//       if (!document.querySelector(".lang-switcher")?.contains(target)) {
//         setIsLangOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const navItems = [
//     { key: "home", href: "/", label: t.nav.home },
//     { key: "about", href: "/about", label: t.nav.about },
//     { key: "services", href: "/services", label: t.nav.services },
//     { key: "useCases", href: "/use-cases", label: t.nav.useCases },
//     { key: "contact", href: "/contact", label: t.nav.contact },
//     { key: "careers", href: "/careers", label: t.nav.careers },
//   ];

//   return (
//     <header className="site-header">
//       <div className="header-inner">
//         <div className="logo">
//           <Link href="/">
//             <Image
//               src="/images/logo.png"
//               alt="1s Tech Logo"
//               width={120}
//               height={40}
//               priority
//             />
//           </Link>
//         </div>

//         <nav className="main-nav">
//           <ul>
//             {navItems.map((item) => {
//               const isActive =
//                 item.href === "/"
//                   ? pathname === "/"
//                   : pathname.startsWith(item.href);

//               return (
//                 <li key={item.key}>
//                   <Link href={item.href} className={isActive ? "active" : ""}>
//                     {item.label}
//                   </Link>
//                 </li>
//               );
//             })}

//             <li>
//               <a
//                 href={profilePdfLink.href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 {t.nav.profile}
//               </a>
//             </li>

//             <li className="lang-switcher">
//               <button
//                 type="button"
//                 className="lang-switcher-btn"
//                 onClick={() => setIsLangOpen((prev) => !prev)}
//               >
//                 <span className="lang-current">
//                   {locale === "ar" ? "العربية" : "English"}
//                 </span>

//                 <span className="chevron">▾</span>
//               </button>

//               {isLangOpen && (
//                 <ul className="lang-dropdown">
//                   <li>
//                     <button
//                       type="button"
//                       onClick={() => {
//                         setLocale("ar");
//                         setIsLangOpen(false);
//                       }}
//                     >
//                       <span className="lang-name">العربية</span>
//                       <span className="lang-flag">
//                         <SA title="Saudi Arabia" />
//                       </span>
//                     </button>
//                   </li>

//                   <li>
//                     <button
//                       type="button"
//                       onClick={() => {
//                         setLocale("en");
//                         setIsLangOpen(false);
//                       }}
//                     >
//                       <span className="lang-name">English</span>
//                       <span className="lang-flag">
//                         <US title="United States" />
//                       </span>
//                     </button>
//                   </li>
//                 </ul>
//               )}
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// }



"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { profilePdfLink } from "@/lib/nav-links";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { SA, US } from "country-flag-icons/react/3x2";
import styles from "./Header.module.css";

export default function Header() {
  const pathname = usePathname();
  const { locale, t, setLocale } = useLanguage();
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

  const navItems = [
    { key: "home", href: "/", label: t.nav.home },
    { key: "about", href: "/about", label: t.nav.about },
    { key: "services", href: "/services", label: t.nav.services },
    { key: "useCases", href: "/use-cases", label: t.nav.useCases },
    { key: "contact", href: "/contact", label: t.nav.contact },
    { key: "careers", href: "/careers", label: t.nav.careers },
  ];

  return (
    <header className={styles.siteHeader}>
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
          </ul>
        </nav>
      </div>
    </header>
  );
}