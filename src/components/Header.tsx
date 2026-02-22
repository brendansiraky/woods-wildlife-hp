import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Areas", href: "#areas" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="/" className="text-lg md:text-xl font-bold text-foreground">
          Woods Wildlife
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:0435529657"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <Phone className="w-4 h-4" />
            Call 0435 529 657
          </a>
        </nav>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-3">
          <a
            href="tel:0435529657"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium"
          >
            <Phone className="w-4 h-4" />
            Call
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-border/50 bg-background pb-6 pt-4">
          <div className="container flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base text-muted-foreground hover:text-foreground transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
