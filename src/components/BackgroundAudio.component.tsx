"use client";

import { IoVolumeMute } from "react-icons/io5";
import { useAudio } from "../context/AudioContext";

// loading lottie with no ssr issues

import dynamic from "next/dynamic";

const WavyAnimation = dynamic(() => import("./LottieFileComponents/WavyLottie.component"), { ssr: false });


const BackgroundAudioComponent: React.FC = () => {
  const { isPlaying, togglePlay } = useAudio();

  return (
    <div className="absolute z-[800] top-[70px] right-[20%]">
      <div className="relative w-[50px] h-[50px] rounded-[50%]">
        <button
          className="bg-transparent rounded-[100px] backdrop-blur-[20px] h-full w-full border-none outline-none cursor-pointer flex items-center justify-center"
          onClick={togglePlay}
        >
          {isPlaying ? (
        <WavyAnimation />
          ) : (
            <IoVolumeMute size={30} color="white" />
          )}
        </button>
      </div>
    </div>
  );
};

export default BackgroundAudioComponent;
