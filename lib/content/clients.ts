// عملاؤنا — من الملف التعريفي للشركة (صفحة "عملاؤنا" / "Our Clients")
// الترتيب نفس ترتيب الملف، واللوجوهات مقصوصة منه في public/images/clients

export interface Client {
  logo: string;
  ar: string;
  en: string;
}

const logo = (n: number) => `/images/clients/client${String(n).padStart(2, "0")}.webp`;

export const clients: Client[] = [
  { logo: logo(1), ar: "وزارة الداخلية", en: "Ministry of Interior" },
  { logo: logo(2), ar: "حرس الحدود", en: "Border Guard" },
  { logo: logo(3), ar: "وزارة السياحة", en: "Ministry of Tourism" },
  { logo: logo(4), ar: "وزارة الشؤون البلدية والقروية والإسكان", en: "Ministry of Municipal, Rural Affairs and Housing" },
  { logo: logo(5), ar: "هيئة الرقابة النووية والإشعاعية", en: "Nuclear and Radiological Regulatory Commission" },
  { logo: logo(6), ar: "الهيئة الملكية للجبيل وينبع", en: "Royal Commission for Jubail and Yanbu" },
  { logo: logo(7), ar: "هيئة الهلال الأحمر السعودي", en: "Saudi Red Crescent Authority" },
  { logo: logo(8), ar: "هيئة تطوير المنطقة الشرقية", en: "Sharqia Development Authority" },
  { logo: logo(9), ar: "المؤسسة العامة للري", en: "Saudi Irrigation Organization" },
  { logo: logo(10), ar: "الهيئة الملكية لمدينة مكة المكرمة والمشاعر المقدسة", en: "Royal Commission for Makkah City and Holy Sites" },
  { logo: logo(11), ar: "الهيئة السعودية للبيانات والذكاء الاصطناعي (سدايا)", en: "Saudi Data & AI Authority (SDAIA)" },
  { logo: logo(12), ar: "نيوم", en: "NEOM" },
  { logo: logo(13), ar: "هيئة المساحة الجيولوجية السعودية", en: "Saudi Geological Survey" },
  { logo: logo(14), ar: "موبايلي", en: "Mobily" },
  { logo: logo(15), ar: "هيئة تطوير محمية الملك سلمان بن عبدالعزيز الملكية", en: "King Salman bin Abdulaziz Royal Reserve Development Authority" },
  { logo: logo(16), ar: "أمانة العاصمة المقدسة", en: "Holy Makkah Municipality" },
  { logo: logo(17), ar: "هيئة تطوير محافظة جدة", en: "Jeddah Development Authority" },
  { logo: logo(18), ar: "ماستر ووركس", en: "Master Works" },
  { logo: logo(19), ar: "وزارة الصناعة والثروة المعدنية", en: "Ministry of Industry and Mineral Resources" },
  { logo: logo(20), ar: "مجموعة عتيب", en: "Atheeb Group" },
  { logo: logo(21), ar: "هيئة تطوير محمية الإمام عبدالعزيز بن محمد الملكية", en: "Imam Abdulaziz Bin Mohammed Royal Reserve Development Authority" },
  { logo: logo(22), ar: "هيئة تطوير الأحساء", en: "Al Ahsa Development Authority" },
];

// شركاء التقنية (شريط أسفل صفحة "عن تقني الأولى")
export const techPartners = [
  { logo: "/images/partners/mapbox.webp", name: "Mapbox" },
  { logo: "/images/partners/esri.webp", name: "Esri" },
  { logo: "/images/partners/iciri.webp", name: "ICIRI" },
  { logo: "/images/partners/share.webp", name: "SHARE" },
];
