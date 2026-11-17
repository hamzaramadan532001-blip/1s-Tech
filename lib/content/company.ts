import type { Locale } from "@/lib/i18n/translations";

// محتوى من الملف التعريفي للشركة (نوفمبر 2026).
// ملاحظة: أرقام المشاريع مأخوذة من النسخة العربية V2 (الأحدث)،
// لأن النسخة الإنجليزية V1 فيها أرقام مختلفة.

interface CompanyContent {
  tagline: string;
  motto: string;
  aboutTitle: string;
  aboutBullets: string[];
  cmmi: string;
  partnersTitle: string;
  projects: {
    eyebrow: string;
    title: string;
    lead: string;
    stats: { value: string; label: string; text: string; tone: "blue" | "green" | "orange" | "violet" }[];
    regionsTitle: string;
    regions: string[];
    servicesTitle: string;
    services: string[];
    sectorsTitle: string;
    sectors: string[];
  };
  clients: { eyebrow: string; title: string; lead: string };
  team: { eyebrow: string; title: string; lead: string; items: { title: string; text: string }[] };
}

export const companyContent: Record<Locale, CompanyContent> = {
  ar: {
    tagline: "حلول جغرافية - إدارة للبيانات",
    motto: "نحلم • نبتكر • ونحقق",
    aboutTitle: "عن تقني الأولى",
    aboutBullets: [
      "تأسست تقني الأولى في عام 2022 كشركة سعودية، برؤية واضحة لتقديم خدمات استشارية متقدمة في مجال المعلومات الجيومكانية والجيوماتكس.",
      "نقدم مجموعة متكاملة من الخدمات تشمل الاستشارات الجيومكانية، والمساحة والخرائط، والتخطيط العمراني، ونظم المعلومات الجغرافية (GIS)، بالإضافة إلى إدارة وتحليل البيانات، باستخدام أحدث التقنيات والمعايير العالمية.",
      "أسهم فريقنا ذو الخبرة في تمكين الجهات الحكومية والعديد من القطاعات في المملكة، وكان له دور فاعل في تأسيس وتشغيل مراكز البيانات الجيومكانية، ودمج البيانات الجغرافية وتحويلها إلى رؤى قيّمة تدعم اتخاذ القرار في مختلف الصناعات وعمليات التخطيط.",
      "نلتزم بتقديم أعمال عالية الجودة من خلال فريق عمل متمرس ومؤهل، يتمتع بكفاءة عالية في إدارة المشاريع الكبيرة والمعقدة، مع تميز في العمل الجماعي والمرونة في التنفيذ، وتركيز قوي على رضا العملاء.",
      "نواصل التركيز على الابتكار والتميز في الخدمات، مع تقديم حلول مستدامة واستشرافية تلبي احتياجات عملائنا اليوم وتواكب تطلعاتهم المستقبلية.",
    ],
    cmmi: "حاصلون على شهادة CMMI المستوى الخامس",
    partnersTitle: "شركاؤنا التقنيون",
    projects: {
      eyebrow: "مشاريعنا",
      title: "مشاريعنا في المملكة العربية السعودية",
      lead: "نقدم حلولًا جغرافية مكانية متكاملة باستخدام أحدث التقنيات لدعم البنية التحتية للبيانات المكانية والتحول الرقمي واتخاذ القرار المعتمد على الأدلة، للجهات الحكومية والقطاع الخاص في مختلف مناطق المملكة.",
      stats: [
        { value: "+20", label: "المشاريع المنجزة", text: "أكثر من 20 مشروعًا جغرافيًا مكانيًا نُفذت بنجاح في مختلف القطاعات.", tone: "blue" },
        { value: "+12", label: "مشاريعنا الحالية", text: "مشروعًا قيد التنفيذ حاليًا مع جهات حكومية وخاصة.", tone: "green" },
        { value: "+15", label: "مشاريعنا المتوقعة", text: "مشروعًا في المراحل النهائية من التفاوض للدخول في التعاقد قريبًا.", tone: "orange" },
        { value: "+22", label: "جهة حكومية", text: "جهة حكومية وثقت بخبراتنا وحلولنا.", tone: "violet" },
      ],
      regionsTitle: "مناطق عملنا",
      regions: ["الرياض", "المنطقة الشرقية", "الأحساء", "مكة المكرمة", "المدينة المنورة", "تبوك", "عسير"],
      servicesTitle: "خدماتنا الرئيسية",
      services: [
        "التحليل المكاني",
        "نظم المعلومات الجغرافية (GIS)",
        "التصوير الجوي (الطائرات بدون طيار)",
        "المعالجة والتحليل بعد المسح",
        "تطوير البيانات الجغرافية المكانية",
        "الدعم الفني والاستشارات",
        "النمذجة ثلاثية الأبعاد ونمذجة المدن",
        "الذكاء الاصطناعي",
      ],
      sectorsTitle: "القطاعات التي نخدمها",
      sectors: [
        "الأمن والدفاع",
        "الجهات الحكومية",
        "الموارد الطبيعية والتنوع الحيوي",
        "الطاقة والصناعة",
        "النقل والبنية التحتية",
        "السياحة والتراث",
        "البلديات والإسكان",
        "المياه والبيئة",
        "الزراعة والأمن الغذائي",
      ],
    },
    clients: {
      eyebrow: "عملاؤنا",
      title: "جهات تثق بنا",
      lead: "نفخر بخدمة نخبة من الجهات الحكومية والمؤسسات الرائدة في المملكة.",
    },
    team: {
      eyebrow: "فريقنا",
      title: "فريق يصنع الفرق",
      lead: "يتمتع فريقنا بخبرة واسعة وكفاءات عالية، ويعمل بروح التعاون لتقديم حلول مبتكرة وموثوقة وعالية الجودة في جميع مراحل المشروع.",
      items: [
        {
          title: "خبرات متنوعة وكفاءات عالية",
          text: "يعمل جميع أعضاء الفريق معًا بفاعلية لضمان أعلى مستويات الجودة والمصداقية في تصميم وتنفيذ جميع مراحل المشروع.",
        },
        {
          title: "تواصل فعّال وإدارة علاقات متميزة",
          text: "مهارات تواصل قوية مع جميع أصحاب المصلحة، بما يضمن تنسيقًا سلسًا والتزامًا كاملًا بالجدول الزمني المتفق عليه.",
        },
        {
          title: "التطوير المستمر والابتكار",
          text: "نستثمر في التدريب وتطوير المهارات والمشاركة في المعارض والمؤتمرات المحلية والدولية لمواكبة أحدث التطورات في القطاع.",
        },
        {
          title: "منهجية متكاملة قائمة على تحقيق القيمة",
          text: "نجمع بين مختلف تخصصات الفريق لتقديم حلول متقدمة وعملية تحقق قيمة حقيقية وتجربة ناجحة تتجاوز توقعات عملائنا.",
        },
        {
          title: "الجودة والثقة",
          text: "نلتزم بأعلى معايير الجودة والمصداقية في كل ما نقوم به، بما يضمن نتائج مستدامة وقيمة مضافة لعملائنا وشركائنا.",
        },
      ],
    },
  },
  en: {
    tagline: "Geospatial Solutions - Data Management",
    motto: "We Dream • Innovate • Achieve",
    aboutTitle: "About 1sTech",
    aboutBullets: [
      "1sTech was launched in 2022 as a Saudi company, with a clear vision to provide advanced geospatial and geomatics consulting services.",
      "We offer a comprehensive portfolio of services that includes geospatial consulting, surveying and mapping, urban planning and geographic information systems (GIS), as well as data management and analysis, using the latest global technologies and standards.",
      "Our experienced team has helped empower government entities and various sectors in the Kingdom, and has been instrumental in establishing and operating geospatial data centers, integrating geospatial data and transforming it into valuable insights that support decision-making across industries and planning processes.",
      "We are committed to delivering high-quality work through an experienced and qualified team, with high efficiency in managing large and complex projects, exceptional teamwork, agile delivery and a strong focus on client satisfaction.",
      "We continuously focus on innovation and service excellence, providing sustainable, forward-looking solutions that meet our clients' needs today and tomorrow.",
    ],
    cmmi: "CMMI Maturity Level 5 certified",
    partnersTitle: "Our Technology Partners",
    projects: {
      eyebrow: "Our Projects",
      title: "Our projects in the Kingdom of Saudi Arabia",
      lead: "We deliver integrated geospatial solutions using the latest technologies to support spatial data infrastructure, digital transformation and evidence-based decision-making for government and private entities across the Kingdom.",
      stats: [
        { value: "+20", label: "Completed projects", text: "Geospatial projects successfully delivered across various sectors.", tone: "blue" },
        { value: "+12", label: "Ongoing projects", text: "Projects currently in execution with government and private entities.", tone: "green" },
        { value: "+15", label: "Expected projects", text: "Projects in the final negotiation stages, expected to be contracted soon.", tone: "orange" },
        { value: "+22", label: "Government entities", text: "Government entities that trust our expertise and solutions.", tone: "violet" },
      ],
      regionsTitle: "Where we work",
      regions: ["Riyadh", "Eastern Province", "Al-Ahsa", "Makkah", "Madinah", "Tabuk", "Asir"],
      servicesTitle: "Key services",
      services: [
        "Spatial Analysis",
        "Geographic Information Systems (GIS)",
        "Aerial Surveying (UAVs)",
        "Post-Processing and Analysis",
        "Geospatial Data Development",
        "Technical Support and Consulting",
        "3D Modeling and City Modeling",
        "Artificial Intelligence",
      ],
      sectorsTitle: "Sectors we serve",
      sectors: [
        "Security and Defense",
        "Government Entities",
        "Natural Resources and Biodiversity",
        "Energy and Industry",
        "Transport and Infrastructure",
        "Tourism and Heritage",
        "Municipalities and Housing",
        "Water and Environment",
        "Agriculture and Food Security",
      ],
    },
    clients: {
      eyebrow: "Our Clients",
      title: "Trusted by leading entities",
      lead: "We are proud to serve leading government entities and organizations across the Kingdom.",
    },
    team: {
      eyebrow: "Our Team",
      title: "A team that makes the difference",
      lead: "Our team brings extensive experience and high capabilities, working collaboratively to deliver high-quality, reliable and innovative solutions in every project phase.",
      items: [
        {
          title: "Diverse expertise and high capabilities",
          text: "All members work together effectively to ensure the highest quality and credibility in the design and execution of every project phase.",
        },
        {
          title: "Effective communication and relationship management",
          text: "Strong communication with all stakeholders, ensuring smooth coordination and full commitment to agreed timelines.",
        },
        {
          title: "Continuous development and innovation",
          text: "We invest in training, skills development and participation in local and international exhibitions and conferences to stay ahead of the industry.",
        },
        {
          title: "Integrated, value-driven approach",
          text: "We combine a multidisciplinary team to deliver advanced, practical solutions that create real value and exceed our clients' expectations.",
        },
        {
          title: "Quality and trust",
          text: "We hold ourselves to the highest standards of quality and credibility, delivering sustainable results and added value for our clients and partners.",
        },
      ],
    },
  },
};
