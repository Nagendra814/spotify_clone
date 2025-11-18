import React, { useRef, useState, useEffect } from "react";
import { FiPlay, FiPause, FiSkipBack, FiSkipForward } from "react-icons/fi";

export default function Player({ track }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (track && audioRef.current) {
      audioRef.current.src = track.preview_url || "";
      audioRef.current.play();
      setPlaying(true);
    }
  }, [track]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (playing) audioRef.current.pause();
    else audioRef.current.play();
    setPlaying(!playing);
  };

  if (!track) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#181818] p-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <img src={track.image} alt={track.title} className="w-16 h-16 rounded-md" />
        <div>
          <h3 className="text-white font-semibold">{track.title}</h3>
          <p className="text-gray-400 text-sm">{track.artist}</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <FiSkipBack className="text-white w-5 h-5 cursor-pointer hover:text-green-500 transition" />
        <button onClick={togglePlay}>
          {playing ? <FiPause className="text-white w-6 h-6" /> : <FiPlay className="text-white w-6 h-6" />}
        </button>
        <FiSkipForward className="text-white w-5 h-5 cursor-pointer hover:text-green-500 transition" />
      </div>
      <audio ref={audioRef} />
    </div>
  );
}
