"use client";

import type { IconType } from "react-icons";
import {
  FaBriefcase,
  FaCity,
  FaCode,
  FaDraftingCompass,
  FaGlobeAsia,
  FaMapMarkedAlt,
  FaMicrochip,
  FaRocket,
  FaRulerCombined,
  FaSatellite,
  FaUsers,
} from "react-icons/fa";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { useReveal } from "@/lib/useReveal";
import { careersContent } from "@/lib/content/careers";
import { DirArrow, PageHero, SectionHead, kit } from "@/components/PageKit/PageKit";
import MailtoForm from "@/components/PageKit/MailtoForm";
import styles from "./CareersPage.module.css";

const whyIcons: IconType[] = [FaGlobeAsia, FaMicrochip, FaRocket, FaUsers];
const fieldIcons: IconType[] = [FaMapMarkedAlt, FaRulerCombined, FaSatellite, FaCode, FaDraftingCompass, FaCity];

export default function CareersPage() {
  const { locale } = useLanguage();
  const c = careersContent[locale];
  const rootRef = useReveal(kit.visible, locale);

  return (
    <div ref={rootRef} className={kit.page}>
      <PageHero
        crumb={c.crumb}
        title={
          <>
            {c.heroTitle} <span className={kit.gradientText}>{c.heroHighlight}</span>
          </>
        }
        lead={c.heroLead}
        actions={
          <a href="#apply" className={kit.btnPrimary}>
            <span>{c.heroCta}</span>
            <DirArrow />
          </a>
        }
      />

      {/* ================= Why join ================= */}
      <section className={kit.section}>
        <div className={kit.container}>
          <SectionHead eyebrow={c.whyEyebrow} title={c.whyTitle} lead={c.whyLead} />
          <ul className={styles.why}>
            {c.why.map((w, i) => {
              const Icon = whyIcons[i];
              return (
                <li key={i} className={kit.card} data-reveal style={{ transitionDelay: `${i * 90}ms` }}>
                  <span className={kit.iconBox}>
                    <Icon />
                  </span>
                  <h3 className={styles.cardTitle}>{w.title}</h3>
                  <p className={styles.cardText}>{w.text}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ================= Fields + openings ================= */}
      <section className={`${kit.section} ${kit.sectionAlt}`}>
        <div className={kit.container}>
          <SectionHead eyebrow={c.fieldsEyebrow} title={c.fieldsTitle} lead={c.fieldsLead} />

          <ul className={styles.fields}>
            {c.fields.map((f, i) => {
              const Icon = fieldIcons[i];
              return (
                <li key={i} className={styles.field} data-reveal style={{ transitionDelay: `${(i % 3) * 70}ms` }}>
                  <span className={styles.fieldIcon}>
                    <Icon />
                  </span>
                  <span>{f}</span>
                </li>
              );
            })}
          </ul>

          <div className={styles.openings} data-reveal>
            <span className={`${kit.iconBox} ${kit.iconSolid}`}>
              <FaBriefcase />
            </span>
            <div className={styles.openingsText}>
              <h3>{c.openingsTitle}</h3>
              <p>{c.openingsText}</p>
            </div>
            <a href="#apply" className={kit.btnGhost}>
              <span>{c.openingsCta}</span>
              <DirArrow />
            </a>
          </div>
        </div>
      </section>

      {/* ================= Process + form ================= */}
      <section className={kit.section} id="apply">
        <div className={kit.container}>
          <div className={styles.applyLayout}>
            <div className={styles.processCol} data-reveal>
              <span className={kit.eyebrow}>{c.processEyebrow}</span>
              <h2 className={kit.h2}>{c.processTitle}</h2>

              <ol className={styles.timeline}>
                {c.process.map((step, i) => (
                  <li key={i} className={styles.tStep}>
                    <span className={styles.tDot}>{i + 1}</span>
                    <div>
                      <h3 className={styles.tTitle}>{step.title}</h3>
                      <p className={styles.tText}>{step.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className={styles.formCard} data-reveal>
              <span className={kit.eyebrow}>{c.applyEyebrow}</span>
              <h2 className={kit.h2}>{c.applyTitle}</h2>
              <p className={`${kit.lead} ${styles.formLead}`}>{c.applyLead}</p>
              <MailtoForm key={locale} fields={c.formFields} messages={c.messages} buildSubject={c.subject} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
