import React, { useTransition } from "react";
import { useState } from "react";
import MusicContext from "./MusicContext";
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
const MusicContainer = () => {
  const [isPending, startTransition] = useTransition();
  const [currentSong, setCurrentSong] = useState({});
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

  const prevHandler = () => {
    const currentSongIndex = songs.findIndex(
      (song) => song.id === currentSong.id
    );
    // does not do anything if on first, move to previous if not on first
    if (mode === "Playing one") {
      if (currentSongIndex !== 0) {
        startTransition(() => setCurrentSong(songs[currentSongIndex - 1]));
      }
    } else if (mode === "Playing all") {
      // if on first, move to last

      if (currentSongIndex === 0) {
        startTransition(() => setCurrentSong(songs[songs.length - 1]));
      } else {
        startTransition(() => setCurrentSong(songs[currentSongIndex - 1]));
      }
    }
  };

  const nextHandler = () => {
    const currentSongIndex = songs.findIndex(
      (song) => song.id === currentSong.id
    );
    // does not do anything if on last, move to next if not on first
    if (mode === "Playing one") {
      if (currentSongIndex < songs.length - 1) {
        startTransition(() => setCurrentSong(songs[currentSongIndex + 1]));
      }
    } else if (mode === "Playing all") {
      // if on last, move to first

      if (currentSongIndex === songs.length - 1) {
        startTransition(() => setCurrentSong(songs[0]));
      } else {
        startTransition(() => setCurrentSong(songs[currentSongIndex + 1]));
      }
    }
  };

  return (
    <MusicContext.Provider
      value={{
        isPending,
        songs,
        mode,
        currentSong,
        titleClickHandler,
        modeHandler,
        prevHandler,
        nextHandler,
      }}
    >
      <h1>Music Player</h1>
      <Controls />
      <Songs />
    </MusicContext.Provider>
  );
};

export default MusicContainer;
