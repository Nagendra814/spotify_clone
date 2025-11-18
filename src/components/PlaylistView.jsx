import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TrackCard from "./TrackCard";

export default function PlaylistView({ playlists, tracks, setCurrentTrack }) {
  const { id } = useParams();
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [playlistInfo, setPlaylistInfo] = useState(null);

  useEffect(() => {
    const playlist = playlists.find(p => p.id === parseInt(id));
    if (playlist) {
      setPlaylistInfo(playlist);
      const filteredTracks = tracks.filter(t => playlist.tracks.includes(t.id));
      setPlaylistTracks(filteredTracks);
    }
  }, [id, playlists, tracks]);

  if (!playlistTracks.length) return <p className="p-4 text-gray-400">No tracks found.</p>;

  return (
    <div className="p-6 flex flex-col gap-6">
      {playlistInfo && (
        <div className="flex items-center gap-6">
          <img src={playlistInfo.image} alt={playlistInfo.name} className="w-48 h-48 rounded-md" />
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-bold">{playlistInfo.name}</h1>
            <p className="text-gray-400">{playlistTracks.length} songs</p>
          </div>
        </div>
      )}
      <div className="flex flex-col gap-2">
        {playlistTracks.map(track => (
          <TrackCard
            key={track.id}
            track={track}
            onClick={() => setCurrentTrack(track)}
          />
        ))}
      </div>
    </div>
  );
}
