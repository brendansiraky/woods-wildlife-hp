import { Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { useState } from "react";

const areas = [
"Mudjimba",
"Marcoola",
"Twin Waters",
"Pacific Paradise",
"Mt Coolum",
"Bli Bli",
"Coolum"];


const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    suburb: "",
    description: ""
  });

  const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
  {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission placeholder
  };

  return (
    <>
      <Helmet>
        <title>Contact Woods Wildlife | Snake Catcher Mudjimba</title>
        <meta
          name="description"
          content="Contact Woods Wildlife for professional snake removal in Mudjimba and northern Sunshine Coast suburbs. Call now for prompt response." />

        <link rel="canonical" href="/contact/" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />

        {/* Page Title */}
        <section className="container py-20 md:py-28">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[0.9] mb-8">
              Contact Woods Wildlife
            </h1>
          </div>
        </section>

        {/* Intro */}
        <section className="bg-card">
          <div className="container py-20 md:py-28 bg-primary-foreground">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
                Professional Snake Removal – Mudjimba &amp; Northern Sunshine Coast
              </h2>
              <div className="space-y-5 text-muted-foreground text-base md:text-lg leading-relaxed">
                <p>
                  If you have seen a snake on your property, call immediately for
                  safe and licensed removal.
                </p>
                <p>
                  Woods Wildlife is based in Mudjimba and provides professional
                  snake catching and relocation across nearby northern Sunshine
                  Coast suburbs including Marcoola, Twin Waters, Pacific Paradise,
                  Mt Coolum and Bli Bli.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call Now */}
        <section className="container py-20 md:py-28">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10">
              Call Now
            </h2>
            <a
              href="tel:0435529657"
              className="inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-12 py-5 rounded-lg text-lg md:text-xl font-medium hover:opacity-90 transition-opacity">

              <Phone className="w-6 h-6" />
              0435 529 657
            </a>
            <p className="text-muted-foreground text-sm mt-4">Available 7 days.</p>
          </div>
        </section>

        {/* Request a Call Back */}
        <section className="bg-card">
          <div className="container py-20 md:py-28 bg-primary-foreground">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
                Request a Call Back
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-10">
                If you are unable to call, submit the form below and we will
                contact you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2">

                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 rounded-lg border border-border bg-background text-foreground text-base focus:outline-none focus:ring-2 focus:ring-primary/30" />

                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-foreground mb-2">

                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 rounded-lg border border-border bg-background text-foreground text-base focus:outline-none focus:ring-2 focus:ring-primary/30" />

                </div>

                <div>
                  <label
                    htmlFor="suburb"
                    className="block text-sm font-medium text-foreground mb-2">

                    Suburb / Location
                  </label>
                  <input
                    type="text"
                    id="suburb"
                    name="suburb"
                    value={form.suburb}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 rounded-lg border border-border bg-background text-foreground text-base focus:outline-none focus:ring-2 focus:ring-primary/30" />

                </div>

                <div>
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-foreground mb-2">

                    Brief Description of Situation
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    rows={4}
                    required
                    className="w-full px-4 py-4 rounded-lg border border-border bg-background text-foreground text-base focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" />

                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center bg-primary text-primary-foreground px-10 py-4 rounded-lg text-base font-medium hover:opacity-90 transition-opacity">

                  Submit Request
                </button>
              </form>

              <p className="text-muted-foreground text-sm mt-6">
                Keep the form short. The goal is speed.
              </p>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="container py-20 md:py-28">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
              Service Areas
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
              Woods Wildlife provides snake catching services across:
            </p>
            <ul className="space-y-3 text-foreground text-base mb-8">
              {areas.map((area) =>
              <li key={area} className="flex gap-3">
                  <span>•</span>
                  {area}
                </li>
              )}
            </ul>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              If you are located in a nearby northern Sunshine Coast suburb,
              contact us to confirm availability.
            </p>
          </div>
        </section>

        {/* Important Reminder */}
        <section className="bg-card">
          <div className="container py-20 md:py-28 bg-primary-foreground">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
                Important Reminder
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                If you encounter a snake:
              </p>
              <ul className="text-left max-w-md mx-auto space-y-3 text-muted-foreground text-base mb-8">
                <li className="flex gap-3">
                  <span className="text-foreground">•</span>
                  Keep children and pets indoors
                </li>
                <li className="flex gap-3">
                  <span className="text-foreground">•</span>
                  Maintain a safe distance
                </li>
                <li className="flex gap-3">
                  <span className="text-foreground">•</span>
                  Do not attempt to approach or handle it
                </li>
                <li className="flex gap-3">
                  <span className="text-foreground">•</span>
                  Contact a licensed snake catcher immediately
                </li>
              </ul>
              <p className="text-sm text-muted-foreground">
                Snakes are protected under Queensland wildlife regulations and
                must be handled professionally.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-primary text-primary-foreground">
          <div className="container py-20 md:py-28">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary-foreground">
                Need immediate assistance?
              </h2>
              <p className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-primary-foreground">
                0435 529 657
              </p>
              <p className="text-primary-foreground/60 text-sm mb-10">
                Available 7 days.
              </p>
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

export default Contact;