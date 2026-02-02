import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import BearCharacter from "@/components/characters/BearCharacter";
import PandaCharacter from "@/components/characters/PandaCharacter";
import FloatingHearts from "@/components/FloatingHearts";
import MusicPlayer from "@/components/MusicPlayer";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";

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

        {/* Cute GIF */}
        <motion.div 
          className="mb-8"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, type: "spring" }}
        >
          <img 
            src="https://media.tenor.com/ewl74fH1nM0AAAAC/dudu-and-bubu-eating-dudu-and-bubu-cake.gif" 
            alt="Dudu and Bubu eating cake" 
            className="w-64 h-40 md:w-80 md:h-48 object-cover rounded-2xl shadow-xl mx-auto"
          />
        </motion.div>

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
          className="flex gap-4 flex-wrap justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <Button
            variant="outline"
            onClick={() => navigate("/propose-day")}
            className="text-lg px-6 py-6 rounded-full"
          >
            <ArrowLeft className="mr-2 h-5 w-5" /> Go Back
          </Button>
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
