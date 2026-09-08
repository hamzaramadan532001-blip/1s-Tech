"use client";

import React, { useState } from "react";
import styles from "./FAQSection.module.css";
import { Cairo } from "next/font/google";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "600", "700", "800"],
});

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      id: 1,
      question: "في ماذا تتخصص تقني الأولى؟",
      answer:
        "تتخصص تقني الأولى في تقديم حلول جغرافية مكانية وهندسية متقدمة، بما في ذلك استشارات GIS، وإدارة البيانات المكانية، وأعمال المسح، والاستشعار عن بُعد، وحلول التوأم الرقمي، وتقنيات تحديد المواقع التي تدعم المشاريع واسعة النطاق والحسّاسة.",
    },
    {
      id: 2,
      question: "هل يمكن دمج حلولكم مع الأنظمة الحالية؟",
      answer:
        "نعم، صُممت حلولنا لتتكامل بسلاسة مع أنظمة المؤسسات الحالية، بما في ذلك منصات GIS وBIM وإنترنت الأشياء (IoT) والأنظمة التشغيلية الأخرى، مع الالتزام بالمعايير الدولية.",
    },
    {
      id: 3,
      question: "من هم عملاؤكم عادةً؟",
      answer:
        "يشمل عملاؤنا الجهات الحكومية، والهيئات العامة، ومشغلي البنية التحتية، وشركات الهندسة، والمؤسسات الكبرى التي تحتاج إلى حلول جغرافية مكانية دقيقة وموثوقة وقابلة للتوسع.",
    },
    {
      id: 4,
      question: "هل تقدمون حلولًا مخصصة؟",
      answer:
        "بالتأكيد، نقوم بتخصيص خدماتنا وحلولنا لتلبية متطلبات كل عميل وبيئة العمل والأهداف الاستراتيجية الخاصة به.",
    },
    {
      id: 5,
      question: "هل تعملون على مشاريع وطنية واسعة النطاق؟",
      answer:
        "نعم، لدينا خبرة واسعة في تنفيذ وإدارة مشاريع كبيرة ومعقّدة للجهات الحكومية والمؤسسات، مع الالتزام الصارم بمعايير الجودة والأمان والجداول الزمنية المعتمدة.",
    },
    {
      id: 6,
      question: "هل يمكن أن تعمل حلول تحديد المواقع لديكم داخل الأنفاق والمناطق تحت الأرض؟",
      answer:
        "نعم، تم تصميم حل UGPS لدينا خصيصًا للتغلب على فقدان إشارات GPS في الأنفاق والمناطق تحت الأرض وداخل المباني والبيئات الحضرية الكثيفة، مع الحفاظ على التوافق مع أجهزة GNSS الحالية.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={`${styles.section} ${cairo.className}`}>
      <div className={styles.container}>
        {/* Background Decorations */}
        <div className={styles.decoration1} />
        <div className={styles.decoration2} />

        <div className={styles.header}>
          <span className={styles.badge}>الأسئلة الشائعة</span>
          <h2 className={styles.title}>
            كل ما <span className={styles.highlight}>تحتاج</span> إلى معرفته
          </h2>
          <p className={styles.subtitle}>
            أجوبة على أكثر الأسئلة شيوعاً حول خدماتنا وحلولنا
          </p>
        </div>

        {/* FAQ Grid - 2 Columns */}
        <div className={styles.faqGrid}>
          {/* العمود الأيمن - الأسئلة 1, 3, 5 */}
          <div className={styles.column}>
            {faqs
              .filter((_, index) => index % 2 === 0)
              .map((faq, idx) => {
                const originalIndex = faqs.indexOf(faq);
                return (
                  <div
                    key={faq.id}
                    className={`${styles.faqItem} ${
                      activeIndex === originalIndex ? styles.active : ""
                    }`}
                  >
                    <button
                      className={styles.faqQuestion}
                      onClick={() => toggleAccordion(originalIndex)}
                      aria-expanded={activeIndex === originalIndex}
                    >
                      <span className={styles.questionNumber}>
                        {String(originalIndex + 1).padStart(2, "0")}
                      </span>
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
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                            <polyline points="22 4 12 14.01 9 11.01" />
                          </svg>
                        </div>
                        <p className={styles.answerText}>{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>

          {/* العمود الأيسر - الأسئلة 2, 4, 6 */}
          <div className={styles.column}>
            {faqs
              .filter((_, index) => index % 2 !== 0)
              .map((faq) => {
                const originalIndex = faqs.indexOf(faq);
                return (
                  <div
                    key={faq.id}
                    className={`${styles.faqItem} ${
                      activeIndex === originalIndex ? styles.active : ""
                    }`}
                  >
                    <button
                      className={styles.faqQuestion}
                      onClick={() => toggleAccordion(originalIndex)}
                      aria-expanded={activeIndex === originalIndex}
                    >
                      <span className={styles.questionNumber}>
                        {String(originalIndex + 1).padStart(2, "0")}
                      </span>
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
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                            <polyline points="22 4 12 14.01 9 11.01" />
                          </svg>
                        </div>
                        <p className={styles.answerText}>{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;