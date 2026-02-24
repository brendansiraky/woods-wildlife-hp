import { Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger } from
"@/components/ui/accordion";

const faqItems = [
{
  question: "What should I do if I see a snake in my yard?",
  answer:
  "Stay calm and keep children and pets indoors. Do not attempt to approach, move or kill the snake. Maintain a safe distance and call a licensed snake catcher immediately. Woods Wildlife provides fast snake response across Mudjimba and northern Sunshine Coast suburbs."
},
{
  question: "Will there be more snakes nearby?",
  answer:
  "Snakes are not social animals and do not live in groups. If you see one snake, it does not mean there are others present. They move through areas searching for food, shelter or warmth."
},
{
  question: "If I see a baby snake, does that mean I have an infestation?",
  answer:
  "No. Snakes do not form colonies. After birth or hatching, young snakes disperse in different directions. Seeing a juvenile snake does not indicate an infestation."
},
{
  question: "Are all snakes on the Sunshine Coast venomous?",
  answer:
  "No. Queensland is home to both venomous and non-venomous species. Common venomous snakes in the area include Eastern Browns and Red-Bellied Black Snakes. Non-venomous species such as Carpet Pythons are also common. All snakes should be treated as potentially dangerous and handled only by a licensed snake catcher."
},
{
  question: "Do you relocate snakes or kill them?",
  answer:
  "Snakes are safely captured and relocated in accordance with Queensland wildlife regulations where appropriate. Relocation is carried out responsibly and legally."
},
{
  question: "How quickly can you attend in Mudjimba and nearby suburbs?",
  answer:
  "Response times depend on demand and location, but we aim to attend as quickly as possible across Mudjimba, Marcoola, Pacific Paradise, Twin Waters, Mt Coolum and surrounding areas. If your situation is urgent, call immediately."
},
{
  question: "What if the snake disappears before you arrive?",
  answer:
  "Snakes can move quickly and hide under decking, in gardens, garages or roof spaces. If safe, we can inspect the property and provide advice on likely hiding spots and preventative measures."
},
{
  question: "Do snakes return to the same property?",
  answer:
  "Snakes are attracted to food sources, shelter and suitable habitat. Properties near bushland, dunes, waterways or with rodent activity are more likely to attract snakes. Removing attractants reduces the likelihood of repeat visits."
},
{
  question: "How much does snake catching cost?",
  answer:
  "Call-out fees vary depending on time of day and location. Contact Woods Wildlife directly for current pricing and availability."
},
{
  question: "Do snakes hibernate on the Sunshine Coast?",
  answer:
  "Snakes do not hibernate in Queensland but enter a period of reduced activity (brumation) during cooler months. Activity increases significantly during warmer weather."
}];


const areas = [
"Mudjimba",
"Marcoola",
"Pacific Paradise",
"Twin Waters",
"Mt Coolum",
"Bli Bli",
"Coolum"];


const SnakeCatchingFAQ = () => {
  return (
    <>
      <Helmet>
        <title>Snake Catching FAQ – Sunshine Coast | Woods Wildlife</title>
        <meta
          name="description"
          content="Professional snake catcher in Twin Waters providing licensed snake relocation and removal. Call now." />

        <link rel="canonical" href="/snake-catching-faq-sunshine-coast/" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero */}
        <section className="container py-20 md:py-28">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[0.9] mb-8">
              Snake Catching FAQ – Sunshine Coast
            </h1>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              If you've seen a snake on your property, you likely have questions.
              Below are common questions about snake catching, relocation, safety
              and what to do if you encounter a snake in Mudjimba and surrounding
              Sunshine Coast suburbs.
            </p>
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="bg-card">
          <div className="container py-20 md:py-28 bg-primary-foreground">
            <div className="max-w-2xl">
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) =>
                <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-base md:text-lg">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                )}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Areas We Service */}
        <section className="container py-20 md:py-28">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
              Areas We Service
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
              Woods Wildlife provides snake catching services across:
            </p>
            <p className="text-foreground text-base md:text-lg font-medium">
              {areas.join(", ")}
            </p>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-primary text-primary-foreground">
          <div className="container py-20 md:py-28">
            <div className="max-w-2xl mx-auto text-center">
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

export default SnakeCatchingFAQ;