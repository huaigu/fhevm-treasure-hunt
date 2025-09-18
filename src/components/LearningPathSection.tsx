import { Terminal, FileCode, Monitor, CheckCircle, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const LearningPathSection = () => {
  const steps = [
    {
      icon: Terminal,
      title: "环境准备",
      description: "从零开始，配置 Hardhat、连接钱包，掌握 FHEVM 开发的基础设施。",
      skills: ["Hardhat 配置", "钱包连接", "FHEVM 环境"],
      duration: "15 分钟"
    },
    {
      icon: FileCode,
      title: "编写机密合约",
      description: "学习使用 Solidity 编写 FHEVM 合约，处理加密的输入和输出。",
      skills: ["Solidity FHE", "加密数据类型", "距离计算"],
      duration: "30 分钟"
    },
    {
      icon: Monitor,
      title: "构建前端交互",
      description: "使用 fhevmjs 库在前端加密数据，并解密来自合约的机密结果。",
      skills: ["fhevmjs 集成", "数据加密", "结果解密"],
      duration: "25 分钟"
    }
  ];

  return (
    <section id="tutorial" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-subtle">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">三步</span>开启你的 FHEVM 之旅
          </h2>
          <p className="text-lg text-secondary-foreground max-w-2xl mx-auto">
            跟随我们的逐步指导，从零开始构建你的第一个机密 DApp
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="feature-card h-full bg-card/80 backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center glow-primary">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className="text-sm font-medium text-primary">步骤 {index + 1}</span>
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-secondary-foreground leading-relaxed">
                    {step.description}
                  </p>
                  
                  <div className="space-y-3">
                    <p className="text-sm font-medium text-foreground">学习要点：</p>
                    <div className="space-y-2">
                      {step.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-secondary-foreground">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-sm text-muted-foreground">
                      ⏱️ {step.duration}
                    </span>
                    {index === 0 ? (
                      <Link 
                        to="/environment-setup" 
                        className="flex items-center space-x-1 text-primary hover:text-primary/80 transition-colors"
                      >
                        <span className="text-sm font-medium">开始学习</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    ) : index === 1 ? (
                      <Link 
                        to="/contract-development" 
                        className="flex items-center space-x-1 text-primary hover:text-primary/80 transition-colors"
                      >
                        <span className="text-sm font-medium">开始学习</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    ) : (
                      <div className="flex items-center space-x-1 text-primary">
                        <span className="text-sm font-medium">开始学习</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Connection line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-primary transform -translate-y-1/2 z-10">
                  <div className="absolute right-0 top-1/2 w-2 h-2 bg-primary rounded-full transform translate-x-1 -translate-y-1/2" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Progress indicator for mobile */}
        <div className="lg:hidden flex justify-center mt-8 space-x-2">
          {steps.map((_, index) => (
            <div key={index} className="w-2 h-2 bg-primary rounded-full opacity-60" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningPathSection;