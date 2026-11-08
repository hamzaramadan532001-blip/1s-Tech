"use client";

import type { IconType } from "react-icons";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { useReveal } from "@/lib/useReveal";
import { contactContent } from "@/lib/content/contact";
import { COMPANY, PageHero, kit } from "@/components/PageKit/PageKit";
import MailtoForm from "@/components/PageKit/MailtoForm";
import styles from "./ContactPage.module.css";

export default function ContactPage() {
  const { locale } = useLanguage();
  const c = contactContent[locale];
  const rootRef = useReveal(kit.visible, locale);

  const channels: { icon: IconType; label: string; value: string; href?: string; ltr?: boolean }[] = [
    { icon: FaPhoneAlt, label: c.phoneLabel, value: COMPANY.phoneDisplay, href: `tel:${COMPANY.phone}`, ltr: true },
    { icon: FaEnvelope, label: c.emailLabel, value: COMPANY.email, href: `mailto:${COMPANY.email}`, ltr: true },
    { icon: FaMapMarkerAlt, label: c.locationLabel, value: c.locationValue, href: COMPANY.mapLink },
  ];

  return (
    <div ref={rootRef} className={kit.page}>
      <PageHero
        centered
        crumb={c.crumb}
        title={
          <>
            {c.heroTitle} <span className={kit.gradientText}>{c.heroHighlight}</span>
          </>
        }
        lead={c.heroLead}
      />

      <section className={`${kit.section} ${styles.main}`}>
        <div className={kit.container}>
          <div className={styles.layout}>
            {/* ---------- Info column ---------- */}
            <aside className={styles.info} data-reveal>
              <h2 className={styles.infoTitle}>{c.infoTitle}</h2>
              <p className={styles.infoLead}>{c.infoLead}</p>

              <ul className={styles.channels}>
                {channels.map(({ icon: Icon, label, value, href, ltr }) => {
                  const content = (
                    <>
                      <span className={`${kit.iconBox} ${kit.iconSolid}`}>
                        <Icon />
                      </span>
                      <span>
                        <span className={styles.channelLabel}>{label}</span>
                        <span className={styles.channelValue} dir={ltr ? "ltr" : undefined}>
                          {value}
                        </span>
                      </span>
                    </>
                  );
                  return (
                    <li key={label}>
                      {href ? (
                        <a
                          href={href}
                          className={styles.channel}
                          {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        >
                          {content}
                        </a>
                      ) : (
                        <div className={styles.channel}>{content}</div>
                      )}
                    </li>
                  );
                })}
              </ul>

              <div className={styles.map}>
                <iframe
                  title={c.mapTitle}
                  src={COMPANY.mapEmbed}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </aside>

            {/* ---------- Form column ---------- */}
            <div className={styles.formCard} data-reveal>
              <span className={kit.eyebrow}>{c.formEyebrow}</span>
              <h2 className={kit.h2}>{c.formTitle}</h2>
              <p className={`${kit.lead} ${styles.formLead}`}>{c.formLead}</p>

              <MailtoForm
                key={locale}
                fields={c.fields}
                messages={c.messages}
                buildSubject={c.subject}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
