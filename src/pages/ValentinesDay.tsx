import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import FloatingHearts from "@/components/FloatingHearts";
import MusicPlayer from "@/components/MusicPlayer";
import Confetti from "@/components/Confetti";

const ValentinesDay = () => {
  const [confettiActive, setConfettiActive] = useState(true);

  useEffect(() => {
    // Show confetti on load
    const timer = setTimeout(() => {
      setConfettiActive(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-valentine-gradient flex flex-col items-center justify-center relative overflow-hidden px-4 py-8">
      <FloatingHearts count={25} />
      <MusicPlayer />
      <Confetti isActive={confettiActive} />

      {/* Extra sparkles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-valentine-gold"
          style={{
            left: `${5 + Math.random() * 90}%`,
            top: `${5 + Math.random() * 90}%`,
            fontSize: `${16 + Math.random() * 16}px`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            repeat: Infinity,
            duration: 2 + Math.random() * 2,
            delay: Math.random() * 2,
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
        {/* Grand Title */}
        <motion.div
          className="mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
        >
          <motion.div
            className="text-6xl mb-2"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            💖
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-romantic text-valentine-red">
            Happy Valentine's Day!
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
            src="https://media.tenor.com/ejMtbLv7H-gAAAAM/panda-bear-brown-bear.gif" 
            alt="Bubu and Dudu together" 
            className="w-64 h-64 md:w-80 md:h-80 rounded-2xl shadow-xl mx-auto object-cover"
          />
        </motion.div>

        {/* Message Box */}
        <motion.div
          className="bg-card/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl mb-8 border-2 border-primary/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-xl md:text-2xl font-romantic text-foreground mb-4">
            From Rose Day to Valentine's Day, every moment with you is magical...
          </p>
          <motion.div
            className="flex justify-center gap-3 text-4xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            🐻❤️🐼
          </motion.div>
          <p className="text-lg text-muted-foreground mt-4 font-romantic italic">
            - Your Bear 🐻
          </p>
        </motion.div>

        {/* Celebration trigger */}
        <motion.button
          onClick={() => setConfettiActive(true)}
          className="text-valentine-red underline font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          🎉 Tap for more celebration! 🎉
        </motion.button>
      </motion.div>

      {/* Corner decorations */}
      <motion.div
        className="absolute top-5 left-5 text-4xl"
        animate={{ rotate: [0, 360] }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      >
        💕
      </motion.div>
      <motion.div
        className="absolute top-5 right-5 text-4xl"
        animate={{ rotate: [360, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      >
        💖
      </motion.div>
      <motion.div
        className="absolute bottom-5 left-5 text-3xl"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        ✨
      </motion.div>
      <motion.div
        className="absolute bottom-5 right-5 text-3xl"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
      >
        ✨
      </motion.div>
    </div>
  );
};

export default ValentinesDay;