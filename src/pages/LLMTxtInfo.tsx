import { FileText, Download, ArrowLeft, Code, Terminal, Bot, ExternalLink, CheckCircle, Lightbulb, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Link } from "react-router-dom";

const LLMTxtInfo = () => {
  const tools = [
    {
      name: "Cursor",
      icon: Terminal,
      description: "AI-first code editor with full codebase awareness",
      usage: "Paste LLM.txt content into chat for better context understanding and code generation"
    },
    {
      name: "Claude Code",
      icon: Bot,
      description: "Command-line interface for AI-enabled development",
      usage: "Place in CLAUDE.md or project root for automatic context loading and better workflow support"
    },
    {
      name: "GitHub Copilot",
      icon: Code,
      description: "AI programming assistant integrated into IDEs",
      usage: "Reference LLM.txt patterns for improved code suggestions and documentation"
    },
    {
      name: "VS Code Extensions",
      icon: FileText,
      description: "Various AI-powered extensions for Visual Studio Code",
      usage: "Use LLM.txt as reference documentation for context-aware assistance"
    }
  ];

  const benefits = [
    "Content discovery: AI models find your most relevant pages without getting lost in site architecture",
    "Response accuracy: AI can cite your content more precisely when generating answers",
    "Documentation visibility: Technical guides and API references get better representation",
    "Indexing optimization: Your site becomes more accessible for AI visibility",
    "Context efficiency: Streamlined information that fits within AI context windows",
    "Standardization: Following industry-standard format for AI-first documentation"
  ];

  const fileStructure = `# Project Name
> Brief project summary

Additional context and important notes

## Core Documentation
- [Quick Start](url): Description of the resource
- [API Reference](url): API documentation details

## Optional
- [Additional Resources](url): Supplementary information`;

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Home</span>
            </Link>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                <FileText className="w-4 h-4 text-primary" />
              </div>
              <span className="font-semibold">FHEVM Quest</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="gradient-text">LLM.txt</span> Documentation
          </h1>
          <p className="text-lg text-secondary-foreground max-w-3xl mx-auto">
            Learn how to use LLM.txt files to optimize AI coding tools and improve development workflows with structured documentation
          </p>
        </div>

        {/* What is LLM.txt */}
        <Card className="feature-card bg-card/80 backdrop-blur-sm mb-8">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center space-x-3">
              <FileText className="w-6 h-6 text-primary" />
              <span>What is LLM.txt?</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-secondary-foreground leading-relaxed">
              The LLM.txt file is a standardized markdown document that provides curated information to help Large Language Models (LLMs)
              understand and work with your website or codebase more effectively. It serves as a structured index of your most important
              documentation and resources.
            </p>
            <p className="text-secondary-foreground leading-relaxed">
              Proposed by Jeremy Howard in September 2024, this standard addresses a critical limitation: AI systems have limited context
              windows and struggle to process entire websites or large codebases. LLM.txt provides a clean, organized way to surface the
              most relevant information.
            </p>

            <Alert className="bg-primary/5 border-primary/20">
              <Lightbulb className="h-4 w-4 text-primary" />
              <AlertDescription className="text-secondary-foreground">
                <strong>Key Insight:</strong> Traditional SEO techniques are optimized for search crawlers, not reasoning engines.
                LLM.txt bridges this gap by providing AI-optimized documentation.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* File Types */}
        <Card className="feature-card bg-card/80 backdrop-blur-sm mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Two File Types</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-foreground">LLM.txt (Compact)</h3>
                <p className="text-secondary-foreground text-sm">
                  A streamlined index file containing links with brief descriptions. AI models must follow these links to access detailed information.
                </p>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-secondary-foreground">Smaller context usage</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-secondary-foreground">Requires navigation</span>
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-foreground">LLM_FULL.txt (Complete)</h3>
                <p className="text-secondary-foreground text-sm">
                  Contains all detailed content directly in a single file, eliminating the need for additional navigation.
                </p>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-secondary-foreground">Complete information</span>
                </div>
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm text-secondary-foreground">Higher context usage</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* How to Use with AI Tools */}
        <Card className="feature-card bg-card/80 backdrop-blur-sm mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">How to Use with AI Coding Tools</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid lg:grid-cols-2 gap-6">
              {tools.map((tool, index) => (
                <Card key={index} className="bg-muted/20 border-border/50">
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                        <tool.icon className="w-5 h-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{tool.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-secondary-foreground">{tool.description}</p>
                    <div className="bg-muted/30 rounded-lg p-3">
                      <p className="text-sm text-foreground font-medium">Usage:</p>
                      <p className="text-sm text-secondary-foreground mt-1">{tool.usage}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* File Structure */}
        <Card className="feature-card bg-card/80 backdrop-blur-sm mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">File Structure and Format</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-secondary-foreground">
              LLM.txt follows a specific markdown structure to ensure consistency and optimal AI parsing:
            </p>
            <div className="bg-muted/50 rounded-lg p-4 border border-border">
              <pre className="text-sm font-mono text-foreground overflow-x-auto">
                <code>{fileStructure}</code>
              </pre>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-foreground">Key Requirements:</h4>
              <ul className="space-y-1 text-sm text-secondary-foreground">
                <li>• Must start with an H1 project name</li>
                <li>• Include a blockquote summary</li>
                <li>• Use H2 headers to organize sections</li>
                <li>• Provide clear, descriptive link descriptions</li>
                <li>• Mark optional content appropriately</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Benefits */}
        <Card className="feature-card bg-card/80 backdrop-blur-sm mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Benefits for AI Development</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-secondary-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Download Section */}
        <Card className="feature-card bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
          <CardHeader>
            <CardTitle className="text-2xl">Download FHEVM Quest LLM.txt Files</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-secondary-foreground">
              Access our LLM.txt files to better understand FHEVM development and integrate this project's knowledge into your AI workflows:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-card/60 border-border/50">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3">
                    <FileText className="w-6 h-6 text-primary" />
                    <CardTitle className="text-lg">LLM.txt (Compact)</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-secondary-foreground">
                    Streamlined version with links to key documentation. Perfect for tools with limited context windows.
                  </p>
                  <Button
                    className="w-full"
                    onClick={() => window.open('/LLM.txt', '_blank')}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download LLM.txt
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-card/60 border-border/50">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3">
                    <FileText className="w-6 h-6 text-accent" />
                    <CardTitle className="text-lg">LLM_FULL.txt (Complete)</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-secondary-foreground">
                    Complete documentation in a single file. Contains full FHEVM development guidance and examples.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => window.open('/LLM_FULL.txt', '_blank')}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download LLM_FULL.txt
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Alert className="bg-primary/5 border-primary/20">
              <Lightbulb className="h-4 w-4 text-primary" />
              <AlertDescription className="text-secondary-foreground">
                <strong>Pro Tip:</strong> Use the compact version for quick references and the full version when you need
                comprehensive FHEVM documentation in your AI tool's context.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LLMTxtInfo;