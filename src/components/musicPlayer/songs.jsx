import { usePlayerContext } from ".";

const Songs = () => {
  const { songs, titleClickHandler, currentSong, mode } = usePlayerContext();

  console.log("currentSong", currentSong);

  return (
    <div>
      <h2>Songs {mode}</h2>
      <ul>
        {songs.map(({ id, title, author, active }) => (
          <li key={id}>
            <p
              style={{ fontWeight: "bold", color: active ? "green" : "#333" }}
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
