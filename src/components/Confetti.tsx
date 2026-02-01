import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ConfettiPiece {
  id: number;
  x: number;
  color: string;
  delay: number;
  rotation: number;
}

interface ConfettiProps {
  isActive: boolean;
}

const colors = [
  "hsl(350, 80%, 55%)", // red
  "hsl(340, 70%, 75%)", // pink
  "hsl(45, 90%, 60%)", // gold
  "hsl(340, 60%, 92%)", // light pink
  "hsl(0, 100%, 100%)", // white
];

const Confetti = ({ isActive }: ConfettiProps) => {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    if (isActive) {
      const newPieces: ConfettiPiece[] = [];
      for (let i = 0; i < 50; i++) {
        newPieces.push({
          id: i,
          x: Math.random() * 100,
          color: colors[Math.floor(Math.random() * colors.length)],
          delay: Math.random() * 0.5,
          rotation: Math.random() * 360,
        });
      }
      setPieces(newPieces);

      // Clear confetti after animation
      const timer = setTimeout(() => {
        setPieces([]);
      }, 3500);

      return () => clearTimeout(timer);
    }
  }, [isActive]);

  return (
    <AnimatePresence>
      {pieces.map((piece) => (
        <motion.div
          key={piece.id}
          className="fixed pointer-events-none z-50"
          style={{
            left: `${piece.x}%`,
            top: -20,
          }}
          initial={{ y: -20, rotate: 0, opacity: 1 }}
          animate={{
            y: window.innerHeight + 100,
            rotate: piece.rotation + 720,
            opacity: 0,
          }}
          transition={{
            duration: 3,
            delay: piece.delay,
            ease: "easeIn",
          }}
        >
          <div
            className="w-3 h-3"
            style={{
              backgroundColor: piece.color,
              borderRadius: Math.random() > 0.5 ? "50%" : "0",
            }}
          />
        </motion.div>
      ))}
    </AnimatePresence>
  );
};

export default Confetti;
