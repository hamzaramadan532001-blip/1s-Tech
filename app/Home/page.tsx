"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <section
      className="hero"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(11, 18, 32, 0.55) 0%, rgba(11, 18, 32, 0.85) 100%), url('/images/hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1>{t.hero.title}</h1>

      <h2>{t.hero.subtitle}</h2>

      <p>{t.hero.description}</p>

      <div className="hero-actions">
        <a href="/services" className="btn-primary">
          {t.hero.cta}
        </a>

        <a href="tel:+966000000000" className="btn-icon" aria-label="اتصل بنا">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2Z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}