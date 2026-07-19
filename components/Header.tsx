import Image from "next/image";
import Link from "next/link";
import WhatsAppButton from "@/components/WhatsAppButton";

const navLinks = [
  { href: "/what-we-do", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/pricing", label: "Pricing" },
  { href: "/dealerships", label: "Dealerships" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 md:px-8 md:py-6">
        <Link
          href="/"
          className="shrink-0 transition-opacity duration-300 hover:opacity-85"
          aria-label="RIGN — Refined Automotive"
        >
          <Image
            src="/rign-logo/rign-header-logo.png"
            alt="RIGN — Refined Automotive"
            width={968}
            height={226}
            priority
            sizes="(max-width: 768px) 140px, 220px"
            className="h-8 w-auto sm:h-10 md:h-12"
          />
        </Link>

        <nav
          className="hidden items-center gap-8 text-xs font-medium tracking-[0.12em] text-foreground-secondary uppercase lg:flex"
          aria-label="Main"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors duration-300 hover:text-foreground relative after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-accent-muted after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {link.label}
            </Link>
          ))}
          <WhatsAppButton variant="inline" label="Get Your Quote" />
        </nav>
      </div>
    </header>
  );
}
