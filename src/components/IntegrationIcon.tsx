import React from 'react';
import { motion } from 'framer-motion';

interface IntegrationIconProps {
  name: string;
  path: string;
  index: number;
}

const IntegrationIcon: React.FC<IntegrationIconProps> = ({ name, path, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.4, 
        delay: index * 0.05,
        ease: "backOut"
      }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ 
        scale: 1.1,
        transition: { duration: 0.2, ease: "easeOut" }
      }}
      className="glass-card p-1.5 xs:p-2 sm:p-3 md:p-4 rounded-lg xs:rounded-xl flex flex-col items-center justify-center aspect-square group hover:border-primary/30 transition-all duration-300"
    >
      <div className="w-4 h-4 xs:w-6 xs:h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 mb-0.5 xs:mb-1 sm:mb-2 opacity-70 group-hover:opacity-100 transition-opacity">
        <img 
          src={path} 
          alt={`${name} logo`}
          className="w-full h-full object-contain"
          loading="lazy"
          decoding="async"
        />
      </div>
      
      <span className="text-xs text-text-muted text-center group-hover:text-text-primary transition-colors leading-tight">
        {name}
      </span>
    </motion.div>
  );
};

export default IntegrationIcon;