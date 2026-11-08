import type { Locale } from "@/lib/i18n/translations";

export type ServiceCategory = "data" | "platforms" | "capture" | "planning";

export interface ServiceItem {
  id: string;
  category: ServiceCategory;
  title: string;
  description: string;
}

interface ServicesContent {
  crumb: string;
  heroTitle: string;
  heroHighlight: string;
  heroLead: string;
  heroCta: string;
  heroSecondary: string;
  stats: { value: string; label: string }[];
  listEyebrow: string;
  listTitle: string;
  listLead: string;
  all: string;
  categories: Record<ServiceCategory, string>;
  items: ServiceItem[];
  processEyebrow: string;
  processTitle: string;
  processLead: string;
  process: { title: string; text: string }[];
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
}

// الترتيب وال id ثابتين في اللغتين (بنستخدمهم للأيقونات والفلترة)
export const servicesContent: Record<Locale, ServicesContent> = {
  ar: {
    crumb: "الخدمات",
    heroTitle: "حلول جغرافية مكانية وهندسية",
    heroHighlight: "متكاملة من البيانات إلى القرار",
    heroLead:
      "نقدّم مجموعة متكاملة من الخدمات المتخصصة في نظم المعلومات الجغرافية والمسح والتحليل المكاني، لنساعد الجهات الحكومية والمؤسسات على التخطيط بثقة واتخاذ قرارات أدق.",
    heroCta: "اطلب استشارة",
    heroSecondary: "حالات الاستخدام",
    stats: [
      { value: "14", label: "خدمة متخصصة" },
      { value: "4", label: "مجالات رئيسية" },
      { value: "17", label: "قطاعًا نخدمه" },
    ],
    listEyebrow: "خدماتنا",
    listTitle: "كل ما تحتاجه في مكان واحد",
    listLead: "اختر المجال لاستعراض الخدمات المرتبطة به.",
    all: "الكل",
    categories: {
      data: "البيانات والتحليل",
      platforms: "الاستشارات والمنصات",
      capture: "المسح وجمع البيانات",
      planning: "التخطيط والهندسة",
    },
    items: [
      {
        id: "data-management",
        category: "data",
        title: "إدارة البيانات الجغرافية المكانية",
        description:
          "ندير دورة الحياة الكاملة للبيانات الجغرافية المكانية، مع ضمان دقتها واتساقها وأمانها وجاهزيتها للتحليل واتخاذ القرار.",
      },
      {
        id: "consulting",
        category: "platforms",
        title: "الاستشارات والتخطيط الاستراتيجي لنظم المعلومات الجغرافية",
        description:
          "نساعد المؤسسات على تخطيط وتقييم وتنفيذ استراتيجيات GIS فعّالة تتوافق مع أهدافها التشغيلية والاستراتيجية.",
      },
      {
        id: "app-dev",
        category: "platforms",
        title: "تطوير تطبيقات GIS وتكامل المنصات",
        description:
          "نصمم ونطوّر تطبيقات ومنصات جغرافية مخصّصة تتكامل بسلاسة مع أنظمتكم الحالية.",
      },
      {
        id: "spatial-analysis",
        category: "data",
        title: "التحليل المكاني المتقدم والنمذجة",
        description:
          "نحوّل البيانات المكانية الخام إلى رؤى قابلة للتنفيذ من خلال التحليل المتقدم والنمذجة التنبؤية.",
      },
      {
        id: "remote-sensing",
        category: "data",
        title: "الاستشعار عن بُعد وصور الأقمار الصناعية",
        description:
          "نعالج ونحلل صور الأقمار الصناعية والصور الجوية لرصد التغيرات المكانية وتقييمها وفهمها.",
      },
      {
        id: "digital-twin",
        category: "platforms",
        title: "نظم المعلومات الجغرافية ثلاثية الأبعاد والتوأم الرقمي",
        description:
          "نطوّر نماذج مكانية ثلاثية الأبعاد وتوائم رقمية متقدمة لدعم التخطيط الذكي وإدارة الأصول.",
      },
      {
        id: "urban-planning",
        category: "planning",
        title: "التخطيط العمراني وإدارة الأراضي",
        description:
          "ندعم التنمية الحضرية وحوكمة الأراضي المعتمدة على البيانات باستخدام الذكاء الجغرافي المكاني.",
      },
      {
        id: "aec",
        category: "planning",
        title: "حلول GIS لقطاع الهندسة والعمارة والإنشاءات (AEC)",
        description:
          "ندعم مشاريع الهندسة والإنشاءات بحلول GIS متكاملة تربط التصميم بالموقع طوال دورة حياة المشروع.",
      },
      {
        id: "drone",
        category: "capture",
        title: "المسح ورسم الخرائط بالطائرات بدون طيار",
        description:
          "نوفّر خدمات مسح جوي ورسم خرائط عالية الدقة باستخدام تقنيات الدرون المتقدمة.",
      },
      {
        id: "laser-scanning",
        category: "capture",
        title: "المسح الليزري الأرضي ثلاثي الأبعاد",
        description:
          "نقدّم عمليات مسح ثلاثية الأبعاد دقيقة لأغراض التوثيق والنمذجة وتطبيقات التوأم الرقمي.",
      },
      {
        id: "mms",
        category: "capture",
        title: "أنظمة المسح المتحرك (MMS)",
        description:
          "نجمع البيانات المكانية بدقة عالية أثناء الحركة لخدمة تطبيقات البنية التحتية والطرق والنقل.",
      },
      {
        id: "photogrammetry",
        category: "capture",
        title: "الفوتوغرامتري (التصوير المساحي)",
        description:
          "نوفّر بيانات مكانية تفصيلية من خلال الفوتوغرامتري الأرضي والجوي لإنتاج نماذج ثلاثية الأبعاد دقيقة.",
      },
      {
        id: "geoai",
        category: "data",
        title: "الذكاء الجغرافي البيئي وGeoAI",
        description:
          "نطبّق تقنيات الذكاء الاصطناعي على البيانات المكانية البيئية للحصول على تحليلات وتوقعات أكثر ذكاءً.",
      },
      {
        id: "gps",
        category: "capture",
        title: "حلول اضطرابات GPS وتحديد المواقع",
        description:
          "نقدّم حلولًا متقدمة لتحديد المواقع بدقة في البيئات التي تتعطل فيها إشارات GPS مثل الأنفاق والمناطق الحضرية الكثيفة.",
      },
    ],
    processEyebrow: "منهجية العمل",
    processTitle: "كيف ننجز مشاريعكم",
    processLead: "منهجية واضحة من أول اجتماع حتى ما بعد التسليم.",
    process: [
      { title: "الاكتشاف", text: "نفهم أهدافكم ونقيّم البيانات والأنظمة المتوفرة لديكم." },
      { title: "التصميم", text: "نضع الحل والخطة التنفيذية المناسبة وفق المعايير الدولية." },
      { title: "التنفيذ", text: "ننفّذ ونطوّر ونختبر بدقة مع متابعة مستمرة معكم." },
      { title: "الدعم", text: "نسلّم وندرّب فرقكم ونقدّم الدعم لضمان استدامة النتائج." },
    ],
    ctaTitle: "لديك مشروع في ذهنك؟",
    ctaText: "أخبرنا عن احتياجك، وسيتواصل معك أحد خبرائنا لاقتراح الحل الأنسب.",
    ctaButton: "اطلب استشارة",
  },
  en: {
    crumb: "Services",
    heroTitle: "Integrated geospatial and engineering solutions",
    heroHighlight: "from data to decision",
    heroLead:
      "A complete range of specialized services in GIS, surveying and spatial analysis, helping government entities and organizations plan with confidence and make more accurate decisions.",
    heroCta: "Request a Consultation",
    heroSecondary: "Use Cases",
    stats: [
      { value: "14", label: "specialized services" },
      { value: "4", label: "core domains" },
      { value: "17", label: "sectors served" },
    ],
    listEyebrow: "Our Services",
    listTitle: "Everything you need in one place",
    listLead: "Choose a domain to browse its services.",
    all: "All",
    categories: {
      data: "Data & Analytics",
      platforms: "Consulting & Platforms",
      capture: "Surveying & Data Capture",
      planning: "Planning & Engineering",
    },
    items: [
      {
        id: "data-management",
        category: "data",
        title: "Geospatial Data Management",
        description:
          "We manage the full geospatial data lifecycle, ensuring accuracy, consistency, security and readiness for analysis and decision-making.",
      },
      {
        id: "consulting",
        category: "platforms",
        title: "GIS Consulting & Strategic Advisory",
        description:
          "We help organizations plan, assess and implement effective GIS strategies aligned with their operational and strategic goals.",
      },
      {
        id: "app-dev",
        category: "platforms",
        title: "GIS Application Development & Platform Integration",
        description:
          "We design and build custom geospatial applications and platforms that integrate seamlessly with your existing systems.",
      },
      {
        id: "spatial-analysis",
        category: "data",
        title: "Advanced Spatial Analysis & Modeling",
        description:
          "We turn raw spatial data into actionable insight through advanced analysis and predictive modeling.",
      },
      {
        id: "remote-sensing",
        category: "data",
        title: "Remote Sensing & Satellite Imagery",
        description:
          "We process and analyze satellite and aerial imagery to monitor, assess and understand spatial change.",
      },
      {
        id: "digital-twin",
        category: "platforms",
        title: "3D GIS & Digital Twin Solutions",
        description:
          "We build advanced 3D spatial models and digital twins that support smart planning and asset management.",
      },
      {
        id: "urban-planning",
        category: "planning",
        title: "Urban Planning & Land Management",
        description:
          "We support data-driven urban development and land governance using geospatial intelligence.",
      },
      {
        id: "aec",
        category: "planning",
        title: "GIS for Architecture, Engineering & Construction (AEC)",
        description:
          "We support engineering and construction projects with integrated GIS that connects design to site across the project lifecycle.",
      },
      {
        id: "drone",
        category: "capture",
        title: "Drone Surveying & Mapping",
        description:
          "High-precision aerial surveying and mapping using advanced drone technology.",
      },
      {
        id: "laser-scanning",
        category: "capture",
        title: "3D Terrestrial Laser Scanning",
        description:
          "Accurate 3D scanning for documentation, modeling and digital twin applications.",
      },
      {
        id: "mms",
        category: "capture",
        title: "Mobile Mapping Systems (MMS)",
        description:
          "High-accuracy spatial data captured on the move for infrastructure, roads and transportation applications.",
      },
      {
        id: "photogrammetry",
        category: "capture",
        title: "Photogrammetry Solutions",
        description:
          "Detailed spatial data from terrestrial and aerial photogrammetry to produce accurate 3D models.",
      },
      {
        id: "geoai",
        category: "data",
        title: "Environmental Geospatial Intelligence & GeoAI",
        description:
          "We apply artificial intelligence to environmental spatial data for smarter analytics and forecasting.",
      },
      {
        id: "gps",
        category: "capture",
        title: "GPS Disruption & Positioning Solutions",
        description:
          "Advanced solutions for accurate positioning where GPS signals are disrupted, such as tunnels and dense urban areas.",
      },
    ],
    processEyebrow: "How We Work",
    processTitle: "How we deliver your projects",
    processLead: "A clear methodology from the first meeting to after delivery.",
    process: [
      { title: "Discover", text: "We understand your goals and assess your existing data and systems." },
      { title: "Design", text: "We define the right solution and delivery plan to international standards." },
      { title: "Deliver", text: "We build, develop and test with precision, keeping you involved throughout." },
      { title: "Support", text: "We hand over, train your teams and provide support for lasting results." },
    ],
    ctaTitle: "Have a project in mind?",
    ctaText: "Tell us what you need and one of our experts will get back to you with the right solution.",
    ctaButton: "Request a Consultation",
  },
};
