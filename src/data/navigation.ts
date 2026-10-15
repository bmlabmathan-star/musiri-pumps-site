export type NavItem = {
  href: string;
  label: string;
};

export const primaryNav: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/applications", label: "Applications" },
  { href: "/become-partner", label: "Become a Partner" },
  { href: "/contact", label: "Contact Us" },
];

export const accountNav: NavItem[] = [
  { href: "/login", label: "Customer Login" },
  { href: "/register", label: "Register" },
];

export const footerNav: NavItem[] = [
  ...primaryNav,
  { href: "/dashboard", label: "Customer Dashboard" },
  { href: "/admin", label: "Admin" },
];
