const Footer = () => {
  const links = [
    { label: "Services", href: "#services" },
    { label: "Areas", href: "#areas" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="border-t border-border">
      <div className="container py-16 md:py-20">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <div>
            <p className="text-lg font-bold text-foreground mb-2">Woods Wildlife</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Licensed Snake Catcher
              <br />
              Sunshine Coast
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              <a href="tel:0435529657" className="hover:text-foreground transition-colors">
                0435 529 657
              </a>
            </p>
          </div>

          <nav className="flex gap-8">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <p className="text-xs text-muted-foreground mt-12">© Woods Wildlife</p>
      </div>
    </footer>
  );
};

export default Footer;
