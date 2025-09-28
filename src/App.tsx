import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import EnvironmentSetup from "./pages/EnvironmentSetup";
import ContractDevelopment from "./pages/ContractDevelopment";
import FrontendIntegration from "./pages/FrontendIntegration";
import LLMTxtInfo from "./pages/LLMTxtInfo";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/environment-setup" element={<EnvironmentSetup />} />
          <Route path="/contract-development" element={<ContractDevelopment />} />
          <Route path="/frontend-integration" element={<FrontendIntegration />} />
          <Route path="/llm-txt" element={<LLMTxtInfo />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
