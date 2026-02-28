import { Phone } from "lucide-react";

const SeenSnakeSection = () => {
  return (
    <section className="bg-card">
      <div className="container pt-[4.25rem] pb-20 md:pt-20 md:pb-28">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
            Seen a Snake on Your Property?
          </h2>

          <p className="text-muted-foreground text-lg mb-6 font-bold">Here's what to do:</p>

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
              Call immediately for professional removal
            </li>
          </ul>

          <p className="text-sm text-muted-foreground mb-10">
            Snakes are protected under Queensland law and must be handled by licensed professionals.
          </p>

          <a
            href="tel:0435529657"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg text-base font-medium hover:opacity-90 transition-opacity">

            <Phone className="w-5 h-5" />
            0435 529 657
          </a>
        </div>
      </div>
    </section>);

};

export default SeenSnakeSection;