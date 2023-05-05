import React from "react";
import { useState } from "react";
import MusicProvider from "./context";
import Controls from "./controls";
import Songs from "./songs";

const songsList = [
  { id: "1", title: "Kuch kuch hota hai", author: "Lata" },
  {
    id: "2",
    title: "Sadgi to hamari jara dekhiye",
    author: "Nushrat Fateh ali khan",
  },
  {
    id: "3",
    title: "Aaaye ho meri jindagi me",
    author: "Alpha",
  },
];

const modes = ["Not playing", "Playing all", "Playing one"];

export const usePlayerContext = () => {
  const [currentSong, setCurrentSong] = useState(null);
  const [songs, setSongs] = useState(songsList);
  const [mode, setMode] = useState("Not playing");

  const modeHandler = () => {
    let nextMode = "";
    if (mode === "Not playing") {
      nextMode = "Playing all";
    } else if (mode === "Playing all") {
      nextMode = "Playing one";
    } else if (mode === "Playing one") {
      nextMode = "Not playing";
    }

    setMode(nextMode);
  };

  const titleClickHandler = (id) => {
    const selectedSong = songs.find((song) => song.id === id);

    console.log("selectedSong", selectedSong);

    setCurrentSong(selectedSong);

    setSongs(
      songs.map((song) => {
        if (song.id === id) {
          return { ...song, active: true };
        }

        return { ...song, active: false };
      })
    );
  };

  const PlayerContext = React.createContext({
    mode,
    currentSong,
    songs,
    titleClickHandler,
    modeHandler,
  });

  return React.useContext(PlayerContext);
};

const MusicPlayer = () => {
  return (
    <MusicProvider>
      <h1>Music Player</h1>
      <Controls />
      <Songs />
    </MusicProvider>
  );
};

export default MusicPlayer;
