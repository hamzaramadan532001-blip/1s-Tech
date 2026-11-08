import type { Metadata } from "next";
import CareersPage from "@/components/CareersPage/CareersPage";

export const metadata: Metadata = {
  title: "التوظيف",
  description: "انضم إلى فريق تقني الأولى وشارك في مشاريع جغرافية مكانية وهندسية ذات أثر في المملكة.",
};

export default function Page() {
  return <CareersPage />;
}
