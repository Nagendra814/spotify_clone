import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/SideBar";
import HomePage from "./components/HomePage";
import SearchPage from "./components/SearchPage";
import LibraryPage from "./components/LibraryPage";
import Player from "./components/Player";
import Login from "./components/Login";
import PlaylistView from "./components/PlaylistView";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [playlists, setPlaylists] = useState([]);
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const playlistsRes = await fetch("/data/playlist.json");
        const playlistsData = await playlistsRes.json();
        setPlaylists(playlistsData);

        const tracksRes = await fetch("/data/tracks.json");
        const tracksData = await tracksRes.json();
        setTracks(tracksData);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    fetchData();
  }, []);

  if (!loggedIn) return <Login onLogin={() => setLoggedIn(true)} />;

  return (
    <Router>
      <div className="flex bg-[#121212] min-h-screen text-white pb-24">
        <Sidebar playlists={playlists} />
        <div className="flex-1 overflow-y-auto">
          <Routes>
            <Route
              path="/"
              element={<HomePage playlists={playlists} setTracks={setTracks} />}
            />
            <Route
              path="/search"
              element={<SearchPage tracks={tracks} setCurrentTrack={setCurrentTrack} />}
            />
            <Route
              path="/library"
              element={<LibraryPage playlists={playlists} setTracks={setTracks} />}
            />
            <Route
              path="/playlist/:id"
              element={
                <PlaylistView
                  playlists={playlists}
                  tracks={tracks}
                  setCurrentTrack={setCurrentTrack}
                />
              }
            />
          </Routes>
        </div>
        <Player track={currentTrack} />
      </div>
    </Router>
  );
}
