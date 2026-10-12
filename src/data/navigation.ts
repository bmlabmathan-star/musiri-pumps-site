export type NavItem = {
  href: string;
  label: string;
};

export const primaryNav: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/applications", label: "Applications" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
  { href: "/become-partner", label: "Become a Partner" },
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
