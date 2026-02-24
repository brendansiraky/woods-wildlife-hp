import { Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const SnakeCatcherMudjimba = () => {
  return (
    <>
      <Helmet>
        <title>Snake Catcher Mudjimba | Local Snake Removal – Woods Wildlife</title>
        <meta name="description" content="Licensed Mudjimba snake catcher providing fast, professional snake removal and relocation. Call now for prompt response." />
        <link rel="canonical" href="/snake-catcher-mudjimba/" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero */}
        <section className="container py-20 md:py-28">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
              Snake Catcher Mudjimba – Local Snake Removal
            </h1>
            <div className="space-y-5 text-muted-foreground text-base md:text-lg leading-relaxed mb-10">
              <p>Woods Wildlife is based in Mudjimba and provides licensed snake catching and relocation throughout the suburb and surrounding northern Sunshine Coast areas.</p>
              <p>If you have seen a snake on your property, keep your distance and call immediately.</p>
            </div>
            <a
              href="tel:0435529657"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg text-base font-medium hover:opacity-90 transition-opacity"
            >
              <Phone className="w-5 h-5" />
              0435 529 657
            </a>
          </div>
        </section>

        {/* Snake Activity */}
        <section className="bg-card">
          <div className="container py-20 md:py-28">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
                Snake Activity in Mudjimba
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4">
                Mudjimba's proximity to coastal dunes, wetlands and bushland makes snake sightings more common during warmer months.
              </p>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4">Snakes are often encountered:</p>
              <ul className="space-y-3 text-foreground text-base mb-8">
                {["In gardens and retaining walls", "Around sheds and garages", "Near vegetation and water sources", "On driveways and paved areas"].map((item) => (
                  <li key={item} className="flex gap-3"><span>•</span>{item}</li>
                ))}
              </ul>
              <div className="space-y-5 text-muted-foreground text-base md:text-lg leading-relaxed">
                <p>Common species in the area include Eastern Brown Snakes, Red-Bellied Black Snakes and Carpet Pythons.</p>
                <p>All native snakes are protected and must be handled by licensed professionals.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="container py-20 md:py-28">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
              Mudjimba Snake Catching Services
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4">We attend:</p>
            <ul className="space-y-3 text-foreground text-base mb-8">
              {["Residential homes and units", "Roof cavities and garages", "Commercial properties", "Acreage and bushland blocks"].map((item) => (
                <li key={item} className="flex gap-3"><span>•</span>{item}</li>
              ))}
            </ul>
            <div className="space-y-5 text-muted-foreground text-base md:text-lg leading-relaxed">
              <p>All snakes are safely captured and relocated in accordance with Queensland wildlife regulations.</p>
              <p>As a Mudjimba-based operator, our focus is fast local response and responsible handling.</p>
            </div>
          </div>
        </section>

        {/* If You See a Snake */}
        <section className="bg-card">
          <div className="container py-20 md:py-28">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
                If You See a Snake in Mudjimba
              </h2>
              <ol className="space-y-3 text-foreground text-base mb-10 list-decimal list-inside">
                <li>Keep a safe distance</li>
                <li>Bring pets and children indoors</li>
                <li>Do not attempt to move or kill the snake</li>
                <li>Call a licensed snake catcher immediately</li>
              </ol>
              <a
                href="tel:0435529657"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg text-base font-medium hover:opacity-90 transition-opacity"
              >
                <Phone className="w-5 h-5" />
                0435 529 657
              </a>
            </div>
          </div>
        </section>

        {/* Nearby Areas */}
        <section className="container py-20 md:py-28">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
              Nearby Areas
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              We also service Marcoola, Twin Waters, Pacific Paradise, Mt Coolum and Bli Bli.
            </p>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-primary text-primary-foreground">
          <div className="container py-20 md:py-28">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary-foreground">
                Need a Snake Catcher in Mudjimba?
              </h2>
              <p className="text-primary-foreground/70 text-base md:text-lg leading-relaxed mb-10 max-w-lg mx-auto">
                For fast, professional snake removal in Mudjimba and surrounding suburbs, call directly.
              </p>
              <p className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-primary-foreground">
                0435 529 657
              </p>
              <p className="text-primary-foreground/60 text-sm mb-10">Available 7 days.</p>
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

        <Footer />
      </div>
    </>
  );
};

export default SnakeCatcherMudjimba;
