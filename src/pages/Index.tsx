import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import LearningPathSection from "@/components/LearningPathSection";
import InteractiveDemoSection from "@/components/InteractiveDemoSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ProblemSolutionSection />
      <LearningPathSection />
      <InteractiveDemoSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Index;
