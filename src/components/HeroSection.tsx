import { Phone } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="container py-20 md:py-32 lg:py-40">
      <div className="max-w-3xl">
        <p className="text-xs md:text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground mb-6">
          Licensed & Insured · Fast Local Response
        </p>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-8">
          Snake Catcher
          <br />
          Sunshine Coast
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed">
          Licensed local specialist providing fast, safe and humane snake removal across the Sunshine Coast.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <a
            href="tel:0435529657"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-medium hover:opacity-90 transition-opacity"
          >
            <Phone className="w-5 h-5" />
            Call 0435 529 657
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 border border-foreground/20 text-foreground px-8 py-4 rounded-full text-base font-medium hover:bg-foreground/5 transition-colors"
          >
            Request a Call Back
          </a>
        </div>

        <p className="text-sm text-muted-foreground">
          Available 7 Days · Fast Response · Fully Licensed
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
