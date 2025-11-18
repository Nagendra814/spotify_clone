import React from "react";

export default function PlaylistCard({ playlist, onClick }) {
  return (
    <div
      className="bg-[#181818] p-4 rounded-md hover:bg-[#282828] cursor-pointer flex flex-col items-start"
      onClick={onClick}
    >
      <img src={playlist.image} alt={playlist.name} className="w-full h-48 rounded-md mb-3" />
      <h3 className="text-white font-semibold text-sm">{playlist.name}</h3>
    </div>
  );
}
