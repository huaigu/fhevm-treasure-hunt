import { useEffect } from "react";
import { Terminal, Package, FolderTree, Server, Wallet, CheckCircle, ArrowLeft, Lightbulb, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Link } from "react-router-dom";

const EnvironmentSetup = () => {
  const navigationItems = [
    { id: "step-1", title: "Step 1: Official Template" },
    { id: "step-2", title: "Step 2: Install Dependencies" },
    { id: "step-3", title: "Step 3: Project Structure" },
    { id: "step-4", title: "Step 4: Start Blockchain" },
    { id: "step-5", title: "Step 5: Connect Wallet" },
  ];

  // Ensure page starts at top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  const steps = [
    {
      id: "step-1",
      icon: Terminal,
      title: "Step 1: Start with Official Template",
      description: "Zama provides an official React-based FHEVM template, which is the best starting point. Open your terminal and execute the following commands to clone it:",
      code: "git clone https://github.com/zama-ai/fhevm-react-template.git confidential-treasure-hunt\ncd confidential-treasure-hunt"
    },
    {
      id: "step-2",
      icon: Package,
      title: "Step 2: Install Dependencies",
      description: "This template project uses Yarn as the package manager. In the project root directory, execute the following command to install all required building blocks:",
      code: "yarn install",
      tip: "💡 If you don't have Yarn installed, you can install it globally with npm install -g yarn."
    },
    {
      id: "step-3",
      icon: FolderTree,
      title: "Step 3: Understanding Our Toolkit",
      description: "This project is a Monorepo (single repository), meaning both frontend and backend code are in one repository for easy management. We only need to focus on these two folders under the packages directory:",
      code: "/\n├── packages/\n│   ├── contracts/   # Our smart contracts (Solidity)\n│   └── sites/       # Our frontend website (React)\n└── package.json     # Project root configuration file"
    },
    {
      id: "step-4",
      icon: Server,
      title: "Step 4: Start Your Private Blockchain",
      description: "The template has already configured all commands for us. In the project **root directory**, execute the following command to start the local Hardhat test network:",
      code: "yarn contracts:dev",
      warning: "⚠️ Keep this terminal window open! The network must keep running to test contracts."
    },
    {
      id: "step-5",
      icon: Wallet,
      title: "Step 5: Connect MetaMask Wallet",
      description: "Now we need to connect MetaMask wallet to the local test network. Please configure according to the following steps:",
      code: "Network Name: FHEVM Local\nRPC URL: http://localhost:8545\nChain ID: 9000\nCurrency Symbol: ZAMA\nBlock Explorer: http://localhost:8545"
    }
  ];

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
                <Terminal className="w-4 h-4 text-primary" />
              </div>
              <span className="font-semibold">FHEVM Quest</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        {/* Left Navigation Sidebar */}
        <aside className="hidden md:block w-64 bg-background border-r border-border sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="p-6">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
              Page Navigation
            </h3>
            <nav className="space-y-2">
              {navigationItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-md transition-colors"
                >
                  {item.title}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-4xl">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">
                <span className="gradient-text">Environment Setup</span> Guide
              </h1>
              <p className="text-lg text-secondary-foreground max-w-2xl mx-auto">
                Let's configure the development environment step by step to prepare for building your first confidential DApp
              </p>
            </div>

            {/* Steps */}
            <div className="space-y-8">
              {steps.map((step, index) => (
                <Card key={index} id={step.id} className="feature-card bg-card/80 backdrop-blur-sm scroll-mt-20">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center glow-primary">
                        <step.icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{step.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-secondary-foreground leading-relaxed">
                      {step.description}
                    </p>

                    {step.code && (
                      <div className="bg-muted/50 rounded-lg p-4 border border-border">
                        <pre className="text-sm font-mono text-foreground overflow-x-auto">
                          <code>{step.code}</code>
                        </pre>
                      </div>
                    )}

                    {step.tip && (
                      <Alert className="bg-primary/5 border-primary/20">
                        <Lightbulb className="h-4 w-4 text-primary" />
                        <AlertDescription className="text-secondary-foreground">
                          {step.tip}
                        </AlertDescription>
                      </Alert>
                    )}

                    {step.warning && (
                      <Alert className="bg-destructive/5 border-destructive/20">
                        <AlertTriangle className="h-4 w-4 text-destructive" />
                        <AlertDescription className="text-secondary-foreground">
                          {step.warning}
                        </AlertDescription>
                      </Alert>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

        {/* React Beginner Section */}
        <Card className="feature-card bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20 mt-8">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                <Lightbulb className="w-5 h-5 text-primary" />
              </div>
              <CardTitle className="text-lg">New to React? Don't worry!</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-secondary-foreground leading-relaxed">
              Our frontend uses the React framework. If you haven't worked with it before, the files in the sites directory might look unfamiliar.
            </p>
            <p className="text-secondary-foreground leading-relaxed">
              The good news is that this tutorial <strong>focuses on FHEVM integration</strong>, and you'll only need to modify very little frontend code. We'll guide you precisely, telling you exactly which lines to change.
            </p>
            <p className="text-secondary-foreground leading-relaxed">
              If you're curious about any code or don't understand it, <strong>we strongly recommend copying the code to AI tools</strong> (like ChatGPT, Gemini, Copilot) and asking: "Please explain what this React code does in a way beginners can understand?" This is a very modern and efficient learning method!
            </p>
          </CardContent>
        </Card>

            {/* Completion Section */}
            <Card className="feature-card bg-gradient-to-r from-green-500/10 to-primary/10 border-green-500/20 mt-8">
              <CardContent className="text-center py-8">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">🎉 Chapter Complete!</h3>
                <p className="text-secondary-foreground mb-6 max-w-2xl mx-auto">
                  Congratulations! The development environment is now set up. Next, we'll move to the most exciting part—writing your first confidential smart contract.
                </p>
                <Button size="lg" className="gradient-bg">
                  Continue to Next Step: Writing Confidential Contracts
                </Button>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default EnvironmentSetup;