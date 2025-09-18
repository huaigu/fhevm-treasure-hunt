import { Github, ExternalLink, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Project Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">🏆</span>
              </div>
              <span className="text-lg font-semibold">机密寻宝之旅</span>
            </div>
            <p className="text-secondary-foreground text-sm leading-relaxed">
              一个交互式 FHEVM 教程，帮助 Web3 开发者掌握全同态加密技术，构建真正的隐私保护 DApp。
            </p>
            <div className="flex items-center space-x-4">
              <a 
                href="https://github.com" 
                className="text-secondary-foreground hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-secondary-foreground hover:text-primary transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="font-medium text-foreground">相关链接</h3>
            <div className="space-y-3">
              <a 
                href="https://www.zama.ai/" 
                className="block text-secondary-foreground hover:text-primary transition-colors text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Zama 官网
              </a>
              <a 
                href="https://docs.zama.ai/fhevm" 
                className="block text-secondary-foreground hover:text-primary transition-colors text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                FHEVM 文档
              </a>
              <a 
                href="https://github.com/zama-ai/fhevm" 
                className="block text-secondary-foreground hover:text-primary transition-colors text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                FHEVM GitHub
              </a>
              <a 
                href="https://fhevmjs.zama.ai/" 
                className="block text-secondary-foreground hover:text-primary transition-colors text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                fhevmjs 库
              </a>
            </div>
          </div>

          {/* About */}
          <div className="space-y-4">
            <h3 className="font-medium text-foreground">关于项目</h3>
            <div className="space-y-3 text-sm text-secondary-foreground">
              <p>
                本项目为 Zama Bounty Season 10 设计，旨在推广 FHEVM 技术在实际应用中的使用。
              </p>
              <p>
                通过构建一个有趣的寻宝游戏，开发者可以直观地理解全同态加密如何在区块链上保护隐私。
              </p>
              <div className="flex items-center space-x-1 text-xs text-muted-foreground pt-2">
                <span>Made with</span>
                <Heart className="w-3 h-3 text-accent" />
                <span>for the crypto community</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="text-sm text-muted-foreground">
            © 2024 机密寻宝之旅. MIT License.
          </div>
          <div className="text-sm text-muted-foreground">
            Powered by <span className="text-primary font-medium">Zama FHEVM</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;