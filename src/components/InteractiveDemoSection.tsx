import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Play, Code, Zap, ArrowRight, Lock, Unlock } from "lucide-react";

const InteractiveDemoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const demoSteps = [
    { text: "Encrypt coordinate data", icon: Lock, data: "euint32.encrypt(5, 7)" },
    { text: "Contract receives encrypted input", icon: Code, data: "function guess(euint32 x, euint32 y)" },
    { text: "FHE distance calculation", icon: Zap, data: "distance = sqrt((x-tx)² + (y-ty)²)" },
    { text: "Return encrypted result", icon: Unlock, data: "Warmer!" }
  ];

  const playDemo = () => {
    setIsPlaying(true);
    setCurrentStep(0);
    
    demoSteps.forEach((_, index) => {
      setTimeout(() => {
        setCurrentStep(index + 1);
      }, (index + 1) * 1000);
    });

    setTimeout(() => {
      setIsPlaying(false);
      setCurrentStep(0);
    }, demoSteps.length * 1000 + 1000);
  };

  return (
    <section id="demo" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Witness the <span className="gradient-text">Magic of FHE</span>
          </h2>
          <p className="text-lg text-secondary-foreground max-w-2xl mx-auto">
            Watch how encrypted data is processed by smart contracts without revealing privacy
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Frontend Simulation */}
          <Card className="feature-card bg-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-accent rounded-full" />
                <span>Treasure Hunt DApp</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Game Grid */}
              <div className="bg-secondary/20 rounded-lg p-6">
                <div className="grid grid-cols-8 gap-1 max-w-64 mx-auto">
                  {Array.from({ length: 64 }, (_, i) => (
                    <div
                      key={i}
                      className={`w-6 h-6 rounded-sm transition-all duration-300 ${
                        i === 29 ? 'bg-accent animate-pulse' : 'bg-muted'
                      } ${
                        isPlaying && currentStep >= 1 && i === 21 
                          ? 'bg-primary ring-2 ring-primary/50' 
                          : ''
                      }`}
                    />
                  ))}
                </div>
                
                <div className="mt-4 text-center">
                  {isPlaying && currentStep >= 4 && (
                    <div className="text-accent font-medium animate-fade-in">
                      🎯 Warmer!
                    </div>
                  )}
                </div>
              </div>

              <Button 
                onClick={playDemo}
                disabled={isPlaying}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Play className="w-4 h-4 mr-2" />
                {isPlaying ? "Demo Running..." : "Play Demo"}
              </Button>

              {/* Data Flow */}
              {isPlaying && (
                <div className="space-y-3">
                  {demoSteps.map((step, index) => (
                    <div 
                      key={index}
                      className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 ${
                        currentStep > index 
                          ? 'bg-primary/10 border border-primary/20' 
                          : 'bg-muted/20'
                      }`}
                    >
                      <step.icon className={`w-4 h-4 ${
                        currentStep > index ? 'text-primary' : 'text-muted-foreground'
                      }`} />
                      <span className={`text-sm ${
                        currentStep > index ? 'text-foreground' : 'text-muted-foreground'
                      }`}>
                        {step.text}
                      </span>
                      {currentStep === index + 1 && (
                        <ArrowRight className="w-4 h-4 text-accent animate-pulse ml-auto" />
                      )}
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Smart Contract Code */}
          <Card className="feature-card bg-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Code className="w-5 h-5 text-primary" />
                <span>Smart Contract Code</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-secondary/20 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                <div className="space-y-1 text-xs sm:text-sm">
                  <div className={`transition-all duration-300 ${
                    isPlaying && currentStep >= 2 ? 'bg-primary/20 -mx-2 px-2 py-1 rounded' : ''
                  }`}>
                    <div>
                      <span className="text-accent">function</span> <span className="text-foreground">guess</span>(
                    </div>
                    <div className="ml-4 text-secondary-foreground">externalEuint8 inputX, ...</div>
                    <div>) <span className="text-accent">external</span> {'{'}</div>
                  </div>

                  <div className={`ml-4 transition-all duration-300 ${
                    isPlaying && currentStep >= 3 ? 'bg-primary/20 -mx-2 px-2 py-1 rounded' : ''
                  }`}>
                    <div className="text-muted-foreground">// Convert encrypted input</div>
                    <div className="text-secondary-foreground">euint8 guessX = FHE.rem(</div>
                    <div className="ml-4 text-secondary-foreground">FHE.fromExternal(inputX, attestation),</div>
                    <div className="ml-4 text-secondary-foreground">8);</div>
                  </div>

                  <div className={`ml-4 transition-all duration-300 ${
                    isPlaying && currentStep >= 3 ? 'bg-primary/20 -mx-2 px-2 py-1 rounded' : ''
                  }`}>
                    <div className="text-muted-foreground">// Calculate absolute difference</div>
                    <div className="text-secondary-foreground">euint8 distX = FHE.select(</div>
                    <div className="ml-4 text-secondary-foreground">FHE.gt(guessX, secretX),</div>
                    <div className="ml-4 text-secondary-foreground">FHE.sub(guessX, secretX),</div>
                    <div className="ml-4 text-secondary-foreground">FHE.sub(secretX, guessX));</div>
                  </div>

                  <div className={`ml-4 transition-all duration-300 ${
                    isPlaying && currentStep >= 4 ? 'bg-accent/20 -mx-2 px-2 py-1 rounded' : ''
                  }`}>
                    <div className="text-muted-foreground">// Same for Y, then store result</div>
                    <div className="text-secondary-foreground">FHE.allow(distance, msg.sender);</div>
                  </div>

                  <div className="text-muted-foreground">{'}'}</div>
                </div>
              </div>

              {/* Code Highlights */}
              <div className="mt-4 space-y-2 text-xs">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-secondary-foreground">Encrypted data types (euint8, externalEuint8)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span className="text-secondary-foreground">FHE operations (select, sub, add, rem)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-muted-foreground rounded-full" />
                  <span className="text-secondary-foreground">Privacy-preserving distance calculation</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Key Benefits */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {[
            { title: "Input Privacy", desc: "Player coordinates fully encrypted", icon: "🔐" },
            { title: "Computation Privacy", desc: "Contract processing invisible", icon: "⚡" },
            { title: "Usable Results", desc: "Get useful game feedback", icon: "🎯" }
          ].map((benefit, index) => (
            <div key={index} className="text-center p-6 rounded-lg bg-secondary/10 border border-border">
              <div className="text-2xl mb-2">{benefit.icon}</div>
              <h3 className="font-medium mb-2">{benefit.title}</h3>
              <p className="text-sm text-secondary-foreground">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemoSection;