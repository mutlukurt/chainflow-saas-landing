import React, { Suspense, lazy, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Shield, Clock, Zap } from 'lucide-react';

// Lazy load Spline for better performance
const Spline = lazy(() => import('@splinetool/react-spline'));

const Hero3D: React.FC = () => {
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);

  return (
    <section id="hero-section" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Spline Background */}
      <div className="absolute inset-0 w-full h-full">
        <Suspense fallback={null}>
          <Spline
            scene="https://prod.spline.design/UcmdnM9ZeKVJX-t7/scene.splinecode"
            onLoad={() => setIsSplineLoaded(true)}
          />
        </Suspense>
        
        {/* Gradient Overlays for depth and readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-bg-primary/40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg-primary/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto max-w-7xl px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-4xl mx-auto px-2 sm:px-4"
        >
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl xs:text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight"
          >
            <span className="text-primary">
              ChainFlow
            </span>
            <br />
            <span className="text-text-primary tracking-tight text-xl xs:text-2xl sm:text-3xl md:text-5xl lg:text-6xl">
              Chain your tools.{' '}
              <span className="text-spark">Ship work faster.</span>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm xs:text-base sm:text-lg md:text-xl text-text-muted mb-4 sm:mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed px-2 sm:px-4"
          >
            Compose AI-native workflows by chaining apps, APIs, and automations without glue code.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-2 xs:gap-3 sm:gap-4 mb-6 sm:mb-8 md:mb-12 px-2 sm:px-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary px-4 xs:px-6 sm:px-8 py-2.5 xs:py-3 sm:py-4 rounded-xl xs:rounded-2xl text-white font-medium text-sm xs:text-base sm:text-lg flex items-center gap-2 shadow-xl w-full sm:w-auto"
            >
              Get Early Access
              <ArrowRight className="w-4 h-4 xs:w-5 xs:h-5" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-ghost px-4 xs:px-6 sm:px-8 py-2.5 xs:py-3 sm:py-4 rounded-xl xs:rounded-2xl font-medium text-sm xs:text-base sm:text-lg flex items-center gap-2 w-full sm:w-auto"
            >
              <Play className="w-4 h-4 xs:w-5 xs:h-5" />
              See How It Works
            </motion.button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-2 xs:gap-4 sm:gap-6 text-xs text-text-muted px-2 sm:px-4"
          >
            <div className="flex items-center gap-2">
              <Shield className="w-3 h-3 xs:w-4 xs:h-4 text-spark" />
              <span>Private by design</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-3 h-3 xs:w-4 xs:h-4 text-spark" />
              <span>No lock-in</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-3 h-3 xs:w-4 xs:h-4 text-spark" />
              <span>2-min setup</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero3D;