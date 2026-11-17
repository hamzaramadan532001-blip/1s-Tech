"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { IconType } from "react-icons";
import {
  FaAward,
  FaBrain,
  FaBroadcastTower,
  FaBullseye,
  FaCheck,
  FaCheckCircle,
  FaGlobe,
  FaHeadset,
  FaMapMarkedAlt,
  FaMicrochip,
  FaPuzzlePiece,
  FaTachometerAlt,
  FaTimesCircle,
} from "react-icons/fa";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { useReveal } from "@/lib/useReveal";
import { products, productsPageContent, type ProductCategory } from "@/lib/content/products";
import { CtaBanner, DirArrow, PageHero, SectionHead, kit } from "@/components/PageKit/PageKit";
import styles from "./ProductsPage.module.css";

type Filter = "all" | ProductCategory;
const FILTERS: Filter[] = ["all", "devices", "platforms", "imagery"];

const benefitIcons: IconType[] = [FaAward, FaHeadset, FaBrain, FaMicrochip];
const gpsIcons: IconType[] = [FaBullseye, FaMapMarkedAlt, FaTachometerAlt, FaBroadcastTower, FaPuzzlePiece, FaGlobe];

export default function ProductsPage() {
  const { locale } = useLanguage();
  const c = productsPageContent[locale];
  const [filter, setFilter] = useState<Filter>("all");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const rootRef = useReveal(kit.visible, `${locale}-${filter}`);

  const visible = filter === "all" ? products : products.filter((p) => p.category === filter);
  const countFor = (f: Filter) => (f === "all" ? products.length : products.filter((p) => p.category === f).length);

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
        stats={[
          { value: String(products.length), label: c.listEyebrow },
          { value: "3", label: locale === "ar" ? "فئات رئيسية" : "categories" },
        ]}
        actions={
          <Link href="/contact" className={kit.btnPrimary}>
            <span>{c.heroCta}</span>
            <DirArrow />
          </Link>
        }
      />

      {/* ================= Benefits strip ================= */}
      <section className={styles.benefitsWrap}>
        <div className={kit.container}>
          <ul className={styles.benefits} data-reveal>
            {c.benefits.map((b, i) => {
              const Icon = benefitIcons[i];
              return (
                <li key={i}>
                  <span className={styles.benefitIcon}>
                    <Icon />
                  </span>
                  <span>{b}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ================= Products ================= */}
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
            {visible.map((p, i) => {
              const isOpen = !!expanded[p.id];
              return (
                <li
                  key={`${filter}-${p.id}`}
                  className={styles.card}
                  data-reveal
                  style={{ transitionDelay: `${(i % 2) * 80}ms` }}
                >
                  <div className={styles.media}>
                    <Image
                      src={p.image}
                      alt={p.name[locale]}
                      fill
                      sizes="(max-width: 900px) 92vw, 560px"
                      className={styles.mediaImg}
                    />
                    <span className={styles.number}>{p.number}</span>
                    <span className={styles.tag}>{c.categories[p.category]}</span>
                  </div>

                  <div className={styles.body}>
                    <h3 className={styles.name} dir="auto">
                      {p.name[locale]}
                    </h3>
                    <p className={styles.tagline}>{p.tagline[locale]}</p>

                    {p.description && (
                      <p className={`${styles.desc} ${isOpen ? styles.descOpen : ""}`}>{p.description[locale]}</p>
                    )}

                    <ul className={styles.features}>
                      {p.features[locale].map((f, j) => (
                        <li key={j}>
                          <FaCheck className={styles.featureIcon} />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>

                    {p.description && p.description[locale].length > 160 && (
                      <button
                        type="button"
                        className={styles.moreBtn}
                        aria-expanded={isOpen}
                        onClick={() => setExpanded((prev) => ({ ...prev, [p.id]: !isOpen }))}
                      >
                        {isOpen ? c.showLess : c.showMore}
                      </button>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ================= UGPS before / after ================= */}
      <section className={`${kit.section} ${kit.sectionAlt}`}>
        <div className={kit.container}>
          <SectionHead eyebrow={c.gps.eyebrow} title={c.gps.title} lead={c.gps.lead} />

          <div className={styles.compare}>
            <div className={`${styles.compareCol} ${styles.before}`} data-reveal>
              <span className={styles.compareBadge}>{c.gps.before}</span>
              <ul>
                {c.gps.beforeItems.map((t, i) => (
                  <li key={i}>
                    <FaTimesCircle className={styles.xIcon} />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={`${styles.compareCol} ${styles.after}`} data-reveal>
              <span className={styles.compareBadge}>{c.gps.after}</span>
              <ul>
                {c.gps.afterItems.map((t, i) => (
                  <li key={i}>
                    <FaCheckCircle className={styles.okIcon} />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <ul className={styles.gpsFeatures}>
            {c.gps.features.map((f, i) => {
              const Icon = gpsIcons[i];
              return (
                <li key={i} className={kit.card} data-reveal style={{ transitionDelay: `${(i % 3) * 70}ms` }}>
                  <span className={kit.iconBox}>
                    <Icon />
                  </span>
                  <h3 className={styles.gpsTitle}>{f.title}</h3>
                  <p className={styles.gpsText}>{f.text}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ================= Platforms showcase ================= */}
      <section className={kit.section}>
        <div className={kit.container}>
          <SectionHead eyebrow={c.platforms.eyebrow} title={c.platforms.title} lead={c.platforms.lead} />
          <ul className={styles.showcase}>
            {c.platforms.items.map((it, i) => (
              <li key={i} className={styles.shot} data-reveal style={{ transitionDelay: `${i * 90}ms` }}>
                <a href={it.image} target="_blank" rel="noopener noreferrer" className={styles.shotMedia}>
                  <Image
                    src={it.image}
                    alt={it.title}
                    fill
                    sizes="(max-width: 900px) 92vw, 600px"
                    className={styles.mediaImg}
                  />
                </a>
                <div className={styles.shotText}>
                  <h3>{it.title}</h3>
                  <p>{it.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner title={c.ctaTitle} text={c.ctaText} cta={c.ctaButton} />
    </div>
  );
}
