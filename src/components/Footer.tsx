import { Github, ExternalLink, Heart, Twitter } from "lucide-react";

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
              <span className="text-lg font-semibold">FHEVM Quest</span>
            </div>
            <p className="text-secondary-foreground text-sm leading-relaxed">
              An interactive FHEVM tutorial helping Web3 developers master fully homomorphic encryption and build truly privacy-preserving DApps.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/huaigu/fhevm-treasure-hunt"
                className="text-secondary-foreground hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/coder_chao"
                className="text-secondary-foreground hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="font-medium text-foreground">Related Links</h3>
            <div className="space-y-3">
              <a 
                href="https://www.zama.ai/" 
                className="block text-secondary-foreground hover:text-primary transition-colors text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Zama Official
              </a>
              <a 
                href="https://docs.zama.ai/fhevm" 
                className="block text-secondary-foreground hover:text-primary transition-colors text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                FHEVM Documentation
              </a>
              <a 
                href="https://github.com/zama-ai/fhevm" 
                className="block text-secondary-foreground hover:text-primary transition-colors text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                FHEVM GitHub
              </a>
            </div>
          </div>

          {/* About */}
          <div className="space-y-4">
            <h3 className="font-medium text-foreground">About Project</h3>
            <div className="space-y-3 text-sm text-secondary-foreground">
              <p>
                By building an engaging treasure hunt game, developers can intuitively understand how fully homomorphic encryption protects privacy on blockchain.
              </p>
              <div className="flex items-center space-x-1 text-xs text-muted-foreground pt-2">
                <span>Made with</span>
                <Heart className="w-3 h-3 text-accent" />
                <span>for the ZAMA community</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="text-sm text-muted-foreground">
            © 2025 FHEVM Quest. MIT License.
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