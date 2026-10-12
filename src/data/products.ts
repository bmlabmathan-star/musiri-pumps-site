/**
 * Product catalogue stored as plain data so it is easy to edit later.
 * Names, images, descriptions, and specifications are placeholders.
 * When a database is connected, this file can be replaced with a data fetch.
 */

export type ProductSpecification = {
  label: string;
  value: string;
};

export type Product = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  description: string;
  featured: boolean;
  imageLabel: string;
  specifications: ProductSpecification[];
  typicalUses: string[];
};

export const products: Product[] = [
  {
    slug: "placeholder-submersible-pump",
    name: "Placeholder Submersible Pump",
    category: "Submersible",
    summary:
      "Placeholder product summary — replace with a short description of this pump range.",
    description:
      "Placeholder description. Add materials, duty, installation notes, and official specifications when they are available. Nothing on this card is a technical claim.",
    featured: true,
    imageLabel: "Placeholder image — replace with a product photograph",
    specifications: [
      { label: "Flow rate", value: "[Value to be added]" },
      { label: "Head", value: "[Value to be added]" },
      { label: "Power", value: "[Value to be added]" },
      { label: "Outlet size", value: "[Value to be added]" },
    ],
    typicalUses: ["Agriculture", "Domestic water supply"],
  },
  {
    slug: "placeholder-centrifugal-pump",
    name: "Placeholder Centrifugal Pump",
    category: "Centrifugal",
    summary:
      "Placeholder product summary — replace with a short description of this pump range.",
    description:
      "Placeholder description. Add duty, construction, and official specifications before publishing.",
    featured: true,
    imageLabel: "Placeholder image — replace with a product photograph",
    specifications: [
      { label: "Flow rate", value: "[Value to be added]" },
      { label: "Head", value: "[Value to be added]" },
      { label: "Power", value: "[Value to be added]" },
      { label: "Mounting", value: "[Value to be added]" },
    ],
    typicalUses: ["Industrial use", "Domestic water supply"],
  },
  {
    slug: "placeholder-borewell-pump",
    name: "Placeholder Borewell Pump",
    category: "Borewell",
    summary:
      "Placeholder product summary — replace with a short description of this pump range.",
    description:
      "Placeholder description. Add borehole diameter, stages, and official specifications when they are available.",
    featured: true,
    imageLabel: "Placeholder image — replace with a product photograph",
    specifications: [
      { label: "Bore diameter", value: "[Value to be added]" },
      { label: "Stages", value: "[Value to be added]" },
      { label: "Power", value: "[Value to be added]" },
      { label: "Cable length", value: "[Value to be added]" },
    ],
    typicalUses: ["Agriculture", "Domestic water supply"],
  },
  {
    slug: "placeholder-domestic-pressure-pump",
    name: "Placeholder Domestic Pressure Pump",
    category: "Domestic",
    summary:
      "Placeholder product summary — replace with a short description of this pump range.",
    description:
      "Placeholder description. Add household duty details and official specifications when they are available.",
    featured: false,
    imageLabel: "Placeholder image — replace with a product photograph",
    specifications: [
      { label: "Flow rate", value: "[Value to be added]" },
      { label: "Pressure", value: "[Value to be added]" },
      { label: "Power", value: "[Value to be added]" },
      { label: "Tank size", value: "[Value to be added]" },
    ],
    typicalUses: ["Domestic water supply"],
  },
  {
    slug: "placeholder-irrigation-pump",
    name: "Placeholder Irrigation Pump",
    category: "Agricultural",
    summary:
      "Placeholder product summary — replace with a short description of this pump range.",
    description:
      "Placeholder description. Add irrigation duty details and official specifications when they are available.",
    featured: false,
    imageLabel: "Placeholder image — replace with a product photograph",
    specifications: [
      { label: "Flow rate", value: "[Value to be added]" },
      { label: "Head", value: "[Value to be added]" },
      { label: "Power", value: "[Value to be added]" },
      { label: "Suction size", value: "[Value to be added]" },
    ],
    typicalUses: ["Agriculture"],
  },
  {
    slug: "placeholder-industrial-process-pump",
    name: "Placeholder Industrial Process Pump",
    category: "Industrial",
    summary:
      "Placeholder product summary — replace with a short description of this pump range.",
    description:
      "Placeholder description. Add process fluid notes and official specifications when they are available.",
    featured: false,
    imageLabel: "Placeholder image — replace with a product photograph",
    specifications: [
      { label: "Flow rate", value: "[Value to be added]" },
      { label: "Head", value: "[Value to be added]" },
      { label: "Material", value: "[Value to be added]" },
      { label: "Seal type", value: "[Value to be added]" },
    ],
    typicalUses: ["Industrial use"],
  },
];

export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.featured);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getProductSlugs(): string[] {
  return products.map((product) => product.slug);
}
