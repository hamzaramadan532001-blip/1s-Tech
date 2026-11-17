import type { Locale } from "@/lib/i18n/translations";

// منتجاتنا — من الملف التعريفي للشركة (صفحات "منتجاتنا" 01 → 13)
// الصور مقصوصة من الملف في public/images/products

export type ProductCategory = "devices" | "platforms" | "imagery";

interface Text {
  ar: string;
  en: string;
}

export interface Product {
  id: string;
  number: string;
  category: ProductCategory;
  image: string;
  name: Text;
  tagline: Text;
  description?: Text;
  features: { ar: string[]; en: string[] };
}

const img = (id: string) => `/images/products/${id}.webp`;

export const products: Product[] = [
  {
    id: "ugps",
    number: "01",
    category: "devices",
    image: img("ugps"),
    name: { ar: "UGPS", en: "UGPS" },
    tagline: { ar: "نظام تحديد المواقع للبيئات الداخلية والخارجية", en: "Indoor & Outdoor Positioning Solutions" },
    description: {
      ar: "حل لتحديد المواقع بدقة في الأماكن التي لا تصلها إشارات GPS، مثل الأنفاق والمواقع تحت الأرض والمنشآت الداخلية، مع تغطية تصل إلى 90% ودقة عالية حتى عند السرعات العالية.",
      en: "Accurate positioning where GPS signals can't reach, such as tunnels, underground sites and indoor facilities, with up to 90% coverage and high accuracy even at high speeds.",
    },
    features: {
      ar: ["دقة عالية في تحديد المواقع", "تغطية واسعة وتشغيل مستمر", "موثوقية عالية في الأداء", "سهولة التكامل مع الأنظمة"],
      en: ["High positioning accuracy", "Wide coverage and continuous operation", "High reliability in performance", "Easy integration with systems"],
    },
  },
  {
    id: "share-1055",
    number: "02",
    category: "devices",
    image: img("share-1055"),
    name: { ar: "SHARE 1055 PRO", en: "SHARE 1055 PRO" },
    tagline: { ar: "حلول التقاط الواقع ثلاثي الأبعاد", en: "3D Reality Capture Solutions" },
    features: {
      ar: ["دقة عالية للنماذج ثلاثية الأبعاد", "جمع بيانات سريع", "مدى طويل وأداء مستقر", "متوافق مع منصات متعددة"],
      en: ["High accuracy for 3D models", "Fast data collection", "Long range and stable performance", "Compatible with multiple platforms"],
    },
  },
  {
    id: "share-slam",
    number: "03",
    category: "devices",
    image: img("share-slam"),
    name: { ar: "SHARE SLAM S20", en: "SHARE SLAM S20" },
    tagline: { ar: "المسح المتحرك والتوأم الرقمي", en: "Mobile Mapping & Digital Twin" },
    features: {
      ar: ["نماذج ثلاثية الأبعاد دقيقة (BIM)", "خرائط تفصيلية للمواقع الداخلية", "مسح عالي الدقة", "تحسين الكفاءة وتقليل التكاليف"],
      en: ["Accurate 3D models (BIM)", "Detailed indoor maps", "High-precision scanning", "Improve efficiency and reduce costs"],
    },
  },
  {
    id: "maskan",
    number: "04",
    category: "platforms",
    image: img("maskan"),
    name: { ar: "مسكن", en: "MasKan" },
    tagline: { ar: "منصة العقارات الذكية", en: "Smart Real Estate Platform" },
    description: {
      ar: "منصة جغرافية متكاملة لبيانات العقارات واتخاذ القرارات، توفر تحليلات شاملة وتصورات مرئية لدعم التخطيط والتطوير والاستثمار العقاري.",
      en: "An integrated geospatial platform for real estate data and decision-making, enabling comprehensive analysis and visualization to support planning, development and investment decisions.",
    },
    features: {
      ar: ["قاعدة بيانات موحدة للعقارات", "استكشاف تفاعلي قائم على الخرائط", "تحليلات دقيقة للسوق العقاري", "يدعم التخطيط واتخاذ قرارات الاستثمار"],
      en: ["Unified real estate data", "Interactive map-based exploration", "Accurate market insights", "Supports planning and investment decisions"],
    },
  },
  {
    id: "georaster",
    number: "05",
    category: "imagery",
    image: img("georaster"),
    name: { ar: "GeoRaster", en: "GeoRaster" },
    tagline: { ar: "تحليل الصور متعددة الأطياف عبر الويب", en: "Analytics - WebGIS Multispectral" },
    description: {
      ar: "منصة تحليل جغرافي قائمة على الويب لصور الأقمار الصناعية متعددة الأطياف، تتيح التحليل المتقدم والتصور والكشف عن التغيرات لدعم مراقبة البيئة والمناطق الحضرية والبنية التحتية.",
      en: "A web-based geospatial analytics platform for multispectral satellite imagery, enabling advanced analysis, visualization and change detection to support environmental, urban and infrastructure monitoring.",
    },
    features: {
      ar: [
        "دعم صور الأقمار الصناعية متعددة المصادر (Sentinel وLandsat وغيرها)",
        "تحليل متقدم متعدد الأطياف (NDVI وNDBI وNDWI وغيرها)",
        "تصنيف غطاء الأرض والخرائط الموضوعية",
        "كشف التغيرات والتحليل الزمني",
        "تصور وتحليل قائم على الويب",
      ],
      en: [
        "Multi-source satellite imagery (Sentinel, Landsat, etc.)",
        "Advanced spectral analysis (NDVI, NDBI, NDWI, etc.)",
        "Land cover classification and thematic mapping",
        "Change detection and time-series analysis",
        "Web-based visualization and analytics",
      ],
    },
  },
  {
    id: "imagepro",
    number: "06",
    category: "imagery",
    image: img("imagepro"),
    name: { ar: "ImagePro", en: "ImagePro" },
    tagline: { ar: "معالجة صور الأقمار الصناعية والصور الجوية", en: "Satellite & Aerial Image Processing" },
    description: {
      ar: "برنامج قوي لمعالجة كميات كبيرة من صور الأقمار الصناعية والصور الجوية بدقة وسرعة عالية. يدعم أنواعًا متعددة من الصور، ويتيح إنشاء منتجات جغرافية دقيقة مثل الصور الجوية المصححة (Orthophotos) ونماذج الارتفاع الرقمي (DEM) ونماذج السطح الرقمي (DSM)، مما يجعله مثاليًا لمشاريع تغطية المساحات الواسعة.",
      en: "Powerful software for processing large volumes of satellite and aerial imagery with high accuracy and speed. It supports multiple image types and creates accurate geospatial products such as orthophotos, DEM and DSM, making it ideal for wide-area mapping projects.",
    },
    features: {
      ar: [
        "معالجة كميات كبيرة من صور الأقمار الصناعية والصور الجوية",
        "دقة عالية وسرعة في المعالجة",
        "دعم أنواع متعددة من الصور",
        "إنشاء الصور الجوية المصححة ونماذج DEM وDSM",
        "مثالي لمشاريع تغطية المساحات الواسعة",
      ],
      en: [
        "Process large volumes of satellite and aerial imagery",
        "High accuracy and fast processing speed",
        "Supports multiple image types",
        "Generate orthophotos, DEM and DSM",
        "Ideal for wide-area mapping projects",
      ],
    },
  },
  {
    id: "mappro",
    number: "07",
    category: "platforms",
    image: img("mappro"),
    name: { ar: "MapPro", en: "MapPro" },
    tagline: { ar: "معالجة وإدارة البيانات المكانية", en: "Spatial Data Processing & Management" },
    description: {
      ar: "حل شامل لمعالجة وإدارة البيانات المكانية من مصادر متعددة، بما في ذلك التحويل وإنشاء مجموعة متنوعة من المنتجات الجغرافية المكانية. يوفر أدوات متكاملة لتحرير البيانات وإدارتها وتنظيمها، ونماذج بيانات مخصصة لإنتاج خرائط عالية الجودة وتعزيز الكفاءة التشغيلية.",
      en: "A comprehensive solution for processing and managing spatial data from multiple sources, including conversion, transformation and generation of various geospatial products. It provides integrated tools for editing, managing and organizing data, and building customized data models to produce high-quality maps and enhance operational efficiency.",
    },
    features: {
      ar: [
        "معالجة البيانات المكانية من مصادر متعددة",
        "تحويل البيانات وإعادة الإسقاط الإحداثي",
        "أدوات متكاملة لتحرير وإدارة البيانات",
        "بناء نماذج بيانات مخصصة",
        "إنتاج خرائط عالية الجودة لتحسين الكفاءة التشغيلية",
      ],
      en: [
        "Process spatial data from multiple sources",
        "Data conversion and coordinate transformation",
        "Integrated editing and data management tools",
        "Build customized data models",
        "Produce high-quality maps to enhance operational efficiency",
      ],
    },
  },
  {
    id: "featureai",
    number: "08",
    category: "imagery",
    image: img("featureai"),
    name: { ar: "FeatureAI", en: "FeatureAI" },
    tagline: { ar: "تحليل الصور واستخراج المعالم بالذكاء الاصطناعي", en: "AI-Powered Image Analysis & Feature Extraction" },
    description: {
      ar: "حل متقدم يعتمد على الذكاء الاصطناعي للتحليل التلقائي والدقيق للصور، يحدد ويصنف العناصر الحقيقية ويكتشف التغيرات عبر الزمن ويعالج الصور على نطاق واسع. يدعم مستويات متعددة من الكشف والاستخراج التفصيلي للمعالم، ويخدم تطبيقات مثل استخراج الأصول والمراقبة وتحليل التغيرات.",
      en: "An advanced AI solution for automatic and accurate imagery analysis. It identifies and classifies real-world elements, detects changes over time and processes images at scale. With multi-level detection and detailed feature extraction, it supports applications such as asset extraction, monitoring and change analysis.",
    },
    features: {
      ar: [
        "تحليل الصور التلقائي واستخراج المعالم",
        "تحديد وتصنيف العناصر المختلفة",
        "اكتشاف التغيرات والتحليل الزمني",
        "كشف متعدد المستويات واستخراج تفصيلي للمعالم",
        "يدعم تطبيقات وحالات استخدام متعددة",
      ],
      en: [
        "Automatic image analysis and feature extraction",
        "Identify and classify different elements",
        "Change detection and time-series analysis",
        "Multi-level detection and detailed feature extraction",
        "Supports various applications and use cases",
      ],
    },
  },
  {
    id: "3dpro",
    number: "09",
    category: "platforms",
    image: img("3dpro"),
    name: { ar: "3DPro", en: "3DPro" },
    tagline: { ar: "منصة إدارة البيانات الجغرافية ثلاثية الأبعاد", en: "3D Geospatial Data Management" },
    description: {
      ar: "منصة متكاملة لإدارة وعرض ودمج البيانات الجغرافية ثلاثية الأبعاد من مصادر متعددة. تدعم التحليل المتقدم ونمذجة المشاهد ثنائية وثلاثية الأبعاد ضمن بيئة موحدة، وتتيح إنشاء نماذج ثلاثية الأبعاد واقعية للمدن والمواقع لدعم التحليل المكاني والتخطيط واتخاذ قرارات أفضل.",
      en: "An integrated platform for managing, visualizing and merging 3D geospatial data from multiple sources. It supports analysis and modeling of 2D and 3D data in a unified environment, enables realistic 3D scenes of cities and sites, and integrates different data types and layers to support spatial analysis, planning and better decisions.",
    },
    features: {
      ar: [
        "إنشاء نماذج بيانات ثلاثية الأبعاد بدقة عالية",
        "دمج وإدارة البيانات من مصادر متعددة",
        "تحليل وتصوير مكاني متقدم",
        "يدعم التخطيط والإدارة واتخاذ قرارات أفضل",
        "مشاهد ثلاثية الأبعاد واقعية لتحسين العرض والتواصل",
      ],
      en: [
        "High-precision 3D data model creation",
        "Integration and merging of multi-source data",
        "Advanced spatial analysis and visualization",
        "Supports planning, asset management and better decisions",
        "Realistic 3D scenes for improved visualization and communication",
      ],
    },
  },
  {
    id: "eo-imagery",
    number: "10",
    category: "imagery",
    image: img("eo-imagery"),
    name: { ar: "صور الأقمار الصناعية", en: "EO Satellite Imagery" },
    tagline: { ar: "بيانات رصد الأرض عالية الدقة", en: "High-Resolution Earth Observation Data" },
    description: {
      ar: "نقدم صور أقمار صناعية عالية الجودة بدقة مكانية تتراوح من 30 سم إلى 50 سم، بالإضافة إلى مجموعة واسعة من البيانات المكانية والطيفية والزمنية، بما فيها الصور البصرية وصور الرادار والبيانات متعددة وفائقة الأطياف والسلاسل الزمنية، لتلبية احتياجات التخطيط الحضري وإدارة الموارد والمراقبة والتحليل الجغرافي المتقدم.",
      en: "High-quality satellite imagery with spatial resolutions from 30 cm to 50 cm, plus a wide range of spatial, spectral and temporal data including optical and radar imagery, multispectral, hyperspectral and time-series data, for urban planning, resource management, monitoring and advanced geographic analysis.",
    },
    features: {
      ar: [
        "دقة مكانية عالية (30 – 50 سم)",
        "بيانات مكانية وطيفية وزمنية متنوعة (بصري، رادار، متعدد الأطياف)",
        "بيانات فائقة الطيف وصور SWIR",
        "بيانات عالمية من مزودي الأقمار الصناعية الرئيسيين",
        "يدعم التخطيط والمراقبة وإدارة الموارد",
      ],
      en: [
        "High spatial resolution (30 – 50 cm)",
        "Wide range of spectral and temporal data (optical, radar, multispectral)",
        "Hyperspectral and SWIR imagery",
        "Global data from major satellite providers",
        "Supports planning, monitoring and resource management",
      ],
    },
  },
  {
    id: "utracker",
    number: "11",
    category: "devices",
    image: img("utracker"),
    name: { ar: "uTracker", en: "uTracker" },
    tagline: { ar: "نظام التتبع اللحظي للأصول والأفراد", en: "Real-Time Asset & Personnel Tracking" },
    description: {
      ar: "نظام تتبع ذكي للأفراد والأصول يوفر تحديد الموقع اللحظي والدقيق داخل وخارج مواقع المشاريع باستخدام تقنيات RTK وGNSS ودمج بيانات أجهزة الاستشعار، بدقة تصل إلى 10 سم. يعزز السلامة بتقييد الوصول إلى المناطق الخطرة، ويحسّن الكفاءة التشغيلية وإدارة الأصول.",
      en: "An intelligent tracking system for personnel and assets that provides accurate real-time location inside and outside project sites with up to 10 cm precision, using RTK, GNSS and sensor fusion. It enhances safety by restricting access to hazardous areas and improves operational efficiency and asset management.",
    },
    features: {
      ar: [
        "تتبع لحظي ودقيق (بدقة تصل إلى 10 سم)",
        "تتبع الأفراد والمعدات",
        "تقييد الوصول إلى المناطق الخطرة",
        "تحسين الكفاءة التشغيلية",
        "يدعم تقنيات GNSS وRTK ودمج بيانات أجهزة الاستشعار",
      ],
      en: [
        "Real-time tracking with high precision (up to 10 cm)",
        "Track personnel and equipment",
        "Restrict access to hazardous areas",
        "Improve operational efficiency",
        "Integrates RTK, GNSS and sensor fusion",
      ],
    },
  },
  {
    id: "lepton",
    number: "12",
    category: "platforms",
    image: img("lepton"),
    name: { ar: "Lepton Software", en: "Lepton Software" },
    tagline: { ar: "منصة متقدمة لنظم المعلومات الجغرافية والتوأم الرقمي", en: "Advanced GIS & Digital Twin Solutions" },
    description: {
      ar: "منصة برمجية متكاملة لإدارة البنية التحتية للشبكات والتخطيط الجغرافي بدقة عالية. تدعم تخطيط شبكات الألياف الضوئية، وإدارة السعة والأصول الجغرافية، ونمذجة التوأم الرقمي، وتحليل البيانات المكانية، واتخاذ القرارات المبنية على البيانات لتحسين الكفاءة التشغيلية.",
      en: "A comprehensive software platform for network infrastructure management and geospatial planning with high accuracy. It supports fiber network planning, capacity management, GIS asset management, Digital Twin modeling, spatial data analysis and data-driven decision-making to enhance operational efficiency.",
    },
    features: {
      ar: [
        "التخطيط الجغرافي وتصميم شبكات الألياف",
        "إدارة الأصول والسعة التشغيلية",
        "نمذجة التوأم الرقمي",
        "تحليل البيانات المكانية والتقارير",
        "قرارات مبنية على البيانات لكفاءة تشغيلية أعلى",
      ],
      en: [
        "GIS network planning and fiber design",
        "Asset and capacity management",
        "Digital Twin modeling",
        "Spatial data analysis and reporting",
        "Data-driven decisions for efficient operations",
      ],
    },
  },
  {
    id: "machine-commander",
    number: "13",
    category: "platforms",
    image: img("machine-commander"),
    name: { ar: "إدارة المعدات", en: "Machine Commander" },
    tagline: { ar: "منصة ذكية لإدارة المعدات والأساطيل", en: "AI-Powered Equipment & Fleet Management" },
    description: {
      ar: "منصة ذكية لإدارة معدات الإنشاءات والأصول باستخدام الذكاء الاصطناعي وإنترنت الأشياء. توفر التتبع اللحظي للموقع وساعات التشغيل واستهلاك الوقود وحالة المعدات، وتنبيهات السرقة والاستخدام غير المصرح به، ورؤى الصيانة التنبؤية لتقليل التكاليف وزيادة الإنتاجية وتحسين إدارة الأساطيل.",
      en: "An intelligent platform for managing construction equipment and assets using AI and IoT. It tracks real-time location, operating hours, fuel consumption and equipment status, provides theft and unauthorized-use alerts, and delivers predictive maintenance insights to reduce costs, maximize productivity and improve fleet management.",
    },
    features: {
      ar: [
        "تتبع لحظي للمعدات والأصول",
        "مراقبة استهلاك الوقود",
        "صيانة تنبؤية وتنبيهات خدمة",
        "كشف السرقة والاستخدام غير المصرح به",
        "تحسين الإنتاجية وتقليل التكاليف التشغيلية",
      ],
      en: [
        "Real-time tracking of equipment and assets",
        "Fuel consumption monitoring",
        "Predictive maintenance and service alerts",
        "Theft and unauthorized-use detection",
        "Improve productivity and reduce operational costs",
      ],
    },
  },
];

