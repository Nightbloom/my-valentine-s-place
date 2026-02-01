import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import BearCharacter from "@/components/characters/BearCharacter";
import PandaCharacter from "@/components/characters/PandaCharacter";
import FloatingHearts from "@/components/FloatingHearts";
import MusicPlayer from "@/components/MusicPlayer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ProposeDay = () => {
  const navigate = useNavigate();
  const [showHeart, setShowHeart] = useState(false);

  return (
    <div className="min-h-screen bg-valentine-gradient flex flex-col items-center justify-center relative overflow-hidden px-4">
      <FloatingHearts count={12} />
      <MusicPlayer />

      {/* Sparkle effects */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-valentine-gold text-xl"
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            delay: i * 0.3,
          }}
        >
          ✨
        </motion.div>
      ))}

      <motion.div
        className="text-center z-10 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Day Title */}
        <motion.div
          className="mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
        >
          <span className="text-6xl">💍</span>
          <h1 className="text-4xl md:text-5xl font-romantic text-valentine-red mt-2">
            Propose Day
          </h1>
        </motion.div>

        {/* Characters - Bear proposing */}
        <div className="flex justify-center items-end gap-4 mb-8 relative">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            {/* Bear on one knee effect */}
            <div className="transform translate-y-4">
              <BearCharacter className="w-32 h-32 md:w-44 md:h-44" pose="proposing" />
            </div>
            {/* Ring box */}
            <motion.div
              className="absolute -right-2 bottom-12 text-2xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              💍
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <PandaCharacter className="w-32 h-32 md:w-44 md:h-44" pose="blushing" />
          </motion.div>
        </div>

        {/* Message */}
        <motion.div
          className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-xl md:text-2xl font-romantic text-foreground mb-4">
            Every moment with you feels like a beautiful dream I never want to wake up from...
          </p>

          {/* Interactive heart reveal */}
          <motion.button
            onClick={() => setShowHeart(true)}
            className="relative"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {!showHeart ? (
              <span className="text-valentine-red underline font-medium">
                💝 Tap to open my heart 💝
              </span>
            ) : (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="text-center"
              >
                <motion.span
                  className="text-5xl block"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                >
                  💖
                </motion.span>
                <p className="text-lg text-valentine-red font-romantic italic mt-2">
                  "You complete me in ways words cannot describe"
                </p>
              </motion.div>
            )}
          </motion.button>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <Button
            onClick={() => navigate("/chocolate-day")}
            className="text-lg px-8 py-6 rounded-full"
          >
            Next: Chocolate Day <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProposeDay;
