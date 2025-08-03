
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import BMICalculator from "./pages/BMICalculator";
import DietPlanner from "./pages/DietPlanner";
import ProgressTracker from "./pages/ProgressTracker";
import NotFound from "./pages/NotFound";
import Recipes from "./pages/Recipes";
import Forum from "./pages/Forum";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import About from "./pages/About";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <NavBar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/bmi" element={<BMICalculator />} />
              <Route path="/diet-planner" element={<DietPlanner />} />
              <Route path="/progress" element={<ProgressTracker />} />
              <Route path="/Recipes" element={<Recipes />} />
              <Route path="/Forum" element={<Forum />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/Blog" element={<Blog />} />
              <Route path="/About" element={<About />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
