import React, { useState } from "react";
import { ChevronRight, Code2, FileCode, Wrench, Upload, CheckCircle, Keyboard, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ContractDevelopment = () => {
  const [activeSection, setActiveSection] = useState("concepts");

  const sections = [
    { id: "concepts", title: "A. FHEVM 核心概念", icon: Code2 },
    { id: "design", title: "B. 设计寻宝游戏", icon: FileCode },
    { id: "coding", title: "C. 编写合约代码", icon: Wrench },
    { id: "deploy", title: "D. 部署到测试网", icon: Upload }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 h-16 bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold">FHE</span>
              </div>
              <span className="font-semibold">机密寻宝之旅</span>
            </Link>
          </div>
          <div className="flex items-center space-x-6">
            <Link to="/" className="text-secondary-foreground hover:text-foreground transition-colors">
              首页
            </Link>
            <Link to="/environment-setup" className="text-secondary-foreground hover:text-foreground transition-colors">
              环境准备
            </Link>
            <span className="text-primary font-medium">合约开发</span>
          </div>
        </div>
      </nav>

      <div className="pt-16 flex">
        {/* Side Navigation */}
        <aside className="fixed left-0 top-16 w-80 h-screen bg-card/50 backdrop-blur-sm border-r border-border overflow-y-auto">
          <div className="p-6">
            <h3 className="font-semibold mb-4">本页导航</h3>
            <nav className="space-y-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                    activeSection === section.id
                      ? "bg-primary/20 text-primary"
                      : "text-secondary-foreground hover:text-foreground hover:bg-accent"
                  }`}
                >
                  <section.icon className="w-4 h-4" />
                  <span className="text-sm">{section.title}</span>
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="ml-80 flex-1 px-8 py-12">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Header */}
            <header className="text-center">
              <h1 className="text-4xl font-bold mb-4">
                第二部分：编写你的第一个<span className="gradient-text">机密智能合约</span>
              </h1>
              <p className="text-lg text-secondary-foreground max-w-3xl mx-auto">
                现在，激动人心的时刻到了！我们将深入 packages/contracts 目录，通过分析一个简单的计数器合约，揭开 FHEVM 的神秘面纱，学习如何在加密数据上进行计算。
              </p>
            </header>

            {/* Section A: FHEVM Core Concepts */}
            <section id="concepts" className="space-y-8">
              <h2 className="text-3xl font-bold flex items-center space-x-3">
                <Code2 className="w-8 h-8 text-primary" />
                <span>FHEVM 核心概念：解构 Counter 合约</span>
              </h2>

              {/* Concept 1: Encrypted Data Types */}
              <Card className="feature-card">
                <CardHeader>
                  <CardTitle className="text-xl">初识 euint32：会加密的数字</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-secondary-foreground leading-relaxed">
                    在 Solidity 中，我们用 <code className="bg-accent px-2 py-1 rounded text-sm">uint256</code> 来表示一个公开的整数。在 FHEVM 中，我们使用<strong>加密整数</strong>，例如 <code className="bg-primary/20 text-primary px-2 py-1 rounded text-sm">euint32</code> (encrypted uint32)。
                  </p>
                  <p className="text-secondary-foreground leading-relaxed">
                    把它想象成一个<strong>上锁的保险箱</strong>，里面装着一个数字。你无法直接打开它看到里面的数字，但 FHEVM 提供了一套"特种工具"，可以直接对这个锁着的状态进行操作。
                  </p>
                  
                  <div className="bg-accent/50 p-4 rounded-lg">
                    <pre className="text-sm">
                      <code className="language-solidity">
{`// FHEVM 合约中的加密状态变量
euint32 private _count; // 🔒 这是一个加密的整数`}
                      </code>
                    </pre>
                  </div>
                </CardContent>
              </Card>

              {/* Concept 2: Encrypted Computation */}
              <Card className="feature-card">
                <CardHeader>
                  <CardTitle className="text-xl">魔法时刻：FHE.add()</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-secondary-foreground leading-relaxed">
                    这是 FHEVM 最神奇的地方。我们无需解密，就可以直接对两个"加密保险箱"进行运算。
                  </p>
                  
                  {/* Code Comparison */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <Card className="border-destructive/50">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-base text-destructive">传统 Solidity</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <pre className="text-sm">
                          <code>
{`// publicCount 是 uint32
publicCount = publicCount + 1;`}
                          </code>
                        </pre>
                      </CardContent>
                    </Card>
                    
                    <Card className="border-primary/50">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-base text-primary">FHEVM Solidity</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <pre className="text-sm">
                          <code>
{`// _count 是 euint32
_count = FHE.add(_count, 
  FHE.asEuint32(1));`}
                          </code>
                        </pre>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Visual Diagram */}
                  <div className="bg-gradient-subtle p-6 rounded-lg text-center">
                    <div className="flex items-center justify-center space-x-4 text-lg">
                      <div className="flex items-center space-x-2 bg-primary/20 px-4 py-2 rounded-lg">
                        <span>🔒</span>
                        <span>盒子A</span>
                      </div>
                      <span className="text-2xl">+</span>
                      <div className="flex items-center space-x-2 bg-primary/20 px-4 py-2 rounded-lg">
                        <span>🔒</span>
                        <span>盒子B</span>
                      </div>
                      <span className="text-2xl">→</span>
                      <div className="flex items-center space-x-2 bg-primary/30 px-4 py-2 rounded-lg">
                        <span>🔒</span>
                        <span>盒子C (A+B)</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Concept 3: Data Permissions */}
              <Card className="feature-card">
                <CardHeader>
                  <CardTitle className="text-xl">与外界交互：FHE.fromExternal() 和 FHE.allow()</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-secondary-foreground leading-relaxed">
                    合约如何处理来自前端的加密数据，又如何授权前端解密结果呢？
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-primary">FHE.fromExternal()</h4>
                      <p className="text-sm text-secondary-foreground">
                        像一个"收件员"，它接收用户从前端发来的加密包裹，并转换成合约内部可以处理的格式。
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-primary">FHE.allow()</h4>
                      <p className="text-sm text-secondary-foreground">
                        像一个"授权官"，它给某个加密数据贴上一张"许可标签"，允许特定的人在前端解密它。
                      </p>
                    </div>
                  </div>

                  <div className="bg-accent/50 p-4 rounded-lg">
                    <pre className="text-sm">
                      <code>
{`function increment(bytes calldata encryptedAmount) public {
    euint32 amount = FHE.fromExternal(encryptedAmount); // 📨 接收加密数据
    _count = FHE.add(_count, amount);
    FHE.allow(_count, msg.sender); // 🎫 授权解密
}`}
                      </code>
                    </pre>
                  </div>
                </CardContent>
              </Card>

              {/* Hands-on Tip */}
              <Card className="bg-primary/10 border-primary/30">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-3">
                    <Keyboard className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-primary mb-2">动手实践</h4>
                      <p className="text-secondary-foreground">
                        现在，请打开 <code className="bg-background px-2 py-1 rounded text-sm">packages/contracts/contracts/Counter.sol</code> 文件，我们来一起阅读它，加深对这些概念的理解！
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Section B: Game Design */}
            <section id="design" className="space-y-8">
              <h2 className="text-3xl font-bold flex items-center space-x-3">
                <FileCode className="w-8 h-8 text-primary" />
                <span>理论结合实践：设计"机密寻宝游戏"</span>
              </h2>

              <Card className="feature-card">
                <CardContent className="pt-6">
                  <p className="text-secondary-foreground mb-6 leading-relaxed">
                    好了，基础知识已经足够！现在我们来设计自己的游戏。一个好的设计过程，远比直接写代码更重要。
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1">游戏目标</h4>
                        <p className="text-secondary-foreground text-sm">
                          玩家不断猜测一个秘密坐标 (x, y)，合约会返回一个提示（猜的坐标离宝藏有多远），直到距离为0，游戏成功。
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1">隐私要求</h4>
                        <p className="text-secondary-foreground text-sm">
                          玩家的猜测、宝藏的秘密位置，以及合约返回的距离提示，全程都必须是加密的。
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1">合约需要记住什么 (State)</h4>
                        <p className="text-secondary-foreground text-sm">
                          宝藏的加密坐标 secretX 和 secretY。
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1">合约需要做什么 (Logic)</h4>
                        <div className="text-secondary-foreground text-sm space-y-1">
                          <p>• 接收玩家加密的猜测坐标 guessX, guessY</p>
                          <p>• 在加密状态下，计算猜测点和秘密点之间的曼哈顿距离</p>
                          <p>• 公式：距离 = |x1 - x2| + |y1 - y2|</p>
                          <p>• 将加密的"距离"结果返回给玩家</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Section C: Coding */}
            <section id="coding" className="space-y-8">
              <h2 className="text-3xl font-bold flex items-center space-x-3">
                <Wrench className="w-8 h-8 text-primary" />
                <span>动手编码：从零到一构建寻宝合约</span>
              </h2>

              <Card className="bg-primary/10 border-primary/30">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-3">
                    <Keyboard className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-primary mb-2">动手实践</h4>
                      <p className="text-secondary-foreground">
                        在 <code className="bg-background px-2 py-1 rounded text-sm">packages/contracts/contracts/</code> 目录下，新建一个 <code className="bg-background px-2 py-1 rounded text-sm">TreasureHunt.sol</code> 文件，并删除 Counter.sol。让我们一步步把它构建起来！
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Step 1: Contract Structure */}
              <Card className="feature-card">
                <CardHeader>
                  <CardTitle className="text-xl">1. 定义状态和构造函数</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-secondary-foreground">
                    首先，我们定义合约的基础框架。使用 <code className="bg-accent px-2 py-1 rounded text-sm">euint8</code> 类型来存储坐标，因为我们的地图范围是 0-255，这个范围足够了。
                  </p>
                  
                  <div className="bg-accent/50 p-4 rounded-lg">
                    <pre className="text-sm overflow-x-auto">
                      <code>
{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "fhevm/lib/TFHE.sol";

contract TreasureHunt {
    // 宝藏的秘密位置（加密存储）
    euint8 private secretX;
    euint8 private secretY;
    
    constructor(bytes calldata _secretX, bytes calldata _secretY) {
        // 从加密输入初始化宝藏位置
        secretX = TFHE.asEuint8(_secretX);
        secretY = TFHE.asEuint8(_secretY);
    }
}`}
                      </code>
                    </pre>
                  </div>
                </CardContent>
              </Card>

              {/* Step 2: Core Function */}
              <Card className="feature-card">
                <CardHeader>
                  <CardTitle className="text-xl">2. 编写核心 guess 函数</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-secondary-foreground">
                    这是合约最核心的部分。我们将分步讲解：
                  </p>
                  
                  <div className="space-y-3 text-sm text-secondary-foreground">
                    <p>• 首先，计算X轴的距离 distX，即 |guessX - secretX|</p>
                    <p>• 在FHEVM中，绝对值可以通过 <code className="bg-accent px-1 rounded">TFHE.max(a-b, b-a)</code> 来巧妙实现</p>
                    <p>• 然后，用同样的方法计算 distY</p>
                    <p>• 最后，用 <code className="bg-accent px-1 rounded">TFHE.add(distX, distY)</code> 将它们相加，得到最终的曼哈顿距离</p>
                    <p>• 别忘了用 <code className="bg-accent px-1 rounded">TFHE.allow()</code> 授权玩家解密结果！</p>
                  </div>
                  
                  <div className="bg-accent/50 p-4 rounded-lg">
                    <pre className="text-sm overflow-x-auto">
                      <code>
{`function guess(bytes calldata _guessX, bytes calldata _guessY) 
    public returns (bytes32) {
    // 将前端发来的加密猜测转换为合约内部格式
    euint8 guessX = TFHE.asEuint8(_guessX);
    euint8 guessY = TFHE.asEuint8(_guessY);
    
    // 计算 X 轴距离：|guessX - secretX|
    euint8 diffX1 = TFHE.sub(guessX, secretX);
    euint8 diffX2 = TFHE.sub(secretX, guessX);
    euint8 distX = TFHE.max(diffX1, diffX2);
    
    // 计算 Y 轴距离：|guessY - secretY|
    euint8 diffY1 = TFHE.sub(guessY, secretY);
    euint8 diffY2 = TFHE.sub(secretY, guessY);
    euint8 distY = TFHE.max(diffY1, diffY2);
    
    // 计算曼哈顿距离：distX + distY
    euint8 totalDistance = TFHE.add(distX, distY);
    
    // 授权调用者解密结果
    TFHE.allow(totalDistance, msg.sender);
    
    return TFHE.encrypt(totalDistance);
}`}
                      </code>
                    </pre>
                  </div>
                </CardContent>
              </Card>

              {/* Step 3: Victory Function */}
              <Card className="feature-card">
                <CardHeader>
                  <CardTitle className="text-xl">3. (可选) 增加一个"胜利条件"函数</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-secondary-foreground">
                    我们可以增加一个辅助函数 <code className="bg-accent px-2 py-1 rounded text-sm">isFound(distance)</code>，它接收一个加密的距离，并返回一个加密的布尔值 (ebool)，告诉我们距离是否为0。这能让前端逻辑更清晰。
                  </p>
                  
                  <div className="bg-accent/50 p-4 rounded-lg">
                    <pre className="text-sm overflow-x-auto">
                      <code>
{`function isFound(bytes calldata _distance) public view returns (ebool) {
    euint8 distance = TFHE.asEuint8(_distance);
    euint8 zero = TFHE.asEuint8(0);
    
    // 检查距离是否等于 0
    ebool found = TFHE.eq(distance, zero);
    
    // 授权调用者解密结果
    TFHE.allow(found, msg.sender);
    
    return found;
}`}
                      </code>
                    </pre>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Section D: Deployment */}
            <section id="deploy" className="space-y-8">
              <h2 className="text-3xl font-bold flex items-center space-x-3">
                <Upload className="w-8 h-8 text-primary" />
                <span>发布到世界：部署你的合约到 Sepolia 测试网</span>
              </h2>

              <Card className="feature-card">
                <CardContent className="pt-6">
                  <p className="text-secondary-foreground mb-6 leading-relaxed">
                    本地测试很棒，但真正的乐趣在于将你的DApp发布到公共测试网上，让任何人都能与它互动！
                  </p>

                  <div className="space-y-6">
                    {/* Step 1: Get Test Tokens */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-lg">1. 获取 Sepolia 测试币</h4>
                      <p className="text-secondary-foreground text-sm">
                        访问 Sepolia Faucet 获取免费的测试币，这些是支付网络费用的"燃料"。
                      </p>
                      <Button variant="outline" className="w-fit">
                        <a href="https://sepoliafaucet.com/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                          <span>获取测试币</span>
                          <ChevronRight className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>

                    {/* Step 2: Configure Environment */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-lg">2. 配置环境变量</h4>
                      <p className="text-secondary-foreground text-sm">
                        在项目根目录创建 <code className="bg-accent px-2 py-1 rounded">.env</code> 文件：
                      </p>
                      <div className="bg-accent/50 p-4 rounded-lg">
                        <pre className="text-sm">
                          <code>
{`SEPOLIA_RPC_URL="https://sepolia.infura.io/v3/YOUR_PROJECT_ID"
PRIVATE_KEY="your_wallet_private_key_here"
ETHERSCAN_API_KEY="your_etherscan_api_key"`}
                          </code>
                        </pre>
                      </div>
                    </div>

                    {/* Step 3: Deploy */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-lg">3. 执行部署命令</h4>
                      <div className="bg-accent/50 p-4 rounded-lg">
                        <pre className="text-sm">
                          <code>yarn contracts:deploy --network sepolia</code>
                        </pre>
                      </div>
                    </div>

                    {/* Step 4: Verify */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-lg">4. 验证部署结果</h4>
                      <p className="text-secondary-foreground text-sm">
                        部署成功后，复制合约地址到 Sepolia Etherscan 查看你的合约！
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Completion Section */}
            <Card className="bg-gradient-primary text-white">
              <CardContent className="pt-6 text-center">
                <CheckCircle className="w-16 h-16 mx-auto mb-4 opacity-90" />
                <h3 className="text-2xl font-bold mb-4">太棒了！你的机密合约已上线！</h3>
                <p className="mb-6 opacity-90">
                  你已经掌握了FHEVM合约的核心知识，并成功将亲手编写的DApp部署到了公共网络上。
                </p>
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="bg-white text-primary hover:bg-white/90"
                >
                  前往第三部分：构建前端交互
                  <ArrowRight className="w-5 h-5 ml-2" />
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