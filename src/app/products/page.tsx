import type { Metadata } from "next";
import { products } from "@/data/products";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { StatusBanner } from "@/components/ui/StatusBanner";
import { ProductGrid } from "@/components/products/ProductGrid";

export const metadata: Metadata = {
  title: "Products",
  description: "Placeholder product catalogue for MusiR Pumps.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Catalogue"
        title="Products"
        description="These product cards are samples. Replace names, images, descriptions, and specifications in src/data/products.ts."
      />
      <Container className="space-y-8 py-12">
        <StatusBanner
          tone="info"
          title="Placeholder specifications"
          message="No flow rates, materials, or performance figures on this page are official."
        />
        <ProductGrid products={products} />
      </Container>
    </>
  );
}
