"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { IconType } from "react-icons";
import {
  FaBrain,
  FaCameraRetro,
  FaChartArea,
  FaChess,
  FaCity,
  FaCode,
  FaCogs,
  FaCrosshairs,
  FaCubes,
  FaDatabase,
  FaHardHat,
  FaHeadset,
  FaPencilRuler,
  FaSatellite,
  FaSearch,
  FaShuttleVan,
  FaLayerGroup,
  FaMicrochip,
  FaCheckCircle,
  FaTimes,
  FaListUl,
} from "react-icons/fa";
import { GiDeliveryDrone } from "react-icons/gi";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { useReveal } from "@/lib/useReveal";
import { servicesContent, type ServiceCategory } from "@/lib/content/services";
import { serviceDetails, detailLabels } from "@/lib/content/serviceDetails";
import { CtaBanner, DirArrow, PageHero, SectionHead, kit } from "@/components/PageKit/PageKit";
import styles from "./ServicesPage.module.css";

const serviceIcons: Record<string, IconType> = {
  "data-management": FaDatabase,
  consulting: FaChess,
  "app-dev": FaCode,
  "spatial-analysis": FaChartArea,
  "remote-sensing": FaSatellite,
  "digital-twin": FaCubes,
  "urban-planning": FaCity,
  aec: FaHardHat,
  drone: GiDeliveryDrone,
  "laser-scanning": FaCrosshairs,
  mms: FaShuttleVan,
  photogrammetry: FaCameraRetro,
  geoai: FaBrain,
  "ai-solutions": FaMicrochip,
};

const processIcons: IconType[] = [FaSearch, FaPencilRuler, FaCogs, FaHeadset];

type Filter = "all" | ServiceCategory;
const FILTERS: Filter[] = ["all", "data", "platforms", "capture", "planning"];

export default function ServicesPage() {
  const { locale } = useLanguage();
  const c = servicesContent[locale];
  const [filter, setFilter] = useState<Filter>("all");
  const rootRef = useReveal(kit.visible, `${locale}-${filter}`);

  const details = serviceDetails[locale];
  const labels = detailLabels[locale];
  const [openId, setOpenId] = useState<string | null>(null);
  const openService = openId ? c.items.find((s) => s.id === openId) : undefined;
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  // إغلاق النافذة بزر Esc + منع سكرول الصفحة وهي مفتوحة
  useEffect(() => {
    if (!openId) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenId(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openId]);

  const visible = filter === "all" ? c.items : c.items.filter((s) => s.category === filter);
  const countFor = (f: Filter) =>
    f === "all" ? c.items.length : c.items.filter((s) => s.category === f).length;

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
          <>
            <Link href="/contact" className={kit.btnPrimary}>
              <span>{c.heroCta}</span>
              <DirArrow />
            </Link>
            <Link href="/use-cases" className={kit.btnGhost}>
              <FaLayerGroup className={kit.btnIcon} />
              <span>{c.heroSecondary}</span>
            </Link>
          </>
        }
      />

      {/* ================= Services grid ================= */}
      <section className={kit.section}>
        <div className={kit.container}>
          <SectionHead eyebrow={c.listEyebrow} title={c.listTitle} lead={c.listLead} />

          <div className={styles.filters} role="tablist" aria-label={c.listEyebrow} data-reveal>
            {FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                role="tab"
                aria-selected={filter === f}
                className={`${styles.filter} ${filter === f ? styles.filterActive : ""}`}
                onClick={() => setFilter(f)}
              >
                {f === "all" ? c.all : c.categories[f]}
                <span className={styles.filterCount}>{countFor(f)}</span>
              </button>
            ))}
          </div>

          <ul className={styles.grid}>
            {visible.map((s, i) => {
              const Icon = serviceIcons[s.id];
              const number = c.items.findIndex((x) => x.id === s.id) + 1;
              return (
                <li
                  key={`${filter}-${s.id}`}
                  className={`${kit.card} ${styles.serviceCard}`}
                  data-reveal
                  style={{ transitionDelay: `${(i % 3) * 70}ms` }}
                >
                  <div className={styles.cardTop}>
                    <span className={kit.iconBox}>
                      <Icon />
                    </span>
                    <span className={styles.number}>{String(number).padStart(2, "0")}</span>
                  </div>
                  <span className={styles.tag}>{c.categories[s.category]}</span>
                  <h3 className={styles.title}>{s.title}</h3>
                  <p className={styles.desc}>{s.description}</p>
                  {details[s.id] && (
                    <button
                      type="button"
                      className={styles.detailsBtn}
                      onClick={() => setOpenId(s.id)}
                      aria-haspopup="dialog"
                    >
                      <FaListUl />
                      <span>
                        {labels.open} ({details[s.id].length})
                      </span>
                    </button>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ================= Process ================= */}
      <section className={`${kit.section} ${kit.sectionAlt}`}>
        <div className={kit.container}>
          <SectionHead eyebrow={c.processEyebrow} title={c.processTitle} lead={c.processLead} />

          <ol className={styles.process}>
            {c.process.map((step, i) => {
              const Icon = processIcons[i];
              return (
                <li
                  key={i}
                  className={styles.step}
                  data-reveal
                  style={{ transitionDelay: `${i * 90}ms` }}
                >
                  <div className={styles.stepHead}>
                    <span className={`${kit.iconBox} ${kit.iconSolid}`}>
                      <Icon />
                    </span>
                    <span className={styles.stepLine} aria-hidden="true" />
                  </div>
                  <span className={styles.stepNum}>{String(i + 1).padStart(2, "0")}</span>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepText}>{step.text}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <CtaBanner title={c.ctaTitle} text={c.ctaText} cta={c.ctaButton} />

      {/* ================= Service details dialog ================= */}
      {openService && details[openService.id] && (
        <div className={styles.overlay} onClick={() => setOpenId(null)}>
          <div
            className={styles.dialog}
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-dialog-title"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.dialogHead}>
              <span className={`${kit.iconBox} ${kit.iconSolid}`}>
                {(() => {
                  const Icon = serviceIcons[openService.id];
                  return <Icon />;
                })()}
              </span>
              <div>
                <span className={styles.dialogEyebrow}>{labels.title}</span>
                <h3 id="service-dialog-title" className={styles.dialogTitle}>
                  {openService.title}
                </h3>
              </div>
              <button
                ref={closeBtnRef}
                type="button"
                className={styles.closeBtn}
                onClick={() => setOpenId(null)}
                aria-label={labels.close}
              >
                <FaTimes />
              </button>
            </div>
            <ul className={styles.detailList}>
              {details[openService.id].map((d, i) => (
                <li key={i}>
                  <FaCheckCircle className={styles.detailCheck} />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
            <Link href="/contact" className={kit.btnPrimary} onClick={() => setOpenId(null)}>
              <span>{c.ctaButton}</span>
              <DirArrow />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
