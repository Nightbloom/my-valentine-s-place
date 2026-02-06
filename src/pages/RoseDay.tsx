import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import FloatingHearts from "@/components/FloatingHearts";
import HomeButton from "@/components/HomeButton";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const RoseDay = () => {
  const navigate = useNavigate();
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div className="min-h-screen bg-valentine-gradient flex flex-col items-center justify-center relative overflow-hidden px-4">
      <FloatingHearts count={12} />
      <HomeButton />

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
          <span className="text-6xl">🌹</span>
          <h1 className="text-4xl md:text-5xl font-romantic text-valentine-red mt-2">
            Rose Day
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
            src="https://gifdb.com/images/high/bubu-received-flowers-from-dudu-n4gkl2zhjxi7qwnm.gif" 
            alt="Bubu receiving flowers from Dudu" 
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
          <p className="text-xl md:text-2xl font-romantic text-foreground mb-4">
            Like this rose, my affection for you blooms more beautiful each day...
          </p>

          {/* Click to reveal */}
          {!showMessage ? (
            <motion.button
              onClick={() => setShowMessage(true)}
              className="text-valentine-red underline font-medium hover:text-primary transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ✨ Click here ✨
            </motion.button>
          ) : (
            <motion.p
              className="text-lg text-valentine-red font-romantic italic"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              "You are the most beautiful flower in my garden of life" 🌹💕
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
            onClick={() => navigate("/propose-day")}
            className="text-lg px-8 py-6 rounded-full"
          >
            Next: Propose Day <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </motion.div>

      {/* Decorative roses */}
      <motion.div
        className="absolute top-10 left-5 text-4xl"
        animate={{ rotate: [-5, 5, -5] }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        🌹
      </motion.div>
      <motion.div
        className="absolute bottom-10 right-5 text-3xl"
        animate={{ rotate: [5, -5, 5] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
      >
        🌹
      </motion.div>
    </div>
  );
};

export default RoseDay;
