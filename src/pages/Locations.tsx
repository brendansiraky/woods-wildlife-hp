import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const locations = [
  { label: "Snake Catcher Mudjimba", href: "/snake-catcher-mudjimba" },
  { label: "Snake Catcher Marcoola", href: "/snake-catcher-marcoola" },
  { label: "Snake Catcher Twin Waters", href: "/snake-catcher-twin-waters" },
  { label: "Snake Catcher Pacific Paradise", href: "/snake-catcher-pacific-paradise" },
  { label: "Snake Catcher Mt Coolum", href: "/snake-catcher-mt-coolum" },
  { label: "Snake Catcher Bli Bli", href: "/snake-catcher-bli-bli" },
  { label: "Snake Catcher Coolum", href: "/snake-catcher-coolum" },
];

const Locations = () => {
  return (
    <>
      <Helmet>
        <title>Service Locations | Snake Catcher Sunshine Coast – Woods Wildlife</title>
        <meta name="description" content="Woods Wildlife provides professional snake catching across Mudjimba, Marcoola, Twin Waters, Pacific Paradise, Mt Coolum, Bli Bli and Coolum." />
        <link rel="canonical" href="/locations/" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />

        <section className="container py-20 md:py-28">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
              Service Locations
            </h1>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-10">
              Woods Wildlife provides professional snake catching and relocation across the northern Sunshine Coast. Select your suburb below for local information.
            </p>
            <ul className="space-y-4">
              {locations.map((loc) => (
                <li key={loc.href}>
                  <Link
                    to={loc.href}
                    className="text-base md:text-lg text-foreground font-medium hover:text-primary transition-colors"
                  >
                    {loc.label} →
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-primary text-primary-foreground">
          <div className="container py-20 md:py-28">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary-foreground">
                Need a Snake Catcher?
              </h2>
              <p className="text-primary-foreground/70 text-base md:text-lg leading-relaxed mb-10 max-w-lg mx-auto">
                For fast professional snake removal across the northern Sunshine Coast, call directly.
              </p>
              <p className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-primary-foreground">0435 529 657</p>
              <p className="text-primary-foreground/60 text-sm mb-10">Available 7 days.</p>
              <a href="tel:0435529657" className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary px-10 py-4 rounded-lg text-base font-medium hover:opacity-90 transition-opacity">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Locations;
