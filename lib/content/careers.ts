import type { Locale } from "@/lib/i18n/translations";
import type { FormField, FormMessages } from "@/components/PageKit/MailtoForm";

interface CareersContent {
  crumb: string;
  heroTitle: string;
  heroHighlight: string;
  heroLead: string;
  heroCta: string;
  whyEyebrow: string;
  whyTitle: string;
  whyLead: string;
  why: { title: string; text: string }[];
  fieldsEyebrow: string;
  fieldsTitle: string;
  fieldsLead: string;
  /** ثابت الترتيب في اللغتين (بنستخدمه للأيقونات) */
  fields: string[];
  openingsTitle: string;
  openingsText: string;
  openingsCta: string;
  processEyebrow: string;
  processTitle: string;
  process: { title: string; text: string }[];
  applyEyebrow: string;
  applyTitle: string;
  applyLead: string;
  formFields: FormField[];
  messages: FormMessages;
  subject: (v: Record<string, string>) => string;
}

const fieldsAr = [
  "نظم المعلومات الجغرافية (GIS)",
  "المساحة والمسح الميداني",
  "الاستشعار عن بُعد",
  "تطوير البرمجيات",
  "الهندسة والاستشارات",
  "التخطيط العمراني",
];

const fieldsEn = [
  "Geographic Information Systems (GIS)",
  "Surveying & Field Survey",
  "Remote Sensing",
  "Software Development",
  "Engineering & Consulting",
  "Urban Planning",
];

