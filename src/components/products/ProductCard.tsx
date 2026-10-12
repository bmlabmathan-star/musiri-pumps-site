import Link from "next/link";
import type { Product } from "@/data/products";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg border border-navy/10 bg-white shadow-sm">
      <PlaceholderImage label={product.imageLabel} />
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal">
          {product.category}
        </p>
        <h3 className="mt-2 font-serif text-xl text-navy">{product.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-6 text-steel">{product.summary}</p>
        <dl className="mt-4 grid grid-cols-2 gap-2 text-xs">
          {product.specifications.slice(0, 4).map((spec) => (
            <div key={spec.label} className="rounded bg-paper px-2 py-2">
              <dt className="text-steel">{spec.label}</dt>
              <dd className="font-medium text-navy">{spec.value}</dd>
            </div>
          ))}
        </dl>
        <Link
          href={`/products/${product.slug}`}
          className="mt-5 text-sm font-semibold text-teal hover:text-navy"
        >
          View placeholder details
        </Link>
      </div>
    </article>
  );
}
