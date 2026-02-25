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
        <title>Snake Catcher Service Areas | Sunshine Coast Snake Removal – Woods Wildlife</title>
        <meta name="description" content="Licensed snake catcher based in Mudjimba providing professional snake removal across northern Sunshine Coast suburbs including Marcoola, Twin Waters, Pacific Paradise, Mt Coolum, Bli Bli and Coolum." />
        <link rel="canonical" href="/locations/" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero */}
        <section className="container py-20 md:py-28">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
              Snake Catcher Service Areas – Sunshine Coast
            </h1>
            <div className="space-y-5 text-muted-foreground text-base md:text-lg leading-relaxed mb-10">
              <p>Woods Wildlife provides licensed snake catching and responsible relocation across the Sunshine Coast.</p>
              <p>Based in Mudjimba, we respond quickly to homes and businesses throughout northern Sunshine Coast suburbs including Marcoola, Twin Waters, Pacific Paradise, Mt Coolum, Bli Bli and Coolum.</p>
              <p>If you have seen a snake on your property, keep your distance and call immediately for professional removal.</p>
            </div>
            <a href="tel:0435529657" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg text-base font-medium hover:opacity-90 transition-opacity">
              <Phone className="w-5 h-5" />
              0435 529 657
            </a>
          </div>
        </section>

        {/* Northern Sunshine Coast */}
        <section className="bg-card">
          <div className="container py-20 md:py-28 bg-primary-foreground">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
                Snake Catcher Northern Sunshine Coast
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4">
                Snake activity is common across northern Sunshine Coast suburbs, particularly in coastal and bushland areas during warmer months.
              </p>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4">Woods Wildlife provides professional snake catching across:</p>
              <ul className="space-y-3 text-foreground text-base mb-8">
                {["Mudjimba", "Marcoola", "Twin Waters", "Pacific Paradise", "Mt Coolum", "Bli Bli", "Coolum"].map((item) =>
                  <li key={item} className="flex gap-3"><span>•</span>{item}</li>
                )}
              </ul>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                Select your suburb below for local snake catcher information.
              </p>
            </div>
          </div>
        </section>

        {/* Local Pages */}
        <section className="container py-20 md:py-28">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
              Local Snake Catcher Pages
            </h2>
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

        {/* Mudjimba Based */}
        <section className="bg-card">
          <div className="container py-20 md:py-28 bg-primary-foreground">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
                Mudjimba Based – Fast Local Response
              </h2>
              <div className="space-y-5 text-muted-foreground text-base md:text-lg leading-relaxed mb-10">
                <p>Woods Wildlife is based in Mudjimba and focuses on fast response across nearby northern Sunshine Coast suburbs.</p>
                <p>As a local operator, we understand the coastal environment where snake activity is most common — particularly near bushland, wetlands, dunes and residential gardens.</p>
                <p>For urgent snake removal, call directly.</p>
              </div>
              <a href="tel:0435529657" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg text-base font-medium hover:opacity-90 transition-opacity">
                <Phone className="w-5 h-5" />
                0435 529 657
              </a>
            </div>
          </div>
        </section>

        {/* Professional Snake Catching */}
        <section className="container py-20 md:py-28">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
              Professional Snake Catching – Sunshine Coast
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4">Woods Wildlife provides:</p>
            <ul className="space-y-3 text-foreground text-base mb-8">
              {[
                "Licensed snake catching",
                "Safe snake capture",
                "Responsible relocation in accordance with Queensland wildlife regulations",
                "Residential and commercial response",
                "Practical advice to reduce future encounters",
                "Fully insured service",
              ].map((item) =>
                <li key={item} className="flex gap-3"><span>•</span>{item}</li>
              )}
            </ul>
            <Link
              to="/snake-catching-sunshine-coast"
              className="text-base text-primary font-medium hover:opacity-80 transition-opacity"
            >
              Learn more about snake removal services →
            </Link>
          </div>
        </section>

        {/* Snake Catcher Near Me */}
        <section className="bg-primary text-primary-foreground">
          <div className="container py-20 md:py-28">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary-foreground">
                Snake Catcher Near Me – Sunshine Coast
              </h2>
              <p className="text-primary-foreground/70 text-base md:text-lg leading-relaxed mb-10 max-w-lg mx-auto">
                If you are searching for a snake catcher near you on the Sunshine Coast, Woods Wildlife provides professional snake removal across Mudjimba and surrounding northern Sunshine Coast suburbs.
              </p>
              <p className="text-primary-foreground/70 text-base md:text-lg leading-relaxed mb-10">
                For prompt response, call directly.
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
