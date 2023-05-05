import { useFetchAlbumsQuery } from "../../store";

const Albums = () => {
  const { isFetching, data: albums = [] } = useFetchAlbumsQuery();

  console.log("albums", albums);

  if (isFetching) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Albums</h1>
      <ul>
        {albums.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Albums;
