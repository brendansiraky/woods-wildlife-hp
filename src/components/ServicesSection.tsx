import { Link } from "react-router-dom";

const ServicesSection = () => {
  const services = [
  "Residential snake catching",
  "Commercial property response",
  "After-hours attendance",
  "Responsible relocation",
  "Fully insured service"];


  return (
    <section id="services" className="container py-20 md:py-28">
      <div className="max-w-2xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
          Snake Catching & Relocation – Sunshine Coast
        </h2>

        <div className="space-y-5 text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
          <p>Woods Wildlife delivers licensed snake catching and responsible relocation across the Sunshine Coast, with a focus on fast response throughout the northern coastal suburbs. 
          </p>
          <p>
            We attend residential and commercial properties including homes, units, sheds, roof spaces, construction sites and acreage.
          </p>
          <p>
            All snakes are safely captured and relocated in accordance with Queensland wildlife regulations.
          </p>
        </div>

        <ul className="space-y-3 text-foreground text-base mb-10">
          {services.map((s) => <li key={s} className="flex gap-3">
              <span>•</span>
              {s}
            </li>
          )}
        </ul>

        <Link
          to="/snake-catching-sunshine-coast"
          className="inline-flex items-center justify-center border border-foreground/20 text-foreground px-8 py-4 rounded-lg text-base font-medium hover:bg-foreground/5 transition-colors">
          Learn More About Snake Catching
        </Link>
      </div>
    </section>);

};

export default ServicesSection;
