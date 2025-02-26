import React from 'react';
import { motion } from 'framer-motion';

interface TraitCardProps {
  trait: string;
  description: string;
  delay: number;
}

export function TraitCard({ trait, description, delay }: TraitCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ 
        scale: 1.02,
        rotateX: 5,
        rotateY: 5,
      }}
      className="trait-card p-6 backdrop-blur-sm rounded-xl transform transition-all duration-300"
    >
      {/* Corner blobs */}
      <div className="corner-blob top-left"></div>
      <div className="corner-blob top-right"></div>
      <div className="corner-blob bottom-left"></div>
      <div className="corner-blob bottom-right"></div>
      
      {/* Edge blobs */}
      <div className="edge-blob top-center"></div>
      <div className="edge-blob right-center"></div>
      <div className="edge-blob bottom-center"></div>
      <div className="edge-blob left-center"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <h3 className="cursive text-2xl md:text-3xl text-purple-800 mb-3 text-center">{trait}</h3>
        <p className="serif text-gray-700 text-lg leading-relaxed text-center">{description}</p>
      </div>
    </motion.div>
  );
}