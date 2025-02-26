import React from 'react';
import { motion } from 'framer-motion';

interface BeautySectionProps {
  beautyRef: (node?: Element | null) => void;
  beautyInView: boolean;
}

export function BeautySection({ beautyRef, beautyInView }: BeautySectionProps) {
  return (
    <motion.section
      ref={beautyRef}
      initial={{ opacity: 0, y: 50 }}
      animate={beautyInView ? { opacity: 1, y: 0 } : {}}
      className="min-h-screen flex items-center justify-center p-4 md:p-8"
    >
      <div className="max-w-2xl text-center">
        <h2 className="serif text-3xl md:text-4xl mb-6 md:mb-8 text-purple-800">Radiant Beauty</h2>
        <p className="serif text-lg md:text-xl leading-relaxed text-gray-700">
          Like moonlight dancing on gentle waters,
          your beauty transcends the ordinary.
          With grace in every gesture and warmth in every smile,
          you illuminate the world around you with an ethereal glow
          that captures hearts and brightens souls.
        </p>
        <img
          src="https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=800"
          alt="Elegant flowers"
          className="mt-6 md:mt-8 rounded-lg shadow-xl mx-auto w-full max-w-md md:max-w-lg"
        />
      </div>
    </motion.section>
  );
}