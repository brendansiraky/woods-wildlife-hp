import { Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="bg-primary text-primary-foreground">
      <div className="container py-20 md:py-28">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary-foreground">
            Need a Snake Catcher?
          </h2>

          <p className="text-primary-foreground/70 text-base md:text-lg leading-relaxed mb-10 max-w-lg mx-auto">
            If you have seen a snake on your property in Mudjimba or nearby northern Sunshine Coast suburbs, call immediately for professional removal.
          </p>

          <p className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-primary-foreground">
            0435 529 657
          </p>

          <p className="text-primary-foreground/60 text-sm mb-10">Available 7 Days</p>

          <a
            href="tel:0435529657"
            className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary px-10 py-4 rounded-lg text-base font-medium hover:opacity-90 transition-opacity"
          >
            <Phone className="w-5 h-5" />
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
