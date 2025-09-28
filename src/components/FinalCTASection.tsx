import { Button } from "@/components/ui/button";
import { Compass, Github, ExternalLink, Sparkles } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-subtle">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="space-y-8">
          {/* Main CTA */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Ready to uncover your first
              <br />
              <span className="gradient-text">on-chain secret</span>?
            </h2>
            
            <p className="text-lg text-secondary-foreground max-w-2xl mx-auto leading-relaxed">
              This tutorial is completely free with fully open-source code. Start now and become an early builder of on-chain privacy computing.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-4 rounded-xl glow-primary transition-all duration-300 hover:scale-105"
            >
              <Compass className="w-5 h-5 mr-2" />
              Start Your Journey
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="border-border hover:border-primary text-lg px-8 py-4 rounded-xl transition-all duration-300"
            >
              <Github className="w-5 h-5 mr-2" />
              View Source Code
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-3 gap-6 mt-12">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mx-auto">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-medium">Completely Free</h3>
              <p className="text-sm text-secondary-foreground">
                Learn cutting-edge FHE technology at no cost
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mx-auto">
                <Github className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-medium">Open Source</h3>
              <p className="text-sm text-secondary-foreground">
                All code is open source, reusable, modifiable, and learnable
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="w-12 h-12 bg-muted/20 rounded-xl flex items-center justify-center mx-auto">
                <ExternalLink className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="font-medium">Practical Tutorial</h3>
              <p className="text-sm text-secondary-foreground">
                Master FHEVM core concepts through hands-on projects
              </p>
            </div>
          </div>

          {/* Testimonial/Stats */}
          <div className="mt-12 p-6 rounded-xl bg-card border border-border">
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">70+ minutes</div>
                <div className="text-sm text-secondary-foreground">Complete tutorial duration</div>
              </div>
              <div className="hidden sm:block w-px h-8 bg-border" />
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">3 modules</div>
                <div className="text-sm text-secondary-foreground">Core learning modules</div>
              </div>
              <div className="hidden sm:block w-px h-8 bg-border" />
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">100%</div>
                <div className="text-sm text-secondary-foreground">Project-driven learning</div>
              </div>
            </div>
          </div>

          {/* Trust Badge */}
          <div className="mt-8">
            <p className="text-sm text-muted-foreground">
              🏆 Designed for <span className="text-primary font-medium">Zama Bounty S10</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;