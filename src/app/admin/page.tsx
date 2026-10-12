import type { Metadata } from "next";
import { products } from "@/data/products";
import { EmptyState } from "@/components/ui/EmptyState";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { StatusBanner } from "@/components/ui/StatusBanner";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Placeholder admin screens for products and enquiries. No backend is connected.",
};

export default function AdminPage() {
  return (
    <>
      <PageHeader
        eyebrow="Internal"
        title="Admin Dashboard"
        description="This screen shows how product and enquiry management could look. Buttons do not save changes."
      />
      <Container className="space-y-8 py-12">
        <StatusBanner
          tone="info"
          title="Admin tools are not live"
          message="This page is not connected to authentication or a database. Do not enter real customer data here."
        />

        <section className="rounded-lg border border-navy/10 bg-white p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="font-serif text-2xl text-navy">Products</h2>
            <button
              type="button"
              disabled
              className="rounded-md border border-navy/20 px-3 py-2 text-sm text-steel"
            >
              Add product (not connected)
            </button>
          </div>
          {products.length === 0 ? (
            <div className="mt-4">
              <EmptyState
                title="No products"
                message="Add placeholder products in src/data/products.ts."
              />
            </div>
          ) : (
            <div className="mt-4 overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <caption className="sr-only">Placeholder product list</caption>
                <thead className="border-b border-navy/10 text-xs uppercase tracking-wide text-steel">
                  <tr>
                    <th className="py-2 pr-4">Name</th>
                    <th className="py-2 pr-4">Category</th>
                    <th className="py-2 pr-4">Featured</th>
                    <th className="py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.slug} className="border-b border-navy/5">
                      <td className="py-3 pr-4 text-navy">{product.name}</td>
                      <td className="py-3 pr-4 text-steel">{product.category}</td>
                      <td className="py-3 pr-4 text-steel">{product.featured ? "Yes" : "No"}</td>
                      <td className="py-3">
                        <button type="button" disabled className="text-steel">
                          Edit (not connected)
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        <section className="rounded-lg border border-navy/10 bg-white p-6">
          <h2 className="font-serif text-2xl text-navy">Customer enquiries</h2>
          <div className="mt-4">
            <EmptyState
              title="No enquiries stored"
              message="Submitted contact forms are not saved yet. This list will fill when a backend is connected."
            />
          </div>
        </section>
      </Container>
    </>
  );
}
