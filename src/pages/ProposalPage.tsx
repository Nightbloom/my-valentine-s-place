import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import BearCharacter from "@/components/characters/BearCharacter";
import PandaCharacter from "@/components/characters/PandaCharacter";
import FloatingHearts from "@/components/FloatingHearts";
import Confetti from "@/components/Confetti";
import { Button } from "@/components/ui/button";

const ProposalPage = () => {
  const navigate = useNavigate();
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [showCelebration, setShowCelebration] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const moveNoButton = useCallback(() => {
    const maxX = window.innerWidth - 150;
    const maxY = window.innerHeight - 100;
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;
    setNoButtonPosition({ x: newX, y: newY });
    setClickCount((prev) => prev + 1);
  }, []);

  const handleYesClick = () => {
    setShowCelebration(true);
    setTimeout(() => {
      navigate("/rose-day");
    }, 2500);
  };

  const getNoButtonText = () => {
    const texts = [
      "No",
      "Are you sure?",
      "Really?",
      "Think again!",
      "Please? 🥺",
      "Come on!",
      "Pretty please?",
      "Just say yes!",
    ];
    return texts[Math.min(clickCount, texts.length - 1)];
  };

  return (
    <div className="min-h-screen bg-valentine-gradient flex flex-col items-center justify-center relative overflow-hidden">
      <FloatingHearts count={20} />
      <Confetti isActive={showCelebration} />

      <AnimatePresence>
        {showCelebration && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-40 bg-valentine-light-pink/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="text-center"
            >
              <motion.h2
                className="text-5xl md:text-7xl font-romantic text-valentine-red mb-4"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 0.5 }}
              >
                Yay! 💕
              </motion.h2>
              <p className="text-2xl text-foreground font-romantic">
                I knew you'd say yes!
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="text-center z-10 px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Cute GIF */}
        <motion.div 
          className="mb-8"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <img 
            src="https://media1.tenor.com/m/nJD3n3PMz7UAAAAC/dudu.gif" 
            alt="Cute couple" 
            className="w-48 h-48 md:w-64 md:h-64 rounded-2xl shadow-xl mx-auto"
          />
        </motion.div>

        {/* Question */}
        <motion.h1
          className="text-4xl md:text-6xl font-romantic text-foreground mb-2"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          Will You Be My
        </motion.h1>
        <motion.h1
          className="text-5xl md:text-7xl font-romantic text-valentine-red mb-12"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          Valentine? 💝
        </motion.h1>

        {/* Yes Button */}
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Button
            onClick={handleYesClick}
            className="text-2xl md:text-3xl px-12 py-8 rounded-full bg-primary hover:bg-primary/90 shadow-xl"
          >
            Yes! 💕
          </Button>
        </motion.div>
      </motion.div>

      {/* Runaway No Button */}
      <motion.div
        className="fixed z-20"
        style={{
          left: noButtonPosition.x || "calc(50% + 100px)",
          top: noButtonPosition.y || "60%",
        }}
        initial={false}
        animate={{
          left: noButtonPosition.x || "calc(50% + 100px)",
          top: noButtonPosition.y || "60%",
        }}
        transition={{ type: "spring", damping: 10, stiffness: 100 }}
      >
        <Button
          variant="outline"
          className="text-lg px-6 py-4 rounded-full border-2 border-muted-foreground hover:bg-muted"
          onMouseEnter={moveNoButton}
          onClick={moveNoButton}
          onTouchStart={moveNoButton}
        >
          {getNoButtonText()}
        </Button>
      </motion.div>

      {/* Floating decorative hearts */}
      <motion.div
        className="absolute top-10 left-10 text-valentine-red text-4xl"
        animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        💕
      </motion.div>
      <motion.div
        className="absolute top-20 right-10 text-valentine-pink text-3xl"
        animate={{ rotate: [0, -10, 10, 0], scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 2.5, delay: 0.5 }}
      >
        💗
      </motion.div>
      <motion.div
        className="absolute bottom-20 left-20 text-valentine-red text-2xl"
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        ❤️
      </motion.div>
    </div>
  );
};

export default ProposalPage;
