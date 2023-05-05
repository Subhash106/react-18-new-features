import { useFetchCommentsQuery } from "../../store";
import { useParams } from "react-router-dom";

const Post = () => {
  const params = useParams();
  console.log("params", params);
  const { isFetching, data: comments = [] } = useFetchCommentsQuery(
    params.postId
  );

  if (isFetching) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Comments</h2>
      <ul>
        {comments.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Post;
