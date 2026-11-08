import type { Locale } from "@/lib/i18n/translations";

interface HomeContent {
  heroCallLabel: string;
  trusted: {
    badge: string;
    title: string;
    subtitle: string;
    paragraph: string;
    cta: string;
    imageAlt: string;
    features: string[];
  };
  services: {
    badge: string;
    titleStart: string;
    titleHighlight: string;
    titleEnd: string;
    subtitle: string;
    viewAll: string;
  };
  contact: {
    badge: string;
    titleStart: string;
    titleHighlight: string;
    titleEnd: string;
    subtitle: string;
    phone: string;
    email: string;
    address: string;
    addressValue: string;
    imageAlt: string;
  };
  faq: {
    badge: string;
    titleStart: string;
    titleHighlight: string;
    titleEnd: string;
    subtitle: string;
    items: { question: string; answer: string }[];
  };
  footer: {
    logoAlt: string;
    description: string;
    newsletterTitle: string;
    newsletterPlaceholder: string;
    newsletterButton: string;
    socialLabel: string;
    infoTitle: string;
    quickTitle: string;
    contactTitle: string;
    location: string;
    copyright: string;
    privacy: string;
    terms: string;
    social: { twitter: string; linkedin: string; youtube: string; instagram: string };
  };
}

export const homeContent: Record<Locale, HomeContent> = {
  ar: {
    heroCallLabel: "اتصل بنا",
    trusted: {
      badge: "من نحن",
      title: "شريك موثوق",
      subtitle: "في الحلول الجغرافية المكانية والهندسية",
      paragraph:
        "شركة تقني الأولى شركة سعودية رائدة متخصصة في خدمات الاستشارات الهندسية والجغرافية المكانية المتقدمة. ندعم الجهات الحكومية والمنظمات من خلال تحويل البيانات المكانية إلى معلومات قابلة للتنفيذ تعزز التخطيط، وتحسن الكفاءة، وتمكّن من اتخاذ قرارات مستنيرة.",
      cta: "تعرف علينا أكثر",
      imageAlt: "شريك موثوق - تقني الأولى",
      features: [
        "خبرة مثبتة في مشاريع حكومية واسعة النطاق",
        "فريق عالي المهارة بخبرة مجمعة تتجاوز 20 عامًا",
        "الالتزام بالمعايير الدولية",
      ],
    },
    services: {
      badge: "خدماتنا",
      titleStart: "حلول",
      titleHighlight: "جغرافية مكانية",
      titleEnd: "متكاملة",
      subtitle: "نقدم مجموعة متكاملة من الخدمات المتخصصة لتلبية احتياجاتك في مجال نظم المعلومات الجغرافية",
      viewAll: "عرض جميع الخدمات",
    },
    contact: {
      badge: "تواصل معنا",
      titleStart: "كن على",
      titleHighlight: "تواصل",
      titleEnd: "معنا",
      subtitle: "نحن هنا للإجابة على جميع استفساراتكم، تواصلوا معنا عبر إحدى القنوات التالية",
      phone: "الهاتف",
      email: "البريد الإلكتروني",
      address: "العنوان",
      addressValue: "حي الياسمين، الرياض، المملكة العربية السعودية",
      imageAlt: "تواصل معنا",
    },
    faq: {
      badge: "الأسئلة الشائعة",
      titleStart: "كل ما",
      titleHighlight: "تحتاج",
      titleEnd: "إلى معرفته",
      subtitle: "أجوبة على أكثر الأسئلة شيوعًا حول خدماتنا وحلولنا",
      items: [
        {
          question: "في ماذا تتخصص تقني الأولى؟",
          answer:
            "تتخصص تقني الأولى في تقديم حلول جغرافية مكانية وهندسية متقدمة، بما في ذلك استشارات GIS، وإدارة البيانات المكانية، وأعمال المسح، والاستشعار عن بُعد، وحلول التوأم الرقمي، وتقنيات تحديد المواقع التي تدعم المشاريع واسعة النطاق والحسّاسة.",
        },
        {
          question: "هل يمكن دمج حلولكم مع الأنظمة الحالية؟",
          answer:
            "نعم، صُممت حلولنا لتتكامل بسلاسة مع أنظمة المؤسسات الحالية، بما في ذلك منصات GIS وBIM وإنترنت الأشياء (IoT) والأنظمة التشغيلية الأخرى، مع الالتزام بالمعايير الدولية.",
        },
        {
          question: "من هم عملاؤكم عادةً؟",
          answer:
            "يشمل عملاؤنا الجهات الحكومية، والهيئات العامة، ومشغلي البنية التحتية، وشركات الهندسة، والمؤسسات الكبرى التي تحتاج إلى حلول جغرافية مكانية دقيقة وموثوقة وقابلة للتوسع.",
        },
        {
          question: "هل تقدمون حلولًا مخصصة؟",
          answer:
            "بالتأكيد، نقوم بتخصيص خدماتنا وحلولنا لتلبية متطلبات كل عميل وبيئة العمل والأهداف الاستراتيجية الخاصة به.",
        },
        {
          question: "هل تعملون على مشاريع وطنية واسعة النطاق؟",
          answer:
            "نعم، لدينا خبرة واسعة في تنفيذ وإدارة مشاريع كبيرة ومعقّدة للجهات الحكومية والمؤسسات، مع الالتزام الصارم بمعايير الجودة والأمان والجداول الزمنية المعتمدة.",
        },
        {
          question: "هل يمكن أن تعمل حلول تحديد المواقع لديكم داخل الأنفاق والمناطق تحت الأرض؟",
          answer:
            "نعم، تم تصميم حل UGPS لدينا خصيصًا للتغلب على فقدان إشارات GPS في الأنفاق والمناطق تحت الأرض وداخل المباني والبيئات الحضرية الكثيفة، مع الحفاظ على التوافق مع أجهزة GNSS الحالية.",
        },
      ],
    },
    footer: {
      logoAlt: "تقني الأولى",
      description: "شركة سعودية رائدة في حلول GIS والاستشارات الهندسية",
      newsletterTitle: "النشرة البريدية",
      newsletterPlaceholder: "بريدك الإلكتروني",
      newsletterButton: "اشتراك",
      socialLabel: "وسائل التواصل الاجتماعي",
      infoTitle: "معلومات",
      quickTitle: "روابط سريعة",
      contactTitle: "تواصل معنا",
      location: "حي الياسمين، الرياض، المملكة العربية السعودية",
      copyright: "شركة تقني الأولى. جميع الحقوق محفوظة.",
      privacy: "سياسة الخصوصية",
      terms: "الشروط والأحكام",
      social: { twitter: "تويتر", linkedin: "لينكدإن", youtube: "يوتيوب", instagram: "إنستغرام" },
    },
  },
  en: {
    heroCallLabel: "Call us",
    trusted: {
      badge: "About Us",
      title: "A Trusted Partner",
      subtitle: "in geospatial and engineering solutions",
      paragraph:
        "1sTech is a leading Saudi company specializing in advanced engineering and geospatial consulting services. We support government entities and organizations by turning spatial data into actionable information that strengthens planning, improves efficiency and enables informed decisions.",
      cta: "Learn More About Us",
      imageAlt: "Trusted partner - 1sTech",
      features: [
        "Proven experience in large-scale government projects",
        "Highly skilled team with over 20 years of combined experience",
        "Commitment to international standards",
      ],
    },
    services: {
      badge: "Our Services",
      titleStart: "Integrated",
      titleHighlight: "geospatial",
      titleEnd: "solutions",
      subtitle: "A complete range of specialized services to meet your needs in geographic information systems",
      viewAll: "View All Services",
    },
    contact: {
      badge: "Contact Us",
      titleStart: "Get in",
      titleHighlight: "touch",
      titleEnd: "with us",
      subtitle: "We're here to answer all your questions. Reach us through any of the following channels",
      phone: "Phone",
      email: "Email",
      address: "Address",
      addressValue: "Al Yasmin District, Riyadh, Saudi Arabia",
      imageAlt: "Contact us",
    },
    faq: {
      badge: "FAQ",
      titleStart: "Everything you",
      titleHighlight: "need",
      titleEnd: "to know",
      subtitle: "Answers to the most common questions about our services and solutions",
      items: [
        {
          question: "What does 1sTech specialize in?",
          answer:
            "1sTech specializes in advanced geospatial and engineering solutions, including GIS consulting, spatial data management, surveying, remote sensing, digital twin solutions and positioning technologies that support large-scale and sensitive projects.",
        },
        {
          question: "Can your solutions integrate with existing systems?",
          answer:
            "Yes. Our solutions are designed to integrate seamlessly with existing enterprise systems, including GIS, BIM and IoT platforms and other operational systems, in line with international standards.",
        },
        {
          question: "Who are your typical clients?",
          answer:
            "Our clients include government entities, public authorities, infrastructure operators, engineering firms and large organizations that need accurate, reliable and scalable geospatial solutions.",
        },
        {
          question: "Do you offer customized solutions?",
          answer:
            "Absolutely. We tailor our services and solutions to each client's requirements, operating environment and strategic goals.",
        },
        {
          question: "Do you work on large-scale national projects?",
          answer:
            "Yes. We have extensive experience delivering and managing large, complex projects for government entities and organizations, with strict adherence to quality, security and approved timelines.",
        },
        {
          question: "Can your positioning solutions work in tunnels and underground areas?",
          answer:
            "Yes. Our UGPS solution is designed specifically to overcome GPS signal loss in tunnels, underground areas, indoors and dense urban environments, while remaining compatible with existing GNSS devices.",
        },
      ],
    },
    footer: {
      logoAlt: "1sTech",
      description: "A leading Saudi company in GIS solutions and engineering consultancy",
      newsletterTitle: "Newsletter",
      newsletterPlaceholder: "Your email",
      newsletterButton: "Subscribe",
      socialLabel: "Social Media",
      infoTitle: "Information",
      quickTitle: "Quick Links",
      contactTitle: "Contact Us",
      location: "Al Yasmin District, Riyadh, Saudi Arabia",
      copyright: "1sTech. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms & Conditions",
      social: { twitter: "Twitter", linkedin: "LinkedIn", youtube: "YouTube", instagram: "Instagram" },
    },
  },
};
