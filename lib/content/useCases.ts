import type { Locale } from "@/lib/i18n/translations";

export interface UseCaseItem {
  title: string;
  points?: string[];
}

export interface Sector {
  /** ثابت في اللغتين — بنستخدمه للأيقونة والتبويب */
  id: string;
  title: string;
  tagline: string;
  items: UseCaseItem[];
}

interface UseCasesContent {
  crumb: string;
  heroTitle: string;
  heroHighlight: string;
  heroLead: string;
  heroCta: string;
  stats: { value: string; label: string }[];
  explorerEyebrow: string;
  explorerTitle: string;
  explorerLead: string;
  sectorsLabel: string;
  useCasesLabel: string;
  sectorCta: string;
  sectors: Sector[];
  whyEyebrow: string;
  whyTitle: string;
  whyLead: string;
  why: { title: string; text: string }[];
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
}

const t = (title: string, points?: string[]): UseCaseItem => ({ title, points });

export const useCasesContent: Record<Locale, UseCasesContent> = {
  ar: {
    crumb: "حالات الاستخدام",
    heroTitle: "حلول مكانية تصنع الفرق",
    heroHighlight: "في كل قطاع",
    heroLead:
      "من اللوجستيات والطاقة إلى الزراعة والطيران، نوظّف الذكاء الجغرافي المكاني لحل تحديات حقيقية ورفع كفاءة العمليات في مختلف القطاعات.",
    heroCta: "ناقش حالتك معنا",
    stats: [
      { value: "17", label: "قطاعًا" },
      { value: "60+", label: "حالة استخدام" },
    ],
    explorerEyebrow: "القطاعات",
    explorerTitle: "استكشف حالات الاستخدام حسب القطاع",
    explorerLead: "اختر القطاع لاستعراض الحلول التي نقدّمها فيه.",
    sectorsLabel: "القطاعات",
    useCasesLabel: "حالات الاستخدام",
    sectorCta: "اطلب حلًا لقطاعك",
    sectors: [
      {
        id: "logistics",
        title: "اللوجستيات والتوزيع",
        tagline: "تحسين أداء إدارة الأسطول",
        items: [
          t("تخطيط الأسطول والشبكة وتحسينهما"),
          t("إدارة أصول الأسطول والشبكة"),
          t("التفتيش والصيانة"),
        ],
      },
      {
        id: "routing",
        title: "تخطيط المسارات وتحسينها",
        tagline: "تخطيط وتحسين المسارات من البداية إلى النهاية",
        items: [
          t("حلول شاملة لتخطيط المسارات"),
          t("المسارات المخططة"),
          t("أنماط التنقّل الديناميكية"),
          t("إثراء بيانات شبكة الطرق"),
        ],
      },
      {
        id: "assets",
        title: "إدارة الأصول وتحليل المخاطر",
        tagline: "رؤية شاملة بزاوية 360° واتصال دون انقطاع",
        items: [
          t("تخطيط قائم على البيانات لمستقبل أذكى"),
          t("عمليات السلامة والأمن"),
          t("تحسين إدارة المرافق والعقارات"),
          t("شفافية إدارة الأصول"),
        ],
      },
      {
        id: "real-estate",
        title: "تحليل سوق العقارات",
        tagline: "أبحاث السوق وتحليل المواقع",
        items: [
          t("أبحاث سوق وتحليل مواقع مدعومة بالبيانات"),
          t("بيانات السوق المدعومة برؤى محلية موثوقة"),
          t("تصوّر بيانات إنترنت الأشياء (IoT)"),
        ],
      },
      {
        id: "3d",
        title: "التصوّر والنمذجة ثلاثية الأبعاد",
        tagline: "قدرات متقدمة للتصوّر والنمذجة ثلاثية الأبعاد",
        items: [
          t("إنشاء نماذج مبانٍ ذكية ثلاثية الأبعاد"),
          t("تصوّر بيانات إنترنت الأشياء (IoT)"),
          t("التصوّر ثلاثي الأبعاد"),
        ],
      },
      {
        id: "agriculture",
        title: "الزراعة",
        tagline: "تصوّر البيانات الزراعية وتحليلها",
        items: [
          t("ذكاء زراعي قائم على الموقع"),
          t("تقنيات مكانية متكاملة لعمليات أكثر ذكاءً"),
          t("الاستشعار عن بُعد لإدارة زراعية أذكى"),
          t("لوحات متابعة الأداء في الوقت الفعلي"),
        ],
      },
      {
        id: "marine",
        title: "العلوم البحرية",
        tagline: "استدامة بحرية مدعومة برؤى قائمة على البيانات",
        items: [
          t("إعادة اكتشاف قاع البحر"),
          t("التحليل العلمي للمحيطات والبحار"),
          t("رؤى آمنة وموثوقة من بيانات البيئة البحرية"),
          t("الخرائط والنمذجة ثلاثية الأبعاد"),
        ],
      },
      {
        id: "mining",
        title: "التعدين",
        tagline: "رؤى جغرافية مكانية لتعدين مستدام",
        items: [
          t("الاستكشاف والتخطيط لاستخدامات الأراضي"),
          t("الخرائط والتحليل"),
          t("إدارة مرافق تخزين مخلفات التعدين"),
          t("مراقبة عمليات الاستخلاص بالترشيح الكومي (Heap Leaching)"),
        ],
      },
      {
        id: "reserves",
        title: "المحميات الطبيعية",
        tagline: "رصد وحماية النظم البيئية بالبيانات المكانية",
        items: [
          t("التصوير والاستشعار عن بُعد"),
          t("عرض البيانات والتحليلات في الوقت الفعلي"),
          t("نمذجة التغيرات المكانية والزمانية"),
          t("اكتشاف الأنماط وتحليلها"),
        ],
      },
      {
        id: "telecom",
        title: "الاتصالات",
        tagline: "تطوير إدارة الموارد لمشغلي خدمات الاتصالات",
        items: [
          t("إدارة تشغيل وصيانة الشبكات"),
          t("الوعي الظرفي اللحظي"),
          t("تحسين إدارة الموارد وأداء الشبكة"),
        ],
      },
      {
        id: "sales",
        title: "المبيعات والتسويق",
        tagline: "قرارات تجارية أذكى مبنية على الموقع",
        items: [
          t("المبيعات والتسويق"),
          t("ذكاء الأعمال"),
          t("دعم وتمكين المجتمع والكوادر"),
        ],
      },
      {
        id: "engineering",
        title: "التخطيط والأعمال الهندسية",
        tagline: "تخطيط وتصميم متصل بالواقع",
        items: [
          t("التوأمة الرقمية والاتصال"),
          t("التخطيط الاستراتيجي المعتمد على تحليل المواقع"),
          t("الهندسة والتعاون عن بُعد"),
        ],
      },
      {
        id: "it",
        title: "تكنولوجيا المعلومات وخدمات المواقع",
        tagline: "منصات مكانية مرنة وقابلة للتوسّع",
        items: [
          t("إدارة البيانات المكانية"),
          t("حلول رقمية مبتكرة"),
          t("منصة مرنة وقابلة للتكامل والتوسّع"),
        ],
      },
      {
        id: "energy",
        title: "مرافق الطاقة",
        tagline: "إدارة ذكية لشبكات وأصول الطاقة",
        items: [
          t("إدارة الأصول", ["إدارة دورة حياة الأصول", "تقييم الأصول", "تقييم الأداء"]),
          t("إدارة العمليات", ["تكامل البيانات", "الوعي الظرفي", "رفع كفاءة القوى العاملة"]),
          t("السلامة والامتثال", [
            "حماية الأفراد والممتلكات والبيئة",
            "تواصل لحظي مع أصحاب المصلحة",
            "تقييم الأداء",
          ]),
          t("التصميم والهندسة", [
            "نمذجة ذكية ثلاثية الأبعاد للشبكات",
            "مشاركة المشاريع والتعاون",
            "التصوّر والتحليلات",
          ]),
        ],
      },
      {
        id: "aviation",
        title: "قطاع الطيران",
        tagline: "مطارات أذكى وأكثر أمانًا",
        items: [
          t("إدارة الأصول القائمة على البيانات الجغرافية المكانية"),
          t("تقنيات مكانية متكاملة لعمليات أكثر ذكاءً"),
          t("التخطيط البيئي والعمراني للمطارات"),
          t("إدارة أصول ومرافق المطارات"),
          t("إدارة مخاطر الحياة البرية"),
          t("منظومة ذكاء أمني موحّدة للمطار"),
        ],
      },
      {
        id: "finance",
        title: "الخدمات المالية",
        tagline: "قرارات استثمارية مدعومة بالموقع",
        items: [
          t("التصوّر والمتابعة"),
          t("تحليل مخاطر المحافظ الاستثمارية"),
          t("صناديق الاستثمار العقاري المتداولة (REITs)"),
        ],
      },
      {
        id: "csr",
        title: "المسؤولية المجتمعية للشركات",
        tagline: "أثر مجتمعي وبيئي قابل للقياس",
        items: [
          t("التنمية المجتمعية"),
          t("الاستثمار القائم على الأثر البيئي"),
          t("الاستثمار القائم على المسؤولية الاجتماعية"),
          t("حوكمة المساءلة والشفافية"),
        ],
      },
    ],
    whyEyebrow: "لماذا تهمّ تجاربنا",
    whyTitle: "قيمة حقيقية في كل مشروع",
    whyLead: "حالات الاستخدام تعكس طريقتنا في العمل والنتائج التي نحققها لشركائنا.",
    why: [
      { title: "التنافسية", text: "حلول تمنح شركاءنا أفضلية واضحة في قطاعاتهم." },
      { title: "التطوّر", text: "نواكب أحدث التقنيات ونطوّر حلولنا باستمرار." },
      { title: "العميل أولًا", text: "نبدأ من احتياج العميل ونصمم الحل حوله." },
      { title: "المرونة", text: "حلول قابلة للتخصيص والتوسّع مع نمو أعمالكم." },
    ],
    ctaTitle: "لنبدأ في بناء قصة نجاحك",
    ctaText: "شاركنا تحديك، وسنساعدك على تحويله إلى حل مكاني ذكي بنتائج ملموسة.",
    ctaButton: "تواصل معنا",
  },
  en: {
    crumb: "Use Cases",
    heroTitle: "Spatial solutions that make a difference",
    heroHighlight: "in every sector",
    heroLead:
      "From logistics and energy to agriculture and aviation, we apply geospatial intelligence to solve real challenges and raise operational efficiency across sectors.",
    heroCta: "Discuss Your Case",
    stats: [
      { value: "17", label: "sectors" },
      { value: "60+", label: "use cases" },
    ],
    explorerEyebrow: "Sectors",
    explorerTitle: "Explore use cases by sector",
    explorerLead: "Choose a sector to see the solutions we deliver in it.",
    sectorsLabel: "Sectors",
    useCasesLabel: "Use cases",
    sectorCta: "Request a solution for your sector",
    sectors: [
      {
        id: "logistics",
        title: "Logistics & Distribution",
        tagline: "Optimizing fleet management performance",
        items: [
          t("Fleet and network planning and optimization"),
          t("Fleet and network asset management"),
          t("Inspections and maintenance"),
        ],
      },
      {
        id: "routing",
        title: "Route Planning & Optimization",
        tagline: "End-to-end route planning and optimization",
        items: [
          t("Comprehensive route solvers"),
          t("Planned routes"),
          t("Dynamic travel modes"),
          t("Enriched street network data"),
        ],
      },
      {
        id: "assets",
        title: "Asset Management & Risk Analysis",
        tagline: "360° visibility and uninterrupted connectivity",
        items: [
          t("Data-driven planning for a smarter future"),
          t("Safety and security operations"),
          t("Optimized facility and real estate management"),
          t("Asset transparency"),
        ],
      },
      {
        id: "real-estate",
        title: "Real Estate Market Analysis",
        tagline: "Market research and site analysis",
        items: [
          t("Data-powered market research and site analysis"),
          t("Market data with authentic local insights"),
          t("IoT visualization"),
        ],
      },
      {
        id: "3d",
        title: "3D Visualization & Modeling",
        tagline: "Powerful 3D visualization and imaging capabilities",
        items: [
          t("Intelligent 3D building models"),
          t("IoT visualization"),
          t("3D visualization"),
        ],
      },
      {
        id: "agriculture",
        title: "Agriculture",
        tagline: "Visualize and analyze agricultural data",
        items: [
          t("Location-driven agricultural intelligence"),
          t("Integrated spatial technologies for smarter operations"),
          t("Remote sensing for smarter farm management"),
          t("Real-time performance dashboards"),
        ],
      },
      {
        id: "marine",
        title: "Marine Science",
        tagline: "Drive marine sustainability with data-driven insight",
        items: [
          t("Rediscover the seafloor"),
          t("Scientific analysis of oceans and seas"),
          t("Secure, trusted marine data insights"),
          t("3D mapping and modeling"),
        ],
      },
      {
        id: "mining",
        title: "Mining",
        tagline: "Geospatial insights for sustainable mining",
        items: [
          t("Prospecting and land-use planning"),
          t("Mapping and analysis"),
          t("Tailings storage facility management"),
          t("Heap leaching process monitoring"),
        ],
      },
      {
        id: "reserves",
        title: "Natural Reserves",
        tagline: "Monitoring and protecting ecosystems with spatial data",
        items: [
          t("Imagery and remote sensing"),
          t("Real-time data visualization and analytics"),
          t("Spatial and temporal change modeling"),
          t("Discovering and analyzing patterns"),
        ],
      },
      {
        id: "telecom",
        title: "Telecommunications",
        tagline: "Modernizing resource management for telecom operators",
        items: [
          t("Network operations and maintenance"),
          t("Real-time situational awareness"),
          t("Resource and network optimization"),
        ],
      },
      {
        id: "sales",
        title: "Sales & Marketing",
        tagline: "Smarter, location-based business decisions",
        items: [
          t("Sales and marketing"),
          t("Business intelligence"),
          t("Empowering community and staff"),
        ],
      },
      {
        id: "engineering",
        title: "Planning & Engineering",
        tagline: "Planning and design connected to the real world",
        items: [
          t("Digital twin and connectivity"),
          t("Location-driven strategic planning"),
          t("Remote engineering and collaboration"),
        ],
      },
      {
        id: "it",
        title: "IT & Location Services",
        tagline: "Flexible, scalable spatial platforms",
        items: [
          t("Geospatial data management"),
          t("Innovative digital offerings"),
          t("Interoperable and extensible platform"),
        ],
      },
      {
        id: "energy",
        title: "Energy Utilities",
        tagline: "Smart management of energy networks and assets",
        items: [
          t("Asset management", ["Lifecycle management", "Asset assessment", "Performance assessment"]),
          t("Operations management", ["Data convergence", "Situational awareness", "Workforce efficiency"]),
          t("Safety and compliance", [
            "People, property and environment",
            "Real-time stakeholder communication",
            "Performance assessment",
          ]),
          t("Design and engineering", [
            "Intelligent 3D network modeling",
            "Project sharing and collaboration",
            "Visualization and analytics",
          ]),
        ],
      },
      {
        id: "aviation",
        title: "Aviation",
        tagline: "Smarter, safer airports",
        items: [
          t("Geospatial-driven asset management"),
          t("Integrated spatial technologies for smarter operations"),
          t("Environmental and land-use planning for airports"),
          t("Airport property and facility management"),
          t("Wildlife hazard management"),
          t("Unified airport security intelligence"),
        ],
      },
      {
        id: "finance",
        title: "Financial Services",
        tagline: "Location-informed investment decisions",
        items: [
          t("Visualization and monitoring"),
          t("Portfolio risk analysis"),
          t("Real Estate Investment Trusts (REITs)"),
        ],
      },
      {
        id: "csr",
        title: "Corporate Social Responsibility",
        tagline: "Measurable social and environmental impact",
        items: [
          t("Community development"),
          t("Environmental impact investing"),
          t("Socially conscious investing"),
          t("Accountability and transparency"),
        ],
      },
    ],
    whyEyebrow: "Why Our Case Studies Matter",
    whyTitle: "Real value in every project",
    whyLead: "Our use cases reflect how we work and the results we deliver for our partners.",
    why: [
      { title: "Competitiveness", text: "Solutions that give our partners a clear edge in their sectors." },
      { title: "Evolution", text: "We keep pace with the latest technology and continually improve." },
      { title: "Client-Centricity", text: "We start from the client's need and design the solution around it." },
      { title: "Flexibility", text: "Customizable solutions that scale as your business grows." },
    ],
    ctaTitle: "Let's build your success story",
    ctaText: "Share your challenge and we'll help turn it into a smart spatial solution with tangible results.",
    ctaButton: "Contact Us",
  },
};
