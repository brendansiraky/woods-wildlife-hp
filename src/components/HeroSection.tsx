import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <section className="container py-16 md:py-24 lg:py-32 bg-primary-foreground">
      <div className="max-w-3xl">
        <p className="text-xs md:text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground mb-5">
          Licensed & Insured · Fast Local Response
        </p>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[0.9] mb-6">
          Snake Catcher
          <br />
          Sunshine Coast
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed">Licensed snake catcher based in Mudjimba providing fast and safe snake removal across the Sunshine Coast.      Rapid response throughout Northern Sunshine Coast suburbs.                                                                                                     




        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-5">
          <a href="tel:0435529657" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg text-base font-medium hover:opacity-90 transition-opacity">

            <Phone className="w-5 h-5" />
            Call 0435 529 657
          </a>
          <Link to="/contact"
          className="inline-flex items-center justify-center gap-2 border border-foreground/20 text-foreground px-8 py-4 rounded-lg text-base font-medium hover:bg-foreground/5 transition-colors">
            Request a Call Back
          </Link>
        </div>

        <p className="text-sm text-muted-foreground">
          Available 7 Days · Fast Response · Fully Licensed
        </p>
      </div>
    </section>);

};

export default HeroSection;