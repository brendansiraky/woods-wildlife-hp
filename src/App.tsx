import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import SnakeCatchingSunshineCoast from "./pages/SnakeCatchingSunshineCoast";
import SnakeCatcherMudjimba from "./pages/SnakeCatcherMudjimba";
import SnakeCatcherMarcoola from "./pages/SnakeCatcherMarcoola";
import SnakeCatcherTwinWaters from "./pages/SnakeCatcherTwinWaters";
import SnakeCatchingFAQ from "./pages/SnakeCatchingFAQ";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/snake-catching-sunshine-coast" element={<SnakeCatchingSunshineCoast />} />
            <Route path="/snake-catcher-mudjimba" element={<SnakeCatcherMudjimba />} />
            <Route path="/snake-catcher-marcoola" element={<SnakeCatcherMarcoola />} />
            <Route path="/snake-catcher-twin-waters" element={<SnakeCatcherTwinWaters />} />
            <Route path="/snake-catching-faq-sunshine-coast" element={<SnakeCatchingFAQ />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
