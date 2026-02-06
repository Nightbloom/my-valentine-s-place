import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import FloatingHearts from "@/components/FloatingHearts";
import HomeButton from "@/components/HomeButton";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const KissDay = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-valentine-gradient flex flex-col items-center justify-center relative overflow-hidden px-4">
      <FloatingHearts count={15} />
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
          <h1 className="text-4xl md:text-5xl font-romantic text-valentine-red">
            Kiss Day
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
            src="https://media1.tenor.com/m/ZgEwD09MywgAAAAd/dudu-kissing-bubu-hearts.gif" 
            alt="Dudu kissing Bubu" 
            className="w-56 h-56 md:w-72 md:h-72 rounded-2xl shadow-xl mx-auto object-cover"
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
            Every kiss from you is like magic... ✨
          </p>
          <p className="text-lg text-valentine-red font-romantic italic">
            "Your kisses are sweeter than honey!" 🍯
          </p>
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

      {/* Floating decorations */}
      {["💕", "✨", "💕"].map((emoji, i) => (
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
