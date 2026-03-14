import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import AchievementsPage from "./pages/AchievementsPage.tsx";
import EquipmentPage from "./pages/EquipmentPage.tsx";
import FAQPage from "./pages/FAQPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import HistoryPage from "./pages/HistoryPage.tsx";
import ValuesPage from "./pages/ValuesPage.tsx";
import PrintingPage from "./pages/PrintingPage.tsx";
import StationeryPage from "./pages/StationeryPage.tsx";
import NFIPage from "./pages/NFIPage.tsx";
import ArchivingPage from "./pages/ArchivingPage.tsx";
import WebDevPage from "./pages/WebDevPage.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/achievements" element={<AchievementsPage />} />
            <Route path="/equipment" element={<EquipmentPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about/history" element={<HistoryPage />} />
            <Route path="/about/values" element={<ValuesPage />} />
            <Route path="/services/printing" element={<PrintingPage />} />
            <Route path="/services/stationery" element={<StationeryPage />} />
            <Route path="/services/nfi" element={<NFIPage />} />
            <Route path="/services/archiving" element={<ArchivingPage />} />
            <Route path="/services/webdev" element={<WebDevPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
