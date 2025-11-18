import React from "react";
import { FiPlay } from "react-icons/fi";

export default function TrackCard({ track, onClick }) {
  return (
    <div
      className="flex items-center justify-between p-3 rounded-md hover:bg-[#282828] cursor-pointer transition"
      onClick={onClick}
    >
      <div className="flex items-center gap-4">
        <div className="relative group">
          <img src={track.image} alt={track.title} className="w-14 h-14 rounded-md" />
          <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 rounded-md transition">
            <FiPlay className="text-white w-5 h-5" />
          </button>
        </div>
        <div className="flex flex-col">
          <span className="text-white font-semibold">{track.title}</span>
          <span className="text-gray-400 text-sm">{track.artist}</span>
        </div>
      </div>
      <span className="text-gray-400 text-sm">{track.duration}</span>
    </div>
  );
}
