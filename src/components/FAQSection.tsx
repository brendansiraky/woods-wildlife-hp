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
    question: "What should I do if I see a snake?",
    answer:
      "Stay calm, keep children and pets indoors, maintain a safe distance and call a licensed snake catcher immediately. Do not attempt to approach, move or kill the snake.",
  },
  {
    question: "How quickly can you arrive?",
    answer:
      "Response times depend on demand and location. We aim to attend as quickly as possible across Mudjimba, Marcoola, Twin Waters, Mt Coolum and surrounding suburbs.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes. Woods Wildlife is a licensed wildlife operator providing professional snake catching and relocation in accordance with Queensland regulations.",
  },
  {
    question: "Do you relocate snakes or kill them?",
    answer:
      "Snakes are safely captured and relocated in accordance with Queensland wildlife regulations. All native snakes are protected by law.",
  },
  {
    question: "How much does snake removal cost?",
    answer: pricingAnswer,
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="container py-20 md:py-28">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12">
          Frequently Asked Questions
        </h2>

        <div className="text-left mb-12">
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
        </div>

        <a
          href="/snake-catching-faq-sunshine-coast"
          className="inline-flex items-center justify-center border border-foreground/20 text-foreground px-8 py-4 rounded-lg text-base font-medium hover:bg-foreground/5 transition-colors"
        >
          Read Full FAQ
        </a>
      </div>
    </section>
  );
};

export default FAQSection;
