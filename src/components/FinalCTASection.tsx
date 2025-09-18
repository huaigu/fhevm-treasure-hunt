import { Button } from "@/components/ui/button";
import { Compass, Github, ExternalLink, Sparkles } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-subtle">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="space-y-8">
          {/* Main CTA */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold">
              准备好挖掘你的第一个
              <br />
              <span className="gradient-text">链上秘密</span>了吗？
            </h2>
            
            <p className="text-lg text-secondary-foreground max-w-2xl mx-auto leading-relaxed">
              本教程完全免费，代码完全开源。立即开始，成为链上隐私计算的早期构建者。
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-4 rounded-xl glow-primary transition-all duration-300 hover:scale-105"
            >
              <Compass className="w-5 h-5 mr-2" />
              开启寻宝之旅
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="border-border hover:border-primary text-lg px-8 py-4 rounded-xl transition-all duration-300"
            >
              <Github className="w-5 h-5 mr-2" />
              查看源码
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-3 gap-6 mt-12">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mx-auto">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-medium">完全免费</h3>
              <p className="text-sm text-secondary-foreground">
                无需付费，即可学习最前沿的 FHE 技术
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mx-auto">
                <Github className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-medium">开源透明</h3>
              <p className="text-sm text-secondary-foreground">
                所有代码开源，可复用、可修改、可学习
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="w-12 h-12 bg-muted/20 rounded-xl flex items-center justify-center mx-auto">
                <ExternalLink className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="font-medium">实用教程</h3>
              <p className="text-sm text-secondary-foreground">
                通过实战项目，掌握 FHEVM 核心概念
              </p>
            </div>
          </div>

          {/* Testimonial/Stats */}
          <div className="mt-12 p-6 rounded-xl bg-card border border-border">
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">70+ 分钟</div>
                <div className="text-sm text-secondary-foreground">完整教程时长</div>
              </div>
              <div className="hidden sm:block w-px h-8 bg-border" />
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">3 个</div>
                <div className="text-sm text-secondary-foreground">核心学习模块</div>
              </div>
              <div className="hidden sm:block w-px h-8 bg-border" />
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">100%</div>
                <div className="text-sm text-secondary-foreground">实战项目驱动</div>
              </div>
            </div>
          </div>

          {/* Trust Badge */}
          <div className="mt-8">
            <p className="text-sm text-muted-foreground">
              🏆 为 <span className="text-primary font-medium">Zama Bounty S10</span> 精心设计
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;