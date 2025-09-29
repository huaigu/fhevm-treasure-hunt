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
                        <code>{`// Required dependencies (add to package.json):
// "@fhevm/react": "0.3.0",
// "ethers": "6.15.0"

// In your React component
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { useFhevm } from "@fhevm/react";

function App() {
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [userAddress, setUserAddress] = useState("");
  const [chainId, setChainId] = useState();

  const connectWallet = async () => {
    if (window.ethereum) {
      const ethProvider = new ethers.BrowserProvider(window.ethereum);
      const ethSigner = await ethProvider.getSigner();
      const network = await ethProvider.getNetwork();

      setProvider(window.ethereum); // EIP-1193 provider for FHEVM
      setSigner(ethSigner);
      setUserAddress(await ethSigner.getAddress());
      setChainId(Number(network.chainId));
    } else {
      alert("Please install MetaMask!");
    }
  };

  return (
    <div>
      {userAddress ? (
        <p>Connected: {userAddress} (Chain: {chainId})</p>
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
                        <code>{`// Add contract imports at the top of your component
import { TreasureHuntABI } from "../abi/TreasureHuntABI";
import { TreasureHuntAddresses } from "../abi/TreasureHuntAddresses";

// ...
// Dynamic contract address based on network
const [contract, setContract] = useState(null);
const [contractAddress, setContractAddress] = useState("");

useEffect(() => {
  if (signer && chainId) {
    const chainIdStr = chainId.toString();
    const address = TreasureHuntAddresses[chainIdStr]?.address;

    if (address && address !== "0x0000000000000000000000000000000000000000") {
      setContractAddress(address);
      const contractInstance = new ethers.Contract(address, TreasureHuntABI.abi, signer);
      setContract(contractInstance);
    }
  }
}, [signer, chainId]);`}</code>
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
                  
                  <div className="bg-primary/10 border-l-4 border-primary p-4 rounded">
                    <div className="flex items-start gap-3">
                      <span className="text-lg">✨</span>
                      <div>
                        <p className="font-medium text-primary">Best Practice</p>
                        <p className="text-sm text-primary/80">
                          We'll use Zama's official <code className="px-1 py-0.5 bg-primary/20 rounded">@fhevm/react</code> library with the useFhevm hook, which provides automatic FHEVM instance management, error handling, and proper cleanup.
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
                      <code>{`import { useFhevm } from "@fhevm/react";

// ...
const [chainId, setChainId] = useState();

// FHEVM instance with automatic management
const {
  instance: fhevmInstance,
  status: fhevmStatus,
  error: fhevmError,
} = useFhevm({
  provider,
  chainId,
  enabled: isConnected && chainId === 11155111, // Enable only for Sepolia
});

// Usage in your component:
// - fhevmInstance: Ready-to-use FHEVM instance
// - fhevmStatus: "connecting", "connected", "error", etc.
// - fhevmError: Any initialization errors

// The hook automatically:
// 1. Creates FHEVM instance from provider
// 2. Handles network changes and reconnections
// 3. Manages public key generation and signatures
// 4. Provides proper cleanup on unmount`}</code>
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
                        <code>{`// Enhanced create treasure with proper error handling
const [isCreatingTreasure, setIsCreatingTreasure] = useState(false);
const [error, setError] = useState("");

const handleCreateTreasure = async () => {
    if (!treasureHunt.canCreateTreasure) {
        setError("Cannot create treasure. Check wallet connection and network.");
        return;
    }

    setIsCreatingTreasure(true);
    setError("");

    try {
        await treasureHunt.createTreasure();
        console.log("Treasure creation initiated");
        // Success feedback is handled by the hook's message state
    } catch (e) {
        console.error("Create treasure error:", e);

        // Handle specific error types
        if (e.code === 'ACTION_REJECTED') {
            setError("Transaction cancelled by user.");
        } else if (e.code === 'INSUFFICIENT_FUNDS') {
            setError("Insufficient funds for gas fees.");
        } else if (e.reason) {
            setError(\`Contract error: \${e.reason}\`);
        } else {
            setError("Failed to create treasure. Please try again.");
        }
    } finally {
        setIsCreatingTreasure(false);
    }
};

// UI with loading states and error feedback
{treasureHunt.isOwner && (
    <div className="space-y-2">
        <button
            onClick={handleCreateTreasure}
            disabled={!treasureHunt.canCreateTreasure || isCreatingTreasure}
            className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
            {isCreatingTreasure ? "Creating Treasure..." : "Create New Treasure"}
        </button>
        {error && (
            <div className="text-sm text-red-600 bg-red-50 p-2 rounded">
                {error}
            </div>
        )}
        {treasureHunt.message && (
            <div className="text-sm text-green-600 bg-green-50 p-2 rounded">
                {treasureHunt.message}
            </div>
        )}
    </div>
)}`}</code>
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
                This is the core interaction of the game! We will step-by-step implement the "encrypt → submit → retrieve → decrypt" workflow using custom hooks for better organization and reusability.
              </p>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Custom Hook Setup:</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-muted/50 rounded-lg p-4">
                      <pre className="text-sm text-foreground overflow-x-auto">
                        <code>{`import { useTreasureHunt } from "../hooks/useTreasureHunt";
import { useInMemoryStorage } from "../hooks/useInMemoryStorage";

// Initialize storage for FHEVM decryption signatures
const { storage: fhevmDecryptionSignatureStorage } = useInMemoryStorage();

// Use the treasure hunt hook with all necessary dependencies
const treasureHunt = useTreasureHunt({
  instance: fhevmInstance,
  fhevmDecryptionSignatureStorage,
  eip1193Provider: provider,
  chainId,
  ethersSigner,
  ethersReadonlyProvider,
  sameChain,
  sameSigner,
});`}</code>
                      </pre>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">UI Implementation:</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-muted/50 rounded-lg p-4">
                      <pre className="text-sm text-foreground overflow-x-auto">
                        <code>{`// State for coordinate selection
const [selectedPosition, setSelectedPosition] = useState({ x: 0, y: 0 });

// Handle grid cell click
const handleGridClick = (x, y) => {
  setSelectedPosition({ x, y });
};

// Make guess using the custom hook
const makeGuess = async () => {
  if (!selectedPosition) return;

  await treasureHunt.makeGuess(selectedPosition.x, selectedPosition.y);
};

// UI Components
<div className="grid grid-cols-8 gap-1 max-w-64 mx-auto">
  {Array.from({ length: 64 }, (_, index) => {
    const coords = { x: index % 8, y: Math.floor(index / 8) };
    const isSelected = selectedPosition &&
      selectedPosition.x === coords.x && selectedPosition.y === coords.y;

    return (
      <div
        key={index}
        className={\`w-6 h-6 rounded-sm cursor-pointer \${
          isSelected ? 'bg-primary ring-2 ring-primary/30' : 'bg-muted-foreground/30'
        } hover:bg-primary/60\`}
        onClick={() => handleGridClick(coords.x, coords.y)}
        title={\`Position (\${coords.x}, \${coords.y})\`}
      />
    );
  })}
</div>`}</code>
                      </pre>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Hook Implementation Logic:</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-muted/50 rounded-lg p-4">
                      <pre className="text-sm text-foreground overflow-x-auto">
                        <code>{`// Inside useTreasureHunt hook - the encryption and submission logic:

const makeGuess = useCallback(async (x: number, y: number) => {
  if (!instance || !ethersSigner || !contract) return;

  setIsMakingGuess(true);
  try {
    // Step 1: Encrypt coordinates using FHEVM instance
    const encryptedX = await instance.createEncryptedValue(x, "uint8");
    const encryptedY = await instance.createEncryptedValue(y, "uint8");

    // Step 2: Submit encrypted guess to contract
    const tx = await contract.guess(encryptedX, encryptedY);
    await tx.wait();

    // Step 3: Read encrypted distance from contract
    const userAddress = await ethersSigner.getAddress();
    const encryptedDistance = await readOnlyContract.userDistances(userAddress);
    setEncryptedDistance(encryptedDistance);

    setMessage(\`Guess submitted! Distance encrypted. Click "Decrypt Distance" to see result.\`);
  } catch (error) {
    console.error("Error making guess:", error);
    setMessage("Error making guess. Please try again.");
  } finally {
    setIsMakingGuess(false);
  }
}, [instance, ethersSigner, contract]);

// Separate decryption function with signature storage
const decryptDistance = useCallback(async () => {
  if (!instance || !contractAddress || !encryptedDistance) return;

  setIsDecrypting(true);
  try {
    const distance = await instance.decrypt(contractAddress, encryptedDistance);
    setDecryptedDistance(Number(distance));
    setIsDecrypted(true);

    if (distance === 0) {
      setMessage("🎉 Congratulations! You found the treasure!");
    } else {
      setMessage(\`Distance to treasure: \${distance}\`);
    }
  } catch (error) {
    console.error("Error decrypting:", error);
    setMessage("Error decrypting distance. Please try again.");
  } finally {
    setIsDecrypting(false);
  }
}, [instance, contractAddress, encryptedDistance]);`}</code>
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
                Combining all the above patterns together, we get a production-ready DApp frontend! The complete implementation can be found in the treasure-hunt-demo directory.
              </p>

              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="text-xl">Final Result Preview</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    The complete treasure hunt implementation demonstrates all the concepts covered in this tutorial. You can find the full source code in <code className="px-1 py-0.5 bg-muted rounded text-xs">treasure-hunt-demo/packages/site/</code> which includes:
                  </p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground mt-2 space-y-1">
                    <li>Production-ready error handling and loading states</li>
                    <li>Network validation and automatic network switching</li>
                    <li>Custom hooks for state management (useTreasureHunt, useInMemoryStorage)</li>
                    <li>Proper FHEVM integration with @fhevm/react</li>
                    <li>Interactive 8x8 grid UI with coordinate selection</li>
                    <li>Encrypted distance calculation and decryption</li>
                  </ul>

                  <Card className="border-primary/20 bg-primary/5">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <div className="bg-primary/10 p-2 rounded-lg">
                          ⌨️
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">Key Features Demonstrated</h3>
                          <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
                            <li>Automatic wallet connection with network validation (Sepolia required)</li>
                            <li>FHEVM instance initialization using @fhevm/react hooks</li>
                            <li>Interactive grid-based coordinate selection (8x8 grid)</li>
                            <li>Encrypted coordinate submission with proper error handling</li>
                            <li>Distance decryption with signature storage management</li>
                            <li>Owner controls for treasure creation and game management</li>
                          </ol>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>

              <Card className="border-2 border-dashed border-muted-foreground/30">
                <CardContent className="py-8 text-center space-y-4">
                  <h3 className="text-xl font-semibold mb-4">Complete Implementation Reference</h3>
                  <div className="bg-muted/50 rounded-lg p-4 text-left">
                    <p className="font-semibold mb-2">File Structure:</p>
                    <div className="font-mono text-sm text-muted-foreground space-y-1">
                      <div>📁 treasure-hunt-demo/packages/site/</div>
                      <div>├── 📄 components/TreasureHuntDemo.tsx <span className="text-primary">(Main Component)</span></div>
                      <div>├── 📄 hooks/useTreasureHunt.tsx <span className="text-primary">(Game Logic Hook)</span></div>
                      <div>├── 📄 hooks/useInMemoryStorage.tsx <span className="text-primary">(Storage Hook)</span></div>
                      <div>├── 📄 abi/TreasureHuntABI.ts <span className="text-primary">(Contract ABI)</span></div>
                      <div>└── 📄 abi/TreasureHuntAddresses.ts <span className="text-primary">(Contract Addresses)</span></div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    Run <code className="px-2 py-1 bg-muted rounded text-xs">npm run dev</code> in the demo directory to see the full implementation in action!
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