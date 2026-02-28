
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
