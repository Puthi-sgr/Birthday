import React from 'react';
import { motion } from 'framer-motion';
import { TraitCard } from './TraitCard';

interface PersonalitySectionProps {
  personalityRef: (node?: Element | null) => void;
  personalityInView: boolean;
}

const traits = [
  {
    trait: "Compassionate",
    description: "Your heart beats with endless empathy, always ready to understand and support others in their times of need."
  },
  {
    trait: "Radiant",
    description: "Your presence lights up every room, spreading joy and warmth to everyone around you."
  },
  {
    trait: "Resilient",
    description: "With unwavering strength, you face life's challenges head-on, emerging stronger and more determined."
  },
  {
    trait: "Creative",
    description: "Your imagination knows no bounds, bringing fresh perspectives and innovative solutions to everything you do."
  },
  {
    trait: "Graceful",
    description: "You move through life with natural elegance, handling every situation with poise and dignity."
  }
];

export function PersonalitySection({ personalityRef, personalityInView }: PersonalitySectionProps) {
  return (
    <motion.section
      ref={personalityRef}
      initial={{ opacity: 0, y: 50 }}
      animate={personalityInView ? { opacity: 1, y: 0 } : {}}
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white/50 to-purple-50/50 p-4 md:p-8"
    >
      <div className="max-w-6xl w-full">
        <h2 className="cursive text-4xl md:text-5xl mb-8 md:mb-12 text-purple-800 text-center">
          Extraordinary Qualities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {traits.map((trait, index) => (
            <TraitCard
              key={trait.trait}
              trait={trait.trait}
              description={trait.description}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}