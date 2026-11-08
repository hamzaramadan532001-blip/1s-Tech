"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import type { IconType } from "react-icons";
import {
  FaBolt,
  FaBroadcastTower,
  FaBuilding,
  FaChartLine,
  FaCheckCircle,
  FaCube,
  FaDraftingCompass,
  FaExpandArrowsAlt,
  FaHandsHelping,
  FaMountain,
  FaPlane,
  FaRoute,
  FaSeedling,
  FaServer,
  FaShip,
  FaSyncAlt,
  FaTree,
  FaTrophy,
  FaTruck,
  FaUniversity,
  FaUserTie,
  FaWarehouse,
} from "react-icons/fa";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { useReveal } from "@/lib/useReveal";
import { useCasesContent } from "@/lib/content/useCases";
import { CtaBanner, DirArrow, PageHero, SectionHead, kit } from "@/components/PageKit/PageKit";
import styles from "./UseCasesPage.module.css";

const sectorIcons: Record<string, IconType> = {
  logistics: FaTruck,
  routing: FaRoute,
  assets: FaWarehouse,
  "real-estate": FaBuilding,
  "3d": FaCube,
  agriculture: FaSeedling,
  marine: FaShip,
  mining: FaMountain,
  reserves: FaTree,
  telecom: FaBroadcastTower,
  sales: FaChartLine,
  engineering: FaDraftingCompass,
  it: FaServer,
  energy: FaBolt,
  aviation: FaPlane,
  finance: FaUniversity,
  csr: FaHandsHelping,
};

const whyIcons: IconType[] = [FaTrophy, FaSyncAlt, FaUserTie, FaExpandArrowsAlt];

export default function UseCasesPage() {
  const { locale } = useLanguage();
  const c = useCasesContent[locale];
  const [activeId, setActiveId] = useState(c.sectors[0].id);
  const panelRef = useRef<HTMLDivElement>(null);
  const rootRef = useReveal(kit.visible, locale);

  const active = c.sectors.find((s) => s.id === activeId) ?? c.sectors[0];
  const ActiveIcon = sectorIcons[active.id];
  const activeIndex = c.sectors.findIndex((s) => s.id === active.id);

  const selectSector = (id: string) => {
    setActiveId(id);
    // على الموبايل: ننزل للوحة التفاصيل بعد الاختيار
    if (window.matchMedia("(max-width: 900px)").matches && panelRef.current) {
      const top = panelRef.current.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

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
        stats={c.stats}
        actions={
          <Link href="/contact" className={kit.btnPrimary}>
            <span>{c.heroCta}</span>
            <DirArrow />
          </Link>
        }
      />

      {/* ================= Sector explorer ================= */}
      <section className={kit.section}>
        <div className={kit.container}>
          <SectionHead eyebrow={c.explorerEyebrow} title={c.explorerTitle} lead={c.explorerLead} />

          <div className={styles.explorer} data-reveal>
            <nav className={styles.sidebar} aria-label={c.sectorsLabel}>
              <ul className={styles.sectorList} role="tablist" aria-orientation="vertical">
                {c.sectors.map((s) => {
                  const Icon = sectorIcons[s.id];
                  const selected = s.id === active.id;
                  return (
                    <li key={s.id}>
                      <button
                        type="button"
                        role="tab"
                        id={`tab-${s.id}`}
                        aria-selected={selected}
                        aria-controls="sector-panel"
                        className={`${styles.sectorBtn} ${selected ? styles.sectorActive : ""}`}
                        onClick={() => selectSector(s.id)}
                      >
                        <span className={styles.sectorIcon}>
                          <Icon />
                        </span>
                        <span className={styles.sectorName}>{s.title}</span>
                        <span className={styles.sectorCount}>{s.items.length}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div
              ref={panelRef}
              id="sector-panel"
              role="tabpanel"
              aria-labelledby={`tab-${active.id}`}
              className={styles.panel}
              key={`${locale}-${active.id}`}
            >
              <div className={styles.panelHead}>
                <span className={`${kit.iconBox} ${kit.iconSolid} ${styles.panelIcon}`}>
                  <ActiveIcon />
                </span>
                <div>
                  <span className={styles.panelIndex}>
                    {String(activeIndex + 1).padStart(2, "0")} / {c.sectors.length}
                  </span>
                  <h3 className={styles.panelTitle}>{active.title}</h3>
                  <p className={styles.panelTagline}>{active.tagline}</p>
                </div>
              </div>

              <span className={styles.listLabel}>
                {c.useCasesLabel} ({active.items.length})
              </span>

              <ul className={styles.items}>
                {active.items.map((item, i) => (
                  <li
                    key={i}
                    className={`${styles.item} ${item.points ? styles.itemWide : ""}`}
                    style={{ animationDelay: `${i * 50}ms` }}
                  >
                    <div className={styles.itemHead}>
                      <FaCheckCircle className={styles.check} />
                      <span>{item.title}</span>
                    </div>
                    {item.points && (
                      <ul className={styles.points}>
                        {item.points.map((p, j) => (
                          <li key={j}>{p}</li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>

              <Link href="/contact" className={`${kit.btnPrimary} ${styles.panelCta}`}>
                <span>{c.sectorCta}</span>
                <DirArrow />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= Why it matters ================= */}
      <section className={`${kit.section} ${kit.sectionAlt}`}>
        <div className={kit.container}>
          <SectionHead eyebrow={c.whyEyebrow} title={c.whyTitle} lead={c.whyLead} />
          <ul className={styles.why}>
            {c.why.map((w, i) => {
              const Icon = whyIcons[i];
              return (
                <li
                  key={i}
                  className={kit.card}
                  data-reveal
                  style={{ transitionDelay: `${i * 90}ms` }}
                >
                  <span className={kit.iconBox}>
                    <Icon />
                  </span>
                  <h3 className={styles.whyTitle}>{w.title}</h3>
                  <p className={styles.whyText}>{w.text}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <CtaBanner title={c.ctaTitle} text={c.ctaText} cta={c.ctaButton} />
    </div>
  );
}
