import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProposalPage from "./pages/ProposalPage";
import RoseDay from "./pages/RoseDay";
import ProposeDay from "./pages/ProposeDay";
import ChocolateDay from "./pages/ChocolateDay";
import TeddyDay from "./pages/TeddyDay";
import PromiseDay from "./pages/PromiseDay";
import HugDay from "./pages/HugDay";
import KissDay from "./pages/KissDay";
import ValentinesDay from "./pages/ValentinesDay";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProposalPage />} />
          <Route path="/rose-day" element={<RoseDay />} />
          <Route path="/propose-day" element={<ProposeDay />} />
          <Route path="/chocolate-day" element={<ChocolateDay />} />
          <Route path="/teddy-day" element={<TeddyDay />} />
          <Route path="/promise-day" element={<PromiseDay />} />
          <Route path="/hug-day" element={<HugDay />} />
          <Route path="/kiss-day" element={<KissDay />} />
          <Route path="/valentines-day" element={<ValentinesDay />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
