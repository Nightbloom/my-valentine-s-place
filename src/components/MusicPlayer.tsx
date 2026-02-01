import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX, Music } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MusicPlayerProps {
  autoPlay?: boolean;
}

const MusicPlayer = ({ autoPlay = false }: MusicPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasAudio, setHasAudio] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (autoPlay && hasAudio && audioRef.current) {
      audioRef.current.play().catch(() => {
        // Autoplay was prevented
      });
      setIsPlaying(true);
    }
  }, [autoPlay, hasAudio]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      if (audioRef.current) {
        audioRef.current.src = url;
        setHasAudio(true);
        audioRef.current.play().catch(() => {});
        setIsPlaying(true);
      }
    }
  };

  const togglePlay = () => {
    if (!hasAudio) {
      fileInputRef.current?.click();
      return;
    }

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
      <input
        type="file"
        ref={fileInputRef}
        accept="audio/*"
        onChange={handleFileUpload}
        className="hidden"
      />
      <Button
        onClick={togglePlay}
        size="icon"
        className="rounded-full w-12 h-12 bg-primary/90 hover:bg-primary shadow-lg"
      >
        {!hasAudio ? (
          <Music className="h-5 w-5" />
        ) : isPlaying ? (
          <Volume2 className="h-5 w-5" />
        ) : (
          <VolumeX className="h-5 w-5" />
        )}
      </Button>
    </div>
  );
};

export default MusicPlayer;
