import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ArrowLeft, Lock, Shield, Code, Database, Keyboard, CheckCircle, Lightbulb, AlertTriangle, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const ContractDevelopment = () => {
  const navigationItems = [
    { id: "fhevm-concepts", title: "FHEVM 核心概念" },
    { id: "game-design", title: "设计寻宝游戏" },
    { id: "coding", title: "编写合约代码" },
    { id: "deployment", title: "部署到测试网" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">返回首页</span>
            </Link>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                <Code className="w-4 h-4 text-primary" />
              </div>
              <span className="font-semibold">机密寻宝之旅</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        {/* Left Navigation Sidebar */}
        <aside className="hidden md:block w-64 bg-background border-r border-border sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="p-6">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
              本页导航
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
                <span className="gradient-text">第二部分：编写你的第一个机密智能合约</span>
              </h1>
              <p className="text-lg text-secondary-foreground max-w-3xl mx-auto">
                欢迎来到寻宝之旅最核心的部分！在本章中，我们将深入智能合约的世界，真正揭开FHEVM的神秘面纱。你将学会如何在加密数据上进行计算，设计一个完善的链上游戏逻辑，并最终将你的第一个机密DApp部署到公共测试网上。
              </p>
              <Alert className="bg-primary/5 border-primary/20 mt-6">
                <Lightbulb className="h-4 w-4 text-primary" />
                <AlertDescription className="text-secondary-foreground">
                  准备好了吗？让我们开始编码吧！
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
                    <CardTitle className="text-2xl">A. FHEVM 核心概念：解构 Counter 合约</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-secondary-foreground leading-relaxed">
                    在构建我们复杂的游戏之前，让我们先通过官方模板中自带的 Counter.sol 合约，来学习几个FHEVM最基础、也最重要的概念。
                  </p>
                  
                  <Alert className="bg-accent/5 border-accent/20">
                    <Keyboard className="h-4 w-4 text-accent" />
                    <AlertDescription className="text-secondary-foreground">
                      <strong>动手实践 ⌨️</strong><br />
                      请在你的代码编辑器中，打开 <code className="bg-muted px-2 py-1 rounded text-sm">packages/contracts/contracts/</code> 目录下的 <code className="bg-muted px-2 py-1 rounded text-sm">Counter.sol</code> 文件。
                    </AlertDescription>
                  </Alert>

                  {/* Subsection 1: euint32 */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">1. FHEVM 的"加密数据类型"：euint32</h3>
                    <p className="text-secondary-foreground mb-4">
                      在传统的Solidity中，我们用 <code className="bg-muted px-2 py-1 rounded text-sm">uint</code> 来表示一个公开的整数。在FHEVM中，我们使用<strong>加密整数</strong>，例如 <code className="bg-muted px-2 py-1 rounded text-sm">euint32</code> (encrypted uint32)。
                    </p>
                    <p className="text-secondary-foreground mb-4">
                      你可以把它想象成一个<strong>上锁的保险箱</strong> 💎，里面装着一个数字。你无法直接打开它看到里面的数字，但FHEVM提供了一套"特种工具"，可以直接对这个锁着的状态进行操作。
                    </p>
                    
                    <div className="bg-muted/50 rounded-lg p-4 border border-border">
                      <p className="mb-2 text-sm text-secondary-foreground">在 Counter.sol 中，你会看到：</p>
                      <pre className="text-sm font-mono text-foreground overflow-x-auto">
                        <code>{`// 一个私有的、加密的32位无符号整数
euint32 private _count;`}</code>
                      </pre>
                    </div>
                  </div>

                  {/* Subsection 2: FHE.add() */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">2. FHEVM 的"加密计算"：FHE.add()</h3>
                    <p className="text-secondary-foreground mb-4">
                      这是FHEVM最神奇的地方。我们无需解密，就可以直接对两个"加密保险箱"进行运算。
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <Card className="border-red-200 bg-red-50/50 dark:bg-red-950/20 dark:border-red-800">
                        <CardHeader>
                          <CardTitle className="text-lg text-red-800 dark:text-red-200">传统 Solidity (publicCount 是 uint32)</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="bg-red-100/50 dark:bg-red-900/20 p-3 rounded text-sm">
                            <code>publicCount = publicCount + 1;</code>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card className="border-green-200 bg-green-50/50 dark:bg-green-950/20 dark:border-green-800">
                        <CardHeader>
                          <CardTitle className="text-lg text-green-800 dark:text-green-200">FHEVM Solidity (_count 是 euint32)</CardTitle>
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
                              <span>盒子A</span>
                            </div>
                            <span className="text-2xl">+</span>
                            <div className="flex items-center gap-2">
                              <Lock className="h-6 w-6 text-primary" />
                              <span>盒子B</span>
                            </div>
                            <span className="text-2xl">→</span>
                            <div className="flex items-center gap-2">
                              <Lock className="h-6 w-6 text-accent" />
                              <span>新盒子C（A+B的和）</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Subsection 3: FHE functions */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">3. FHEVM 的"出入许可"：FHE.fromExternal() 和 FHE.allow()</h3>
                    <p className="text-secondary-foreground mb-4">
                      合约如何处理来自前端的加密数据，又如何授权前端解密结果呢？
                    </p>
                    
                    <div className="space-y-4">
                      <Card className="border-blue-200 bg-blue-50/50 dark:bg-blue-950/20 dark:border-blue-800">
                        <CardContent className="pt-4">
                          <div className="flex items-start gap-3">
                            <Database className="h-5 w-5 text-blue-600 mt-1" />
                            <div>
                              <p className="font-semibold text-blue-800 dark:text-blue-200 mb-2">FHE.fromExternal():</p>
                              <p className="text-sm text-blue-700 dark:text-blue-300">像一个"收件员"，它接收用户从前端发来的加密包裹，并转换成合约内部可以处理的格式。</p>
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
                              <p className="text-sm text-purple-700 dark:text-purple-300">像一个"授权官"，它给某个加密数据（例如 _count）贴上一张"许可标签"，允许特定的人（例如 msg.sender）在前端申请解密它。</p>
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
                    <CardTitle className="text-2xl">B. 设计升级：打造一个更真实的寻宝游戏</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-secondary-foreground leading-relaxed">
                    好了，基础知识已经足够！现在，我们要抛开简单的计数器，来设计我们自己的、功能更完善的"机密寻宝游戏"。一个好的设计过程，远比直接写代码更重要。
                  </p>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      我们的游戏需要满足以下要求：
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                        <div>
                          <p className="font-semibold mb-1">游戏管理员 (Owner):</p>
                          <p className="text-sm text-secondary-foreground">只有合约的部署者（owner）有权创建新宝藏。我们将使用行业标准的OpenZeppelin Ownable合约来实现权限控制。</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                        <div>
                          <p className="font-semibold mb-1">随机宝藏:</p>
                          <p className="text-sm text-secondary-foreground">宝藏的位置 (secretX, secretY) 将由owner调用一个函数，利用Zama提供的链上随机数 FHE.rand() 来生成，保证游戏的公平性和可重玩性。</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                        <div>
                          <p className="font-semibold mb-1">私密猜测:</p>
                          <p className="text-sm text-secondary-foreground">任何人都可以参与猜测。合约会计算并保存玩家猜测位置与宝藏的加密距离。</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                        <div>
                          <p className="font-semibold mb-1">玩家主导的解密:</p>
                          <p className="text-sm text-secondary-foreground">玩家将通过一个名为 Relayer 的服务，在<strong>链下（off-chain）</strong>安全地解密自己的距离，而不会在链上暴露任何信息。</p>
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
                    <CardTitle className="text-2xl">C. 动手编码：编写"寻宝游戏V2"合约</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-8">
                  <p className="text-secondary-foreground leading-relaxed">现在，让我们把设计变成代码！</p>
                  
                  <Alert className="bg-accent/5 border-accent/20">
                    <Keyboard className="h-4 w-4 text-accent" />
                    <AlertDescription className="text-secondary-foreground">
                      <strong>动手实践 ⌨️</strong><br />
                      在 <code className="bg-muted px-2 py-1 rounded">packages/contracts/contracts/</code> 目录下，新建一个 <code className="bg-muted px-2 py-1 rounded">TreasureHunt.sol</code> 文件。<br />
                      删除 <code className="bg-muted px-2 py-1 rounded">Counter.sol</code> 文件，我们不再需要它了。<br />
                      将下面的代码分步粘贴到你的 <code className="bg-muted px-2 py-1 rounded">TreasureHunt.sol</code> 文件中。
                    </AlertDescription>
                  </Alert>

                  {/* Code Step 1 */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">1. 引入依赖并定义状态变量</h3>
                    <p className="text-secondary-foreground mb-4">
                      我们需要引入 FHE 库和 Ownable 合约。同时，定义好宝藏坐标、状态标记，以及一个映射来存储每个玩家的猜测距离。
                    </p>
                    
                    <div className="bg-muted/50 rounded-lg p-4 border border-border">
                      <pre className="text-sm font-mono text-foreground overflow-x-auto">
                        <code>{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {FHE, euint8} from "@fhevm/solidity/lib/FHE.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol"; // 引入Ownable

contract TreasureHunt is Ownable { // 继承Ownable
    euint8 private secretX;
    euint8 private secretY;
    bool private isTreasureSet; // 标记宝藏是否已创建

    // 一个映射，用于存储每个玩家最新的加密距离
    // 声明为 public，这样Solidity会自动为我们创建一个getter函数
    mapping(address => euint8) public userDistances;

    // 构造函数现在需要调用Ownable的构造函数，将部署者设为owner
    constructor() Ownable(msg.sender) {}
}`}</code>
                      </pre>
                    </div>
                  </div>

                  {/* Code Step 2 */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">2. 用链上随机数创建宝藏</h3>
                    <p className="text-secondary-foreground mb-4">
                      接下来，编写一个只能由owner调用的函数，使用FHE.randEuint8()来生成秘密坐标。
                    </p>
                    
                    <div className="bg-muted/50 rounded-lg p-4 border border-border">
                      <pre className="text-sm font-mono text-foreground overflow-x-auto">
                        <code>{`    function createTreasure() external onlyOwner {
        require(!isTreasureSet, "Treasure is already set!");
        
        // 使用链上变量安全地生成随机数种子
        uint256 randSeed = uint256(keccak256(abi.encodePacked(block.timestamp, msg.sender)));
        
        // 使用种子生成加密的随机数作为坐标
        secretX = FHE.randEuint8(randSeed);
        secretY = FHE.randEuint8(randSeed + 1); // 第二个随机数使用不同的种子以增加随机性
        
        isTreasureSet = true;
    }`}</code>
                      </pre>
                    </div>
                  </div>

                  {/* Code Step 3 */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">3. 编写核心的 guess 函数</h3>
                    <p className="text-secondary-foreground mb-4">
                      这是游戏的灵魂。它接收玩家的加密猜测，计算曼哈顿距离 (|x1-x2| + |y1-y2|)，授予解密许可，并存储结果。
                    </p>
                    
                    <Alert className="bg-primary/5 border-primary/20 mb-4">
                      <Lightbulb className="h-4 w-4 text-primary" />
                      <AlertDescription className="text-secondary-foreground">
                        💡 提示：在FHEVM中，计算加密数字的绝对值 |a-b| 有一个技巧，就是计算 max(a-b, b-a)。
                      </AlertDescription>
                    </Alert>
                    
                    <div className="bg-muted/50 rounded-lg p-4 border border-border">
                      <pre className="text-sm font-mono text-foreground overflow-x-auto">
                        <code>{`    function guess(bytes calldata encryptedX, bytes calldata encryptedY) external {
        require(isTreasureSet, "Treasure has not been set yet!");
        
        euint8 guessX = FHE.asEuint8(encryptedX);
        euint8 guessY = FHE.asEuint8(encryptedY);

        // 使用 FHE.max 和 FHE.sub 计算X轴和Y轴的绝对差值
        euint8 distX = FHE.max(FHE.sub(guessX, secretX), FHE.sub(secretX, guessX));
        euint8 distY = FHE.max(FHE.sub(guessY, secretY), FHE.sub(secretY, guessY));
        
        // 使用 FHE.add 计算曼哈顿距离
        euint8 distance = FHE.add(distX, distY);

        // 关键一步：在链上授予 msg.sender 解密这个 distance 值的权限
        // 没有这一行，Relayer 将拒绝用户的链下解密请求
        FHE.allow(distance, msg.sender);

        // 将带有解密许可的加密距离存储在映射中
        userDistances[msg.sender] = distance;
    }`}</code>
                      </pre>
                    </div>
                  </div>

                  {/* Code Step 4 */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">4. 为前端留下线索</h3>
                    <p className="text-secondary-foreground mb-4">
                      合约已经完成了！但前端如何读取 userDistances 里的加密数据呢？很简单，因为我们把它声明为了 public，Solidity会自动为我们创建一个 userDistances(address) 的getter函数。
                    </p>
                    <p className="text-secondary-foreground">
                      在下一章，我们前端的第一步就是调用这个函数来取回加密的距离，然后将它交给Relayer进行解密！
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
                      <h3 className="text-lg font-semibold mb-3">3. 修改部署脚本</h3>
                      <p className="text-secondary-foreground mb-3">
                        打开 packages/contracts/scripts/deploy.ts 文件，我们需要修改它，让它部署我们新的 TreasureHunt 合约，而不是旧的 Counter。
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
                        然后，在 packages/contracts/lib 目录下，新建一个 treasure-hunt 文件夹，并在其中创建一个 deploy.ts 文件，内容如下：
                      </p>

                      <div className="bg-muted/50 rounded-lg p-4 border border-border">
                        <pre className="text-sm font-mono text-foreground overflow-x-auto">
                          <code>{`import { ethers } from "hardhat";

export const deployTreasureHunt = async () => {
  const contractFactory = await ethers.getContractFactory("TreasureHunt");
  // 部署时调用构造函数
  const contract = await contractFactory.deploy();
  await contract.waitForDeployment();
  console.log("TreasureHunt deployed to:", contract.target);
};`}</code>
                        </pre>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">4. 执行部署命令</h3>
                      <p className="text-secondary-foreground mb-3">
                        一切就绪！在项目根目录的终端中，运行以下命令：
                      </p>
                      
                      <div className="bg-muted/50 rounded-lg p-4 border border-border">
                        <pre className="text-sm font-mono text-foreground overflow-x-auto">
                          <code>yarn contracts:deploy --network sepolia</code>
                        </pre>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">5. 验证部署结果</h3>
                      <p className="text-secondary-foreground mb-3">
                        如果一切顺利，你的终端会打印出类似下面的信息：
                      </p>
                      
                      <div className="bg-muted/50 rounded-lg p-4 border border-border mb-4">
                        <pre className="text-sm font-mono text-foreground overflow-x-auto">
                          <code>TreasureHunt deployed to: 0x1234567890AbCdEf1234567890AbCdEf12345678</code>
                        </pre>
                      </div>

                      <p className="text-secondary-foreground">
                        恭喜！你的第一个机密智能合约已经成功部署到Sepolia测试网络！你可以复制这个地址，到 Sepolia Etherscan 上去查看它。
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
                <h3 className="text-xl font-semibold mb-3">太棒了！你的机密合约已上线！</h3>
                <p className="text-secondary-foreground mb-6 max-w-2xl mx-auto">
                  你已经掌握了FHEVM合约的核心知识，并成功将亲手编写的DApp部署到了公共网络上。
                </p>
                <Button size="lg" className="gradient-bg">
                  前往第三部分：构建前端交互 →
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