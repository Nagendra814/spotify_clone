import React from "react";
import PlaylistCard from "./PlaylistCard";

export default function LibraryPage({ playlists, setTracks }) {
  return (
    <div className="p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {playlists.map(p => (
        <PlaylistCard
          key={p.id}
          playlist={p}
          onClick={() => setTracks(p.tracks)}
        />
      ))}
    </div>
  );
}
