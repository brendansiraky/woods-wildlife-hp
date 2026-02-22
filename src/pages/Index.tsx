import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SeenSnakeSection from "@/components/SeenSnakeSection";
import ServicesSection from "@/components/ServicesSection";
import LocalSection from "@/components/LocalSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <SeenSnakeSection />
      <ServicesSection />
      <LocalSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
