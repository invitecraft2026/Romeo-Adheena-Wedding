import { useState, useRef, useEffect } from "react";
import { Music, Pause } from "lucide-react";

interface MusicPlayerProps {
  autoPlay?: boolean;
}

const MusicPlayer = ({ autoPlay = false }: MusicPlayerProps) => {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const musicUrl = "/i wanna be your.mpeg";

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.25; // 🔉 0.0 (mute) → 1.0 (full)
    }

    if (autoPlay && audioRef.current) {
      audioRef.current.play().then(() => setPlaying(true)).catch(() => {});
    }
  }, [autoPlay]);

  const toggle = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setPlaying(!playing);
  };

  return (
    <>
      <audio ref={audioRef} src={musicUrl} loop preload="none" />

      <button
        onClick={toggle}
        className={`fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 ${
          playing ? "animate-pulse-glow" : ""
        }`}
        aria-label={playing ? "Pause music" : "Play music"}
      >
        {playing ? <Pause className="w-5 h-5" /> : <Music className="w-5 h-5" />}
      </button>
    </>
  );
};

export default MusicPlayer;