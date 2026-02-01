import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import BearCharacter from "@/components/characters/BearCharacter";
import PandaCharacter from "@/components/characters/PandaCharacter";
import FloatingHearts from "@/components/FloatingHearts";
import MusicPlayer from "@/components/MusicPlayer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const TeddyDay = () => {
  const navigate = useNavigate();
  const [hugged, setHugged] = useState(false);

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
          <span className="text-6xl">🧸</span>
          <h1 className="text-4xl md:text-5xl font-romantic text-valentine-red mt-2">
            Teddy Day
          </h1>
        </motion.div>

        {/* Characters with teddy */}
        <div className="flex justify-center items-end gap-2 mb-8 relative">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <BearCharacter className="w-32 h-32 md:w-44 md:h-44" pose="giving" />
          </motion.div>

          {/* Teddy bear gift */}
          <motion.div
            className="absolute text-5xl"
            style={{ bottom: "30%", left: "50%", transform: "translateX(-50%)" }}
            animate={{ 
              y: [0, -8, 0], 
              rotate: [-3, 3, -3],
              scale: hugged ? 1.2 : 1
            }}
            transition={{ repeat: Infinity, duration: 2.5 }}
          >
            🧸
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <PandaCharacter className="w-32 h-32 md:w-44 md:h-44" pose="receiving" />
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
            This teddy is soft, but not as soft as my heart is for you... 🧸
          </p>

          {/* Interactive teddy hug */}
          <motion.button
            onClick={() => setHugged(true)}
            className="text-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {!hugged ? (
              <span className="text-valentine-red underline font-medium">
                🤗 Give the teddy a hug! 🤗
              </span>
            ) : (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
              >
                <motion.div
                  className="text-5xl mb-2"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                >
                  🤗🧸💕
                </motion.div>
                <p className="text-lg text-valentine-red font-romantic italic">
                  "Whenever you hug this teddy, think of me hugging you!"
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
            onClick={() => navigate("/promise-day")}
            className="text-lg px-8 py-6 rounded-full"
          >
            Next: Promise Day <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </motion.div>

      {/* Cozy decorations */}
      <motion.div
        className="absolute top-16 right-8 text-4xl"
        animate={{ rotate: [-5, 5, -5] }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        🧸
      </motion.div>
      <motion.div
        className="absolute bottom-16 left-8 text-3xl"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        💤
      </motion.div>
    </div>
  );
};

export default TeddyDay;
