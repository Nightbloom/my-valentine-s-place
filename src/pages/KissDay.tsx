import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import BearCharacter from "@/components/characters/BearCharacter";
import PandaCharacter from "@/components/characters/PandaCharacter";
import FloatingHearts from "@/components/FloatingHearts";
import MusicPlayer from "@/components/MusicPlayer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const KissDay = () => {
  const navigate = useNavigate();
  const [kissed, setKissed] = useState(false);

  return (
    <div className="min-h-screen bg-valentine-gradient flex flex-col items-center justify-center relative overflow-hidden px-4">
      <FloatingHearts count={15} />
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
          <span className="text-6xl">💋</span>
          <h1 className="text-4xl md:text-5xl font-romantic text-valentine-red mt-2">
            Kiss Day
          </h1>
        </motion.div>

        {/* Characters kissing */}
        <motion.div
          className="flex justify-center items-end mb-8 relative cursor-pointer"
          onClick={() => setKissed(true)}
          whileHover={{ scale: 1.02 }}
        >
          <motion.div
            animate={{ 
              x: kissed ? 15 : 0,
              rotate: kissed ? 5 : 0,
            }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <BearCharacter className="w-32 h-32 md:w-44 md:h-44" pose="kissing" />
          </motion.div>

          {/* Kiss effect */}
          <AnimatePresence>
            {kissed && (
              <>
                <motion.div
                  className="absolute text-4xl z-10"
                  style={{ top: "20%", left: "50%", transform: "translateX(-50%)" }}
                  initial={{ scale: 0, y: 0 }}
                  animate={{ scale: [0, 1.5, 1], y: -30 }}
                  transition={{ duration: 0.5 }}
                >
                  💋
                </motion.div>
                {/* Flying kisses */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-2xl"
                    style={{ top: "30%", left: "50%" }}
                    initial={{ scale: 0, x: 0, y: 0, opacity: 1 }}
                    animate={{ 
                      scale: 1,
                      x: Math.cos(i * 45 * Math.PI / 180) * 100,
                      y: Math.sin(i * 45 * Math.PI / 180) * 100 - 50,
                      opacity: 0,
                    }}
                    transition={{ duration: 1.5, delay: i * 0.1 }}
                  >
                    💋
                  </motion.div>
                ))}
              </>
            )}
          </AnimatePresence>

          <motion.div
            animate={{ 
              x: kissed ? -15 : 0,
              rotate: kissed ? -5 : 0,
            }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <PandaCharacter className="w-32 h-32 md:w-44 md:h-44" pose="kissing" />
          </motion.div>
        </motion.div>

        {!kissed && (
          <motion.p 
            className="text-muted-foreground mb-4 text-sm"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            ✨ Tap for a kiss! ✨
          </motion.p>
        )}

        {/* Message */}
        <motion.div
          className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-xl md:text-2xl font-romantic text-foreground mb-4">
            Every kiss from you is like magic... 💋✨
          </p>

          {kissed && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <p className="text-lg text-valentine-red font-romantic italic mb-3">
                "Your kisses are sweeter than honey!" 🍯💋
              </p>
              <motion.div
                className="flex justify-center gap-2 text-3xl"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                💋💕💋
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
            onClick={() => navigate("/valentines-day")}
            className="text-lg px-8 py-6 rounded-full"
          >
            Next: Valentine's Day 💖 <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </motion.div>

      {/* Floating kiss marks */}
      {["💋", "💕", "💋"].map((emoji, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl"
          style={{
            left: `${15 + i * 35}%`,
            top: `${10 + i * 15}%`,
          }}
          animate={{ 
            y: [0, -15, 0],
            rotate: [-10, 10, -10],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ repeat: Infinity, duration: 2 + i * 0.5, delay: i * 0.3 }}
        >
          {emoji}
        </motion.div>
      ))}
    </div>
  );
};

export default KissDay;
