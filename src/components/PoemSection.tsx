import React from 'react';
import { motion } from 'framer-motion';

interface PoemSectionProps {
  poemRef: (node?: Element | null) => void;
  poemInView: boolean;
}

export function PoemSection({ poemRef, poemInView }: PoemSectionProps) {
  return (
    <motion.section
      ref={poemRef}
      initial={{ opacity: 0, y: 50 }}
      animate={poemInView ? { opacity: 1, y: 0 } : {}}
      className="min-h-screen flex items-center justify-center p-4 md:p-8"
    >
      <div className="max-w-2xl text-center">
        <h2 className="cursive text-3xl md:text-4xl mb-6 md:mb-8 text-purple-800">A Birthday Poem</h2>
        <p className="cursive text-xl md:text-2xl leading-relaxed text-gray-700">
          On this special day of yours,<br/>
          Like stars that light the evening skies,<br/>
          Your presence fills our hearts with joy,<br/>
          Your spirit makes our spirits rise.<br/><br/>
          Another year of memories made,<br/>
          Of laughter shared and dreams come true,<br/>
          May this birthday bring you peace,<br/>
          And all the love that's meant for you.
        </p>
      </div>
    </motion.section>
  );
}