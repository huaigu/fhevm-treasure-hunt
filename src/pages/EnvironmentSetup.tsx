import { Terminal, Package, FolderTree, Server, Wallet, CheckCircle, ArrowLeft, Lightbulb, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Link } from "react-router-dom";

const EnvironmentSetup = () => {
  const steps = [
    {
      icon: Terminal,
      title: "第一步：从官方模板开始",
      description: "Zama官方为我们提供了一个基于React的FHEVM模板，这是一个最佳起点。打开你的终端，执行以下命令克隆它：",
      code: "git clone https://github.com/zama-ai/fhevm-react-template.git confidential-treasure-hunt\ncd confidential-treasure-hunt"
    },
    {
      icon: Package,
      title: "第二步：安装依赖",
      description: "这个模板项目使用 Yarn 作为包管理器。请在项目根目录下，执行以下命令来安装所有必需的乐高积木：",
      code: "yarn install",
      tip: "💡 如果你没有安装Yarn，可以通过 npm install -g yarn 来进行全局安装。"
    },
    {
      icon: FolderTree,
      title: "第三步：了解我们的工具箱",
      description: "这个项目是一个 Monorepo (单一代码库)，意味着前端和后端的代码都在一个仓库里，便于管理。我们只需要关注 packages 目录下的这两个文件夹：",
      code: "/\n├── packages/\n│   ├── contracts/   # 我们的智能合约 (Solidity)\n│   └── sites/       # 我们的前端网站 (React)\n└── package.json     # 项目根配置文件"
    },
    {
      icon: Server,
      title: "第四步：启动你的私人区块链",
      description: "模板已经为我们配置好了所有命令。在项目的**根目录**下，执行以下命令来启动本地的Hardhat测试网络：",
      code: "yarn contracts:dev",
      warning: "⚠️ 保持这个终端窗口打开！网络必须持续运行才能测试合约。"
    },
    {
      icon: Wallet,
      title: "第五步：连接 Metamask 钱包",
      description: "现在我们需要将 Metamask 钱包连接到本地测试网络。请按照以下步骤配置：",
      code: "网络名称：FHEVM Local\nRPC URL：http://localhost:8545\n链ID：9000\n货币符号：ZAMA\n区块浏览器：http://localhost:8545"
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
              <span className="font-medium">返回首页</span>
            </Link>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                <Terminal className="w-4 h-4 text-primary" />
              </div>
              <span className="font-semibold">机密寻宝之旅</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            <span className="gradient-text">环境准备</span>指南
          </h1>
          <p className="text-lg text-secondary-foreground max-w-2xl mx-auto">
            让我们一步步配置开发环境，为构建你的第一个机密 DApp 做好准备
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-8">
          {steps.map((step, index) => (
            <Card key={index} className="feature-card bg-card/80 backdrop-blur-sm">
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
              <CardTitle className="text-lg">对 React 不熟悉？别担心！</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-secondary-foreground leading-relaxed">
              我们的前端使用的是 React 框架，如果您之前没有接触过，看到 sites 目录里的文件可能会有点陌生。
            </p>
            <p className="text-secondary-foreground leading-relaxed">
              好消息是，本次教程的<strong>重点是 FHEVM 的集成</strong>，您只需要修改很少的前端代码。我们会像导航一样，精确地告诉您要改动哪几行。
            </p>
            <p className="text-secondary-foreground leading-relaxed">
              如果您对某段代码感到好奇或不解，<strong>强烈建议您尝试把代码复制给 AI 工具</strong>（如 ChatGPT, Gemini, Copilot），然后提问："请用初学者能听懂的方式，解释一下这段 React 代码是做什么的？"。这是一种非常现代且高效的学习方法！
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
            <h3 className="text-xl font-semibold mb-3">🎉 本章完成！</h3>
            <p className="text-secondary-foreground mb-6 max-w-2xl mx-auto">
              恭喜你！开发环境已经搭建完毕。接下来，我们将进入最有趣的部分——编写你的第一个机密智能合约。
            </p>
            <Button size="lg" className="gradient-bg">
              继续下一步：编写机密合约
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EnvironmentSetup;