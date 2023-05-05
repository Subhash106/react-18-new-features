import { useFetchPhotosQuery } from "../../store";

const Photos = () => {
  const { isFetching, data: photos = [] } = useFetchPhotosQuery();

  console.log("photos", photos);

  if (isFetching) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Photos</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Photo</th>
          </tr>
        </thead>
        <tbody>
          {photos.map(({ id, title, thumbnailUrl }) => (
            <tr key={id}>
              <td>{title}</td>
              <td>
                <img src={thumbnailUrl} alt={title} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Photos;
