import type { Metadata } from "next";
import UseCasesPage from "@/components/UseCasesPage/UseCasesPage";

export const metadata: Metadata = {
  title: "حالات الاستخدام",
  description: "كيف توظّف تقني الأولى الذكاء الجغرافي المكاني في 17 قطاعًا من اللوجستيات والطاقة إلى الزراعة والطيران.",
};

export default function Page() {
  return <UseCasesPage />;
}
