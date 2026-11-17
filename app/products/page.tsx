import type { Metadata } from "next";
import ProductsPage from "@/components/ProductsPage/ProductsPage";

export const metadata: Metadata = {
  title: "منتجاتنا",
  description:
    "منتجات تقني الأولى: UGPS، SHARE 1055 PRO، SHARE SLAM S20، مسكن، GeoRaster، ImagePro، MapPro، FeatureAI، 3DPro، صور الأقمار الصناعية، uTracker، Lepton Software وإدارة المعدات.",
};

export default function Page() {
  return <ProductsPage />;
}
