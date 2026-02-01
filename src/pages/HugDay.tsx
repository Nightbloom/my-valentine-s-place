import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import BearCharacter from "@/components/characters/BearCharacter";
import PandaCharacter from "@/components/characters/PandaCharacter";
import FloatingHearts from "@/components/FloatingHearts";
import MusicPlayer from "@/components/MusicPlayer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HugDay = () => {
  const navigate = useNavigate();
  const [isHugging, setIsHugging] = useState(false);

  return (
    <div className="min-h-screen bg-valentine-gradient flex flex-col items-center justify-center relative overflow-hidden px-4">
      <FloatingHearts count={12} />
      <MusicPlayer />

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
          <span className="text-6xl">🤗</span>
          <h1 className="text-4xl md:text-5xl font-romantic text-valentine-red mt-2">
            Hug Day
          </h1>
        </motion.div>

        {/* Characters hugging */}
        <motion.div
          className="flex justify-center items-end mb-8 relative cursor-pointer"
          onClick={() => setIsHugging(!isHugging)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={{ 
              x: isHugging ? 20 : 0,
            }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <BearCharacter className="w-32 h-32 md:w-44 md:h-44" pose="hugging" />
          </motion.div>

          <motion.div
            animate={{ 
              x: isHugging ? -20 : 0,
            }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <PandaCharacter className="w-32 h-32 md:w-44 md:h-44" pose="hugging" />
          </motion.div>

          {/* Hug effect */}
          {isHugging && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              {[...Array(6)].map((_, i) => (
                <motion.span
                  key={i}
                  className="absolute text-2xl"
                  initial={{ scale: 0 }}
                  animate={{ 
                    scale: [0, 1, 0],
                    x: Math.cos(i * 60 * Math.PI / 180) * 60,
                    y: Math.sin(i * 60 * Math.PI / 180) * 60,
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 1.5,
                    delay: i * 0.1
                  }}
                >
                  💕
                </motion.span>
              ))}
            </motion.div>
          )}
        </motion.div>

        <p className="text-muted-foreground mb-4 text-sm">
          ✨ Tap the characters to hug! ✨
        </p>

        {/* Message */}
        <motion.div
          className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-xl md:text-2xl font-romantic text-foreground mb-4">
            In your arms is my favorite place to be... 🤗
          </p>

          {isHugging && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <p className="text-lg text-valentine-red font-romantic italic">
                "A hug from you makes everything better!" 💕
              </p>
              <motion.div
                className="mt-4 text-4xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1 }}
              >
                🤗💕🤗
              </motion.div>
            </motion.div>
          )}
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <Button
            onClick={() => navigate("/kiss-day")}
            className="text-lg px-8 py-6 rounded-full"
          >
            Next: Kiss Day <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </motion.div>

      {/* Warm decorations */}
      <motion.div
        className="absolute top-20 left-10 text-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        🤗
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-10 text-3xl"
        animate={{ rotate: [-10, 10, -10] }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        💕
      </motion.div>
    </div>
  );
};

export default HugDay;
