import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-12 md:py-20 lg:py-32 bg-bg-primary relative z-10">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-card p-6 sm:p-8 md:p-12 lg:p-16 rounded-2xl border-primary/20"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4 md:mb-6"
          >
            <span className="text-primary">Unchain</span> your workflow
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg text-text-muted mb-6 md:mb-8 max-w-2xl mx-auto px-4"
          >
            Join thousands of developers and teams already building the future of work with AI-native workflow chains.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary px-6 sm:px-8 py-3 sm:py-4 rounded-2xl text-white font-medium text-base sm:text-lg flex items-center gap-2 shadow-xl w-full sm:w-auto"
            >
              Start Building Today
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-ghost px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-medium text-base sm:text-lg w-full sm:w-auto"
            >
              Schedule a Demo
            </motion.button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-xs sm:text-sm text-text-muted mt-4 sm:mt-6"
          >
            Free forever • No credit card required • 2-minute setup
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;