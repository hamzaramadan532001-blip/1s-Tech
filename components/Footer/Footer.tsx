"use client";

import React from "react";
import styles from "./Footer.module.css";
import { Cairo } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { FaPhoneAlt, FaEnvelope, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { homeContent } from "@/lib/content/home";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "600", "700", "800"],
});

const Footer: React.FC = () => {
  const { locale, t } = useLanguage();
  const f = homeContent[locale].footer;
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.about, href: "/about" },
    { label: t.nav.services, href: "/services" },
    { label: t.nav.useCases, href: "/use-cases" },
  ];

  const infoLinks = [
    { label: t.nav.contact, href: "/contact" },
    { label: t.nav.careers, href: "/careers" },
    { label: f.privacy, href: "/privacy" },
    { label: f.terms, href: "/terms" },
  ];

  const socialLinks = [
    { name: f.social.twitter, href: "#", icon: FaTwitter },
    { name: f.social.linkedin, href: "#", icon: FaLinkedinIn },
    { name: f.social.youtube, href: "#", icon: FaYoutube },
    { name: f.social.instagram, href: "#", icon: FaInstagram },
  ];

  return (
    <footer className={`${styles.footer} ${cairo.className}`}>
      <div className={styles.container}>
        {/* Background Decorations */}
        <div className={styles.decoration1} />
        <div className={styles.decoration2} />

        <div className={styles.grid}>
          {/* Column 1: Brand & Newsletter */}
          <div className={styles.brandColumn}>
            <div className={styles.logo}>
              <Image src="/images/logo.png" alt={f.logoAlt} width={150} height={50} className={styles.logo} />
            </div>
            <p className={styles.brandDesc}>{f.description}</p>

            <div className={styles.newsletter}>
              <h4 className={styles.newsletterTitle}>{f.newsletterTitle}</h4>
              <div className={styles.newsletterForm}>
                <input
                  type="email"
                  placeholder={f.newsletterPlaceholder}
                  aria-label={f.newsletterPlaceholder}
                  className={styles.newsletterInput}
                />
                <button type="button" className={styles.newsletterButton}>
                  {f.newsletterButton}
                  <IoMdSend size={18} />
                </button>
              </div>
            </div>

            <div className={styles.social}>
              <span className={styles.socialLabel}>{f.socialLabel}</span>
              <div className={styles.socialIcons}>
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a key={social.name} href={social.href} className={styles.socialIcon} aria-label={social.name}>
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Column 2: Information */}
          <div className={styles.linksColumn}>
            <h4 className={styles.columnTitle}>{f.infoTitle}</h4>
            <ul className={styles.linksList}>
              {infoLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.link}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className={styles.linksColumn}>
            <h4 className={styles.columnTitle}>{f.quickTitle}</h4>
            <ul className={styles.linksList}>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.link}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className={styles.contactColumn}>
            <h4 className={styles.columnTitle}>{f.contactTitle}</h4>
            <div className={styles.contactInfo}>
              <a href="tel:+966540007344" className={styles.contactItem}>
                <FaPhoneAlt size={16} />
                <span dir="ltr">+966540007344</span>
              </a>
              <a href="mailto:info@1stech.sa" className={styles.contactItem}>
                <FaEnvelope size={16} />
                <span>info@1stech.sa</span>
              </a>
              <div className={styles.contactItem}>
                <MdLocationOn size={18} />
                <span>{f.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <div className={styles.bottomLine} />
          <div className={styles.bottomContent}>
            <p className={styles.copyright}>
              © {currentYear} {f.copyright}
            </p>
            <div className={styles.bottomLinks}>
              <Link href="/privacy" className={styles.bottomLink}>
                {f.privacy}
              </Link>
              <span className={styles.bottomDivider}>|</span>
              <Link href="/terms" className={styles.bottomLink}>
                {f.terms}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
