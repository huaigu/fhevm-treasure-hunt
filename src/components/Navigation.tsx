import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Github, ExternalLink, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">🏆</span>
            </div>
            <span className="text-xl font-semibold">FHEVM Quest</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#tutorial"
              className="text-secondary-foreground hover:text-foreground transition-colors"
            >
              Tutorial
            </a>
            <a
              href="#demo"
              className="text-secondary-foreground hover:text-foreground transition-colors flex items-center space-x-1"
            >
              <span>Live Demo</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <Link
              to="/llm-txt"
              className="text-secondary-foreground hover:text-foreground transition-colors flex items-center space-x-1"
            >
              <FileText className="w-4 h-4" />
              <span>LLM.txt</span>
            </Link>
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
              Tutorial
            </a>
            <a
              href="#demo"
              className="block text-secondary-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Live Demo
            </a>
            <Link
              to="/llm-txt"
              className="block text-secondary-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              LLM.txt
            </Link>
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
              Start Learning
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;