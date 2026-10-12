import type { Product } from "@/data/products";
import { EmptyState } from "@/components/ui/EmptyState";
import { ProductCard } from "@/components/products/ProductCard";

type ProductGridProps = {
  products: Product[];
  emptyTitle?: string;
  emptyMessage?: string;
};

export function ProductGrid({
  products,
  emptyTitle = "No products to show",
  emptyMessage = "The product list is empty. Add items in src/data/products.ts.",
}: ProductGridProps) {
  if (products.length === 0) {
    return <EmptyState title={emptyTitle} message={emptyMessage} />;
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  );
}
