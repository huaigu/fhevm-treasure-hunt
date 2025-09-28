import { Eye, Shield, Lock, Key } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ProblemSolutionSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            On a public blockchain,
            <span className="gradient-text">how do you keep secrets?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Problem Card */}
          <Card className="feature-card bg-card border-destructive/20 hover:border-destructive/40">
            <CardContent className="p-8 text-center space-y-6">
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-20 h-20 bg-destructive/20 rounded-full flex items-center justify-center">
                    <Eye className="w-10 h-10 text-destructive" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-destructive rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">👁️</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-destructive">
                  All Data, Publicly Transparent
                </h3>
                <p className="text-secondary-foreground leading-relaxed">
                  Every guess, every bid, is visible to everyone. This transparency limits Web3 use cases,
                  preventing many real-world applications from being implemented on blockchain.
                </p>
              </div>

              <div className="flex justify-center space-x-2 text-xs text-muted-foreground">
                <span className="px-2 py-1 bg-destructive/10 rounded">Public Bidding</span>
                <span className="px-2 py-1 bg-destructive/10 rounded">Visible Strategy</span>
                <span className="px-2 py-1 bg-destructive/10 rounded">MEV Risk</span>
              </div>
            </CardContent>
          </Card>

          {/* Solution Card */}
          <Card className="feature-card bg-card border-primary/20 hover:border-primary/40">
            <CardContent className="p-8 text-center space-y-6">
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-20 h-20 bg-primary/20 rounded-xl flex items-center justify-center glow-primary">
                    <Shield className="w-10 h-10 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center animate-pulse">
                    <Lock className="w-4 h-4 text-white" />
                  </div>
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <Key className="w-3 h-3 text-white" />
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-primary">
                  FHEVM: Private Computation, Visible Results
                </h3>
                <p className="text-secondary-foreground leading-relaxed">
                  FHEVM enables smart contracts to compute on encrypted data without decryption. Achieving true
                  <span className="text-accent font-medium">"private computation, visible results"</span>,
                  ushering in a new era of on-chain privacy.
                </p>
              </div>

              <div className="flex justify-center space-x-2 text-xs text-muted-foreground">
                <span className="px-2 py-1 bg-primary/10 rounded">Privacy Protection</span>
                <span className="px-2 py-1 bg-primary/10 rounded">Homomorphic Encryption</span>
                <span className="px-2 py-1 bg-primary/10 rounded">Verifiable Computing</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Visual Flow */}
        <div className="mt-16 flex justify-center">
          <div className="flex items-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-muted rounded-full" />
              <span className="text-muted-foreground">Encrypted Input</span>
            </div>
            <div className="text-primary">→</div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-primary rounded-full animate-pulse" />
              <span className="text-foreground">FHE Computation</span>
            </div>
            <div className="text-accent">→</div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-accent rounded-full" />
              <span className="text-accent">Public Result</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;