import React from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Code, Wallet, Zap, GamepadIcon, Monitor, ArrowRight } from "lucide-react";

const FrontendIntegration = () => {
  const navigationItems = [
    { id: "wallet-contract", title: "A. Connect Wallet and Contract" },
    { id: "fhevm-instance", title: "B. Initialize FHEVM Instance" },
    { id: "admin-operations", title: "C. Admin Operations: Create Treasure" },
    { id: "player-operations", title: "D. Player Operations: Complete Game Loop" },
    { id: "final-demo", title: "E. Final Code and Live Demo" },
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-20">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Navigation */}
          <div className="lg:w-64 lg:flex-shrink-0">
            <div className="sticky top-24">
              <Card className="border-border/40">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Page Navigation</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <nav className="space-y-1">
                    {navigationItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className="w-full text-left px-2 py-1.5 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors"
                      >
                        {item.title}
                      </button>
                    ))}
                  </nav>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 max-w-none">
            {/* Hero Section */}
            <div className="mb-12">
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="outline" className="px-3 py-1">Part 3</Badge>
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
                <Badge variant="secondary" className="px-3 py-1">Frontend Integration</Badge>
              </div>
              
              <h1 className="text-4xl font-bold tracking-tight mb-6">
                Building Frontend Integration
              </h1>
              
              <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
                <p>
                  Welcome to the final stop of our journey! We already have a powerful and secure smart contract engine. Now, it's time to build a user-friendly "cockpit" for it.
                </p>
                <p>
                  In this chapter, you'll learn how to use ethers.js and fhevm-react hooks to complete the entire process from connecting wallets to interacting with confidential contracts in a React frontend application.
                </p>
              </div>

              <Card className="mt-6 border-primary/20 bg-primary/5">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      ⌨️
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Hands-on Practice</h3>
                      <p className="text-sm text-muted-foreground">
                        We will perform main operations in the <code className="px-1 py-0.5 bg-muted rounded text-xs">packages/sites/src/app/</code> directory.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Section A: 连接钱包与合约 */}
            <section id="wallet-contract" className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Wallet className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">A. Connect Wallet and Contract</h2>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">1. Connect MetaMask</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      The first step for any DApp is to let users connect their wallet. We will add a button that, when clicked, will prompt MetaMask to request connection.
                    </p>
                    
                    <div className="bg-muted/50 rounded-lg p-4">
                      <pre className="text-sm text-foreground overflow-x-auto">
                        <code>{`// In your React component
import { useState } from "react";
import { ethers } from "ethers";

function App() {
  const [signer, setSigner] = useState(null);
  const [userAddress, setUserAddress] = useState("");

  const connectWallet = async () => {
    if (window.ethereum) {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      setSigner(signer);
      setUserAddress(await signer.getAddress());
    } else {
      alert("Please install MetaMask!");
    }
  };

  return (
    <div>
      {userAddress ? (
        <p>Connected: {userAddress}</p>
      ) : (
        <button onClick={connectWallet}>Connect Wallet</button>
      )}
    </div>
  );
}`}</code>
                      </pre>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">2. Instantiate Contract</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      After successful connection, we need to create an ethers.Contract instance to call methods of our deployed TreasureHunt contract.
                    </p>
                    
                    <div className="bg-muted/50 rounded-lg p-4">
                      <pre className="text-sm text-foreground overflow-x-auto">
                        <code>{`// Add contract address and ABI at the top of your component
import TreasureHuntABI from "@/abi/TreasureHuntABI.json"; // Assuming ABI file is generated
const CONTRACT_ADDRESS = "YOUR_DEPLOYED_CONTRACT_ADDRESS"; // Replace with address deployed in Part 2

// ...
// After connectWallet succeeds
const contract = new ethers.Contract(CONTRACT_ADDRESS, TreasureHuntABI.abi, signer);
// You can save this contract instance in state for later use`}</code>
                      </pre>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            <Separator className="my-12" />

            {/* Section B: 初始化 FHEVM 实例 */}
            <section id="fhevm-instance" className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">B. Initialize FHEVM Instance</h2>
              </div>

              <Card className="mb-6">
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-4">
                    This is the most critical step for interacting with FHEVM. We need to create an fhevm instance that will handle all encryption and decryption operations.
                  </p>
                  
                  <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
                    <div className="flex items-start gap-3">
                      <span className="text-lg">💡</span>
                      <div>
                        <p className="font-medium text-amber-800">Tip</p>
                        <p className="text-sm text-amber-700">
                          Zama's official <code className="px-1 py-0.5 bg-amber-100 rounded">@fhevm/react</code> library provides a convenient useFhevm Hook to simplify this process. But in this tutorial, to clearly show each step, we will execute this process manually.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="bg-muted/50 rounded-lg p-4">
                    <pre className="text-sm text-foreground overflow-x-auto">
                      <code>{`import { createFhevmInstance } from "@fhevm/runtime";

// ...
const [fhevmInstance, setFhevmInstance] = useState(null);
const [isInitialized, setIsInitialized] = useState(false);

const initializeFhevm = async () => {
    if (provider && !isInitialized) {
        // 1. Create instance from provider
        const instance = await createFhevmInstance({ provider });

        // 2. Generate a public key for decryption
        // This step requires user signature to prove they own the key
        await instance.generatePublicKey({ verifyingContract: CONTRACT_ADDRESS });

        setFhevmInstance(instance);
        setIsInitialized(true);
        console.log("FHEVM instance initialized!");
    }
};

// You can call initializeFhevm() after wallet connection succeeds`}</code>
                    </pre>
                  </div>
                </CardContent>
              </Card>
            </section>

            <Separator className="my-12" />

            {/* Section C: 管理员操作 */}
            <section id="admin-operations" className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Code className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">C. Admin Operations: Create Treasure</h2>
              </div>

              <p className="text-muted-foreground mb-6">
                This operation is simple, only the contract owner can call it.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">UI:</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-muted/50 rounded-lg p-4">
                      <pre className="text-sm text-foreground">
                        <code>{`{isOwner && <button onClick={handleCreateTreasure}>Create New Treasure</button>}`}</code>
                      </pre>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Logic:</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-muted/50 rounded-lg p-4">
                      <pre className="text-sm text-foreground overflow-x-auto">
                        <code>{`const handleCreateTreasure = async () => {
    if (contract && fhevmInstance) {
        try {
            const tx = await contract.createTreasure();
            console.log("Creating treasure, transaction hash:", tx.hash);
            await tx.wait();
            alert("New treasure created successfully!");
        } catch (e) {
            console.error(e);
            alert("Error creating treasure.");
        }
    }
};`}</code>
                      </pre>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            <Separator className="my-12" />

            {/* Section D: 玩家操作 */}
            <section id="player-operations" className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <GamepadIcon className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">D. Player Operations: Complete Game Loop</h2>
              </div>

              <p className="text-muted-foreground mb-6">
                This is the core interaction of the game! We will step-by-step implement the "encrypt → submit → retrieve → decrypt" workflow.
              </p>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">UI:</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-muted/50 rounded-lg p-4">
                      <pre className="text-sm text-foreground overflow-x-auto">
                        <code>{`<div>
    <input type="number" placeholder="Guess X" value={guessX} onChange={(e) => setGuessX(e.target.value)} />
    <input type="number" placeholder="Guess Y" value={guessY} onChange={(e) => setGuessY(e.target.value)} />
    <button onClick={handleGuess}>Submit Guess</button>
    {decryptedDistance !== null && <p>Your distance to treasure: {decryptedDistance}</p>}
</div>`}</code>
                      </pre>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Logic:</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-muted/50 rounded-lg p-4">
                      <pre className="text-sm text-foreground overflow-x-auto">
                        <code>{`const [decryptedDistance, setDecryptedDistance] = useState(null);

const handleGuess = async () => {
    if (!contract || !fhevmInstance) {
        alert("Please connect wallet and initialize FHEVM first.");
        return;
    }

    try {
        // Step 1: Encrypt user's guess
        // We use encrypt8 because our coordinates are euint8 type
        console.log("Encrypting guess...");
        const encryptedX = await fhevmInstance.encrypt8(parseInt(guessX));
        const encryptedY = await fhevmInstance.encrypt8(parseInt(guessY));

        // Step 2: Call contract's guess function, submit encrypted data
        console.log("Submitting guess to contract...");
        const tx = await contract.guess(encryptedX, encryptedY);
        await tx.wait();
        console.log("Guess submitted successfully!");

        // Step 3: Read encrypted distance from contract's public mapping
        console.log("Reading encrypted distance from contract...");
        const encryptedDistance = await contract.userDistances(userAddress);

        // Step 4: Perform off-chain decryption locally
        console.log("Decrypting distance locally...");
        const distance = await fhevmInstance.decrypt(CONTRACT_ADDRESS, encryptedDistance);
        
        setDecryptedDistance(distance);

        if (distance === 0) {
            alert("Congratulations! You found the treasure! 🎉");
        }

    } catch (e) {
        console.error(e);
        alert("An error occurred during the guess.");
    }
};`}</code>
                      </pre>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            <Separator className="my-12" />

            {/* Section E: 最终代码与在线演示 */}
            <section id="final-demo" className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Monitor className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">E. Final Code and Live Demo</h2>
              </div>

              <p className="text-muted-foreground mb-6">
                Combining all the above logic together, we get a fully functional DApp frontend!
              </p>

              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="text-xl">Final Result Preview</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Below is an embedded, fully functional "Confidential Treasure Hunt Game" demo. Please connect your Sepolia testnet wallet, ensure you have test ETH, and experience the magic of FHEVM yourself!
                  </p>

                  <Card className="border-primary/20 bg-primary/5">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <div className="bg-primary/10 p-2 rounded-lg">
                          ⌨️
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">Hands-on Practice</h3>
                          <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
                            <li>First, as contract Owner, click "Create New Treasure".</li>
                            <li>Then start submitting your guess coordinates (0-255) in the input boxes.</li>
                            <li>Observe the distance hints returned below, keep adjusting your guesses until the distance is 0!</li>
                          </ol>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>

              <Card className="border-2 border-dashed border-muted-foreground/30">
                <CardContent className="py-16 text-center">
                  <h3 className="text-xl font-semibold mb-4">Embedded Live Demo</h3>
                  <p className="text-muted-foreground mb-4">
                    <em>[Your live CodeSandbox/StackBlitz DApp will be embedded here]</em>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    URL: (To be determined)
                  </p>
                </CardContent>
              </Card>

              <div className="mt-12 text-center">
                <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5">
                  <CardContent className="py-8">
                    <h3 className="text-2xl font-bold mb-4">🎉 Congratulations on completing the entire journey!</h3>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                      You have mastered the core technologies of FHEVM, from environment setup to smart contract development, and frontend integration, building a complete confidential DApp.
                      Now it's time to use these skills to create your own privacy-preserving applications!
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontendIntegration;