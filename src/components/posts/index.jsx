import { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useFetchPostsQuery } from "../../store";

const Posts = () => {
  const [start, setStart] = useState(0);
  const { isFetching, data: posts = [] } = useFetchPostsQuery(start);

  if (isFetching) {
    return <p>Loading...</p>;
  }

  //0, 10, 20

  const nextHandler = () => {
    setStart((start) => start + 10);
  };

  return (
    <>
      <h1>Posts</h1>
      <ul>
        {posts.map(({ id, title, body }) => (
          <li key={id}>
            <Link to={`/posts/${id}`}> {title}</Link>
            <p>{body}</p>
          </li>
        ))}
      </ul>
      <div>
        <button onClick={nextHandler}>next</button>
        <button onClick={nextHandler}>next</button>
      </div>
    </>
  );
};

export default Posts;
