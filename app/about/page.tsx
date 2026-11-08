import type { Metadata } from "next";
import AboutPage from "@/components/AboutPage/AboutPage";

export const metadata: Metadata = {
  title: "من نحن",
  description:
    "شركة تقني الأولى: شركة سعودية رائدة تأسست عام 2022، متخصصة في الاستشارات الهندسية والمساحة والتخطيط العمراني ونظم المعلومات الجغرافية.",
};

export default function Page() {
  return <AboutPage />;
}
