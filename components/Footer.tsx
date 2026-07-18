import Link from "next/link";
import BrandMark from "@/components/BrandMark";
import CookieSettingsButton from "@/components/CookieSettingsButton";
import WhatsAppButton from "@/components/WhatsAppButton";

const navLinks = [
  { href: "/what-we-do", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/pricing", label: "Pricing" },
  { href: "/dealerships", label: "Dealerships" },
  { href: "/areas-we-cover", label: "Areas" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-accent-faint bg-background-secondary">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-3 md:px-8 md:py-20">
        <div>
          <Link
            href="/"
            className="inline-block transition-opacity duration-300 hover:opacity-85"
            aria-label="CHRM — Exterior Trim Specialists"
          >
            <BrandMark size="md" />
          </Link>
          <p className="mt-3 text-[10px] font-medium tracking-[0.18em] text-accent-label uppercase">
            Exterior Trim Specialists
          </p>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-foreground-secondary">
            Mobile chrome delete. South Yorkshire based. UK-wide by
            appointment. Fitted with 3M premium cast-PVC wrapping film.
          </p>
        </div>

        <div>
          <p className="text-[10px] font-medium tracking-[0.18em] text-accent-label uppercase">
            Explore
          </p>
          <ul className="mt-5 space-y-3 text-sm text-foreground-secondary">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors duration-300 hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[10px] font-medium tracking-[0.18em] text-accent-label uppercase">
            Contact
          </p>
          <ul className="mt-5 space-y-4 text-sm text-foreground-secondary">
            <li>
              <a
                href="mailto:info@chrmuk.com"
                className="transition-colors duration-300 hover:text-foreground"
              >
                info@chrmuk.com
              </a>
            </li>
            <li>
              <WhatsAppButton variant="inline" label="Get Your Quote" />
            </li>
            <li>South Yorkshire · United Kingdom</li>
          </ul>

          <div className="mt-8 flex flex-wrap gap-6 text-xs text-foreground-secondary">
            <Link
              href="/privacy"
              className="tracking-[0.08em] uppercase transition-colors duration-300 hover:text-foreground"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="tracking-[0.08em] uppercase transition-colors duration-300 hover:text-foreground"
            >
              Terms
            </Link>
            <CookieSettingsButton />
          </div>
        </div>
      </div>

      <div className="border-t border-border px-5 py-5 text-center text-[11px] tracking-[0.08em] text-foreground-secondary md:px-8">
        © {new Date().getFullYear()} CHRM UK
      </div>
    </footer>
  );
}
