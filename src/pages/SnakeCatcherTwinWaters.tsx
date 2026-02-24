import { Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const SnakeCatcherTwinWaters = () => {
  return (
    <>
      <Helmet>
        <title>Snake Catcher Twin Waters | Local Snake Removal</title>
        <meta name="description" content="Professional snake catcher in Twin Waters providing licensed snake relocation and removal. Call now." />
        <link rel="canonical" href="/snake-catcher-twin-waters/" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />

        <section className="container py-20 md:py-28">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
              Snake Catcher Twin Waters
            </h1>
            <div className="space-y-5 text-muted-foreground text-base md:text-lg leading-relaxed mb-10">
              <p>Woods Wildlife provides professional snake catching services in Twin Waters and surrounding northern coastal suburbs.</p>
              <p>If you encounter a snake, keep your distance and contact a licensed operator immediately.</p>
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
                Why Snakes Appear in Twin Waters
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4">
                Twin Waters' proximity to waterways, landscaped gardens and open green space makes snake movement common during warmer weather.
              </p>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4">Snakes may be found:</p>
              <ul className="space-y-3 text-foreground text-base mb-8">
                {["Around garden beds", "Near water features", "Under decking", "In garages and storage areas"].map((item) =>
                <li key={item} className="flex gap-3"><span>•</span>{item}</li>
                )}
              </ul>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                All native snakes are protected and must be handled professionally.
              </p>
            </div>
          </div>
        </section>

        <section className="container py-20 md:py-28">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
              Twin Waters Snake Removal
            </h2>
            <div className="space-y-5 text-muted-foreground text-base md:text-lg leading-relaxed mb-10">
              <p>We attend residential and commercial properties throughout Twin Waters.</p>
              <p>Snakes are safely captured and relocated in accordance with Queensland wildlife regulations.</p>
              <p>For reliable snake removal in Twin Waters, call Woods Wildlife.</p>
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
                Need a Snake Catcher in Twin Waters?
              </h2>
              <p className="text-primary-foreground/70 text-base md:text-lg leading-relaxed mb-10 max-w-lg mx-auto">
                For fast, professional snake removal in Twin Waters and surrounding suburbs, call directly.
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
    </>);

};

export default SnakeCatcherTwinWaters;