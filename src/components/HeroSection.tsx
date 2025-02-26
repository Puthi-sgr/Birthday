import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Heart, Sparkles, Stars } from 'lucide-react';

interface HeroSectionProps {
  heroRef: (node?: Element | null) => void;
  heroInView: boolean;
}

export function HeroSection({ heroRef, heroInView }: HeroSectionProps) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 1.2]);

  return (
    <motion.section
      ref={heroRef}
      initial={{ opacity: 0 }}
      animate={heroInView ? { opacity: 1 } : {}}
      className="min-h-screen relative flex items-center justify-center overflow-hidden px-4"
    >
      {/* Parallax Background */}
      <motion.div 
        style={{ y, scale }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/30 z-10" /> {/* Overlay */}
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1920')] 
          bg-cover bg-center bg-no-repeat"
        />
      </motion.div>
      
      {/* Floating decorative elements with adjusted z-index */}
      <motion.div 
        style={{ opacity }}
        className="absolute inset-0 z-20"
      >
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[20%] left-[10%] transform -translate-x-1/2 -translate-y-1/2"
        >
          <Heart className="w-8 h-8 md:w-12 md:h-12 text-pink-200 drop-shadow-lg" />
        </motion.div>
        
        <motion.div
          animate={{
            y: [0, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[30%] right-[15%]"
        >
          <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-yellow-200 drop-shadow-lg" />
        </motion.div>
        
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -5, 5, 0],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-[25%] left-[20%]"
        >
          <Stars className="w-6 h-6 md:w-8 md:h-8 text-purple-200 drop-shadow-lg" />
        </motion.div>
      </motion.div>

      {/* Main content with adjusted z-index */}
      <div className="relative z-30 text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-white/20 rounded-full blur-md transform scale-110" />
            <img
              src="https://images.unsplash.com/photo-1490349368154-73de9c9bc37c?w=400"
              alt="Decorative flowers"
              className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full mx-auto shadow-2xl border-4 border-white/80 relative z-10"
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="cursive text-5xl md:text-7xl text-white mb-4 drop-shadow-lg"
        >
          Happy Birthday Puthi!
        </motion.h1>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="relative inline-block"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-black/20 rounded-lg blur-md transform scale-105" />
            <p className="serif text-xl md:text-2xl text-white italic px-6 py-3 backdrop-blur-sm rounded-lg relative z-10">
              On this special day, let's celebrate the amazing person you are
            </p>
          </div>
          
          {/* Decorative underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 w-3/4 bg-gradient-to-r from-transparent via-white to-transparent"
          />
        </motion.div>
      </div>

      {/* Scroll indicator with adjusted z-index */}
      <motion.div
        style={{ opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          delay: 1.5,
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white z-30"
      >
        <div className="w-1 h-8 rounded-full bg-current mx-auto mb-2" />
        <p className="serif text-sm">Scroll to explore</p>
      </motion.div>
    </motion.section>
  );
}