// نصوص صفحة المنتجات
interface ProductsPageContent {
  crumb: string;
  heroTitle: string;
  heroHighlight: string;
  heroLead: string;
  heroCta: string;
  all: string;
  categories: Record<ProductCategory, string>;
  listEyebrow: string;
  listTitle: string;
  listLead: string;
  showMore: string;
  showLess: string;
  benefits: string[];
  gps: {
    eyebrow: string;
    title: string;
    lead: string;
    before: string;
    after: string;
    beforeItems: string[];
    afterItems: string[];
    features: { title: string; text: string }[];
  };
  platforms: {
    eyebrow: string;
    title: string;
    lead: string;
    items: { image: string; title: string; text: string }[];
  };
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
}

export const productsPageContent: Record<Locale, ProductsPageContent> = {
  ar: {
    crumb: "منتجاتنا",
    heroTitle: "حلول تقنية متقدمة",
    heroHighlight: "تمكّن مشاريعك من الدقة والكفاءة",
    heroLead:
      "نوفر حلولًا تقنية متقدمة من أجهزة ومنصات وبرمجيات، لتمكين عملائنا من تنفيذ مشاريعهم بكفاءة ودقة عالية.",
    heroCta: "اطلب عرضًا توضيحيًا",
    all: "الكل",
    categories: {
      devices: "أجهزة المسح وتحديد المواقع",
      platforms: "المنصات والبرمجيات",
      imagery: "الصور والذكاء الاصطناعي",
    },
    listEyebrow: "منتجاتنا",
    listTitle: "13 منتجًا لمشاريع أذكى",
    listLead: "اختر الفئة لاستعراض المنتجات المرتبطة بها.",
    showMore: "عرض المزيد",
    showLess: "عرض أقل",
    benefits: ["الجودة والدقة في كل التفاصيل", "دعم متخصص على مدار الساعة", "حلول ذكية لمشاريع المستقبل", "حلول تقنية متقدمة وأجهزة حديثة"],
    gps: {
      eyebrow: "UGPS",
      title: "حل لمشاكل تحديد المواقع (GPS) في الأماكن المغلقة",
      lead: "كيف يغيّر UGPS تحديد المواقع داخل الأنفاق والمواقع تحت الأرض والمنشآت الداخلية.",
      before: "قبل",
      after: "بعد",
      beforeItems: [
        "إشارات GPS التقليدية لا تستطيع اختراق الأماكن المغلقة لتحديد الموقع الحالي.",
        "لا توجد إشارة داخل المباني والأنفاق.",
        "صعوبة في تحديد المواقع بدقة داخل الأنفاق والمواقع تحت الأرض والمنشآت الداخلية.",
      ],
      afterItems: [
        "تغطية شاملة باستخدام أجهزة uGPS لاستقبال جميع إشارات GNSS الحالية.",
        "دقة أعلى من 3 أمتار حتى عند السرعات العالية التي تصل إلى 100 كم/ساعة في أي بيئة.",
        "مناسب لمختلف البيئات بما فيها الأنفاق والمواقع تحت الأرض والمطارات والمناطق الحضرية عالية الكثافة.",
        "متوافق مع معايير الاتحاد الأوروبي الداعمة لسلامة الطيران والأنفاق.",
      ],
      features: [
        { title: "دقة عالية", text: "دقة ضمن متر واحد في الأماكن الخارجية باستخدام نظام تحديد المواقع الهجين (GNSS)." },
        { title: "تغطية واسعة", text: "تغطية تصل إلى 90% داخل الأنفاق والمواقع تحت الأرض باستخدام uGPS." },
        { title: "دعم السرعات العالية", text: "يحافظ على دقة التحديد حتى عند السرعات العالية للمركبات المتحركة." },
        { title: "بدون فقدان للإشارة", text: "لا يوجد فقدان للإشارة في المواقع الداخلية وتحت الأرض." },
        { title: "تكامل سلس", text: "سهولة التكامل مع البنية التحتية الحالية والمستقبلية." },
        { title: "المعايير العالمية", text: "متوافق مع المعايير العالمية بما فيها Galileo وGLONASS وGPS." },
      ],
    },
    platforms: {
      eyebrow: "نماذج من أعمالنا",
      title: "منصات جغرافية مخصصة",
      lead: "أمثلة على لوحات التحكم والمنصات التي نطوّرها لعملائنا.",
      items: [
        { image: "/images/platforms/waste.webp", title: "منصة إدارة النفايات الذكية", text: "منصة رقمية لإدارة ومراقبة النفايات بكفاءة في مختلف مناطق المملكة." },
        { image: "/images/platforms/real-estate.webp", title: "منصة السجل العقاري", text: "إدارة الأراضي والقطع والملكيات والتقييم العقاري وكشف المخالفات." },
        { image: "/images/platforms/land.webp", title: "منصة التخطيط المكاني والمعاملات العقارية", text: "متابعة المعاملات العقارية واستخدامات الأراضي على مستوى المناطق والمدن." },
      ],
    },
    ctaTitle: "هل تريد معرفة المنتج المناسب لمشروعك؟",
    ctaText: "تواصل معنا وسيساعدك فريقنا في اختيار الحل الأنسب وتقديم عرض توضيحي.",
    ctaButton: "تواصل معنا",
  },
  en: {
    crumb: "Products",
    heroTitle: "Advanced technical solutions",
    heroHighlight: "for precise, efficient projects",
    heroLead:
      "We provide advanced devices, platforms and software that enable our clients to execute their projects with high efficiency and accuracy.",
    heroCta: "Request a Demo",
    all: "All",
    categories: {
      devices: "Surveying & Positioning Devices",
      platforms: "Platforms & Software",
      imagery: "Imagery & AI",
    },
    listEyebrow: "Our Products",
    listTitle: "13 products for smarter projects",
    listLead: "Choose a category to browse its products.",
    showMore: "Show more",
    showLess: "Show less",
    benefits: ["Quality and accuracy in every detail", "Dedicated support around the clock", "Smart solutions for future projects", "Advanced technical solutions and modern devices"],
    gps: {
      eyebrow: "UGPS",
      title: "Solving GPS positioning challenges in enclosed sites",
      lead: "How UGPS transforms positioning inside tunnels, underground sites and indoor facilities.",
      before: "Before",
      after: "After",
      beforeItems: [
        "Conventional GNSS signals cannot penetrate enclosed areas to determine the current location.",
        "No signal indoors.",
        "Unable to accurately determine locations in enclosed areas such as tunnels, underground sites and indoor facilities.",
      ],
      afterItems: [
        "Comprehensive coverage with uGPS equipment to receive all current GNSS signals.",
        "Accuracy better than 3 meters, maintained even at speeds up to 100 km/h in any environment.",
        "Suitable for tunnels, underground sites, indoor facilities and high-density urban areas.",
        "Compliant with European Union regulations supporting aviation and tunnel safety standards.",
      ],
      features: [
        { title: "High accuracy", text: "Accuracy within 1 meter outdoors using a hybrid positioning system (GNSS)." },
        { title: "High coverage", text: "Up to 90% system coverage inside tunnels and underground sites using uGPS." },
        { title: "High-speed support", text: "Maintains high accuracy even at high speeds for moving vehicles." },
        { title: "No signal loss", text: "No loss of signal in indoor and underground areas." },
        { title: "Seamless integration", text: "Integrates with existing and future infrastructure." },
        { title: "Global standards", text: "Compliant with global standards including Galileo, GLONASS and GPS." },
      ],
    },
    platforms: {
      eyebrow: "Showcase",
      title: "Custom geospatial platforms",
      lead: "Examples of the dashboards and platforms we build for our clients.",
      items: [
        { image: "/images/platforms/waste.webp", title: "Smart Waste Management Platform", text: "A digital platform for efficient waste management and monitoring across the Kingdom." },
        { image: "/images/platforms/real-estate.webp", title: "Real Estate Registry Platform", text: "Manage lands, plots, ownership and valuation, and detect violations." },
        { image: "/images/platforms/land.webp", title: "Spatial Planning & Land Transactions Platform", text: "Track real estate transactions and land use across regions and cities." },
      ],
    },
    ctaTitle: "Not sure which product fits your project?",
    ctaText: "Contact us and our team will help you choose the right solution and arrange a demo.",
    ctaButton: "Contact Us",
  },
};
