import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductBySlug, getProductSlugs } from "@/data/products";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { StatusBanner } from "@/components/ui/StatusBanner";

export async function generateStaticParams() {
  return getProductSlugs().map((slug) => ({ slug }));
}

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) {
    return { title: "Product not found" };
  }
  return { title: product.name, description: product.summary };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <Container className="space-y-8 py-12">
      <StatusBanner
        tone="info"
        title="Placeholder product"
        message="This page is a layout sample. Replace the copy and specifications before publishing."
      />
      <div className="grid gap-8 lg:grid-cols-2">
        <PlaceholderImage label={product.imageLabel} className="rounded-lg" />
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal">
            {product.category}
          </p>
          <h1 className="mt-2 font-serif text-4xl text-navy">{product.name}</h1>
          <p className="mt-4 text-base leading-7 text-steel">{product.description}</p>
          <dl className="mt-6 grid gap-3 sm:grid-cols-2">
            {product.specifications.map((spec) => (
              <div key={spec.label} className="rounded-md bg-white p-3">
                <dt className="text-xs text-steel">{spec.label}</dt>
                <dd className="font-medium text-navy">{spec.value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 text-sm text-steel">
            Typical uses (placeholder): {product.typicalUses.join(", ")}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/contact">Ask about this product</ButtonLink>
            <ButtonLink href="/products" variant="secondary">
              Back to products
            </ButtonLink>
          </div>
        </div>
      </div>
    </Container>
  );
}
