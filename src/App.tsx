import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Horarios from "./pages/Horarios";
import Crescimento from "./pages/Crescimento";
import Testemunhos from "./pages/Testemunhos";
import Eventos from "./pages/Eventos";
import Estudos from "./pages/Estudos";
import Servico from "./pages/Servico";
import Musica from "./pages/Musica";
import Familia from "./pages/Familia";
import Ministerios from "./pages/Ministerios";
import Duvidas from "./pages/Duvidas";
import Contatos from "./pages/Contatos";
import Cultura from "./pages/Cultura";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/horarios" element={<Horarios />} />
          <Route path="/crescimento" element={<Crescimento />} />
          <Route path="/testemunhos" element={<Testemunhos />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/estudos" element={<Estudos />} />
          <Route path="/servico" element={<Servico />} />
          <Route path="/musica" element={<Musica />} />
          <Route path="/familia" element={<Familia />} />
          <Route path="/ministerios" element={<Ministerios />} />
          <Route path="/duvidas" element={<Duvidas />} />
          <Route path="/contatos" element={<Contatos />} />
          <Route path="/cultura" element={<Cultura />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
