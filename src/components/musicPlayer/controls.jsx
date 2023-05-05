import { usePlayerContext } from ".";

const Controls = () => {
  const { songs, titleClickHandler, currentSong, modeHandler, mode } =
    usePlayerContext();

  console.log("currentSong in controls", currentSong);
  console.log("songs in controls", songs);

  return (
    <div>
      <h2>Music Controls</h2>
      <p>{`${currentSong?.title} - ${currentSong?.author}`}</p>
      <div className="buttons">
        <button>Prev</button>
        <button>Next</button>
        <button onClick={modeHandler}>{mode}</button>
      </div>
    </div>
  );
};

export default Controls;
