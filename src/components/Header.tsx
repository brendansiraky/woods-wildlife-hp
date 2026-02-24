import { useState, useRef, useEffect, useCallback } from "react";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const locationLinks = [
  { label: "Snake Catcher Mudjimba", href: "/snake-catcher-mudjimba" },
  { label: "Snake Catcher Marcoola", href: "/snake-catcher-marcoola" },
  { label: "Snake Catcher Twin Waters", href: "/snake-catcher-twin-waters" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [mobileLocationsOpen, setMobileLocationsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setLocationsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="text-lg md:text-xl font-extrabold text-foreground">
          Woods Wildlife
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Home
          </Link>
          <Link
            to="/snake-catching-sunshine-coast"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Snake Catching
          </Link>

          {/* Locations Dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => {
              if (closeTimeout.current) {
                clearTimeout(closeTimeout.current);
                closeTimeout.current = null;
              }
              setLocationsOpen(true);
            }}
            onMouseLeave={() => {
              closeTimeout.current = setTimeout(() => {
                setLocationsOpen(false);
              }, 200);
            }}
          >
            <button
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setLocationsOpen(!locationsOpen)}
            >
              Locations
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
            {locationsOpen && (
              <div className="absolute top-full left-0 pt-1 w-56 z-50">
                <div className="bg-popover border border-border rounded-lg py-2">
                  {locationLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      onClick={() => setLocationsOpen(false)}
                      className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            to="/snake-catching-faq-sunshine-coast"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            FAQ
          </Link>
          <Link
            to="/contact"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </Link>
          <a
            href="tel:0435529657"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <Phone className="w-4 h-4" />
            Call 0435 529 657
          </a>
        </nav>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-3">
          <a
            href="tel:0435529657"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium"
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
            <Link
              to="/"
              onClick={() => setMobileOpen(false)}
              className="text-base text-muted-foreground hover:text-foreground transition-colors py-1"
            >
              Home
            </Link>
            <Link
              to="/snake-catching-sunshine-coast"
              onClick={() => setMobileOpen(false)}
              className="text-base text-muted-foreground hover:text-foreground transition-colors py-1"
            >
              Snake Catching
            </Link>

            {/* Mobile Locations */}
            <button
              onClick={() => setMobileLocationsOpen(!mobileLocationsOpen)}
              className="inline-flex items-center gap-1 text-base text-muted-foreground hover:text-foreground transition-colors py-1 text-left"
            >
              Locations
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileLocationsOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileLocationsOpen && (
              <div className="flex flex-col gap-3 pl-4">
                {locationLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => { setMobileOpen(false); setMobileLocationsOpen(false); }}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}

            <Link
              to="/snake-catching-faq-sunshine-coast"
              onClick={() => setMobileOpen(false)}
              className="text-base text-muted-foreground hover:text-foreground transition-colors py-1"
            >
              FAQ
            </Link>
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="text-base text-muted-foreground hover:text-foreground transition-colors py-1"
            >
              Contact
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
