import { useMusicContext } from "./MusicContext";

const Controls = () => {
  const {
    isPending,
    prevHandler,
    nextHandler,
    currentSong: { title = "", author = "" },
    modeHandler,
    mode,
  } = useMusicContext();

  return (
    <div>
      {isPending && <p>Loading...</p>}
      <h2>Music Controls</h2>
      <p>{author && title && `${title} - ${author}`}</p>
      <div className="buttons">
        <button onClick={prevHandler}>Prev</button>
        <button onClick={nextHandler}>Next</button>
        <button onClick={modeHandler}>{mode}</button>
      </div>
    </div>
  );
};

export default Controls;
