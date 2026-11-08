import type { Metadata } from "next";
import ServicesPage from "@/components/ServicesPage/ServicesPage";

export const metadata: Metadata = {
  title: "الخدمات",
  description: "خدمات تقني الأولى في نظم المعلومات الجغرافية، المسح، الاستشعار عن بُعد، التوأم الرقمي والتخطيط العمراني.",
};

export default function Page() {
  return <ServicesPage />;
}
