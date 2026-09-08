export type Locale = "ar" | "en";

export interface Translations {
  nav: {
    home: string;
    about: string;
    services: string;
    useCases: string;
    contact: string;
    careers: string;
    profile: string;
  };
  hero: {
    title: string;
    subtitle: string;
    description: string;
    cta: string;
  };
  page: {
    about: string;
    services: string;
    useCases: string;
    contact: string;
    careers: string;
    underConstruction: string;
  };
}

export const translations: Record<Locale, Translations> = {
  ar: {
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      services: "الخدمات",
      useCases: "حالات الاستخدام",
      contact: "تواصل معنا",
      careers: "التوظيف",
      profile: "الملف التعريفي",
    },
    hero: {
      title: "شركة تقني الأولى",
      subtitle: "الهندسة وحلول إدارة البيانات الجيومكانية",
      description: "نظم المعلومات الجغرافية المبتكرة, والاستشعار عن بعد والحلول الذكية",
      cta: "استكشف خدماتنا",
    },
    page: {
      about: "من نحن",
      services: "الخدمات",
      useCases: "حالات الاستخدام",
      contact: "تواصل معنا",
      careers: "التوظيف",
      underConstruction: "هذه الصفحة تحت الإنشاء",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      services: "Services",
      useCases: "Use Cases",
      contact: "Contact Us",
      careers: "Careers",
      profile: "Company Profile",
    },
    hero: {
      title: "1sTech",
      subtitle: "Engineering and Geospatial Data Management Solutions",
      description: "Innovative geographic information systems, remote sensing, and smart solutions",
      cta: "Explore Our Services",
    },
    page: {
      about: "About Us",
      services: "Services",
      useCases: "Use Cases",
      contact: "Contact Us",
      careers: "Careers",
      underConstruction: "This page is under construction",
    },
  },
};