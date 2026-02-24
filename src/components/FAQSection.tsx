import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
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
    answer:
      "Call-out fees vary depending on time of day and location. Contact Woods Wildlife directly for current pricing and availability.",
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

        <Link
          to="/snake-catching-faq-sunshine-coast"
          className="inline-flex items-center justify-center border border-foreground/20 text-foreground px-8 py-4 rounded-lg text-base font-medium hover:bg-foreground/5 transition-colors"
        >
          Read Full FAQ
        </Link>
      </div>
    </section>
  );
};

export default FAQSection;
