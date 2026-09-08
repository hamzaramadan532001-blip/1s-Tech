import React from "react";
import styles from "./Footer.module.css";
import { Cairo } from "next/font/google";
import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
import Image from "next/image";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "600", "700", "800"],
});

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "الرئيسية", href: "/" },
    { label: "من نحن", href: "/about" },
    { label: "خدماتنا", href: "/services" },
    { label: "حالات الاستخدام", href: "/case-studies" },
  ];

  const infoLinks = [
    { label: "تواصل معنا", href: "/contact" },
    { label: "التوظيف", href: "/careers" },
    { label: "سياسة الخصوصية", href: "/privacy" },
    { label: "الشروط والأحكام", href: "/terms" },
  ];

  const socialLinks = [
    { name: "تويتر", href: "#", icon: FaTwitter },
    { name: "لينكدإن", href: "#", icon: FaLinkedinIn },
    { name: "يوتيوب", href: "#", icon: FaYoutube },
    { name: "إنستغرام", href: "#", icon: FaInstagram },
  ];

  return (
    <footer className={`${styles.footer} ${cairo.className}`}>
      <div className={styles.container}>
        {/* Background Decorations */}
        <div className={styles.decoration1} />
        <div className={styles.decoration2} />

        {/* Main Footer Grid */}
        <div className={styles.grid}>
          {/* Column 1: Brand & Newsletter */}
          <div className={styles.brandColumn}>
            <div className={styles.logo}>
              
              <Image
  src="/images/logo.png"
  alt="تقني الأولى"
  width={150}
  height={50}
  className={styles.logo}
/>
            </div>
            <p className={styles.brandDesc}>
              شركة سعودية رائدة في حلول GIS والاستشارات الهندسية
            </p>

            <div className={styles.newsletter}>
              <h4 className={styles.newsletterTitle}>الرابط الإلكتروني</h4>
              <div className={styles.newsletterForm}>
                <input
                  type="email"
                  placeholder="بريدك الإلكتروني"
                  className={styles.newsletterInput}
                />
                <button className={styles.newsletterButton}>
                  إرسال
                  <IoMdSend size={18} />
                </button>
              </div>
            </div>

            <div className={styles.social}>
              <span className={styles.socialLabel}>وسائل التواصل الاجتماعي</span>
              <div className={styles.socialIcons}>
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className={styles.socialIcon}
                      aria-label={social.name}
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Column 2: Information */}
          <div className={styles.linksColumn}>
            <h4 className={styles.columnTitle}>معلومات</h4>
            <ul className={styles.linksList}>
              {infoLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={styles.link}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className={styles.linksColumn}>
            <h4 className={styles.columnTitle}>روابط سريعة</h4>
            <ul className={styles.linksList}>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={styles.link}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className={styles.contactColumn}>
            <h4 className={styles.columnTitle}>تواصل معنا</h4>
            <div className={styles.contactInfo}>
              <a href="tel:+966540007344" className={styles.contactItem}>
                <FaPhoneAlt size={16} />
                <span>+966540007344</span>
              </a>
              <a href="mailto:info@1stech.sa" className={styles.contactItem}>
                <FaEnvelope size={16} />
                <span>info@1stech.sa</span>
              </a>
              <div className={styles.contactItem}>
                <MdLocationOn size={18} />
                <span>الرياض، المملكة العربية السعودية</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <div className={styles.bottomLine} />
          <div className={styles.bottomContent}>
            <p className={styles.copyright}>
              © {currentYear} شركة تقني الأولى. جميع الحقوق محفوظة.
            </p>
            <div className={styles.bottomLinks}>
              <Link href="/privacy" className={styles.bottomLink}>
                سياسة الخصوصية
              </Link>
              <span className={styles.bottomDivider}>|</span>
              <Link href="/terms" className={styles.bottomLink}>
                الشروط والأحكام
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;