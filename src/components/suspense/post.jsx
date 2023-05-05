import { useEffect, useState } from "react";

const Post = ({ postId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, [postId]);

  console.log("comments", comments);

  return (
    <ul>
      {comments.map(({ id, name }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  );
};

export default Post;
