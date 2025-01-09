"use client";

import React, {
  createContext,
  useContext,
  useRef,
  useState,
  useEffect,
  useCallback,
} from "react";

type AudioContextType = {
  isPlaying: boolean;
  togglePlay: () => void;
};

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fadeDuration = 1000; // Fade in/out duration in ms
  const step = 0.01; // Volume adjustment step

  // Handle audio fade in/out
  const fadeAudio = useCallback(
    (fadeIn: boolean) => {
      const audio = audioRef.current;
      if (!audio) return;

      const intervalTime = fadeDuration / (1.0 / step); // Time per volume step
      const fade = setInterval(() => {
        if (fadeIn) {
          audio.volume = Math.min(audio.volume + step, 1.0); // Fade in
          if (audio.volume >= 1.0) clearInterval(fade);
        } else {
          audio.volume = Math.max(audio.volume - step, 0); // Fade out
          if (audio.volume <= 0) {
            clearInterval(fade);
            audio.pause(); // Pause after fading out
          }
        }
      }, intervalTime);
    },
    [fadeDuration, step]
  );

  // Handle play/pause with fade effect
  const handleAudioPlayback = useCallback(
    async (play: boolean) => {
      const audio = audioRef.current;
      if (!audio) return;

      try {
        if (play) {
          await audio.play();
          fadeAudio(true); // Fade in
          setIsPlaying(true);
        } else {
          fadeAudio(false); // Fade out
          setIsPlaying(false);
        }
      } catch (error) {
        console.error("Audio playback error:", error);
      }
    },
    [fadeAudio]
  );

  // Stop audio playback
  const stopAudioPlayback = useCallback(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      audioRef.current = null; // Release audio reference
    }
  }, []);

  // Initialize audio on mount
  useEffect(() => {
    const audio = new Audio("/music/audio.mp3");
    audio.volume = 0;
    audio.loop = true;
    audioRef.current = audio;

    const autoPlayTimeout = setTimeout(() => {
      handleAudioPlayback(true); // Auto-play after 5 seconds
    }, 5000);

    return () => {
      clearTimeout(autoPlayTimeout); // Clear timeout on unmount
      stopAudioPlayback(); // Stop audio and clean up
    };
  }, [handleAudioPlayback, stopAudioPlayback]);

  // Toggle audio playback
  const togglePlay = useCallback(() => {
    handleAudioPlayback(!isPlaying);
  }, [handleAudioPlayback, isPlaying]);

  return (
    <AudioContext.Provider value={{ isPlaying, togglePlay }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error("useAudio must be used within an AudioProvider");
  }
  return context;
};
