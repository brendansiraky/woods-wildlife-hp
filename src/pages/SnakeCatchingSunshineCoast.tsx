import { Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const SnakeCatchingSunshineCoast = () => {
  return (
    <>
      <Helmet>
        <title>Snake Catcher Sunshine Coast | Professional Snake Removal – Woods Wildlife</title>
        <meta name="description" content="Mudjimba-based Sunshine Coast snake catcher providing fast, professional snake removal and relocation. Call now for prompt response." />
        <link rel="canonical" href="/snake-catching-sunshine-coast/" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />

        {/* Page Title Section */}
        <section className="container py-20 md:py-28">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
              Professional Snake Catcher – Sunshine Coast
            </h1>
            <div className="space-y-5 text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
              <p>Woods Wildlife provides licensed snake catching and relocation across the Sunshine Coast.</p>
              <p>
                Based in Mudjimba, we respond quickly to homes and businesses throughout the northern coastal suburbs including Marcoola, Twin Waters, Pacific Paradise, Mt Coolum and surrounding areas.
              </p>
              <p>If you have seen a snake:</p>
            </div>
            <ul className="space-y-3 text-foreground text-base mb-10">
              {["Keep children and pets indoors", "Maintain a safe distance", "Do not attempt to handle or kill the snake", "Call immediately for professional removal"].map((item) => (
                <li key={item} className="flex gap-3"><span>•</span>{item}</li>
              ))}
            </ul>
            <a
              href="tel:0435529657"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-medium hover:opacity-90 transition-opacity"
            >
              <Phone className="w-5 h-5" />
              0435 529 657
            </a>
          </div>
        </section>

        {/* Snake Catching & Relocation */}
        <section className="bg-card">
          <div className="container py-20 md:py-28">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
                Snake Catching & Relocation – Sunshine Coast
              </h2>
              <div className="space-y-5 text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
                <p>Snake activity is common across the Sunshine Coast, particularly in coastal and bushland suburbs during warmer months.</p>
                <p>Snakes are often encountered in:</p>
              </div>
              <ul className="space-y-3 text-foreground text-base mb-8">
                {["Yards and garden beds", "Garages and sheds", "Roof cavities", "Retaining walls", "Around water sources and vegetation"].map((item) => (
                  <li key={item} className="flex gap-3"><span>•</span>{item}</li>
                ))}
              </ul>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4">Woods Wildlife provides:</p>
              <ul className="space-y-3 text-foreground text-base mb-8">
                {["Safe snake capture", "Responsible relocation in accordance with Queensland wildlife regulations", "Residential and commercial response", "Practical advice to reduce future encounters", "Fully insured service"].map((item) => (
                  <li key={item} className="flex gap-3"><span>•</span>{item}</li>
                ))}
              </ul>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                Our focus is safe capture and professional handling in line with state wildlife requirements.
              </p>
            </div>
          </div>
        </section>

        {/* What To Do */}
        <section className="container py-20 md:py-28">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
              What To Do If You See a Snake
            </h2>
            <div className="space-y-5 text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
              <p>If you encounter a snake on your property:</p>
            </div>
            <ul className="space-y-3 text-foreground text-base mb-8">
              {["Stay calm and keep your distance", "Bring pets and children indoors", "Do not attempt to move or kill the snake", "Keep visual contact only if safe", "Contact a licensed snake catcher immediately"].map((item) => (
                <li key={item} className="flex gap-3"><span>•</span>{item}</li>
              ))}
            </ul>
            <div className="space-y-5 text-muted-foreground text-base md:text-lg leading-relaxed mb-10">
              <p>Attempting to handle a snake without training is dangerous and increases risk.</p>
              <p>Woods Wildlife provides prompt snake response across Mudjimba and surrounding northern Sunshine Coast suburbs.</p>
            </div>
            <a
              href="tel:0435529657"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-medium hover:opacity-90 transition-opacity"
            >
              <Phone className="w-5 h-5" />
              0435 529 657
            </a>
          </div>
        </section>

        {/* Mudjimba Based */}
        <section className="bg-card">
          <div className="container py-20 md:py-28">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
                Mudjimba Based – Servicing Northern Sunshine Coast
              </h2>
              <div className="space-y-5 text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
                <p>Woods Wildlife is based in Mudjimba and focuses on fast response across nearby suburbs including:</p>
              </div>
              <ul className="space-y-3 text-foreground text-base mb-8">
                {["Marcoola", "Twin Waters", "Pacific Paradise", "Mt Coolum", "Bli Bli", "Coolum"].map((item) => (
                  <li key={item} className="flex gap-3"><span>•</span>{item}</li>
                ))}
              </ul>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                As a local operator, we understand the coastal environment where snake activity is most common — particularly near bushland, dunes, wetlands and residential gardens.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose */}
        <section className="container py-20 md:py-28">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
              Why Choose Woods Wildlife
            </h2>
            <ul className="space-y-3 text-foreground text-base mb-8">
              {["Mudjimba-based local operator", "Fast northern Sunshine Coast response", "Professional relocation in line with Queensland regulations", "Fully insured", "Clear, straightforward communication"].map((item) => (
                <li key={item} className="flex gap-3"><span>•</span>{item}</li>
              ))}
            </ul>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Our approach is simple: safe capture, responsible relocation, reliable local service.
            </p>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-primary text-primary-foreground">
          <div className="container py-20 md:py-28">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary-foreground">
                Snake Catcher Near Me – Sunshine Coast
              </h2>
              <p className="text-primary-foreground/70 text-base md:text-lg leading-relaxed mb-10 max-w-lg mx-auto">
                If you are searching for a snake catcher near you on the Sunshine Coast, Woods Wildlife provides professional snake removal across Mudjimba and surrounding northern suburbs. For urgent response, call directly.
              </p>
              <p className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-primary-foreground">
                0435 529 657
              </p>
              <p className="text-primary-foreground/60 text-sm mb-10">Available 7 days.</p>
              <a
                href="tel:0435529657"
                className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary px-10 py-4 rounded-full text-base font-medium hover:opacity-90 transition-opacity"
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

export default SnakeCatchingSunshineCoast;
