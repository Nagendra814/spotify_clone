import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar({ playlists }) {
  return (
    <div className="w-60 bg-[#000000] h-screen p-5 flex flex-col gap-6 text-white sticky top-0">
      <h1 className="text-2xl font-bold">Spotify</h1>
      <nav className="flex flex-col gap-3">
        <Link to="/" className="hover:text-green-500 transition">Home</Link>
        <Link to="/search" className="hover:text-green-500 transition">Search</Link>
        <Link to="/library" className="hover:text-green-500 transition">Your Library</Link>
      </nav>
      <div className="mt-6 flex flex-col gap-2">
        <span className="text-gray-400 text-sm uppercase">Playlists</span>
        {playlists.map(p => (
          <Link key={p.id} to={`/playlist/${p.id}`} className="hover:text-green-500 transition">{p.name}</Link>
        ))}
      </div>
    </div>
  );
}
