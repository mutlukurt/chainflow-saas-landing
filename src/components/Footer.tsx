import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 py-12 md:py-16 bg-bg-primary relative z-10">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              <span className="text-lg sm:text-xl font-bold text-primary">ChainFlow</span>
            </div>
            
            <p className="text-sm sm:text-base text-text-muted mb-6 max-w-md">
              AI-native workflow chains that connect your tools and automate your processes without the complexity.
            </p>
            
            <div className="flex items-center space-x-3 sm:space-x-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="p-1.5 sm:p-2 rounded-lg glass-card hover:border-primary/30 transition-colors"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5 text-text-muted hover:text-text-primary" />
              </motion.a>
              
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="p-1.5 sm:p-2 rounded-lg glass-card hover:border-primary/30 transition-colors"
              >
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5 text-text-muted hover:text-text-primary" />
              </motion.a>
              
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="p-1.5 sm:p-2 rounded-lg glass-card hover:border-primary/30 transition-colors"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-text-muted hover:text-text-primary" />
              </motion.a>
              
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="p-1.5 sm:p-2 rounded-lg glass-card hover:border-primary/30 transition-colors"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-text-muted hover:text-text-primary" />
              </motion.a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-text-primary font-medium mb-3 sm:mb-4 text-sm sm:text-base">Product</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li><a href="#features" className="text-text-muted hover:text-text-primary transition-colors text-sm">Features</a></li>
              <li><a href="#integrations" className="text-text-muted hover:text-text-primary transition-colors text-sm">Integrations</a></li>
              <li><a href="#pricing" className="text-text-muted hover:text-text-primary transition-colors text-sm">Pricing</a></li>
              <li><a href="#" className="text-text-muted hover:text-text-primary transition-colors text-sm">Documentation</a></li>
              <li><a href="#" className="text-text-muted hover:text-text-primary transition-colors text-sm">API Reference</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-text-primary font-medium mb-3 sm:mb-4 text-sm sm:text-base">Company</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li><a href="#" className="text-text-muted hover:text-text-primary transition-colors text-sm">About</a></li>
              <li><a href="#" className="text-text-muted hover:text-text-primary transition-colors text-sm">Blog</a></li>
              <li><a href="#" className="text-text-muted hover:text-text-primary transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-text-muted hover:text-text-primary transition-colors text-sm">Privacy</a></li>
              <li><a href="#" className="text-text-muted hover:text-text-primary transition-colors text-sm">Terms</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-text-muted text-xs sm:text-sm mb-4 md:mb-0">
            © 2025 Mutlu Kurt. Licensed under MIT License.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-xs text-text-muted text-center">
            <button 
              onClick={() => {
                document.body.style.animation = 'none';
                window.location.reload();
              }}
              className="hover:text-text-primary transition-colors"
            >
              Toggle Reduced Motion
            </button>
            <span className="hidden sm:inline">•</span>
            <span>Made with ⚡ by Mutlu Kurt, for developers</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;