export const careersContent: Record<Locale, CareersContent> = {
  ar: {
    crumb: "التوظيف",
    heroTitle: "انضم إلى فريقنا",
    heroHighlight: "وشارك في صناعة المستقبل",
    heroLead:
      "نبحث دائمًا عن مواهب شغوفة بالبيانات المكانية والتقنية والهندسة، لتعمل معنا على مشاريع تُحدث أثرًا حقيقيًا في المملكة.",
    heroCta: "قدّم الآن",
    whyEyebrow: "لماذا تقني الأولى",
    whyTitle: "بيئة عمل تصنع الفرق",
    whyLead: "نؤمن بأن قوتنا في فريقنا، لذلك نستثمر في كل فرد فيه.",
    why: [
      { title: "مشاريع ذات أثر", text: "اعمل على مشاريع وطنية واسعة النطاق تخدم الجهات الحكومية والمجتمع." },
      { title: "أحدث التقنيات", text: "استخدم أحدث أدوات GIS والدرون والمسح الليزري والذكاء الاصطناعي." },
      { title: "نمو مستمر", text: "فرص للتعلّم والتدريب والتطور المهني مع خبراء في المجال." },
      { title: "فريق متعاون", text: "بيئة عمل قائمة على الشراكة وروح الفريق والاحترام المتبادل." },
    ],
    fieldsEyebrow: "المجالات",
    fieldsTitle: "التخصصات التي نبحث عنها",
    fieldsLead: "إذا كانت خبرتك في أحد هذه المجالات، فنحن نرغب في التعرّف عليك.",
    fields: fieldsAr,
    openingsTitle: "لا توجد وظائف شاغرة معلنة حاليًا",
    openingsText:
      "لكننا نرحّب دائمًا بالمواهب المميزة. أرسل طلبًا عامًا وسنتواصل معك عند توفر فرصة تناسب خبرتك.",
    openingsCta: "أرسل طلبًا عامًا",
    processEyebrow: "رحلة التوظيف",
    processTitle: "خطوات واضحة وبسيطة",
    process: [
      { title: "التقديم", text: "أرسل بياناتك وسيرتك الذاتية." },
      { title: "المراجعة", text: "يراجع فريقنا طلبك بعناية." },
      { title: "المقابلة", text: "نتعرّف عليك وعلى خبراتك." },
      { title: "الانضمام", text: "مرحبًا بك في فريق تقني الأولى!" },
    ],
    applyEyebrow: "قدّم الآن",
    applyTitle: "نموذج طلب التوظيف",
    applyLead: "املأ بياناتك، ثم أرفق سيرتك الذاتية في رسالة البريد قبل الإرسال.",
    formFields: [
      { name: "name", label: "الاسم الكامل", type: "text", required: true, placeholder: "اكتب اسمك", autoComplete: "name" },
      { name: "email", label: "البريد الإلكتروني", type: "email", required: true, placeholder: "name@email.com", autoComplete: "email" },
      { name: "phone", label: "رقم الجوال", type: "tel", required: true, placeholder: "+966 5x xxx xxxx", autoComplete: "tel" },
      { name: "field", label: "مجال التخصص", type: "select", required: true, options: [...fieldsAr, "أخرى"] },
      {
        name: "experience",
        label: "سنوات الخبرة",
        type: "select",
        options: ["حديث تخرج", "1 - 3 سنوات", "3 - 5 سنوات", "5 - 10 سنوات", "أكثر من 10 سنوات"],
      },
      { name: "link", label: "رابط LinkedIn أو معرض الأعمال", type: "url", placeholder: "linkedin.com/in/...", autoComplete: "url" },
      { name: "message", label: "نبذة عنك", type: "textarea", full: true, placeholder: "حدّثنا باختصار عن خبراتك وما يميزك..." },
    ],
    messages: {
      submit: "إرسال الطلب",
      required: "هذا الحقل مطلوب",
      invalidEmail: "يرجى إدخال بريد إلكتروني صحيح",
      invalidPhone: "يرجى إدخال رقم جوال صحيح",
      invalidUrl: "يرجى إدخال رابط صحيح",
      selectPlaceholder: "اختر",
      note: "سيُفتح برنامج البريد لديك برسالة جاهزة إلى info@1stech.sa. لا تنسَ إرفاق سيرتك الذاتية.",
      success: "تم تجهيز طلبك في برنامج البريد. أرفق سيرتك الذاتية ثم اضغط إرسال. بالتوفيق!",
    },
    subject: (v) => `طلب توظيف - ${v.field} - ${v.name}`,
  },
  en: {
    crumb: "Careers",
    heroTitle: "Join our team",
    heroHighlight: "and help shape the future",
    heroLead:
      "We are always looking for talent passionate about spatial data, technology and engineering to work with us on projects that make a real impact in the Kingdom.",
    heroCta: "Apply Now",
    whyEyebrow: "Why 1sTech",
    whyTitle: "A workplace that makes a difference",
    whyLead: "Our strength is our team, so we invest in every person on it.",
    why: [
      { title: "Impactful projects", text: "Work on large-scale national projects serving government entities and communities." },
      { title: "Latest technology", text: "Use the latest GIS, drone, laser scanning and AI tools." },
      { title: "Continuous growth", text: "Opportunities to learn, train and grow alongside industry experts." },
      { title: "Collaborative team", text: "A culture built on partnership, team spirit and mutual respect." },
    ],
    fieldsEyebrow: "Fields",
    fieldsTitle: "The disciplines we hire for",
    fieldsLead: "If your expertise is in one of these fields, we'd love to hear from you.",
    fields: fieldsEn,
    openingsTitle: "No open positions are listed right now",
    openingsText:
      "But we always welcome outstanding talent. Send a general application and we'll reach out when a suitable opportunity opens.",
    openingsCta: "Send a General Application",
    processEyebrow: "Hiring Journey",
    processTitle: "Clear, simple steps",
    process: [
      { title: "Apply", text: "Send your details and CV." },
      { title: "Review", text: "Our team reviews your application carefully." },
      { title: "Interview", text: "We get to know you and your experience." },
      { title: "Join", text: "Welcome to the 1sTech team!" },
    ],
    applyEyebrow: "Apply Now",
    applyTitle: "Job application form",
    applyLead: "Fill in your details, then attach your CV to the email before sending.",
    formFields: [
      { name: "name", label: "Full name", type: "text", required: true, placeholder: "Your name", autoComplete: "name" },
      { name: "email", label: "Email", type: "email", required: true, placeholder: "name@email.com", autoComplete: "email" },
      { name: "phone", label: "Mobile number", type: "tel", required: true, placeholder: "+966 5x xxx xxxx", autoComplete: "tel" },
      { name: "field", label: "Field", type: "select", required: true, options: [...fieldsEn, "Other"] },
      {
        name: "experience",
        label: "Years of experience",
        type: "select",
        options: ["Fresh graduate", "1 - 3 years", "3 - 5 years", "5 - 10 years", "10+ years"],
      },
      { name: "link", label: "LinkedIn or portfolio link", type: "url", placeholder: "linkedin.com/in/...", autoComplete: "url" },
      { name: "message", label: "About you", type: "textarea", full: true, placeholder: "Briefly tell us about your experience and what sets you apart..." },
    ],
    messages: {
      submit: "Submit Application",
      required: "This field is required",
      invalidEmail: "Please enter a valid email",
      invalidPhone: "Please enter a valid phone number",
      invalidUrl: "Please enter a valid link",
      selectPlaceholder: "Select",
      note: "Your email app will open with a ready message to info@1stech.sa. Don't forget to attach your CV.",
      success: "Your application is ready in your email app. Attach your CV and press send. Good luck!",
    },
    subject: (v) => `Job application - ${v.field} - ${v.name}`,
  },
};
