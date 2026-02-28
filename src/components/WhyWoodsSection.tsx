const items = [
  {
    title: "Fully Licensed Snake Catcher",
    desc: "Fully licensed and insured snake catcher using professional equipment and safe handling practices.",
  },
  {
    title: "Mudjimba Based – Fast Local Response",
    desc: "Based in Mudjimba for fast local response across the Northern Sunshine Coast.",
  },
  {
    title: "Safe Humane Snake Relocation",
    desc: "Snakes safely captured and relocated to suitable natural habitat whenever possible.",
  },
  {
    title: "Simple Flat-Fee Pricing",
    desc: "Clear upfront pricing with no hidden charges.",
  },
  {
    title: "Available 24/7",
    desc: "Reliable response when you need help most.",
  },
];

const WhyWoodsSection = () => {
  return (
    <section className="bg-card">
      <div className="container py-20 md:py-28">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
            Why Woods Wildlife
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-12">
            Fully licensed, Mudjimba-based snake catcher providing fast response across the Sunshine Coast.
          </p>
          <div className="space-y-8">
            {items.map((item) => (
              <div key={item.title}>
                <p className="text-foreground text-base md:text-lg font-bold mb-1">
                  <span className="text-primary">✓</span> {item.title}
                </p>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed pl-6">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWoodsSection;
