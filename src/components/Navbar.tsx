import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-bg-primary/80 backdrop-blur-xl border-b border-white/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto max-w-7xl px-3 xs:px-4 sm:px-6">
        <div className="flex items-center justify-between h-14 xs:h-16 md:h-20">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity cursor-pointer"
          >
            <Zap className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-primary" />
            <span className="text-base xs:text-lg sm:text-xl font-bold text-primary">ChainFlow</span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <a href="#features" className="text-sm xl:text-base text-text-muted hover:text-text-primary transition-colors">
              Features
            </a>
            <a href="#integrations" className="text-sm xl:text-base text-text-muted hover:text-text-primary transition-colors">
              Integrations
            </a>
            <a href="#pricing" className="text-sm xl:text-base text-text-muted hover:text-text-primary transition-colors">
              Pricing
            </a>
            <a href="#faq" className="text-sm xl:text-base text-text-muted hover:text-text-primary transition-colors">
              FAQ
            </a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary px-3 xl:px-4 py-1.5 xl:py-2 rounded-lg xl:rounded-xl text-xs xl:text-sm font-medium text-white"
            >
              Get Early Access
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-1.5 xs:p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 xs:w-6 xs:h-6 text-text-primary" />
            ) : (
              <Menu className="w-5 h-5 xs:w-6 xs:h-6 text-text-primary" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden bg-bg-primary/95 backdrop-blur-xl border-t border-white/10 py-3 xs:py-4"
          >
            <div className="flex flex-col space-y-2 xs:space-y-4">
              <a href="#features" className="text-sm xs:text-base text-text-muted hover:text-text-primary transition-colors px-3 xs:px-4 py-1.5 xs:py-2">
                Features
              </a>
              <a href="#integrations" className="text-sm xs:text-base text-text-muted hover:text-text-primary transition-colors px-3 xs:px-4 py-1.5 xs:py-2">
                Integrations
              </a>
              <a href="#pricing" className="text-sm xs:text-base text-text-muted hover:text-text-primary transition-colors px-3 xs:px-4 py-1.5 xs:py-2">
                Pricing
              </a>
              <a href="#faq" className="text-sm xs:text-base text-text-muted hover:text-text-primary transition-colors px-3 xs:px-4 py-1.5 xs:py-2">
                FAQ
              </a>
              <div className="px-3 xs:px-4 py-1.5 xs:py-2">
                <button className="btn-primary w-full px-4 py-2.5 xs:py-3 rounded-lg xs:rounded-xl text-sm font-medium text-white">
                  Get Early Access
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;