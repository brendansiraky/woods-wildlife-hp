import { Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const SnakeCatcherMarcoola = () => {
  return (
    <>
      <Helmet>
        <title>Snake Catcher Marcoola | Professional Snake Removal</title>
        <meta name="description" content="Fast and professional snake catcher in Marcoola. Licensed snake removal and relocation. Call now." />
        <link rel="canonical" href="/snake-catcher-marcoola/" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero */}
        <section className="container py-20 md:py-28">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
              Snake Catcher Marcoola
            </h1>
            <div className="space-y-5 text-muted-foreground text-base md:text-lg leading-relaxed mb-10">
              <p>Woods Wildlife provides licensed snake removal in Marcoola and nearby northern Sunshine Coast suburbs.</p>
              <p>If you have seen a snake, maintain a safe distance and call immediately.</p>
            </div>
            <a
              href="tel:0435529657"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg text-base font-medium hover:opacity-90 transition-opacity">

              <Phone className="w-5 h-5" />
              0435 529 657
            </a>
          </div>
        </section>

        {/* Snake Activity */}
        <section className="bg-card">
          <div className="container py-20 md:py-28 bg-primary-foreground">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
                Snake Activity in Marcoola
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4">
                Marcoola properties often back onto dunes, bushland and open green space, creating natural movement corridors for native snakes.
              </p>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4">Snakes may be found:</p>
              <ul className="space-y-3 text-foreground text-base mb-8">
                {["In garden beds", "Under decking", "In sheds and garages", "Along vegetation edges"].map((item) =>
                <li key={item} className="flex gap-3"><span>•</span>{item}</li>
                )}
              </ul>
              <div className="space-y-5 text-muted-foreground text-base md:text-lg leading-relaxed">
                <p>Common local species include Eastern Brown Snakes, Carpet Pythons and Red-Bellied Black Snakes.</p>
                <p>All snakes should be handled by licensed professionals.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="container py-20 md:py-28">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
              Marcoola Snake Removal Services
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4">We attend:</p>
            <ul className="space-y-3 text-foreground text-base mb-8">
              {["Residential homes", "Commercial properties", "Construction sites", "Acreage properties"].map((item) =>
              <li key={item} className="flex gap-3"><span>•</span>{item}</li>
              )}
            </ul>
            <div className="space-y-5 text-muted-foreground text-base md:text-lg leading-relaxed mb-10">
              <p>Snakes are captured and relocated responsibly in line with Queensland wildlife regulations.</p>
              <p>For prompt snake removal in Marcoola, call Woods Wildlife.</p>
            </div>
            <a
              href="tel:0435529657"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg text-base font-medium hover:opacity-90 transition-opacity">

              <Phone className="w-5 h-5" />
              0435 529 657
            </a>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-primary text-primary-foreground">
          <div className="container py-20 md:py-28">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary-foreground">
                Need a Snake Catcher in Marcoola?
              </h2>
              <p className="text-primary-foreground/70 text-base md:text-lg leading-relaxed mb-10 max-w-lg mx-auto">
                For fast, professional snake removal in Marcoola and surrounding suburbs, call directly.
              </p>
              <p className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-primary-foreground">
                0435 529 657
              </p>
              <p className="text-primary-foreground/60 text-sm mb-10">Available 7 days.</p>
              <a
                href="tel:0435529657"
                className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary px-10 py-4 rounded-lg text-base font-medium hover:opacity-90 transition-opacity">

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

export default SnakeCatcherMarcoola;