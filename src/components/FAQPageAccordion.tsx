import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Phone } from "lucide-react";
import type { ReactNode } from "react";

const pricingAnswer = (
  <div className="space-y-4">
    <p>Simple flat fee snake removal across the Sunshine Coast — no hidden charges.</p>
    <div>
      <p className="font-semibold text-foreground">Daytime (7am–7pm) Call-Out &amp; Removal — $165 flat fee</p>
      <p>Includes travel, inspection and safe removal or relocation if a snake is present. The standard call-out fee applies for attendance and inspection whether or not the snake is located.</p>
    </div>
    <div>
      <p className="font-semibold text-foreground">After Hours / Weekends — $195 flat fee</p>
      <p>Same inclusions. Available 24/7 for urgent call-outs.</p>
    </div>
    <p>Fully licensed and insured. Fast local response from Mudjimba.</p>
    <a
      href="tel:0435529657"
      className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg text-base font-medium hover:opacity-90 transition-opacity"
    >
      <Phone className="w-5 h-5" />
      Call 0435 529 657
    </a>
    <p className="text-sm">Call for immediate assistance.</p>
  </div>
);

const faqItems: { question: string; answer: ReactNode }[] = [
  {
    question: "What should I do if I see a snake in my yard?",
    answer: "Stay calm and keep children and pets indoors. Do not attempt to approach, move or kill the snake. Maintain a safe distance and call a licensed snake catcher immediately. Woods Wildlife provides fast snake response across Mudjimba and northern Sunshine Coast suburbs.",
  },
  {
    question: "Will there be more snakes nearby?",
    answer: "Snakes are not social animals and do not live in groups. If you see one snake, it does not mean there are others present. They move through areas searching for food, shelter or warmth.",
  },
  {
    question: "If I see a baby snake, does that mean I have an infestation?",
    answer: "No. Snakes do not form colonies. After birth or hatching, young snakes disperse in different directions. Seeing a juvenile snake does not indicate an infestation.",
  },
  {
    question: "Are all snakes on the Sunshine Coast venomous?",
    answer: "No. Queensland is home to both venomous and non-venomous species. Common venomous snakes in the area include Eastern Browns and Red-Bellied Black Snakes. Non-venomous species such as Carpet Pythons are also common. All snakes should be treated as potentially dangerous and handled only by a licensed snake catcher.",
  },
  {
    question: "Do you relocate snakes or kill them?",
    answer: "Snakes are safely captured and relocated in accordance with Queensland wildlife regulations where appropriate. Relocation is carried out responsibly and legally.",
  },
  {
    question: "How quickly can you attend in Mudjimba and nearby suburbs?",
    answer: "Response times depend on demand and location, but we aim to attend as quickly as possible across Mudjimba, Marcoola, Pacific Paradise, Twin Waters, Mt Coolum and surrounding areas. If your situation is urgent, call immediately.",
  },
  {
    question: "What if the snake disappears before you arrive?",
    answer: "Snakes can move quickly and hide under decking, in gardens, garages or roof spaces. If safe, we can inspect the property and provide advice on likely hiding spots and preventative measures.",
  },
  {
    question: "Do snakes return to the same property?",
    answer: "Snakes are attracted to food sources, shelter and suitable habitat. Properties near bushland, dunes, waterways or with rodent activity are more likely to attract snakes. Removing attractants reduces the likelihood of repeat visits.",
  },
  {
    question: "How much does snake catching cost?",
    answer: pricingAnswer,
  },
  {
    question: "Do snakes hibernate on the Sunshine Coast?",
    answer: "Snakes do not hibernate in Queensland but enter a period of reduced activity (brumation) during cooler months. Activity increases significantly during warmer weather.",
  },
];

const FAQPageAccordion = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqItems.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="text-left text-base md:text-lg">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground text-base leading-relaxed">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FAQPageAccordion;
