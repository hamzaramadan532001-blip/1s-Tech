"use client";

import React, { useState } from "react";
import styles from "./FAQSection.module.css";
import { Cairo } from "next/font/google";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { homeContent } from "@/lib/content/home";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "600", "700", "800"],
});

const FAQSection: React.FC = () => {
  const { locale } = useLanguage();
  const c = homeContent[locale].faq;
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const renderItem = (index: number) => {
    const faq = c.items[index];
    const isOpen = activeIndex === index;
    return (
      <div key={index} className={`${styles.faqItem} ${isOpen ? styles.active : ""}`}>
        <button
          type="button"
          className={styles.faqQuestion}
          onClick={() => toggleAccordion(index)}
          aria-expanded={isOpen}
        >
          <span className={styles.questionNumber}>{String(index + 1).padStart(2, "0")}</span>
          <span className={styles.questionText}>{faq.question}</span>
          <span className={styles.arrowIcon}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </span>
        </button>
        <div className={styles.faqAnswerWrapper}>
          <div className={styles.faqAnswer}>
            <div className={styles.answerIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <p className={styles.answerText}>{faq.answer}</p>
          </div>
        </div>
      </div>
    );
  };

  // عمودين: الأسئلة الفردية في الأول والزوجية في التاني
  const indexes = c.items.map((_, i) => i);
  const firstColumn = indexes.filter((i) => i % 2 === 0);
  const secondColumn = indexes.filter((i) => i % 2 !== 0);

  return (
    <section className={`${styles.section} ${cairo.className}`}>
      <div className={styles.container}>
        {/* Background Decorations */}
        <div className={styles.decoration1} />
        <div className={styles.decoration2} />

        <div className={styles.header}>
          <span className={styles.badge}>{c.badge}</span>
          <h2 className={styles.title}>
            {c.titleStart} <span className={styles.highlight}>{c.titleHighlight}</span> {c.titleEnd}
          </h2>
          <p className={styles.subtitle}>{c.subtitle}</p>
        </div>

        <div className={styles.faqGrid}>
          <div className={styles.column}>{firstColumn.map(renderItem)}</div>
          <div className={styles.column}>{secondColumn.map(renderItem)}</div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
