import { useState, useEffect, Suspense, lazy } from "react";
const Post = lazy(() => import("./post"));

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  console.log("posts", posts);

  return (
    <ul>
      {posts.map(({ id, title }) => {
        return (
          <li>
            <h2>{title}</h2>
            <Suspense fallback={<p>Comments Loading...</p>}>
              <Post postId={id} />
            </Suspense>
          </li>
        );
      })}
    </ul>
  );
};

export default Posts;
