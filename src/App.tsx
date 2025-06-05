import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import useSound from "use-sound";
import { motion, AnimatePresence } from "framer-motion";
import { MusicControl } from "./components/MusicControl";
import { HeroSection } from "./components/HeroSection";
import { BeautySection } from "./components/BeautySection";
import { PersonalitySection } from "./components/Personality/PersonalitySection";
import { AppearanceSection } from "./components/AppearanceSection";
import { PoemSection } from "./components/PoemSection";
import { EnvelopeSection } from "./components/Envelope/EnvelopeSection";
import { useSparkles } from "./hooks/useSparkles";
import birthdayMusic from "./audio/musicOOG.ogg";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [play, { stop }] = useSound(birthdayMusic, {
    volume: 1,
    html5: true, // Add this for better mobile compatibility
    interrupt: true, // Prevents multiple instances from playing
    onend: () => {
      // Remove auto-play on end to comply with mobile policies
      setIsPlaying(false);
    },
  });

  const [heroRef, heroInView] = useInView({ triggerOnce: true });
  const [beautyRef, beautyInView] = useInView({ triggerOnce: true });
  const [appearanceRef, appearanceInView] = useInView({ triggerOnce: true });
  const [poemRef, poemInView] = useInView({ triggerOnce: true });

  useSparkles();

  // Ensure music starts in a stopped state on mount
  useEffect(() => {
    setIsPlaying(false);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  // Add touch event handler
  const handleMusicToggle = () => {
    if (isPlaying) {
      stop();
      setIsPlaying(false);
    } else {
      // Try-catch for better error handling
      try {
        play();
        setIsPlaying(true);
      } catch (error) {
        console.error("Failed to play audio:", error);
        setIsPlaying(false);
      }
    }
  };
  const toggleMusic = handleMusicToggle;

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-radial from-purple-200 via-purple-300 to-purple-400"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="text-center"
            >
              <motion.div className="w-32 h-32 mx-auto mb-6">
                <svg
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <path
                    d="M50 25 C50 10, 90 10, 90 35 C90 60, 50 85, 50 85 C50 85, 10 60, 10 35 C10 10, 50 10, 50 25"
                    fill="none"
                    strokeWidth="2"
                    className="heart-path"
                  />
                </svg>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="cursive text-3xl text-purple-800"
              >
                Loading Surprise...
              </motion.h2>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="min-h-screen bg-gradient-to-b from-pink-background via-pink-primary to-pink-secondary">
        <MusicControl isPlaying={isPlaying} onToggle={toggleMusic} />
        <HeroSection heroRef={heroRef} heroInView={heroInView} />
        <BeautySection beautyRef={beautyRef} beautyInView={beautyInView} />
        <PersonalitySection />
        <AppearanceSection
          appearanceRef={appearanceRef}
          appearanceInView={appearanceInView}
        />
        <PoemSection poemRef={poemRef} poemInView={poemInView} />
        <EnvelopeSection />
      </div>
    </>
  );
}

export default App;
