import { Terminal, FileCode, Monitor, CheckCircle, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const LearningPathSection = () => {
  const steps = [
    {
      icon: Terminal,
      title: "Environment Setup",
      description: "From scratch, configure Hardhat, connect wallets, and master FHEVM development infrastructure.",
      skills: ["Hardhat Configuration", "Wallet Connection", "FHEVM Environment"],
      duration: "15 minutes"
    },
    {
      icon: FileCode,
      title: "Writing Confidential Contracts",
      description: "Learn to write FHEVM contracts with Solidity, handling encrypted inputs and outputs.",
      skills: ["Solidity FHE", "Encrypted Data Types", "Distance Calculation"],
      duration: "30 minutes"
    },
    {
      icon: Monitor,
      title: "Building Frontend Integration",
      description: "Use fhevm-react hooks to encrypt data on frontend and decrypt confidential results from contracts.",
      skills: ["fhevm-react Hooks", "Data Encryption", "Result Decryption"],
      duration: "25 minutes"
    }
  ];

  return (
    <section id="tutorial" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-subtle">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">Three Steps</span> to Start Your FHEVM Journey
          </h2>
          <p className="text-lg text-secondary-foreground max-w-2xl mx-auto">
            Follow our step-by-step guide to build your first confidential DApp from scratch
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="feature-card h-full bg-card/80 backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center glow-primary">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className="text-sm font-medium text-primary">Step {index + 1}</span>
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-secondary-foreground leading-relaxed">
                    {step.description}
                  </p>
                  
                  <div className="space-y-3">
                    <p className="text-sm font-medium text-foreground">Key Learning Points:</p>
                    <div className="space-y-2">
                      {step.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-secondary-foreground">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-sm text-muted-foreground">
                      ⏱️ {step.duration}
                    </span>
                    {index === 0 ? (
                      <Link 
                        to="/environment-setup" 
                        className="flex items-center space-x-1 text-primary hover:text-primary/80 transition-colors"
                      >
                        <span className="text-sm font-medium">Start Learning</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    ) : index === 1 ? (
                      <Link 
                        to="/contract-development" 
                        className="flex items-center space-x-1 text-primary hover:text-primary/80 transition-colors"
                      >
                        <span className="text-sm font-medium">Start Learning</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    ) : (
                      <Link 
                        to="/frontend-integration" 
                        className="flex items-center space-x-1 text-primary hover:text-primary/80 transition-colors"
                      >
                        <span className="text-sm font-medium">Start Learning</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Connection line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-primary transform -translate-y-1/2 z-10">
                  <div className="absolute right-0 top-1/2 w-2 h-2 bg-primary rounded-full transform translate-x-1 -translate-y-1/2" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Progress indicator for mobile */}
        <div className="lg:hidden flex justify-center mt-8 space-x-2">
          {steps.map((_, index) => (
            <div key={index} className="w-2 h-2 bg-primary rounded-full opacity-60" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningPathSection;