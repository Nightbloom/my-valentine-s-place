import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import FloatingHearts from "@/components/FloatingHearts";
import MusicPlayer from "@/components/MusicPlayer";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";

const HugDay = () => {
  const navigate = useNavigate();

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
          <span className="text-6xl">🤗</span>
          <h1 className="text-4xl md:text-5xl font-romantic text-valentine-red mt-2">
            Hug Day
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
            src="https://media.tenor.com/ivlixHuP8r0AAAAi/dudu-dudu-bubu.gif" 
            alt="Bubu and Dudu hugging" 
            className="w-56 h-56 md:w-72 md:h-72 rounded-2xl mx-auto"
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
            In your arms is my favorite place to be... 🤗
          </p>
          <p className="text-lg text-valentine-red font-romantic italic">
            "A hug from you makes everything better!" 💕
          </p>
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
            onClick={() => navigate("/promise-day")}
            className="text-lg px-6 py-6 rounded-full"
          >
            <ArrowLeft className="mr-2 h-5 w-5" /> Go Back
          </Button>
          <Button
            onClick={() => navigate("/kiss-day")}
            className="text-lg px-8 py-6 rounded-full"
          >
            Next: Kiss Day <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </motion.div>

      {/* Warm decorations */}
      <motion.div
        className="absolute top-20 left-10 text-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        🤗
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-10 text-3xl"
        animate={{ rotate: [-10, 10, -10] }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        💕
      </motion.div>
    </div>
  );
};

export default HugDay;
