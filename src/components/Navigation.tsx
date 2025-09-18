import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Github, ExternalLink } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">🏆</span>
            </div>
            <span className="text-xl font-semibold">机密寻宝之旅</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#tutorial" 
              className="text-secondary-foreground hover:text-foreground transition-colors"
            >
              教程
            </a>
            <a 
              href="#demo" 
              className="text-secondary-foreground hover:text-foreground transition-colors flex items-center space-x-1"
            >
              <span>在线演示</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <a 
              href="https://github.com" 
              className="text-secondary-foreground hover:text-foreground transition-colors flex items-center space-x-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              variant="default" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary"
            >
              开始学习
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-primary transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <a 
              href="#tutorial" 
              className="block text-secondary-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              教程
            </a>
            <a 
              href="#demo" 
              className="block text-secondary-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              在线演示
            </a>
            <a 
              href="https://github.com" 
              className="block text-secondary-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              GitHub
            </a>
            <Button 
              variant="default" 
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              开始学习
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;