"use client";

import Image from "next/image";
import { logos } from "@/lib/logos";
import styles from "./LogoMarquee.module.css";

export default function LogoMarquee() {
  return (
    <div className={styles.container}>
      {logos.map((logo, index) => (
        <div
          className={styles.logo}
          key={`${logo.src}-${index}`}
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            width={140}
            height={70}
            priority={index < 6}
          />
        </div>
      ))}
    </div>
  );
}