import { useMusicContext } from "./MusicContext";

const Songs = () => {
  const { songs, titleClickHandler, currentSong, mode } = useMusicContext();

  console.log("currentSong", currentSong);

  return (
    <div>
      <h2>Songs {mode}</h2>
      <ul>
        {songs.map(({ id, title, author }) => (
          <li key={id}>
            <p
              style={{
                fontWeight: "bold",
                color: id === currentSong?.id ? "green" : "#333",
              }}
              onClick={() => titleClickHandler(id)}
            >
              {title}
            </p>
            <p>{author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Songs;
