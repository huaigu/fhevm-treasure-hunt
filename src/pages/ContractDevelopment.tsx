import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ArrowLeft, Lock, Shield, Code, Database, Keyboard, CheckCircle, Lightbulb, AlertTriangle, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const ContractDevelopment = () => {
  const navigationItems = [
    { id: "fhevm-concepts", title: "FHEVM Core Concepts" },
    { id: "game-design", title: "Design Treasure Hunt Game" },
    { id: "coding", title: "Write Contract Code" },
    { id: "deployment", title: "Deploy to Testnet" }
  ];

  // Ensure page starts at top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

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
                <Code className="w-4 h-4 text-primary" />
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
                <span className="gradient-text">Part 2: Writing Your First Confidential Smart Contract</span>
              </h1>
              <p className="text-lg text-secondary-foreground max-w-3xl mx-auto">
                Welcome to the core part of our treasure hunt journey! In this chapter, we'll dive deep into the world of smart contracts and truly unveil the mysteries of FHEVM. You'll learn how to perform computations on encrypted data, design a complete on-chain game logic, and finally deploy your first confidential DApp to a public testnet.
              </p>
              <Alert className="bg-primary/5 border-primary/20 mt-6">
                <Lightbulb className="h-4 w-4 text-primary" />
                <AlertDescription className="text-secondary-foreground">
                  Ready? Let's start coding!
                </AlertDescription>
              </Alert>
            </div>

            {/* Section A: FHEVM Core Concepts */}
            <section id="fhevm-concepts" className="mb-16">
              <Card className="feature-card bg-card/80 backdrop-blur-sm mb-8">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center glow-primary">
                      <Lock className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">A. FHEVM Core Concepts: Deconstructing the Counter Contract</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-secondary-foreground leading-relaxed">
                    Before building our complex game, let's learn some of FHEVM's most fundamental and important concepts through the Counter.sol contract that comes with the official template.
                  </p>
                  
                  <Alert className="bg-accent/5 border-accent/20">
                    <Keyboard className="h-4 w-4 text-accent" />
                    <AlertDescription className="text-secondary-foreground">
                      <strong>Hands-on Practice ⌨️</strong><br />
                      Please open the <code className="bg-muted px-2 py-1 rounded text-sm">Counter.sol</code> file in the <code className="bg-muted px-2 py-1 rounded text-sm">packages/contracts/contracts/</code> directory in your code editor.
                    </AlertDescription>
                  </Alert>

                  {/* Subsection 1: euint32 */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">1. FHEVM's "Encrypted Data Types": euint32</h3>
                    <p className="text-secondary-foreground mb-4">
                      In traditional Solidity, we use <code className="bg-muted px-2 py-1 rounded text-sm">uint</code> to represent a public integer. In FHEVM, we use <strong>encrypted integers</strong>, such as <code className="bg-muted px-2 py-1 rounded text-sm">euint32</code> (encrypted uint32).
                    </p>
                    <p className="text-secondary-foreground mb-4">
                      You can think of it as a <strong>locked safe</strong> 💎 containing a number. You can't directly open it to see the number inside, but FHEVM provides a set of "special tools" that can operate directly on this locked state.
                    </p>
                    
                    <div className="bg-muted/50 rounded-lg p-4 border border-border">
                      <p className="mb-2 text-sm text-secondary-foreground">In Counter.sol, you will see:</p>
                      <pre className="text-sm font-mono text-foreground overflow-x-auto">
                        <code>{`// A private, encrypted 32-bit unsigned integer
euint32 private _count;`}</code>
                      </pre>
                    </div>
                  </div>

                  {/* Subsection 2: FHE.add() */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">2. FHEVM's "Encrypted Computation": FHE.add()</h3>
                    <p className="text-secondary-foreground mb-4">
                      This is the most magical aspect of FHEVM. We can perform operations directly on two "encrypted safes" without needing to decrypt them.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <Card className="border-red-200 bg-red-50/50 dark:bg-red-950/20 dark:border-red-800">
                        <CardHeader>
                          <CardTitle className="text-lg text-red-800 dark:text-red-200">Traditional Solidity (publicCount is uint32)</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="bg-red-100/50 dark:bg-red-900/20 p-3 rounded text-sm">
                            <code>publicCount = publicCount + 1;</code>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card className="border-green-200 bg-green-50/50 dark:bg-green-950/20 dark:border-green-800">
                        <CardHeader>
                          <CardTitle className="text-lg text-green-800 dark:text-green-200">FHEVM Solidity (_count is euint32)</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="bg-green-100/50 dark:bg-green-900/20 p-3 rounded text-sm">
                            <code>_count = FHE.add(_count, FHE.asEuint32(1));</code>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <Card className="bg-accent/10 border-accent/20">
                      <CardContent className="pt-6">
                        <div className="text-center">
                          <div className="flex items-center justify-center gap-4 text-lg">
                            <div className="flex items-center gap-2">
                              <Lock className="h-6 w-6 text-primary" />
                              <span>Box A</span>
                            </div>
                            <span className="text-2xl">+</span>
                            <div className="flex items-center gap-2">
                              <Lock className="h-6 w-6 text-primary" />
                              <span>Box B</span>
                            </div>
                            <span className="text-2xl">→</span>
                            <div className="flex items-center gap-2">
                              <Lock className="h-6 w-6 text-accent" />
                              <span>New Box C (A+B sum)</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Subsection 3: FHE functions */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">3. FHEVM's "Access Control": FHE.fromExternal() and FHE.allow()</h3>
                    <p className="text-secondary-foreground mb-4">
                      How does the contract handle encrypted data from the frontend, and how does it authorize the frontend to decrypt results?
                    </p>
                    
                    <div className="space-y-4">
                      <Card className="border-blue-200 bg-blue-50/50 dark:bg-blue-950/20 dark:border-blue-800">
                        <CardContent className="pt-4">
                          <div className="flex items-start gap-3">
                            <Database className="h-5 w-5 text-blue-600 mt-1" />
                            <div>
                              <p className="font-semibold text-blue-800 dark:text-blue-200 mb-2">FHE.fromExternal():</p>
                              <p className="text-sm text-blue-700 dark:text-blue-300">Acts like a "receiver", it accepts encrypted packages sent by users from the frontend and converts them into a format that the contract can process internally.</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card className="border-purple-200 bg-purple-50/50 dark:bg-purple-950/20 dark:border-purple-800">
                        <CardContent className="pt-4">
                          <div className="flex items-start gap-3">
                            <Shield className="h-5 w-5 text-purple-600 mt-1" />
                            <div>
                              <p className="font-semibold text-purple-800 dark:text-purple-200 mb-2">FHE.allow():</p>
                              <p className="text-sm text-purple-700 dark:text-purple-300">Acts like an "authorization officer", it puts a "permission label" on encrypted data (e.g., _count), allowing specific people (e.g., msg.sender) to request decryption on the frontend.</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Section B: Game Design */}
            <section id="game-design" className="mb-16">
              <Card className="feature-card bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center glow-primary">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">B. Design Upgrade: Building a More Realistic Treasure Hunt Game</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-secondary-foreground leading-relaxed">
                    Great! The basics are sufficient. Now, we'll move beyond the simple counter to design our own, more feature-complete "confidential treasure hunt game". A good design process is far more important than writing code directly.
                  </p>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      Our game needs to meet the following requirements:
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                        <div>
                          <p className="font-semibold mb-1">Game Administrator (Owner):</p>
                          <p className="text-sm text-secondary-foreground">Only the contract deployer (owner) has the right to create new treasures. We will use the industry-standard OpenZeppelin Ownable contract to implement access control.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                        <div>
                          <p className="font-semibold mb-1">Random Treasure:</p>
                          <p className="text-sm text-secondary-foreground">The treasure location (secretX, secretY) will be generated by the owner calling a function that uses Zama's on-chain random number FHE.rand(), ensuring game fairness and replayability.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                        <div>
                          <p className="font-semibold mb-1">Private Guessing:</p>
                          <p className="text-sm text-secondary-foreground">Anyone can participate in guessing. The contract will calculate and store the encrypted distance between the player's guess location and the treasure.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                        <div>
                          <p className="font-semibold mb-1">Player-Driven Decryption:</p>
                          <p className="text-sm text-secondary-foreground">Players will securely decrypt their distance <strong>off-chain</strong> through a service called Relayer, without exposing any information on-chain.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Section C: Coding */}
            <section id="coding" className="mb-16">
              <Card className="feature-card bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center glow-primary">
                      <Code className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">C. Hands-on Coding: Writing the "Treasure Hunt V2" Contract</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-8">
                  <p className="text-secondary-foreground leading-relaxed">Now, let's turn the design into code!</p>
                  
                  <Alert className="bg-accent/5 border-accent/20">
                    <Keyboard className="h-4 w-4 text-accent" />
                    <AlertDescription className="text-secondary-foreground">
                      <strong>Hands-on Practice ⌨️</strong><br />
                      In the <code className="bg-muted px-2 py-1 rounded">packages/contracts/contracts/</code> directory, create a new <code className="bg-muted px-2 py-1 rounded">TreasureHunt.sol</code> file.<br />
                      Delete the <code className="bg-muted px-2 py-1 rounded">Counter.sol</code> file, we no longer need it.<br />
                      Paste the code below step by step into your <code className="bg-muted px-2 py-1 rounded">TreasureHunt.sol</code> file.
                    </AlertDescription>
                  </Alert>

                  {/* Code Step 1 */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">1. Import Dependencies and Define State Variables</h3>
                    <p className="text-secondary-foreground mb-4">
                      We need to import the FHE library and Ownable contract. Additionally, define treasure coordinates, state flags, and a mapping to store each player's guess distance.
                    </p>
                    
                    <div className="bg-muted/50 rounded-lg p-4 border border-border">
                      <pre className="text-sm font-mono text-foreground overflow-x-auto">
                        <code>{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {FHE, euint8} from "@fhevm/solidity/lib/FHE.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol"; // Import Ownable

contract TreasureHunt is Ownable { // Inherit Ownable
    euint8 private secretX;
    euint8 private secretY;
    bool private isTreasureSet; // Flag to mark if treasure has been created

    // A mapping to store each player's latest encrypted distance
    // Declared as public, so Solidity will automatically create a getter function for us
    mapping(address => euint8) public userDistances;

    // Constructor now needs to call Ownable's constructor, setting the deployer as owner
    constructor() Ownable(msg.sender) {}
}`}</code>
                      </pre>
                    </div>
                  </div>

                  {/* Code Step 2 */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">2. Create Treasure with On-chain Random Numbers</h3>
                    <p className="text-secondary-foreground mb-4">
                      Next, write a function that can only be called by the owner, using <code className="bg-muted px-2 py-1 rounded text-sm">FHE.randEuint8()</code> to generate fully random encrypted coordinates, then using <code className="bg-muted px-2 py-1 rounded text-sm">FHE.rem()</code> to constrain them within the game map range (0-7).
                    </p>

                    <div className="bg-muted/50 rounded-lg p-4 border border-border mb-4">
                      <pre className="text-sm font-mono text-foreground overflow-x-auto">
                        <code>{`    function createTreasure() external onlyOwner {
        require(!isTreasureSet, "Treasure is already set!");

        // Generate full-domain random and reduce to 0..7 so it's in same domain as later computations
        // randEuint8() -> full-domain euint8; rem expects plaintext divisor
        secretX = FHE.rem(FHE.randEuint8(), 8);
        secretY = FHE.rem(FHE.randEuint8(), 8);

        // Grant the contract itself permission to access these encrypted coordinates (for later calculations)
        FHE.allow(secretX, address(this));
        FHE.allow(secretY, address(this));

        isTreasureSet = true;
        emit TreasureCreated();
    }`}</code>
                      </pre>
                    </div>

                    <Alert className="bg-primary/5 border-primary/20">
                      <Lightbulb className="h-4 w-4 text-primary" />
                      <AlertDescription className="text-secondary-foreground">
                        <strong>💡 Key Technical Points:</strong><br />
                        <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                          <li><code className="bg-muted px-1 rounded">FHE.randEuint8()</code> generates a fully random encrypted number (0-255)</li>
                          <li><code className="bg-muted px-1 rounded">FHE.rem(value, 8)</code> takes modulo on encrypted data, ensuring the result is in 0-7 range</li>
                          <li><code className="bg-muted px-1 rounded">FHE.allow(data, address(this))</code> grants the contract permission to use these encrypted values later</li>
                        </ul>
                      </AlertDescription>
                    </Alert>
                  </div>

                  {/* Code Step 3 */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">3. Write the Core guess Function</h3>
                    <p className="text-secondary-foreground mb-4">
                      This is the soul of the game. It receives the player's encrypted guess from the frontend, calculates the Manhattan distance (|x1-x2| + |y1-y2|), grants decryption permission, and stores the result.
                    </p>

                    <Alert className="bg-primary/5 border-primary/20 mb-4">
                      <Lightbulb className="h-4 w-4 text-primary" />
                      <AlertDescription className="text-secondary-foreground">
                        <strong>💡 FHEVM Core Techniques:</strong><br />
                        <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                          <li><strong>FHE.fromExternal()</strong>: Required to receive encrypted data from frontend + attestation proof</li>
                          <li><strong>FHE.select()</strong>: Conditional selection on encrypted data, key to implementing encrypted absolute value</li>
                          <li><strong>Absolute value trick</strong>: Calculate both a-b and b-a, then use select(a&gt;b, a-b, b-a) to choose the correct result</li>
                        </ul>
                      </AlertDescription>
                    </Alert>

                    <div className="bg-muted/50 rounded-lg p-4 border border-border mb-4">
                      <pre className="text-sm font-mono text-foreground overflow-x-auto">
                        <code>{`    /// @notice Submit an encrypted guess for the treasure location
    function guess(externalEuint8 inputX, externalEuint8 inputY, bytes calldata attestation) external {
        require(isTreasureSet, "Treasure has not been set yet!");

        // Convert both inputs using the same attestation
        // And use rem to constrain to 0..7 range, ensuring same domain as treasure coordinates
        euint8 guessX = FHE.rem(FHE.fromExternal(inputX, attestation), 8);
        euint8 guessY = FHE.rem(FHE.fromExternal(inputY, attestation), 8);

        // X-axis absolute diff: calculate both directions, then select based on comparison
        euint8 diffX1 = FHE.sub(guessX, secretX);
        euint8 diffX2 = FHE.sub(secretX, guessX);
        ebool condX = FHE.gt(guessX, secretX); // true when guessX > secretX
        euint8 distX = FHE.select(condX, diffX1, diffX2);

        // Y-axis absolute diff (same logic)
        euint8 diffY1 = FHE.sub(guessY, secretY);
        euint8 diffY2 = FHE.sub(secretY, guessY);
        ebool condY = FHE.gt(guessY, secretY);
        euint8 distY = FHE.select(condY, diffY1, diffY2);

        // Manhattan distance
        euint8 distance = FHE.add(distX, distY);

        // Critical step: Grant the caller persistent permission to decrypt/use distance
        // Also grant the contract itself permission for storage and future use
        FHE.allow(distance, msg.sender);
        FHE.allow(distance, address(this));

        // Store the encrypted distance handle in the mapping
        userDistances[msg.sender] = distance;

        emit GuessSubmitted(msg.sender);
    }`}</code>
                      </pre>
                    </div>

                    <div className="grid gap-4 mt-6">
                      <Card className="bg-blue-50/50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
                        <CardHeader>
                          <CardTitle className="text-base text-blue-800 dark:text-blue-200">🔑 Why use FHE.select() instead of FHE.max()?</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-blue-700 dark:text-blue-300">
                            <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">FHE.select(condition, valueIfTrue, valueIfFalse)</code> is the standard pattern for implementing conditional logic in FHEVM. By first comparing <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">guessX &gt; secretX</code> to get an encrypted boolean, then selecting the correct difference based on this condition, we can calculate absolute value in fully encrypted state.
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="bg-purple-50/50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800">
                        <CardHeader>
                          <CardTitle className="text-base text-purple-800 dark:text-purple-200">🔐 FHE.fromExternal() vs FHE.asEuint8()</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-purple-700 dark:text-purple-300 mb-2">
                            <strong>fromExternal()</strong>: Used to receive encrypted data from the frontend, requires attestation proof to verify data legitimacy.
                          </p>
                          <p className="text-sm text-purple-700 dark:text-purple-300">
                            <strong>asEuint8()</strong>: Used to convert plaintext values to encrypted types within the contract (e.g., <code className="bg-purple-100 dark:bg-purple-900 px-1 rounded">FHE.asEuint8(0)</code>).
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  {/* Code Step 4 */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">4. Helper Functions: Making the Contract More User-Friendly</h3>
                    <p className="text-secondary-foreground mb-4">
                      To make frontend interaction more convenient, we've added several useful helper functions. Since we declared <code className="bg-muted px-2 py-1 rounded text-sm">userDistances</code> as public, Solidity automatically creates a getter function for us.
                    </p>

                    <div className="space-y-4">
                      <Card className="bg-muted/30 border-border">
                        <CardContent className="pt-4">
                          <div className="flex items-start gap-3">
                            <Database className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                            <div>
                              <p className="font-semibold mb-2"><code className="bg-muted px-2 py-1 rounded text-sm">getMyDistance()</code></p>
                              <p className="text-sm text-secondary-foreground">Returns the caller's most recent encrypted guess distance. The frontend will call this function to retrieve the encrypted result, then pass it to the Relayer for decryption.</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="bg-muted/30 border-border">
                        <CardContent className="pt-4">
                          <div className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                            <div>
                              <p className="font-semibold mb-2"><code className="bg-muted px-2 py-1 rounded text-sm">isTreasureReady()</code></p>
                              <p className="text-sm text-secondary-foreground">Checks if the game has been initialized (whether the owner has created the treasure). The frontend can use it to display game status.</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="bg-muted/30 border-border">
                        <CardContent className="pt-4">
                          <div className="flex items-start gap-3">
                            <Globe className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                            <div>
                              <p className="font-semibold mb-2"><code className="bg-muted px-2 py-1 rounded text-sm">resetGame()</code> and <code className="bg-muted px-2 py-1 rounded text-sm">getTreasureLocation()</code></p>
                              <p className="text-sm text-secondary-foreground">Owner-only functions. Used to reset the game or debug by viewing treasure coordinates (getTreasureLocation can be removed for production deployment).</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <Alert className="bg-accent/5 border-accent/20 mt-6">
                      <Lightbulb className="h-4 w-4 text-accent" />
                      <AlertDescription className="text-secondary-foreground">
                        <strong>💡 Tip:</strong> The contract also includes a <code className="bg-muted px-1 rounded">guessSimple()</code> function that simply adds two coordinates together without calculating distance. This is a simplified version for testing frontend encryption integration and can be removed for production.
                      </AlertDescription>
                    </Alert>

                    <p className="text-secondary-foreground mt-6">
                      The complete contract code is ready! In the next chapter, our frontend will call <code className="bg-muted px-2 py-1 rounded text-sm">getMyDistance()</code> to retrieve the encrypted distance, then securely decrypt it through the Relayer!
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Section D: Deployment */}
            <section id="deployment" className="mb-16">
              <Card className="feature-card bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center glow-primary">
                      <Globe className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">D. 部署与验证：将合约发布到世界</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-secondary-foreground leading-relaxed">
                    本地测试很棒，但真正的乐趣在于将你的DApp发布到公共测试网上。
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">1. 获取 Sepolia 测试币</h3>
                      <p className="text-secondary-foreground mb-3">
                        你需要一些Sepolia ETH来支付部署合约的"燃料费"(Gas Fee)。你可以从公共的Faucet（水龙头）获取，例如 sepoliafaucet.com。
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">2. 配置环境变量</h3>
                      <p className="text-secondary-foreground mb-3">
                        在你的项目根目录下，创建一个名为 .env 的文件。这个文件用来存放敏感信息，比如你的私钥和RPC URL。
                      </p>
                      <p className="text-secondary-foreground mb-3">
                        将以下内容复制到 .env 文件中，并替换成你自己的信息：
                      </p>
                      
                      <div className="bg-muted/50 rounded-lg p-4 border border-border">
                        <pre className="text-sm font-mono text-foreground overflow-x-auto">
                          <code>{`# 从Alchemy或Infura等服务获取
SEPOLIA_RPC_URL="https://eth-sepolia.g.alchemy.com/v2/YOUR_ALCHEMY_API_KEY"
# 从Metamask导出的钱包私钥（请务必使用测试钱包！）
PRIVATE_KEY="YOUR_WALLET_PRIVATE_KEY"`}</code>
                        </pre>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">3. Modify Deployment Script</h3>
                      <p className="text-secondary-foreground mb-3">
                        Open the packages/contracts/scripts/deploy.ts file. We need to modify it to deploy our new TreasureHunt contract instead of the old Counter.
                      </p>
                      
                      <div className="bg-muted/50 rounded-lg p-4 border border-border mb-4">
                        <pre className="text-sm font-mono text-foreground overflow-x-auto">
                          <code>{`// 将
// import { deployCounter } from "../lib/counter/deploy";
// deployCounter();

// 修改为
import { deployTreasureHunt } from "../lib/treasure-hunt/deploy";
deployTreasureHunt();`}</code>
                        </pre>
                      </div>

                      <p className="text-secondary-foreground mb-3">
                        Then, create a treasure-hunt folder under the packages/contracts/lib directory, and create a deploy.ts file in it with the following content:
                      </p>

                      <div className="bg-muted/50 rounded-lg p-4 border border-border">
                        <pre className="text-sm font-mono text-foreground overflow-x-auto">
                          <code>{`import { ethers } from "hardhat";

export const deployTreasureHunt = async () => {
  const contractFactory = await ethers.getContractFactory("TreasureHunt");
  // Call constructor during deployment
  const contract = await contractFactory.deploy();
  await contract.waitForDeployment();
  console.log("TreasureHunt deployed to:", contract.target);
};`}</code>
                        </pre>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">4. Execute Deployment Command</h3>
                      <p className="text-secondary-foreground mb-3">
                        Everything is ready! In the terminal at the project root directory, run the following command:
                      </p>
                      
                      <div className="bg-muted/50 rounded-lg p-4 border border-border">
                        <pre className="text-sm font-mono text-foreground overflow-x-auto">
                          <code>yarn contracts:deploy --network sepolia</code>
                        </pre>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">5. Verify Deployment Results</h3>
                      <p className="text-secondary-foreground mb-3">
                        If everything goes smoothly, your terminal will print information similar to the following:
                      </p>
                      
                      <div className="bg-muted/50 rounded-lg p-4 border border-border mb-4">
                        <pre className="text-sm font-mono text-foreground overflow-x-auto">
                          <code>TreasureHunt deployed to: 0x1234567890AbCdEf1234567890AbCdEf12345678</code>
                        </pre>
                      </div>

                      <p className="text-secondary-foreground">
                        Congratulations! Your first confidential smart contract has been successfully deployed to the Sepolia test network! You can copy this address and view it on Sepolia Etherscan.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Completion Section */}
            <Card className="feature-card bg-gradient-to-r from-green-500/10 to-primary/10 border-green-500/20">
              <CardContent className="text-center py-8">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">Amazing! Your Confidential Contract is Live!</h3>
                <p className="text-secondary-foreground mb-6 max-w-2xl mx-auto">
                  You've mastered the core knowledge of FHEVM contracts and successfully deployed your hand-written DApp to a public network.
                </p>
                <Button size="lg" className="gradient-bg">
                  Go to Part 3: Building Frontend Integration →
                </Button>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ContractDevelopment;