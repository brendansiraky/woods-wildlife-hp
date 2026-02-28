
const LocalSection = () => {
  const points = [
  "Prompt attendance",
  "Safe capture",
  "Responsible relocation",
  "Clear communication"];

  return (
    <section id="areas" className="bg-card">
      <div className="container py-20 md:py-28 bg-primary-foreground">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
            Mudjimba Based. Local Response.
          </h2>

          <div className="space-y-5 text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
            <p>
              Woods Wildlife is based in Mudjimba and focuses on fast response across nearby coastal suburbs including Marcoola, Twin Waters, Pacific Paradise, Mt Coolum and Bli Bli.
            </p>
            <p>
              Properties near bushland, dunes and waterways are more likely to experience snake activity, particularly during warmer months.
            </p>
            <p>As a local operator, our focus is simple:</p>
          </div>

          <ul className="space-y-3 text-foreground text-base mb-10">
            {points.map((p) =>
            <li key={p} className="flex gap-3">
                <span>•</span>
                {p}
              </li>
            )}
          </ul>

          <a
            href="/locations"
            className="inline-flex items-center justify-center border border-foreground/20 text-foreground px-8 py-4 rounded-lg text-base font-medium hover:bg-foreground/5 transition-colors">
            View Service Locations
          </a>
        </div>
      </div>
    </section>);
};

export default LocalSection;
