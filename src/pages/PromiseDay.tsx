import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import BearCharacter from "@/components/characters/BearCharacter";
import PandaCharacter from "@/components/characters/PandaCharacter";
import FloatingHearts from "@/components/FloatingHearts";
import MusicPlayer from "@/components/MusicPlayer";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";

const promises = [
  "I promise to always make you smile 😊",
  "I promise to be there in good times and bad 🤝",
  "I promise to listen to all your stories 👂",
  "I promise to bring you snacks when you're hungry 🍕",
];

const PromiseDay = () => {
  const navigate = useNavigate();
  const [revealedPromises, setRevealedPromises] = useState<number[]>([]);

  const revealPromise = (index: number) => {
    if (!revealedPromises.includes(index)) {
      setRevealedPromises([...revealedPromises, index]);
    }
  };

  return (
    <div className="min-h-screen bg-valentine-gradient flex flex-col items-center justify-center relative overflow-hidden px-4 py-8">
      <FloatingHearts count={12} />
      <MusicPlayer />

      <motion.div
        className="text-center z-10 max-w-2xl w-full"
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
          <span className="text-6xl">🤞</span>
          <h1 className="text-4xl md:text-5xl font-romantic text-valentine-red mt-2">
            Promise Day
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
            src="https://media.tenor.com/MPD8ohhApRYAAAAC/bubu-dudu.gif" 
            alt="Bubu and Dudu promise" 
            className="w-56 h-56 md:w-72 md:h-72 rounded-2xl shadow-xl mx-auto"
          />
        </motion.div>

        {/* Message */}
        <motion.div
          className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-lg md:text-xl font-romantic text-foreground mb-4">
            Tap each heart to reveal my promises to you...
          </p>

          {/* Promise hearts to click */}
          <div className="flex flex-col gap-3">
            {promises.map((promise, index) => (
              <motion.button
                key={index}
                onClick={() => revealPromise(index)}
                className="w-full text-left"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <div className="bg-secondary/50 rounded-xl p-3 flex items-center gap-3">
                  <motion.span
                    className="text-2xl"
                    animate={
                      revealedPromises.includes(index)
                        ? { scale: [1, 1.3, 1] }
                        : {}
                    }
                    transition={{ repeat: revealedPromises.includes(index) ? Infinity : 0, duration: 1 }}
                  >
                    {revealedPromises.includes(index) ? "💖" : "💝"}
                  </motion.span>
                  <AnimatePresence mode="wait">
                    {revealedPromises.includes(index) ? (
                      <motion.span
                        key="revealed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="font-romantic text-foreground"
                      >
                        {promise}
                      </motion.span>
                    ) : (
                      <motion.span
                        key="hidden"
                        className="text-muted-foreground italic"
                      >
                        Tap to reveal promise #{index + 1}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
              </motion.button>
            ))}
          </div>

          {revealedPromises.length === promises.length && (
            <motion.p
              className="text-lg text-valentine-red font-romantic italic mt-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              "These promises are sealed with all my heart!" 💕🤞
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
            onClick={() => navigate("/teddy-day")}
            className="text-lg px-6 py-6 rounded-full"
          >
            <ArrowLeft className="mr-2 h-5 w-5" /> Go Back
          </Button>
          <Button
            onClick={() => navigate("/hug-day")}
            className="text-lg px-8 py-6 rounded-full"
          >
            Next: Hug Day <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PromiseDay;
