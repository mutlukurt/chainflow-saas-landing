import React from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ 
        y: -5,
        transition: { duration: 0.2, ease: "easeOut" }
      }}
      className="glass-card p-3 xs:p-4 sm:p-6 md:p-8 rounded-xl xs:rounded-2xl stagger-item group hover:border-primary/20 transition-all duration-300"
    >
      <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 mb-2 xs:mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
        <img 
          src={icon} 
          alt={`${title} icon`}
          className="w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity"
          loading="lazy"
        />
      </div>
      
      <h3 className="text-sm xs:text-base sm:text-lg md:text-xl font-semibold text-text-primary mb-1.5 xs:mb-2 sm:mb-3 group-hover:text-primary transition-colors">
        {title}
      </h3>
      
      <p className="text-xs xs:text-sm sm:text-base text-text-muted leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

export default FeatureCard;