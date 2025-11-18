import React, { useState } from "react";
import SearchBar from "./SearchBar";
import TrackCard from "./TrackCard";

export default function SearchPage({ tracks, setCurrentTrack }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTracks = tracks.filter(t =>
    t.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    t.artist.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="p-4 flex flex-col gap-2">
        {filteredTracks.map(t => (
          <TrackCard key={t.id} track={t} onClick={() => setCurrentTrack(t)} />
        ))}
      </div>
    </div>
  );
}
