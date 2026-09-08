export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "الرئيسية", href: "/" },
  { label: "من نحن", href: "/about" },
  { label: "الخدمات", href: "/services" },
  { label: "حالات الاستخدام", href: "/use-cases" },
  { label: "تواصل معنا", href: "/contact" },
  { label: "التوظيف", href: "/careers" },
];

// رابط خارجي (PDF) بيفتح في تاب جديد بدل ما يكون صفحة داخل الموقع
export const profilePdfLink: NavLink = {
  label: "الملف التعريفي",
  href: "https://1stech.sa/wp-content/uploads/2026/03/1stech-profile-JAN-2026-V1-Arabic.pdf",
};
