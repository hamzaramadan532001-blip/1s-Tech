"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import type { IconType } from "react-icons";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCity,
  FaDraftingCompass,
  FaFileDownload,
  FaGlobeAsia,
  FaHandshake,
  FaLightbulb,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRulerCombined,
  FaShieldAlt,
  FaUsers,
  FaChartLine,
  FaBullseye,
  FaSeedling,
} from "react-icons/fa";
import LogoMarquee from "@/components/LogoMarquee/LogoMarquee";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import styles from "./AboutPage.module.css";

const PROFILE_PDF = {
  ar: "https://1stech.sa/wp-content/uploads/2026/03/1stech-profile-JAN-2026-V1-Arabic.pdf",
  en: "https://1stech.sa/wp-content/uploads/2026/03/1tech-profile-2026-English-V0.1.pdf",
} as const;

const PHONE = "+966540007344";

// الأيقونات بنفس ترتيب العناصر في ملف الترجمة
const pillarIcons: IconType[] = [FaDraftingCompass, FaRulerCombined, FaCity, FaGlobeAsia];
const goalIcons: IconType[] = [FaChartLine, FaBullseye, FaSeedling];
const valueIcons: IconType[] = [FaLightbulb, FaShieldAlt, FaHandshake, FaUsers];

/**
 * بيضيف كلاس "visible" لأي عنصر عليه data-reveal أول ما يظهر في الشاشة
 * (أنيميشن دخول خفيف). لو المستخدم مفعّل تقليل الحركة، العناصر بتظهر مباشرة.
 */
function useReveal(dep: unknown) {
  const rootRef = useRef<HTMLDivElement>(null);

  // بيتنفذ تاني مع كل تغيير لغة عشان أي عنصر اتعمل من جديد يتراقب هو كمان
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const items = root.querySelectorAll<HTMLElement>(
      `[data-reveal]:not(.${styles.visible})`
    );

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add(styles.visible));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [dep]);

  return rootRef;
}

export default function AboutPage() {
  const { t, locale } = useLanguage();
  const a = t.about;
  const Arrow = locale === "ar" ? FaArrowLeft : FaArrowRight;
  const rootRef = useReveal(locale);

  return (
    <div ref={rootRef} className={styles.page}>
      {/* ================= Hero ================= */}
      <section className={styles.hero}>
        <div className={styles.heroGrid} aria-hidden="true" />
        <svg className={styles.contours} viewBox="0 0 600 600" aria-hidden="true">
          {[50, 95, 140, 185, 230, 275].map((r, i) => (
            <ellipse
              key={r}
              cx={300 + i * 4}
              cy={300 - i * 3}
              rx={r * 1.18}
              ry={r * 0.86}
              transform={`rotate(${-18 + i * 6} 300 300)`}
              style={{ opacity: 0.6 - i * 0.08 }}
            />
          ))}
        </svg>

        <div className={styles.container}>
          <div className={styles.heroInner}>
            <div className={styles.heroText} data-reveal>
              <nav className={styles.breadcrumb} aria-label="breadcrumb">
                <Link href="/">{t.nav.home}</Link>
                <span aria-hidden="true">/</span>
                <span aria-current="page">{a.badge}</span>
              </nav>

              <h1 className={styles.heroTitle}>
                {a.heroTitle} <span className={styles.gradientText}>{a.heroHighlight}</span>
              </h1>
              <p className={styles.heroLead}>{a.heroLead}</p>

              <div className={styles.heroActions}>
                <Link href="/contact" className={styles.btnPrimary}>
                  <span>{a.ctaPrimary}</span>
                  <Arrow className={styles.btnIcon} />
                </Link>
                <a
                  href={PROFILE_PDF[locale]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.btnGhost}
                >
                  <FaFileDownload className={styles.btnIcon} />
                  <span>{a.ctaProfile}</span>
                </a>
              </div>
            </div>

            <div className={styles.heroVisual} data-reveal>
              <div className={styles.imageFrame}>
                <Image
                  src="/images/about.jpg"
                  alt={a.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 960px) 90vw, 480px"
                  className={styles.image}
                />
              </div>

              <div className={`${styles.floatCard} ${styles.floatTop}`}>
                <span className={styles.floatValue}>{a.foundedValue}</span>
                <span className={styles.floatLabel}>{a.foundedLabel}</span>
              </div>

              <div className={`${styles.floatCard} ${styles.floatBottom}`}>
                <span className={styles.floatIcon}>
                  <FaMapMarkerAlt />
                </span>
                <span>
                  <span className={styles.floatLabel}>{a.basedLabel}</span>
                  <span className={styles.floatStrong}>{a.basedValue}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= Story + Pillars ================= */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.storyGrid}>
            <div className={styles.storyText} data-reveal>
              <span className={styles.eyebrow}>{a.storyEyebrow}</span>
              <h2 className={styles.h2}>{a.storyTitle}</h2>
              <p className={styles.body}>{a.storyP1}</p>
              <p className={styles.body}>{a.storyP2}</p>
            </div>

            <ul className={styles.pillars}>
              {a.pillars.map((p, i) => {
                const Icon = pillarIcons[i];
                return (
                  <li
                    key={i}
                    className={styles.pillar}
                    data-reveal
                    style={{ transitionDelay: `${i * 80}ms` }}
                  >
                    <span className={styles.iconBox}>
                      <Icon />
                    </span>
                    <h3 className={styles.pillarTitle}>{p.title}</h3>
                    <p className={styles.pillarText}>{p.text}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* ================= Goals ================= */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.goalsPanel} data-reveal>
            <div className={styles.goalsHead}>
              <span className={styles.eyebrow}>{a.goalsEyebrow}</span>
              <h2 className={styles.h2}>{a.goalsTitle}</h2>
            </div>

            <blockquote className={styles.statement}>{a.goalsStatement}</blockquote>

            <ul className={styles.goals}>
              {a.goals.map((g, i) => {
                const Icon = goalIcons[i];
                return (
                  <li key={i} className={styles.goal}>
                    <span className={styles.goalIcon}>
                      <Icon />
                    </span>
                    <div>
                      <h3 className={styles.goalTitle}>{g.title}</h3>
                      <p className={styles.goalText}>{g.text}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* ================= Values ================= */}
      <section className={styles.section}>
        <div className={styles.container}>
          <header className={styles.sectionHead} data-reveal>
            <span className={styles.eyebrow}>{a.valuesEyebrow}</span>
            <h2 className={styles.h2}>{a.valuesTitle}</h2>
            <p className={styles.sectionLead}>{a.valuesLead}</p>
          </header>

          <ul className={styles.values}>
            {a.values.map((v, i) => {
              const Icon = valueIcons[i];
              return (
                <li
                  key={i}
                  className={styles.valueCard}
                  data-reveal
                  style={{ transitionDelay: `${i * 90}ms` }}
                >
                  <div className={styles.valueTop}>
                    <span className={styles.iconBox}>
                      <Icon />
                    </span>
                    <span className={styles.valueIndex}>{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className={styles.valueTitle}>{v.title}</h3>
                  <p className={styles.valueText}>{v.text}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ================= Partners ================= */}
      <section className={`${styles.section} ${styles.partners}`}>
        <div className={styles.container}>
          <header className={styles.sectionHead} data-reveal>
            <h2 className={styles.h2}>{a.partnersTitle}</h2>
            <p className={styles.sectionLead}>{a.partnersLead}</p>
          </header>
        </div>
        <div className={styles.marqueeWrap}>
          <LogoMarquee />
        </div>
      </section>

      {/* ================= Closing CTA ================= */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.cta} data-reveal>
            <div className={styles.ctaText}>
              <h2 className={styles.ctaTitle}>{a.closingTitle}</h2>
              <p className={styles.ctaBody}>{a.closingText}</p>
            </div>
            <div className={styles.ctaActions}>
              <Link href="/contact" className={styles.btnLight}>
                <span>{a.closingCta}</span>
                <Arrow className={styles.btnIcon} />
              </Link>
              <a href={`tel:${PHONE}`} className={styles.btnCircle} aria-label={PHONE}>
                <FaPhoneAlt />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
