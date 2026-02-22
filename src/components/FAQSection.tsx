import { ChevronRight } from "lucide-react";

const FAQSection = () => {
  const questions = [
    "Are snakes killed?",
    "How quickly can you arrive?",
    "Are you licensed and insured?",
    "How much does snake removal cost?",
    "Do you handle venomous snakes?",
  ];

  return (
    <section id="faq" className="container py-20 md:py-28">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12">
          Frequently Asked Questions
        </h2>

        <div className="divide-y divide-border text-left mb-12">
          {questions.map((q) => (
            <div
              key={q}
              className="flex items-center justify-between py-5 text-base md:text-lg text-foreground"
            >
              {q}
              <ChevronRight className="w-5 h-5 text-muted-foreground flex-shrink-0 ml-4" />
            </div>
          ))}
        </div>

        <a
          href="#faq"
          className="inline-flex items-center justify-center border border-foreground/20 text-foreground px-8 py-4 rounded-full text-base font-medium hover:bg-foreground/5 transition-colors"
        >
          Read Full FAQ
        </a>
      </div>
    </section>
  );
};

export default FAQSection;
