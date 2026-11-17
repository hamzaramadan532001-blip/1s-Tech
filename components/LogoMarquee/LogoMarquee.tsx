"use client";

import Image from "next/image";
import { logos } from "@/lib/logos";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import styles from "./LogoMarquee.module.css";

export default function LogoMarquee() {
  const { locale } = useLanguage();

  return (
    <div className={styles.container}>
      {logos.map((logo, index) => (
        <div className={styles.logo} key={logo.logo} title={logo[locale]}>
          <Image
            src={logo.logo}
            alt={logo[locale]}
            width={140}
            height={70}
            priority={index < 6}
          />
        </div>
      ))}
    </div>
  );
}
