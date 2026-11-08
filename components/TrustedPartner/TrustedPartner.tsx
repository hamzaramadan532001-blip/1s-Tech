"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./TrustedPartner.module.css";
import { Cairo } from "next/font/google";
import { FaHandshake, FaUsers, FaGlobe, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { homeContent } from "@/lib/content/home";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "600", "700", "800"],
});

// الأيقونات بنفس ترتيب features في ملف المحتوى
const featureIcons = [FaHandshake, FaUsers, FaGlobe];

export default function TrustedPartner() {
  const { locale } = useLanguage();
  const c = homeContent[locale].trusted;
  const Arrow = locale === "ar" ? FaArrowLeft : FaArrowRight;

  return (
    <section className={`${styles.section} ${cairo.className}`}>
      <div className={styles.container}>
        {/* Background Decorations */}
        <div className={styles.decoration1} />
        <div className={styles.decoration2} />

        <div className={styles.header}>
          <span className={styles.badge}>{c.badge}</span>
          <h2 className={styles.title}>{c.title}</h2>
          <h3 className={styles.subtitle}>{c.subtitle}</h3>
        </div>

        <div className={styles.content}>
          <div className={styles.about}>
            <p className={styles.paragraph}>{c.paragraph}</p>

            <Link href="/about" className={styles.ctaButton}>
              <span>{c.cta}</span>
              <Arrow className={styles.ctaIcon} />
            </Link>
          </div>

          <div className={styles.imageWrap}>
            <Image
              src="/images/TrustedPartner.jpg"
              alt={c.imageAlt}
              fill
              sizes="(max-width: 900px) 90vw, 360px"
              className={styles.image}
            />
          </div>

          <ul className={styles.featureList}>
            {c.features.map((text, i) => {
              const Icon = featureIcons[i];
              return (
                <li className={styles.featureItem} key={i}>
                  <span className={styles.iconCircle}>
                    <Icon size={24} />
                  </span>
                  <span className={styles.text}>{text}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
