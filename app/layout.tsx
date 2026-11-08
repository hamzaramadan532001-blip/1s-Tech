import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";
import { ThemeProvider } from "@/lib/theme/ThemeContext";

// نفس اسم وأيقونة التبويب في الموقع الحالي 1stech.sa:
// الصفحة الرئيسية "1s Tech – We Dream, Innovate & Achieve"
// وباقي الصفحات "اسم الصفحة – 1s Tech"
const SITE_NAME = "1s Tech";

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} – We Dream, Innovate & Achieve`,
    template: `%s – ${SITE_NAME}`,
  },
  description: "شركة تقني الأولى - الهندسة وحلول إدارة البيانات الجيومكانية",
  applicationName: SITE_NAME,
  icons: {
    icon: [
      { url: "/images/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/favicon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    // الأيقونة اللي بتظهر على الآيفون لما حد يضيف الموقع للشاشة الرئيسية
    apple: { url: "/images/favicon-180x180.png", sizes: "180x180" },
  },
  appleWebApp: {
    title: SITE_NAME,
  },
  other: {
    "msapplication-TileImage": "/images/favicon-270x270.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400;1,700&family=Cairo:wght@200..1000&family=Changa:wght@200..800&family=Noto+Sans+Arabic:wght@100..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      {/* ✅ أضف className="font-[Cairo]" هنا */}
      <body className="font-[Cairo]">
        <ThemeProvider>
          <LanguageProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}