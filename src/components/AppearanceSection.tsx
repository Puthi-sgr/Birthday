import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface AppearanceSectionProps {
  appearanceRef: (node?: Element | null) => void;
  appearanceInView: boolean;
}

const beautyTraits = [
  {
    word: "Ethereal",
    description: "A delicate, celestial beauty that seems to transcend the earthly realm"
  },
  {
    word: "Resplendent",
    description: "Eyes that sparkle with an inner light, radiating warmth and joy"
  },
  {
    word: "Graceful",
    description: "Moving with natural elegance, each gesture flowing like a gentle stream"
  },
  {
    word: "Luminous",
    description: "Skin that glows with a natural radiance, like moonlight on silk"
  },
  {
    word: "Enchanting",
    description: "A smile that captivates hearts and brightens the darkest days"
  },
  {
    word: "Alluring",
    description: "An effortless charm that draws others into your magical presence"
  }
];

export function AppearanceSection({ appearanceRef, appearanceInView }: AppearanceSectionProps) {
  return (
    <motion.section
      ref={appearanceRef}
      initial={{ opacity: 0, y: 50 }}
      animate={appearanceInView ? { opacity: 1, y: 0 } : {}}
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-50/50 to-pink-50/50 p-4 md:p-8 relative overflow-hidden"
    >
      <div className="max-w-6xl w-full relative z-10">
        <div className="text-center mb-12">
          <h2 className="cursive text-4xl md:text-5xl text-purple-800 mb-4 flex items-center justify-center gap-2">
            Timeless Beauty
            <Sparkles className="text-purple-600 w-8 h-8" />
          </h2>
          <p className="serif text-xl md:text-2xl text-purple-700/80 italic max-w-2xl mx-auto">
            "Like a masterpiece painted by nature's finest brush, your beauty is an enchanting blend of grace and radiance."
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {beautyTraits.map((trait, index) => (
            <motion.div
              key={trait.word}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="trait-card p-6 backdrop-blur-sm"
            >
              <h3 className="cursive text-2xl md:text-3xl text-purple-800 mb-2 text-center">
                {trait.word}
              </h3>
              <p className="serif text-gray-700 text-lg leading-relaxed text-center italic">
                {trait.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-pink-200/20 rounded-full blur-3xl" />
      </div>
    </motion.section>
  );
}