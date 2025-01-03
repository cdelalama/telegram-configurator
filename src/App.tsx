import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useTelegramWebApp } from "./hooks/useTelegramWebApp";
import Index from "./pages/Index";
import Variables from "./pages/Variables";

const queryClient = new QueryClient();

const App = () => {
  const { isReady } = useTelegramWebApp();

  if (!isReady) {
    return <div className="flex items-center justify-center min-h-screen">
      <p className="text-telegram-blue">Loading...</p>
    </div>;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/variables" element={<Variables />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;