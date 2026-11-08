import type { Locale } from "@/lib/i18n/translations";
import type { FormField, FormMessages } from "@/components/PageKit/MailtoForm";
import { servicesContent } from "./services";

interface ContactContent {
  crumb: string;
  heroTitle: string;
  heroHighlight: string;
  heroLead: string;
  infoTitle: string;
  infoLead: string;
  phoneLabel: string;
  emailLabel: string;
  locationLabel: string;
  locationValue: string;
  mapTitle: string;
  formEyebrow: string;
  formTitle: string;
  formLead: string;
  fields: FormField[];
  messages: FormMessages;
  subject: (v: Record<string, string>) => string;
}

const otherAr = "أخرى";
const otherEn = "Other";

export const contactContent: Record<Locale, ContactContent> = {
  ar: {
    crumb: "تواصل معنا",
    heroTitle: "لنتحدث عن",
    heroHighlight: "مشروعك القادم",
    heroLead:
      "سواء كان لديك مشروع محدد أو استفسار عام، فريقنا جاهز للإجابة ومساعدتك في اختيار الحل الأنسب.",
    infoTitle: "معلومات الاتصال",
    infoLead: "تواصل معنا مباشرة عبر أي من القنوات التالية.",
    phoneLabel: "الهاتف",
    emailLabel: "البريد الإلكتروني",
    locationLabel: "العنوان",
    locationValue: "حي الياسمين، الرياض، المملكة العربية السعودية",
    mapTitle: "موقعنا على الخريطة",
    formEyebrow: "أرسل رسالة",
    formTitle: "كيف يمكننا مساعدتك؟",
    formLead: "املأ النموذج وسنعود إليك في أقرب وقت.",
    fields: [
      { name: "name", label: "الاسم الكامل", type: "text", required: true, placeholder: "اكتب اسمك", autoComplete: "name" },
      { name: "email", label: "البريد الإلكتروني", type: "email", required: true, placeholder: "name@company.com", autoComplete: "email" },
      { name: "phone", label: "رقم الجوال", type: "tel", placeholder: "+966 5x xxx xxxx", autoComplete: "tel" },
      { name: "company", label: "الجهة / الشركة", type: "text", placeholder: "اسم الجهة", autoComplete: "organization" },
      {
        name: "service",
        label: "الخدمة المطلوبة",
        type: "select",
        full: true,
        options: [...servicesContent.ar.items.map((s) => s.title), otherAr],
      },
      { name: "message", label: "تفاصيل الرسالة", type: "textarea", required: true, full: true, placeholder: "حدّثنا عن مشروعك أو استفسارك..." },
    ],
    messages: {
      submit: "إرسال الرسالة",
      required: "هذا الحقل مطلوب",
      invalidEmail: "يرجى إدخال بريد إلكتروني صحيح",
      invalidPhone: "يرجى إدخال رقم جوال صحيح",
      invalidUrl: "يرجى إدخال رابط صحيح",
      selectPlaceholder: "اختر الخدمة",
      note: "عند الإرسال سيُفتح برنامج البريد لديك برسالة جاهزة إلى info@1stech.sa.",
      success: "تم تجهيز رسالتك في برنامج البريد، اضغط إرسال هناك لإتمامها. شكرًا لتواصلك معنا!",
    },
    subject: (v) => `استفسار من الموقع${v.service ? ` - ${v.service}` : ""} - ${v.name}`,
  },
  en: {
    crumb: "Contact Us",
    heroTitle: "Let's talk about",
    heroHighlight: "your next project",
    heroLead:
      "Whether you have a specific project or a general question, our team is ready to help you find the right solution.",
    infoTitle: "Contact Information",
    infoLead: "Reach us directly through any of these channels.",
    phoneLabel: "Phone",
    emailLabel: "Email",
    locationLabel: "Location",
    locationValue: "Al Yasmin District, Riyadh, Saudi Arabia",
    mapTitle: "Our location on the map",
    formEyebrow: "Send a Message",
    formTitle: "How can we help?",
    formLead: "Fill in the form and we'll get back to you shortly.",
    fields: [
      { name: "name", label: "Full name", type: "text", required: true, placeholder: "Your name", autoComplete: "name" },
      { name: "email", label: "Email", type: "email", required: true, placeholder: "name@company.com", autoComplete: "email" },
      { name: "phone", label: "Mobile number", type: "tel", placeholder: "+966 5x xxx xxxx", autoComplete: "tel" },
      { name: "company", label: "Organization", type: "text", placeholder: "Organization name", autoComplete: "organization" },
      {
        name: "service",
        label: "Service of interest",
        type: "select",
        full: true,
        options: [...servicesContent.en.items.map((s) => s.title), otherEn],
      },
      { name: "message", label: "Message", type: "textarea", required: true, full: true, placeholder: "Tell us about your project or question..." },
    ],
    messages: {
      submit: "Send Message",
      required: "This field is required",
      invalidEmail: "Please enter a valid email",
      invalidPhone: "Please enter a valid phone number",
      invalidUrl: "Please enter a valid link",
      selectPlaceholder: "Select a service",
      note: "Submitting opens your email app with a ready message to info@1stech.sa.",
      success: "Your message is ready in your email app. Press send there to complete it. Thank you for reaching out!",
    },
    subject: (v) => `Website inquiry${v.service ? ` - ${v.service}` : ""} - ${v.name}`,
  },
};
