import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import BearCharacter from "@/components/characters/BearCharacter";
import PandaCharacter from "@/components/characters/PandaCharacter";
import FloatingHearts from "@/components/FloatingHearts";
import MusicPlayer from "@/components/MusicPlayer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ChocolateDay = () => {
  const navigate = useNavigate();
  const [chocolatesEaten, setChocolatesEaten] = useState<number[]>([]);

  const chocolates = ["🍫", "🍬", "🍩", "🧁", "🍪", "🎂"];

  const eatChocolate = (index: number) => {
    if (!chocolatesEaten.includes(index)) {
      setChocolatesEaten([...chocolatesEaten, index]);
    }
  };

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
          <span className="text-6xl">🍫</span>
          <h1 className="text-4xl md:text-5xl font-romantic text-valentine-red mt-2">
            Chocolate Day
          </h1>
        </motion.div>

        {/* Characters sharing chocolate */}
        <div className="flex justify-center items-end gap-2 mb-8 relative">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <BearCharacter className="w-32 h-32 md:w-44 md:h-44" pose="giving" />
          </motion.div>

          {/* Chocolate between them */}
          <motion.div
            className="absolute text-4xl"
            style={{ bottom: "35%", left: "50%", transform: "translateX(-50%)" }}
            animate={{ y: [0, -5, 0], rotate: [-5, 5, -5] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            🍫
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <PandaCharacter className="w-32 h-32 md:w-44 md:h-44" pose="happy" />
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
            Life with you is sweeter than the sweetest chocolate! 🍫
          </p>

          {/* Interactive chocolates */}
          <div className="mb-4">
            <p className="text-sm text-muted-foreground mb-3">
              Tap the sweets to share them! 🍬
            </p>
            <div className="flex justify-center gap-3 flex-wrap">
              {chocolates.map((choco, index) => (
                <motion.button
                  key={index}
                  onClick={() => eatChocolate(index)}
                  className={`text-3xl transition-all ${
                    chocolatesEaten.includes(index) ? "opacity-30 scale-75" : ""
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  disabled={chocolatesEaten.includes(index)}
                >
                  {choco}
                </motion.button>
              ))}
            </div>
          </div>

          {chocolatesEaten.length === chocolates.length && (
            <motion.p
              className="text-lg text-valentine-red font-romantic italic"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              "We shared all the sweets, just like we share our sweet moments!" 💕
            </motion.p>
          )}
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <Button
            onClick={() => navigate("/teddy-day")}
            className="text-lg px-8 py-6 rounded-full"
          >
            Next: Teddy Day <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </motion.div>

      {/* Floating chocolates decoration */}
      {["🍫", "🍬", "🍩"].map((emoji, i) => (
        <motion.div
          key={i}
          className="absolute text-3xl"
          style={{
            left: `${10 + i * 35}%`,
            top: `${15 + i * 10}%`,
          }}
          animate={{ y: [0, -10, 0], rotate: [-10, 10, -10] }}
          transition={{ repeat: Infinity, duration: 2 + i * 0.5, delay: i * 0.3 }}
        >
          {emoji}
        </motion.div>
      ))}
    </div>
  );
};

export default ChocolateDay;
