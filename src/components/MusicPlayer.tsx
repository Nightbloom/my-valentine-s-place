import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX, Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import backgroundMusic from "@/assets/background-music.mp3";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPlayPrompt, setShowPlayPrompt] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element once and persist it
    if (!audioRef.current) {
      audioRef.current = new Audio(backgroundMusic);
      audioRef.current.loop = true;
      audioRef.current.volume = 0.7;
    }

    // Try to autoplay immediately
    const tryAutoplay = async () => {
      try {
        await audioRef.current?.play();
        setIsPlaying(true);
        setShowPlayPrompt(false);
      } catch {
        // Autoplay blocked - show prompt
        setShowPlayPrompt(true);
      }
    };

    tryAutoplay();

    // Cleanup on unmount
    return () => {
      // Don't pause on unmount - we want it to persist
    };
  }, []);

  const startMusic = async () => {
    if (audioRef.current) {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
        setShowPlayPrompt(false);
      } catch (error) {
        console.log("Failed to play:", error);
      }
    }
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <>
      {/* Play prompt overlay - shown when autoplay is blocked */}
      {showPlayPrompt && (
        <div 
          className="fixed inset-0 z-[100] bg-black/50 flex items-center justify-center backdrop-blur-sm"
          onClick={startMusic}
        >
          <div className="bg-white/95 rounded-2xl p-8 text-center shadow-2xl animate-pulse cursor-pointer">
            <Music className="h-16 w-16 mx-auto mb-4 text-primary" />
            <p className="text-xl font-romantic text-foreground mb-2">Tap anywhere to start</p>
            <p className="text-sm text-muted-foreground">🎵 with music 🎵</p>
          </div>
        </div>
      )}

      {/* Volume toggle button */}
      <div className="fixed bottom-4 right-4 z-50">
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
    </>
  );
};

export default MusicPlayer;
