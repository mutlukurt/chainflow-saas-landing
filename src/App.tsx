import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import FeatureCard from './components/FeatureCard';
import IntegrationIcon from './components/IntegrationIcon';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import { useLenis } from './hooks/useLenis';
import { useReducedMotionSafe } from './hooks/useReducedMotionSafe';
import { initScrollAnimations, cleanupAnimations } from './lib/animations';
import { features } from './data/features';
import { integrations } from './data/integrations';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Brain, Shield } from 'lucide-react';

function App() {
  const lenis = useLenis();
  const { prefersReducedMotion } = useReducedMotionSafe();

  useEffect(() => {
    if (!prefersReducedMotion) {
      initScrollAnimations(prefersReducedMotion);
    }

    return () => {
      cleanupAnimations();
    };
  }, [prefersReducedMotion]);

  const useCases = [
    {
      title: "Sales follow-up from inbound forms",
      description: "Automatically qualify leads, send personalized emails, and create CRM records from form submissions.",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/salesforce/salesforce-original.svg"
    },
    {
      title: "Daily stand-up digest from PRs",
      description: "Summarize pull requests, deployment status, and team activity into digestible daily updates.",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
    },
    {
      title: "Auto-tag & triage support emails",
      description: "Use AI to categorize support emails, assign priority levels, and route to the right team members.",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg"
    },
    {
      title: "Sync tasks between Notion ⇄ GitHub",
      description: "Keep project management in Notion synchronized with GitHub issues and pull requests automatically.",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/notion/notion-original.svg"
    }
  ];

  return (
    <div className="bg-bg-primary text-text-primary">
      <Navbar />
      <Hero3D />

      {/* How It Works */}
      <section id="how-it-works" className="py-8 xs:py-12 md:py-20 lg:py-32 bg-bg-primary">
        <div className="container mx-auto max-w-7xl px-3 xs:px-4 sm:px-6">
          <div className="text-center mb-6 xs:mb-8 md:mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-2 xs:mb-3 md:mb-6"
            >
              Three steps to workflow automation
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-sm sm:text-base md:text-lg text-text-muted max-w-2xl mx-auto px-2 xs:px-4"
            >
              Connect, chain, and ship your workflows in minutes, not days
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 xs:gap-4 md:gap-8">
            {[
              {
                step: "01",
                title: "Connect Apps",
                description: "Link Gmail, Notion, Slack, GitHub, and 50+ other tools with secure OAuth connections.",
                icon: <Zap className="w-5 h-5 xs:w-6 xs:h-6 md:w-8 md:h-8 text-primary" />
              },
              {
                step: "02", 
                title: "Chain Steps",
                description: "Visually connect triggers, filters, AI actions, and outputs in an intuitive flow builder.",
                icon: <Brain className="w-5 h-5 xs:w-6 xs:h-6 md:w-8 md:h-8 text-accent" />
              },
              {
                step: "03",
                title: "Ship & Scale",
                description: "Deploy with shareable links, schedules, webhooks, and automatic scaling.",
                icon: <ArrowRight className="w-5 h-5 xs:w-6 xs:h-6 md:w-8 md:h-8 text-spark" />
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="glass-card p-3 xs:p-4 md:p-8 rounded-xl xs:rounded-2xl text-center group hover:border-primary/20 transition-all duration-300"
              >
                <div className="text-2xl xs:text-3xl md:text-6xl font-bold text-primary/20 mb-2 xs:mb-3 md:mb-4">
                  {item.step}
                </div>
                
                <div className="mb-3 xs:mb-4 md:mb-6 flex justify-center">
                  {item.icon}
                </div>
                
                <h3 className="text-sm xs:text-base md:text-xl font-semibold text-text-primary mb-1.5 xs:mb-2 md:mb-4">
                  {item.title}
                </h3>
                
                <p className="text-xs xs:text-sm md:text-base text-text-muted leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section id="features" className="py-12 md:py-20 lg:py-32 bg-bg-primary">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-8 md:mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-3 md:mb-6"
            >
              Everything you need to automate
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-sm sm:text-base md:text-lg text-text-muted max-w-2xl mx-auto px-4"
            >
              Powerful features that make workflow automation simple, secure, and scalable
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section id="integrations" className="py-12 md:py-20 lg:py-32 bg-bg-primary">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-8 md:mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-3 md:mb-6"
            >
              Connect with your favorite tools
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-sm sm:text-base md:text-lg text-text-muted max-w-2xl mx-auto px-4"
            >
              50+ integrations and growing. Connect the tools you already use.
            </motion.p>
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-3 md:gap-4">
            {integrations.map((integration, index) => (
              <IntegrationIcon
                key={index}
                name={integration.name}
                path={integration.path}
                index={index}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-8 md:mt-12"
          >
            <p className="text-sm md:text-base text-text-muted mb-4">Need a custom integration?</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-ghost px-4 md:px-6 py-2 md:py-3 rounded-xl text-sm md:text-base"
            >
              Request Integration
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-12 md:py-20 lg:py-32 bg-bg-primary relative z-10">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-8 md:mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-3 md:mb-6"
            >
              Built for real workflows
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-sm sm:text-base md:text-lg text-text-muted max-w-2xl mx-auto px-4"
            >
              See how teams use ChainFlow to automate their most important processes
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-4 md:p-8 rounded-2xl group hover:border-primary/20 transition-all duration-300"
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src={useCase.icon} 
                    alt={`${useCase.title} icon`}
                    className="w-6 h-6 md:w-10 md:h-10 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                    loading="lazy"
                  />
                </div>
                
                <h3 className="text-base md:text-xl font-semibold text-text-primary mb-2 md:mb-3 group-hover:text-primary transition-colors">
                  {useCase.title}
                </h3>
                
                <p className="text-sm md:text-base text-text-muted leading-relaxed">
                  {useCase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="relative z-10 bg-bg-primary">
        <Pricing />
        <FAQ />
        <CTA />
        <Footer />
      </div>
    </div>
  );
}

export default App;