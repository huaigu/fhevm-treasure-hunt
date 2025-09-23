import React from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Code, Wallet, Zap, GamepadIcon, Monitor, ArrowRight } from "lucide-react";

const FrontendIntegration = () => {
  const navigationItems = [
    { id: "wallet-contract", title: "A. 连接钱包与合约" },
    { id: "fhevm-instance", title: "B. 初始化 FHEVM 实例" },
    { id: "admin-operations", title: "C. 管理员操作：创建宝藏" },
    { id: "player-operations", title: "D. 玩家操作：完整的游戏循环" },
    { id: "final-demo", title: "E. 最终代码与在线演示" },
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
                  <CardTitle className="text-sm font-medium text-muted-foreground">本页导航</CardTitle>
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
                <Badge variant="outline" className="px-3 py-1">第三部分</Badge>
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
                <Badge variant="secondary" className="px-3 py-1">前端交互</Badge>
              </div>
              
              <h1 className="text-4xl font-bold tracking-tight mb-6">
                构建前端交互
              </h1>
              
              <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
                <p>
                  欢迎来到我们旅程的最后一站！我们已经有了一个强大且安全的智能合约引擎，现在，是时候为它打造一个用户友好的"驾驶舱"了。
                </p>
                <p>
                  在本章中，你将学习如何使用 ethers.js 和 fhevmjs 库，在React前端应用中完成从连接钱包到与机密合约交互的全过程。
                </p>
              </div>

              <Card className="mt-6 border-primary/20 bg-primary/5">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      ⌨️
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">动手实践</h3>
                      <p className="text-sm text-muted-foreground">
                        我们将在 <code className="px-1 py-0.5 bg-muted rounded text-xs">packages/sites/src/app/</code> 目录下进行主要操作。
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
                <h2 className="text-2xl font-bold">A. 连接钱包与合约</h2>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">1. 连接 MetaMask</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      任何DApp的第一步都是让用户连接他们的钱包。我们将添加一个按钮，当用户点击时，会弹出MetaMask请求连接。
                    </p>
                    
                    <div className="bg-muted/50 rounded-lg p-4">
                      <pre className="text-sm text-foreground overflow-x-auto">
                        <code>{`// 在你的React组件中
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
                    <CardTitle className="text-lg">2. 实例化合约</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      连接成功后，我们需要创建一个ethers.Contract实例，以便调用我们部署的TreasureHunt合约的方法。
                    </p>
                    
                    <div className="bg-muted/50 rounded-lg p-4">
                      <pre className="text-sm text-foreground overflow-x-auto">
                        <code>{`// 在你的组件顶部添加合约地址和ABI
import TreasureHuntABI from "@/abi/TreasureHuntABI.json"; // 假设ABI文件已生成
const CONTRACT_ADDRESS = "YOUR_DEPLOYED_CONTRACT_ADDRESS"; // 替换成你在第二部分部署的地址

// ...
// 在connectWallet成功后
const contract = new ethers.Contract(CONTRACT_ADDRESS, TreasureHuntABI.abi, signer);
// 你可以将这个 contract 实例保存在 state 中以便后续使用`}</code>
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
                <h2 className="text-2xl font-bold">B. 初始化 FHEVM 实例</h2>
              </div>

              <Card className="mb-6">
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-4">
                    这是与FHEVM交互最关键的一步。我们需要创建一个fhevm实例，它将负责处理所有的加密和解密操作。
                  </p>
                  
                  <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
                    <div className="flex items-start gap-3">
                      <span className="text-lg">💡</span>
                      <div>
                        <p className="font-medium text-amber-800">提示</p>
                        <p className="text-sm text-amber-700">
                          Zama官方的 <code className="px-1 py-0.5 bg-amber-100 rounded">@fhevm/react</code> 库提供了便捷的 useFhevm Hook来简化这个过程。但在本教程中，为了清晰地展示每一步，我们将手动执行这个流程。
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
        // 1. 从provider创建实例
        const instance = await createFhevmInstance({ provider });
        
        // 2. 生成一个用于解密的公钥
        // 这一步需要用户的签名，以证明他们是密钥的所有者
        await instance.generatePublicKey({ verifyingContract: CONTRACT_ADDRESS });

        setFhevmInstance(instance);
        setIsInitialized(true);
        console.log("FHEVM instance initialized!");
    }
};

// 你可以在钱包连接成功后调用 initializeFhevm()`}</code>
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
                <h2 className="text-2xl font-bold">C. 管理员操作：创建宝藏</h2>
              </div>

              <p className="text-muted-foreground mb-6">
                这个操作很简单，只有合约的owner才能调用。
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
                    <CardTitle className="text-lg">逻辑:</CardTitle>
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
                <h2 className="text-2xl font-bold">D. 玩家操作：完整的游戏循环</h2>
              </div>

              <p className="text-muted-foreground mb-6">
                这是游戏的核心交互！我们将一步步实现"加密 → 提交 → 获取 → 解密"的流程。
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
                    <CardTitle className="text-lg">逻辑:</CardTitle>
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
        // 步骤 1: 加密用户的猜测
        // 我们使用 encrypt8 因为我们的坐标是 euint8 类型
        console.log("Encrypting guess...");
        const encryptedX = await fhevmInstance.encrypt8(parseInt(guessX));
        const encryptedY = await fhevmInstance.encrypt8(parseInt(guessY));

        // 步骤 2: 调用合约的 guess 函数，提交加密数据
        console.log("Submitting guess to contract...");
        const tx = await contract.guess(encryptedX, encryptedY);
        await tx.wait();
        console.log("Guess submitted successfully!");

        // 步骤 3: 从合约的 public 映射中读取加密后的距离
        console.log("Reading encrypted distance from contract...");
        const encryptedDistance = await contract.userDistances(userAddress);

        // 步骤 4: 在本地进行链下解密
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
                <h2 className="text-2xl font-bold">E. 最终代码与在线演示</h2>
              </div>

              <p className="text-muted-foreground mb-6">
                将以上所有逻辑组合在一起，我们就得到了一个功能完整的DApp前端！
              </p>

              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="text-xl">最终成果预览</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    下面是一个嵌入式的、功能完备的"机密寻宝游戏"演示。请连接你的Sepolia测试网钱包，确保钱包里有测试ETH，然后亲自体验一下FHEVM的魔力吧！
                  </p>

                  <Card className="border-primary/20 bg-primary/5">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <div className="bg-primary/10 p-2 rounded-lg">
                          ⌨️
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">动手实践</h3>
                          <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
                            <li>先作为合约Owner，点击 "Create New Treasure"。</li>
                            <li>然后开始在输入框中提交你的猜测坐标 (0-255)。</li>
                            <li>观察下方返回的距离提示，不断调整你的猜测，直到距离为0！</li>
                          </ol>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>

              <Card className="border-2 border-dashed border-muted-foreground/30">
                <CardContent className="py-16 text-center">
                  <h3 className="text-xl font-semibold mb-4">嵌入式在线演示 (Embedded Live Demo)</h3>
                  <p className="text-muted-foreground mb-4">
                    <em>[Your live CodeSandbox/StackBlitz DApp will be embedded here]</em>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    URL: (暂定)
                  </p>
                </CardContent>
              </Card>

              <div className="mt-12 text-center">
                <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5">
                  <CardContent className="py-8">
                    <h3 className="text-2xl font-bold mb-4">🎉 恭喜你完成了整个旅程！</h3>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                      你已经掌握了FHEVM的核心技术，从环境搭建到智能合约开发，再到前端交互，构建了一个完整的机密DApp。
                      现在，是时候用这些技能创造属于你的隐私保护应用了！
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