import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Compass, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const TreasureGrid = () => {
  const [activeDots, setActiveDots] = useState(new Set<number>());
  const [treasureDot, setTreasureDot] = useState<number | null>(null);
  const [explorerPath, setExplorerPath] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Reset animation
      setActiveDots(new Set());
      setTreasureDot(null);
      setExplorerPath([]);

      // Start exploration animation
      setTimeout(() => {
        const path = [12, 23, 34, 45, 56, 67, 78, 87, 86, 85]; // Zigzag path
        const finalTreasure = 73;

        path.forEach((dot, index) => {
          setTimeout(() => {
            setExplorerPath(prev => [...prev, dot]);
            setActiveDots(prev => new Set([...prev, dot]));
          }, index * 300);
        });

        // Show treasure at the end
        setTimeout(() => {
          setTreasureDot(finalTreasure);
          setActiveDots(prev => new Set([...prev, finalTreasure]));
        }, path.length * 300 + 500);
      }, 1000);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="treasure-grid mx-auto">
      {Array.from({ length: 100 }, (_, i) => (
        <div
          key={i}
          className={`grid-dot ${
            activeDots.has(i) ? 'active' : ''
          } ${treasureDot === i ? 'treasure' : ''}`}
        />
      ))}
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      {/* Zama-style background gradient */}
      <div className="absolute inset-0 bg-gradient-zama-hero" />
      
      <div className="relative max-w-4xl mx-auto text-center space-y-8">
        {/* Main Title */}
        <div className="space-y-4 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Beyond Hello World
            <br />
            <span className="gradient-text">
              Build Your First
              <br />
              Confidential DApp
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-secondary-foreground max-w-3xl mx-auto leading-relaxed">
            An interactive FHEVM tutorial designed for Web3 developers. Learn fully homomorphic encryption by building an engaging on-chain treasure hunt game.
          </p>
        </div>

        {/* Animated Visual */}
        <div className="flex justify-center py-8 animate-float">
          <div className="relative">
            <TreasureGrid />
            <div className="absolute -top-4 -right-4">
              <Sparkles className="w-6 h-6 text-accent animate-pulse" />
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="space-y-4">
          <Link to="/environment-setup">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-4 rounded-xl glow-primary transition-all duration-300 hover:scale-105"
            >
              <Compass className="w-5 h-5 mr-2" />
              Start Your Journey
            </Button>
          </Link>
          
          <p className="text-sm text-muted-foreground">
            Designed for Zama S10 Bounty
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;