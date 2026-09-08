import Image from "next/image";
import styles from "./TrustedPartner.module.css";
import { Cairo } from "next/font/google";
import {
  FaHandshake,
  FaUsers,
  FaGlobe,
  FaArrowLeft,
} from "react-icons/fa";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "600", "700", "800"],
});

const features = [
  {
    id: "experience",
    text: "خبرة مثبتة في مشاريع حكومية واسعة النطاق",
    icon: FaHandshake,
  },
  {
    id: "team",
    text: "فريق عالي المهارة بخبرة مجمعة تتجاوز 20 عامًا",
    icon: FaUsers,
  },
  {
    id: "standards",
    text: "الالتزام بالمعايير الدولية",
    icon: FaGlobe,
  },
];

export default function TrustedPartner() {
  return (
    <section className={`${styles.section} ${cairo.className}`} dir="rtl">
      <div className={styles.container}>
        {/* Background Decorations */}
        <div className={styles.decoration1} />
        <div className={styles.decoration2} />

        <div className={styles.header}>
          <span className={styles.badge}>من نحن</span>
          <h2 className={styles.title}>شريك موثوق</h2>
          <h3 className={styles.subtitle}>في الحلول الجغرافية المكانية والهندسية</h3>
        </div>

        {/* ✅ تم إزالة الخط الفاصل */}

        <div className={styles.content}>
          <div className={styles.about}>
            <p className={styles.paragraph}>
              شركة تقني الأولى هي شركة سعودية رائدة متخصصة في خدمات الاستشارات
              الهندسية والجغرافية المكانية المتقدمة. ندعم الجهات الحكومية
              والمنظمات من خلال تحويل البيانات المكانية إلى معلومات قابلة
              للتنفيذ تعزز التخطيط، وتحسن الكفاءة، وتمكّن من اتخاذ قرارات
              مستنيرة.
            </p>

            <button type="button" className={styles.ctaButton}>
              <span>تعرف علينا أكثر</span>
              <FaArrowLeft className={styles.ctaIcon} />
            </button>
          </div>

          <div className={styles.imageWrap}>
            <Image
              src="/images/TrustedPartner.jpg"
              alt="شريك موثوق - تقني الأولى"
              fill
              sizes="(max-width: 900px) 90vw, 360px"
              className={styles.image}
            />
          </div>

          <ul className={styles.featureList}>
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <li className={styles.featureItem} key={feature.id}>
                  <span className={styles.iconCircle}>
                    <Icon size={24} />
                  </span>
                  <span className={styles.text}>{feature.text}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}