import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Play, Code, Zap, ArrowRight, Lock, Unlock } from "lucide-react";

const InteractiveDemoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const demoSteps = [
    { text: "加密坐标数据", icon: Lock, data: "euint32.encrypt(5, 7)" },
    { text: "合约接收加密输入", icon: Code, data: "function guess(euint32 x, euint32 y)" },
    { text: "FHE 距离计算", icon: Zap, data: "distance = sqrt((x-tx)² + (y-ty)²)" },
    { text: "返回加密结果", icon: Unlock, data: "更近了！(Warmer!)" }
  ];

  const playDemo = () => {
    setIsPlaying(true);
    setCurrentStep(0);
    
    demoSteps.forEach((_, index) => {
      setTimeout(() => {
        setCurrentStep(index + 1);
      }, (index + 1) * 1000);
    });

    setTimeout(() => {
      setIsPlaying(false);
      setCurrentStep(0);
    }, demoSteps.length * 1000 + 1000);
  };

  return (
    <section id="demo" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            亲眼见证 <span className="gradient-text">FHE 的魔力</span>
          </h2>
          <p className="text-lg text-secondary-foreground max-w-2xl mx-auto">
            观看加密数据如何在不泄露隐私的情况下被智能合约处理
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Frontend Simulation */}
          <Card className="feature-card bg-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-accent rounded-full" />
                <span>寻宝游戏 DApp</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Game Grid */}
              <div className="bg-secondary/20 rounded-lg p-6">
                <div className="grid grid-cols-8 gap-1 max-w-64 mx-auto">
                  {Array.from({ length: 64 }, (_, i) => (
                    <div
                      key={i}
                      className={`w-6 h-6 rounded-sm transition-all duration-300 ${
                        i === 29 ? 'bg-accent animate-pulse' : 'bg-muted'
                      } ${
                        isPlaying && currentStep >= 1 && i === 21 
                          ? 'bg-primary ring-2 ring-primary/50' 
                          : ''
                      }`}
                    />
                  ))}
                </div>
                
                <div className="mt-4 text-center">
                  {isPlaying && currentStep >= 4 && (
                    <div className="text-accent font-medium animate-fade-in">
                      🎯 更近了！(Warmer!)
                    </div>
                  )}
                </div>
              </div>

              <Button 
                onClick={playDemo}
                disabled={isPlaying}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Play className="w-4 h-4 mr-2" />
                {isPlaying ? "演示运行中..." : "播放演示"}
              </Button>

              {/* Data Flow */}
              {isPlaying && (
                <div className="space-y-3">
                  {demoSteps.map((step, index) => (
                    <div 
                      key={index}
                      className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 ${
                        currentStep > index 
                          ? 'bg-primary/10 border border-primary/20' 
                          : 'bg-muted/20'
                      }`}
                    >
                      <step.icon className={`w-4 h-4 ${
                        currentStep > index ? 'text-primary' : 'text-muted-foreground'
                      }`} />
                      <span className={`text-sm ${
                        currentStep > index ? 'text-foreground' : 'text-muted-foreground'
                      }`}>
                        {step.text}
                      </span>
                      {currentStep === index + 1 && (
                        <ArrowRight className="w-4 h-4 text-accent animate-pulse ml-auto" />
                      )}
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Smart Contract Code */}
          <Card className="feature-card bg-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Code className="w-5 h-5 text-primary" />
                <span>智能合约代码</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-secondary/20 rounded-lg p-4 font-mono text-sm overflow-hidden">
                <div className="space-y-2">
                  <div className="text-primary">// FHEVM 寻宝合约</div>
                  <div className="text-muted-foreground">contract TreasureHunt {'{'}</div>
                  
                  <div className={`ml-4 transition-all duration-300 ${
                    isPlaying && currentStep >= 2 ? 'bg-primary/20 -mx-2 px-2 py-1 rounded' : ''
                  }`}>
                    <div>
                      <span className="text-accent">function</span> guess(
                    </div>
                    <div className="ml-4 text-secondary-foreground">euint32 encryptedX,</div>
                    <div className="ml-4 text-secondary-foreground">euint32 encryptedY</div>
                    <div>
                      ) <span className="text-accent">external</span> {'{'}
                    </div>
                  </div>
                  
                  <div className={`ml-8 transition-all duration-300 ${
                    isPlaying && currentStep >= 3 ? 'bg-primary/20 -mx-2 px-2 py-1 rounded' : ''
                  }`}>
                    <div className="text-muted-foreground">// 计算到宝藏的距离</div>
                    <div className="text-secondary-foreground">euint32 dx = encryptedX.sub(treasureX);</div>
                    <div className="text-secondary-foreground">euint32 dy = encryptedY.sub(treasureY);</div>
                    <div className="text-secondary-foreground">euint32 distance = dx.mul(dx).add(dy.mul(dy));</div>
                  </div>
                  
                  <div className={`ml-8 transition-all duration-300 ${
                    isPlaying && currentStep >= 4 ? 'bg-accent/20 -mx-2 px-2 py-1 rounded' : ''
                  }`}>
                    <div className="text-muted-foreground">// 返回提示信息</div>
                    <div>
                      <span className="text-accent">return</span> getHint(distance);
                    </div>
                  </div>
                  
                  <div className="ml-4 text-muted-foreground">{'}'}</div>
                  <div className="text-muted-foreground">{'}'}</div>
                </div>
              </div>

              {/* Code Highlights */}
              <div className="mt-4 space-y-2 text-xs">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-secondary-foreground">加密数据类型 (euint32)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span className="text-secondary-foreground">同态运算 (.sub, .mul, .add)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-muted-foreground rounded-full" />
                  <span className="text-secondary-foreground">隐私保护计算</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Key Benefits */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {[
            { title: "输入隐私", desc: "玩家坐标完全加密", icon: "🔐" },
            { title: "计算保密", desc: "合约处理过程不可见", icon: "⚡" },
            { title: "结果可用", desc: "获得有用的游戏反馈", icon: "🎯" }
          ].map((benefit, index) => (
            <div key={index} className="text-center p-6 rounded-lg bg-secondary/10 border border-border">
              <div className="text-2xl mb-2">{benefit.icon}</div>
              <h3 className="font-medium mb-2">{benefit.title}</h3>
              <p className="text-sm text-secondary-foreground">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemoSection;