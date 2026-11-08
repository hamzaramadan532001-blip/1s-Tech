"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight, FaPhoneAlt } from "react-icons/fa";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import styles from "./PageKit.module.css";

export { styles as kit };

export const COMPANY = {
  phone: "+966540007344",
  phoneDisplay: "+966 54 000 7344",
  email: "info@1stech.sa",
  // مقر الشركة: حي الياسمين، الرياض. لتحديد نقطة دقيقة على الخريطة
  // استبدل mapQuery بالإحداثيات (مثلاً "24.8213,46.6398") من Google Maps
  mapQuery: "Al Yasmin, Riyadh, Saudi Arabia",
  get mapEmbed() {
    return `https://maps.google.com/maps?q=${encodeURIComponent(this.mapQuery)}&z=14&output=embed`;
  },
  get mapLink() {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(this.mapQuery)}`;
  },
};

/** سهم بيتقلب حسب اتجاه اللغة */
export function DirArrow({ className }: { className?: string }) {
  const { locale } = useLanguage();
  const Icon = locale === "ar" ? FaArrowLeft : FaArrowRight;
  return <Icon className={className ?? styles.btnIcon} aria-hidden="true" />;
}

/* ---------------------------------------------------------- */

interface PageHeroProps {
  /** اسم الصفحة في مسار التنقل */
  crumb: string;
  title: ReactNode;
  lead: string;
  actions?: ReactNode;
  stats?: { value: string; label: string }[];
  centered?: boolean;
}

export function PageHero({ crumb, title, lead, actions, stats, centered }: PageHeroProps) {
  const { t } = useLanguage();

  return (
    <section className={`${styles.hero} ${centered ? styles.heroCentered : ""}`}>
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
        <div className={styles.heroInner} data-reveal>
          <nav className={styles.breadcrumb} aria-label="breadcrumb">
            <Link href="/">{t.nav.home}</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{crumb}</span>
          </nav>

          <h1 className={styles.heroTitle}>{title}</h1>
          <p className={styles.heroLead}>{lead}</p>

          {actions && <div className={styles.heroActions}>{actions}</div>}

          {stats && stats.length > 0 && (
            <div className={styles.heroStats}>
              {stats.map((s) => (
                <div key={s.label} className={styles.stat}>
                  <span className={styles.statValue}>{s.value}</span>
                  <span className={styles.statLabel}>{s.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- */

interface SectionHeadProps {
  eyebrow?: string;
  title: string;
  lead?: string;
}

export function SectionHead({ eyebrow, title, lead }: SectionHeadProps) {
  return (
    <header className={styles.sectionHead} data-reveal>
      {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
      <h2 className={styles.h2}>{title}</h2>
      {lead && <p className={styles.lead}>{lead}</p>}
    </header>
  );
}

/* ---------------------------------------------------------- */

interface CtaBannerProps {
  title: string;
  text: string;
  cta: string;
  href?: string;
}

export function CtaBanner({ title, text, cta, href = "/contact" }: CtaBannerProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.cta} data-reveal>
          <div>
            <h2 className={styles.ctaTitle}>{title}</h2>
            <p className={styles.ctaBody}>{text}</p>
          </div>
          <div className={styles.ctaActions}>
            <Link href={href} className={styles.btnLight}>
              <span>{cta}</span>
              <DirArrow />
            </Link>
            <a href={`tel:${COMPANY.phone}`} className={styles.btnCircle} aria-label={COMPANY.phone}>
              <FaPhoneAlt />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
