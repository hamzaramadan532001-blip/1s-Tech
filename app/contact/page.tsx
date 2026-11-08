import type { Metadata } from "next";
import ContactPage from "@/components/ContactPage/ContactPage";

export const metadata: Metadata = {
  title: "تواصل معنا",
  description: "تواصل مع تقني الأولى: هاتف +966540007344، بريد info@1stech.sa، الرياض، المملكة العربية السعودية.",
};

export default function Page() {
  return <ContactPage />;
}
