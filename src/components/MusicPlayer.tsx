import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import backgroundMusic from "@/assets/background-music.mp3";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = backgroundMusic;
      audioRef.current.loop = true;
      // Try to auto-play immediately
      audioRef.current.play().catch(() => {
        // Browser blocked autoplay, we'll set state to reflect this
        setIsPlaying(false);
      });
    }
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <audio ref={audioRef} loop />
      <Button
        onClick={togglePlay}
        size="icon"
        className="rounded-full w-12 h-12 bg-primary/90 hover:bg-primary shadow-lg"
      >
        {isPlaying ? (
          <Volume2 className="h-5 w-5" />
        ) : (
          <VolumeX className="h-5 w-5" />
        )}
      </Button>
    </div>
  );
};

export default MusicPlayer;
