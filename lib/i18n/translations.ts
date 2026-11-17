export type Locale = "ar" | "en";

export interface Translations {
  nav: {
    home: string;
    about: string;
    services: string;
    products: string;
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
  about: {
    badge: string;
    heroTitle: string;
    heroHighlight: string;
    heroLead: string;
    ctaPrimary: string;
    ctaProfile: string;
    foundedLabel: string;
    foundedValue: string;
    basedLabel: string;
    basedValue: string;
    imageAlt: string;
    storyEyebrow: string;
    storyTitle: string;
    storyP1: string;
    storyP2: string;
    pillars: { title: string; text: string }[];
    goalsEyebrow: string;
    goalsTitle: string;
    goalsStatement: string;
    goals: { title: string; text: string }[];
    valuesEyebrow: string;
    valuesTitle: string;
    valuesLead: string;
    values: { title: string; text: string }[];
    partnersTitle: string;
    partnersLead: string;
    closingTitle: string;
    closingText: string;
    closingCta: string;
  };
}

export const translations: Record<Locale, Translations> = {
  ar: {
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      services: "الخدمات",
      products: "المنتجات",
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
    about: {
      badge: "من نحن",
      heroTitle: "نحوّل البيانات المكانية إلى",
      heroHighlight: "قرارات تصنع المستقبل",
      heroLead:
        "شركة سعودية رائدة تجمع بين الاستشارات الهندسية والمساحة والتخطيط العمراني ونظم المعلومات الجغرافية، لنكون شريكًا موثوقًا للجهات الحكومية والمنظمات.",
      ctaPrimary: "تواصل معنا",
      ctaProfile: "حمّل الملف التعريفي",
      foundedLabel: "تأسست عام",
      foundedValue: "2022",
      basedLabel: "المقر",
      basedValue: "المملكة العربية السعودية",
      imageAlt: "فريق تقني الأولى",
      storyEyebrow: "قصتنا",
      storyTitle: "شركة سعودية رائدة، تأسست عام 2022",
      storyP1:
        "نعمل كشريك موثوق للجهات الحكومية والمنظمات، ونقدّم حلولًا متكاملة تجمع بين الاستشارات الهندسية، والمساحة، والتخطيط العمراني، ونظم المعلومات الجغرافية، مدعومة بأحدث التقنيات ووفق المعايير الدولية.",
      storyP2:
        "نؤمن بأن البيانات المكانية والجغرافية ثروة حقيقية؛ لذلك نحوّلها إلى قيمة ملموسة تعزّز جودة التخطيط، وترفع الكفاءة التشغيلية، وتدعم اتخاذ قرارات مستنيرة.",
      pillars: [
        { title: "الاستشارات الهندسية", text: "دراسات وحلول هندسية دقيقة لمشاريعكم" },
        { title: "المساحة", text: "رفع مساحي عالي الدقة بأحدث الأجهزة" },
        { title: "التخطيط العمراني", text: "تخطيط عمراني مستدام لمدن المستقبل" },
        { title: "نظم المعلومات الجغرافية", text: "منصات GIS تحوّل البيانات إلى رؤى" },
      ],
      goalsEyebrow: "أهدافنا",
      goalsTitle: "إلى أين نتجه",
      goalsStatement:
        "نسعى إلى تحويل البيانات الجغرافية إلى رؤى ذكية ذات قيمة مضافة من خلال حلول مبتكرة، مما يمكّن شركاءنا من التخطيط بشكل أكثر كفاءة، واتخاذ قرارات مستنيرة، وتحقيق أثر مستدام يدعم الحاضر والمستقبل.",
      goals: [
        { title: "تخطيط بكفاءة أعلى", text: "بيانات موثوقة تختصر الوقت والتكلفة" },
        { title: "قرارات أدق", text: "رؤى مكانية واضحة تدعم صنّاع القرار" },
        { title: "أثر مستدام", text: "حلول تخدم الحاضر وتبني المستقبل" },
      ],
      valuesEyebrow: "قيمنا",
      valuesTitle: "المبادئ التي نعمل بها",
      valuesLead: "أربع قيم توجّه كل مشروع نعمل عليه وكل شراكة نبنيها.",
      values: [
        {
          title: "الابتكار",
          text: "نعتمد حلولًا جغرافية ذكية توظّف أحدث التقنيات لتحويل البيانات إلى أدوات فعّالة تدعم التخطيط واتخاذ القرارات.",
        },
        {
          title: "الاحترافية",
          text: "نبني شراكات طويلة الأمد قائمة على الشفافية والالتزام وأعلى معايير الدقة والجودة.",
        },
        {
          title: "التعاون",
          text: "نؤمن بأن نجاحنا الحقيقي يتحقق من خلال التعاون الوثيق مع عملائنا وشركائنا.",
        },
        {
          title: "روح الفريق",
          text: "نؤمن بقوة فريقنا، ونعمل معًا بشكل مستمر لتحقيق أفضل النتائج لعملائنا.",
        },
      ],
      partnersTitle: "شركاء النجاح",
      partnersLead: "جهات ومنظمات وثقت بنا لتحقيق أهدافها.",
      closingTitle: "لنبنِ المستقبل معًا",
      closingText: "هل لديك مشروع هندسي أو جيومكاني؟ فريقنا جاهز لمساعدتك من الفكرة حتى التنفيذ.",
      closingCta: "ابدأ مشروعك",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      services: "Services",
      products: "Products",
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
    about: {
      badge: "About Us",
      heroTitle: "Turning spatial data into",
      heroHighlight: "decisions that shape the future",
      heroLead:
        "A leading Saudi company combining engineering consultancy, surveying, urban planning and GIS — a trusted partner to government entities and organizations.",
      ctaPrimary: "Contact Us",
      ctaProfile: "Download Profile",
      foundedLabel: "Established",
      foundedValue: "2022",
      basedLabel: "Headquarters",
      basedValue: "Saudi Arabia",
      imageAlt: "The 1sTech team",
      storyEyebrow: "Our Story",
      storyTitle: "A leading Saudi company, established in 2022",
      storyP1:
        "We serve as a trusted partner to government entities and organizations, delivering integrated solutions that combine engineering consultancy, surveying, urban planning and geographic information systems — powered by the latest technologies and aligned with international standards.",
      storyP2:
        "We believe spatial and geographic data is a real asset. We turn it into tangible value that improves planning, raises operational efficiency and enables informed decision-making.",
      pillars: [
        { title: "Engineering Consultancy", text: "Precise engineering studies and solutions" },
        { title: "Surveying", text: "High-accuracy surveys with modern equipment" },
        { title: "Urban Planning", text: "Sustainable planning for the cities of tomorrow" },
        { title: "GIS", text: "GIS platforms that turn data into insight" },
      ],
      goalsEyebrow: "Our Goals",
      goalsTitle: "Where we are heading",
      goalsStatement:
        "We strive to transform geographic data into smart insights and added value through innovative solutions, enabling our partners to plan more efficiently, make informed decisions, and achieve a sustainable impact in support of the present and the future.",
      goals: [
        { title: "More efficient planning", text: "Reliable data that saves time and cost" },
        { title: "More accurate decisions", text: "Clear spatial insight for decision-makers" },
        { title: "Sustainable impact", text: "Solutions that serve today and build tomorrow" },
      ],
      valuesEyebrow: "Our Values",
      valuesTitle: "The principles we work by",
      valuesLead: "Four values that guide every project we deliver and every partnership we build.",
      values: [
        {
          title: "Innovation",
          text: "We adopt smart geospatial solutions that leverage the latest technologies to transform data into effective tools that support planning and decision-making.",
        },
        {
          title: "Professionalism",
          text: "We build long-term partnerships based on transparency, commitment, and the highest standards of accuracy and quality.",
        },
        {
          title: "Collaboration",
          text: "We believe that our true success is achieved through close collaboration with our clients and partners.",
        },
        {
          title: "Team Spirit",
          text: "We believe in the strength of our team, working together continuously to achieve the best results for our clients.",
        },
      ],
      partnersTitle: "Our Partners",
      partnersLead: "Entities and organizations that trust us to reach their goals.",
      closingTitle: "Let's build the future together",
      closingText: "Have an engineering or geospatial project? Our team is ready to help, from idea to delivery.",
      closingCta: "Start Your Project",
    },
  },
};