import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Bot, ArrowRight, Download, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const LLMTxtSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">AI-Optimized</span> Documentation
          </h2>
          <p className="text-lg text-secondary-foreground max-w-3xl mx-auto">
            Enhance your AI coding experience with our structured LLM.txt files, designed specifically for modern AI development tools
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: What is LLM.txt */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">What is LLM.txt?</h3>
                <p className="text-sm text-primary">AI-First Documentation Standard</p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-secondary-foreground leading-relaxed">
                LLM.txt is a standardized documentation format that helps Large Language Models
                understand your codebase more effectively. Unlike traditional documentation
                optimized for search engines, LLM.txt provides AI-optimized content structure.
              </p>

              <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary">
                <p className="text-sm text-secondary-foreground">
                  <strong className="text-primary">Key Benefit:</strong> AI tools like Cursor,
                  Claude Code, and GitHub Copilot can better understand your project context,
                  leading to more accurate code suggestions and documentation.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-card rounded-lg border border-border">
                  <FileText className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h4 className="font-medium text-sm">LLM.txt</h4>
                  <p className="text-xs text-secondary-foreground">Compact Index</p>
                </div>
                <div className="text-center p-4 bg-card rounded-lg border border-border">
                  <Bot className="w-8 h-8 text-accent mx-auto mb-2" />
                  <h4 className="font-medium text-sm">LLM_FULL.txt</h4>
                  <p className="text-xs text-secondary-foreground">Complete Documentation</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: FHEVM Quest LLM.txt */}
          <Card className="feature-card bg-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-gradient-primary rounded-full" />
                <span>FHEVM Quest LLM.txt</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-secondary-foreground">
                Access our comprehensive FHEVM documentation formatted specifically for AI tools.
                Perfect for understanding homomorphic encryption development patterns.
              </p>

              {/* Download Buttons */}
              <div className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full justify-between"
                  onClick={() => window.open('/LLM.txt', '_blank')}
                >
                  <div className="flex items-center space-x-2">
                    <Download className="w-4 h-4" />
                    <span>LLM.txt (Compact)</span>
                  </div>
                  <ExternalLink className="w-4 h-4" />
                </Button>

                <Button
                  variant="outline"
                  className="w-full justify-between"
                  onClick={() => window.open('/LLM_FULL.txt', '_blank')}
                >
                  <div className="flex items-center space-x-2">
                    <Download className="w-4 h-4" />
                    <span>LLM_FULL.txt (Complete)</span>
                  </div>
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>

              {/* Usage Examples */}
              <div className="bg-muted/30 rounded-lg p-4">
                <h4 className="font-medium text-sm mb-3 flex items-center space-x-2">
                  <Bot className="w-4 h-4 text-primary" />
                  <span>Usage with AI Tools</span>
                </h4>
                <div className="space-y-2 text-xs text-secondary-foreground">
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span><strong>Cursor:</strong> Paste into chat for context</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span><strong>Claude Code:</strong> Place in project root</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span><strong>VS Code:</strong> Reference for extensions</span>
                  </div>
                </div>
              </div>

              {/* Learn More Button */}
              <Link to="/llm-txt">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Learn More About LLM.txt
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Benefits Row */}
        <div className="mt-16 grid md:grid-cols-4 gap-6">
          {[
            { title: "Better Context", desc: "AI understands your project structure", icon: "🧠" },
            { title: "Accurate Suggestions", desc: "More relevant code completions", icon: "🎯" },
            { title: "Efficient Workflows", desc: "Reduced context switching", icon: "⚡" },
            { title: "Standard Format", desc: "Works across AI development tools", icon: "🔧" }
          ].map((benefit, index) => (
            <div key={index} className="text-center p-4 rounded-lg bg-card/50 border border-border/50">
              <div className="text-xl mb-2">{benefit.icon}</div>
              <h3 className="font-medium text-sm mb-1">{benefit.title}</h3>
              <p className="text-xs text-secondary-foreground">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LLMTxtSection;