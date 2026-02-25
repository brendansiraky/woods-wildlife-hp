import { Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const SnakeCatcherCoolum = () => {
  return (
    <>
      <Helmet>
        <title>Snake Catcher Coolum | Local Snake Removal – Woods Wildlife</title>
        <meta name="description" content="Licensed Coolum snake catcher providing fast professional snake removal and relocation. Call now for prompt response." />
        <link rel="canonical" href="/snake-catcher-coolum/" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />

        <section className="container py-20 md:py-28">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
              Snake Catcher Coolum
            </h1>
            <div className="space-y-5 text-muted-foreground text-base md:text-lg leading-relaxed mb-10">
              <p>Woods Wildlife provides licensed snake catching and relocation in Coolum and surrounding northern Sunshine Coast suburbs.</p>
              <p>As a Mudjimba-based snake catcher, we respond quickly across the local area.</p>
              <p>If you encounter a snake maintain a safe distance and call immediately.</p>
            </div>
            <a href="tel:0435529657" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg text-base font-medium hover:opacity-90 transition-opacity">
              <Phone className="w-5 h-5" />
              0435 529 657
            </a>
          </div>
        </section>

        <section className="bg-card">
          <div className="container py-20 md:py-28 bg-primary-foreground">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
                Snake Activity in Coolum
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4">
                Coolum properties are often located close to bushland dunes and open green space where snake movement is common during warmer months.
              </p>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4">Snakes may be found:</p>
              <ul className="space-y-3 text-foreground text-base mb-8">
                {["In garden beds", "Around sheds and garages", "Near vegetation and fences", "Around outdoor areas"].map((item) =>
                  <li key={item} className="flex gap-3"><span>•</span>{item}</li>
                )}
              </ul>
              <div className="space-y-5 text-muted-foreground text-base md:text-lg leading-relaxed">
                <p>Common species include Eastern Brown Snakes Carpet Pythons and Red-Bellied Black Snakes.</p>
                <p>All snakes must be handled by licensed professionals.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="container py-20 md:py-28">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
              Coolum Snake Removal
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4">We attend:</p>
            <ul className="space-y-3 text-foreground text-base mb-8">
              {["Residential homes", "Units and townhouses", "Commercial properties", "Outdoor areas and gardens"].map((item) =>
                <li key={item} className="flex gap-3"><span>•</span>{item}</li>
              )}
            </ul>
            <div className="space-y-5 text-muted-foreground text-base md:text-lg leading-relaxed mb-10">
              <p>Snakes are safely captured and relocated in accordance with Queensland wildlife regulations.</p>
              <p>For reliable snake removal in Coolum call Woods Wildlife.</p>
            </div>
            <a href="tel:0435529657" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg text-base font-medium hover:opacity-90 transition-opacity">
              <Phone className="w-5 h-5" />
              0435 529 657
            </a>
          </div>
        </section>

        <section className="bg-primary text-primary-foreground">
          <div className="container py-20 md:py-28">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary-foreground">
                Need a Snake Catcher in Coolum?
              </h2>
              <p className="text-primary-foreground/70 text-base md:text-lg leading-relaxed mb-10 max-w-lg mx-auto">
                For fast professional snake removal in Coolum and surrounding northern Sunshine Coast suburbs call directly.
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

        <section className="container py-20 md:py-28">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
              Local Snake Catcher – Coolum
            </h2>
            <div className="space-y-5 text-muted-foreground text-base md:text-lg leading-relaxed mb-10">
              <p>Woods Wildlife provides professional snake catching in Coolum and nearby northern Sunshine Coast suburbs. For fast local response, call directly.</p>
            </div>
            <a href="tel:0435529657" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg text-base font-medium hover:opacity-90 transition-opacity">
              <Phone className="w-5 h-5" />
              0435 529 657
            </a>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default SnakeCatcherCoolum;
