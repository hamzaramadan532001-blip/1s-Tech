"use client";

import React from "react";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import styles from "./ServicesSection.module.css";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { homeContent } from "@/lib/content/home";
import { servicesContent } from "@/lib/content/services";

interface CardStyle {
  /** نفس id الخدمة في lib/content/services.ts — منه بنجيب العنوان والوصف باللغتين */
  id: string;
  icon: React.ReactNode;
  iconClass: string;
  accentClass: string;
}

// الترتيب هنا هو ترتيب الظهور في الصفحة الرئيسية
const cards: CardStyle[] = [
  {
    id: "spatial-analysis",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
    iconClass: styles.iconBlue,
    accentClass: styles.accentBlue,
  },
  {
    id: "app-dev",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="4" />
        <path d="M8 2v20M16 2v20M2 8h20M2 16h20" />
      </svg>
    ),
    iconClass: styles.iconPurple,
    accentClass: styles.accentPurple,
  },
  {
    id: "consulting",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 21l-4.35-4.35" />
        <circle cx="9" cy="9" r="7" />
        <path d="M9 5v8M5 9h8" />
      </svg>
    ),
    iconClass: styles.iconAmber,
    accentClass: styles.accentAmber,
  },
  {
    id: "data-management",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
      </svg>
    ),
    iconClass: styles.iconEmerald,
    accentClass: styles.accentEmerald,
  },
  {
    id: "remote-sensing",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C13.5 3 15 3.5 16.2 4.5" />
        <circle cx="12" cy="12" r="3" />
        <path d="M21 3L12 12" />
      </svg>
    ),
    iconClass: styles.iconTeal,
    accentClass: styles.accentTeal,
  },
  {
    id: "digital-twin",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 3L3 8L12 13L21 8L12 3Z" />
        <path d="M3 13L12 18L21 13" />
        <path d="M3 17L12 22L21 17" />
      </svg>
    ),
    iconClass: styles.iconPink,
    accentClass: styles.accentPink,
  },
  {
    id: "urban-planning",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="1" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <line x1="12" y1="2" x2="12" y2="22" />
        <rect x="8" y="8" width="4" height="4" />
      </svg>
    ),
    iconClass: styles.iconOrange,
    accentClass: styles.accentOrange,
  },
  {
    id: "aec",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 20L20 4" />
        <path d="M4 4L20 20" />
        <rect x="8" y="8" width="8" height="8" />
      </svg>
    ),
    iconClass: styles.iconLime,
    accentClass: styles.accentLime,
  },
  {
    id: "drone",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2C12 2 8 6 8 12C8 18 12 22 12 22C12 22 16 18 16 12C16 6 12 2 12 2Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    iconClass: styles.iconSky,
    accentClass: styles.accentSky,
  },
  {
    id: "laser-scanning",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="3" />
        <line x1="12" y1="2" x2="12" y2="9" />
        <line x1="12" y1="15" x2="12" y2="22" />
        <line x1="2" y1="12" x2="9" y2="12" />
        <line x1="15" y1="12" x2="22" y2="12" />
      </svg>
    ),
    iconClass: styles.iconIndigo,
    accentClass: styles.accentIndigo,
  },
  {
    id: "mms",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3" />
        <path d="M19 9L22 9L22 15L19 15" />
        <path d="M5 15L2 15L2 9L5 9" />
        <rect x="7" y="4" width="10" height="16" rx="1" />
      </svg>
    ),
    iconClass: styles.iconRose,
    accentClass: styles.accentRose,
  },
  {
    id: "photogrammetry",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="16" rx="2" />
        <circle cx="8" cy="10" r="2" />
        <circle cx="16" cy="10" r="2" />
        <path d="M2 18L8 14L12 16L18 12L22 15" />
        <path d="M22 18L18 12L12 16L8 14L2 18" />
      </svg>
    ),
    iconClass: styles.iconCyan,
    accentClass: styles.accentCyan,
  },
  {
    id: "geoai",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2C9 2 6 4 6 8C6 12 12 18 12 18C12 18 18 12 18 8C18 4 15 2 12 2Z" />
        <circle cx="12" cy="8" r="2" />
        <path d="M4 12C4 16 8 20 12 20" />
        <path d="M20 12C20 16 16 20 12 20" />
      </svg>
    ),
    iconClass: styles.iconViolet,
    accentClass: styles.accentViolet,
  },
  {
    id: "ai-solutions",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="6" y="6" width="12" height="12" rx="2" />
        <path d="M9.5 15l1.5-6h2l1.5 6M10 13h4" />
        <path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" />
      </svg>
    ),
    iconClass: styles.iconRed,
    accentClass: styles.accentRed,
  },
];

const ServicesSection: React.FC = () => {
  const { locale } = useLanguage();
  const c = homeContent[locale].services;
  const items = servicesContent[locale].items;
  const Arrow = locale === "ar" ? FaArrowLeft : FaArrowRight;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.badge}>{c.badge}</span>
          <h2 className={styles.title}>
            {c.titleStart} <span className={styles.highlight}>{c.titleHighlight}</span> {c.titleEnd}
          </h2>
          <p className={styles.subtitle}>{c.subtitle}</p>
        </div>

        <div className={styles.grid}>
          {cards.map((card) => {
            const service = items.find((s) => s.id === card.id);
            if (!service) return null;
            return (
              <div key={card.id} className={styles.card}>
                <div className={styles.cardInner}>
                  <div className={styles.iconWrapper}>
                    <div className={`${styles.icon} ${card.iconClass}`}>{card.icon}</div>
                  </div>
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                  <p className={styles.cardDesc}>{service.description}</p>
                </div>
                <div className={`${styles.accent} ${card.accentClass}`} />
              </div>
            );
          })}
        </div>

        <div className={styles.viewAllWrap}>
          <Link href="/services" className={styles.viewAll}>
            <span>{c.viewAll}</span>
            <Arrow />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
