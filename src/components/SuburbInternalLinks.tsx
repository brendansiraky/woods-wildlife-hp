
const allSuburbs = [
  { label: "Snake Catcher Mudjimba", href: "/snake-catcher-mudjimba" },
  { label: "Snake Catcher Marcoola", href: "/snake-catcher-marcoola" },
  { label: "Snake Catcher Twin Waters", href: "/snake-catcher-twin-waters" },
  { label: "Snake Catcher Pacific Paradise", href: "/snake-catcher-pacific-paradise" },
  { label: "Snake Catcher Mt Coolum", href: "/snake-catcher-mt-coolum" },
  { label: "Snake Catcher Bli Bli", href: "/snake-catcher-bli-bli" },
  { label: "Snake Catcher Coolum", href: "/snake-catcher-coolum" },
];

const siteLinks = [
  { label: "Snake Catching", href: "/snake-catching-sunshine-coast" },
  { label: "Contact Woods Wildlife", href: "/contact" },
  { label: "View All Locations", href: "/locations" },
];

interface SuburbInternalLinksProps {
  currentSuburb?: string;
  suburbsTitle?: string;
  suburbsDescription?: string;
}

const SuburbInternalLinks = ({ currentSuburb, suburbsTitle, suburbsDescription }: SuburbInternalLinksProps) => {
  const filteredSuburbs = currentSuburb
    ? allSuburbs.filter((s) => s.href !== currentSuburb)
    : allSuburbs;

  return (
    <>
      {/* Nearby Snake Catchers */}
      <section className="container py-20 md:py-28">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
            {suburbsTitle || "Nearby Snake Catchers"}
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
            {suburbsDescription || "We also provide snake catching services across nearby Sunshine Coast suburbs."}
          </p>
          <ul className="space-y-4">
            {filteredSuburbs.map((loc) => (
              <li key={loc.href}>
                <a
                  href={loc.href}
                  className="text-base md:text-lg text-foreground font-medium hover:text-primary transition-colors"
                >
                  {loc.label} →
                </a>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mt-8 mb-6">
            If your suburb isn't listed, we still service the entire Sunshine Coast. Call now for fast local response.
          </p>
          <a
            href="tel:0435529657"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg text-base font-medium hover:opacity-90 transition-opacity"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            Call 0435 529 657
          </a>
        </div>
      </section>

      {/* Services & Locations */}
      <section className="bg-card">
        <div className="container py-20 md:py-28">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
              Services &amp; Locations
            </h2>
            <ul className="space-y-4">
              {siteLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-base md:text-lg text-foreground font-medium hover:text-primary transition-colors"
                  >
                    {link.label} →
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default SuburbInternalLinks;
