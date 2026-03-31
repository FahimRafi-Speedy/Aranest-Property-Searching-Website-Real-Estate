import type { Metadata } from "next";
import PropertiesPageClient from "./PropertiesPageClient";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Properties | Aranest",
  description: "Explore our properties",
};

export default function PropertiesPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PropertiesPageClient />
    </Suspense>
  );
}
