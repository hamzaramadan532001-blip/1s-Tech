"use client";

// أقسام من الملف التعريفي للشركة — بتتستخدم في "من نحن" وفي الصفحة الرئيسية:
// المشاريع، العملاء، الفريق، الشركاء التقنيون

import Image from "next/image";
import type { IconType } from "react-icons";
import {
  FaBolt,
  FaBrain,
  FaChartLine,
  FaCity,
  FaClipboardCheck,
  FaCogs,
  FaComments,
  FaCube,
  FaDatabase,
  FaHandshake,
  FaHeadset,
  FaLandmark,
  FaLayerGroup,
  FaMapMarkedAlt,
  FaMapMarkerAlt,
  FaMedal,
  FaMonument,
  FaRoad,
  FaSeedling,
  FaShieldAlt,
  FaTree,
  FaUsers,
  FaWater,
} from "react-icons/fa";
import { GiDeliveryDrone } from "react-icons/gi";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { useReveal } from "@/lib/useReveal";
import { companyContent } from "@/lib/content/company";
import { clients, techPartners } from "@/lib/content/clients";
import { SectionHead, kit } from "@/components/PageKit/PageKit";
import styles from "./CompanySections.module.css";

const statIcons: IconType[] = [FaClipboardCheck, FaCogs, FaHandshake, FaLandmark];
const serviceIcons: IconType[] = [FaMapMarkedAlt, FaLayerGroup, GiDeliveryDrone, FaCogs, FaDatabase, FaHeadset, FaCube, FaBrain];
const sectorIcons: IconType[] = [FaShieldAlt, FaLandmark, FaTree, FaBolt, FaRoad, FaMonument, FaCity, FaWater, FaSeedling];
const teamIcons: IconType[] = [FaUsers, FaComments, FaChartLine, FaMedal, FaHandshake];

/* ---------------------------------------------------------- */

export function ProjectsSection({ alt = false }: { alt?: boolean }) {
  const { locale } = useLanguage();
  const p = companyContent[locale].projects;
  const rootRef = useReveal<HTMLElement>(kit.visible, locale);

  return (
    <section ref={rootRef} className={`${kit.page} ${kit.section} ${alt ? kit.sectionAlt : ""}`}>
      <div className={kit.container}>
        <SectionHead eyebrow={p.eyebrow} title={p.title} lead={p.lead} />

        <ul className={styles.stats}>
          {p.stats.map((s, i) => {
            const Icon = statIcons[i];
            return (
              <li
                key={i}
                className={`${styles.stat} ${styles[s.tone]}`}
                data-reveal
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className={styles.statIcon}>
                  <Icon />
                </span>
                <span className={styles.statValue} dir="ltr">
                  {s.value}
                </span>
                <span className={styles.statLabel}>{s.label}</span>
                <p className={styles.statText}>{s.text}</p>
              </li>
            );
          })}
        </ul>

        <div className={styles.regions} data-reveal>
          <h3 className={styles.subTitle}>{p.regionsTitle}</h3>
          <ul className={styles.chips}>
            {p.regions.map((r) => (
              <li key={r}>
                <FaMapMarkerAlt />
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.twoCols}>
          <div className={styles.panel} data-reveal>
            <h3 className={styles.subTitle}>{p.servicesTitle}</h3>
            <ul className={styles.iconList}>
              {p.services.map((s, i) => {
                const Icon = serviceIcons[i];
                return (
                  <li key={i}>
                    <span className={styles.miniIcon}>
                      <Icon />
                    </span>
                    <span>{s}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={styles.panel} data-reveal>
            <h3 className={styles.subTitle}>{p.sectorsTitle}</h3>
            <ul className={styles.iconList}>
              {p.sectors.map((s, i) => {
                const Icon = sectorIcons[i];
                return (
                  <li key={i}>
                    <span className={styles.miniIcon}>
                      <Icon />
                    </span>
                    <span>{s}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- */

export function ClientsSection({ alt = false }: { alt?: boolean }) {
  const { locale } = useLanguage();
  const c = companyContent[locale].clients;
  const rootRef = useReveal<HTMLElement>(kit.visible, locale);

  return (
    <section ref={rootRef} className={`${kit.page} ${kit.section} ${alt ? kit.sectionAlt : ""}`}>
      <div className={kit.container}>
        <SectionHead eyebrow={c.eyebrow} title={c.title} lead={c.lead} />
        <ul className={styles.clients}>
          {clients.map((cl, i) => (
            <li
              key={cl.logo}
              className={styles.client}
              data-reveal
              style={{ transitionDelay: `${(i % 6) * 50}ms` }}
              title={cl[locale]}
            >
              <div className={styles.clientLogo}>
                <Image src={cl.logo} alt={cl[locale]} fill sizes="180px" className={styles.clientImg} />
              </div>
              <span className={styles.clientName}>{cl[locale]}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- */

export function TeamSection({ alt = false }: { alt?: boolean }) {
  const { locale } = useLanguage();
  const t = companyContent[locale].team;
  const rootRef = useReveal<HTMLElement>(kit.visible, locale);

  return (
    <section ref={rootRef} className={`${kit.page} ${kit.section} ${alt ? kit.sectionAlt : ""}`}>
      <div className={kit.container}>
        <SectionHead eyebrow={t.eyebrow} title={t.title} lead={t.lead} />
        <ol className={styles.team}>
          {t.items.map((it, i) => {
            const Icon = teamIcons[i];
            return (
              <li key={i} className={styles.teamRow} data-reveal style={{ transitionDelay: `${i * 70}ms` }}>
                <span className={styles.teamNum}>{String(i + 1).padStart(2, "0")}</span>
                <span className={`${kit.iconBox} ${styles.teamIcon}`}>
                  <Icon />
                </span>
                <div>
                  <h3 className={styles.teamTitle}>{it.title}</h3>
                  <p className={styles.teamText}>{it.text}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- */

/** شارة CMMI المستوى الخامس + لوجوهات الشركاء التقنيين */
export function PartnersStrip() {
  const { locale } = useLanguage();
  const c = companyContent[locale];

  return (
    <div className={styles.partnersStrip} data-reveal>
      <div className={styles.cmmi}>
        <Image src="/images/partners/cmmi.webp" alt="CMMI Maturity Level 5" width={120} height={56} />
        <span>{c.cmmi}</span>
      </div>
      <div className={styles.partnersDivider} aria-hidden="true" />
      <div className={styles.partners}>
        <span className={styles.partnersLabel}>{c.partnersTitle}</span>
        <ul>
          {techPartners.map((p) => (
            <li key={p.name}>
              <Image src={p.logo} alt={p.name} width={110} height={40} className={styles.partnerImg} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
