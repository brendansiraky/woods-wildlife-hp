import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
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
    answer: "Call-out fees vary depending on time of day and location. Contact Woods Wildlife directly for current pricing and availability.",
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
