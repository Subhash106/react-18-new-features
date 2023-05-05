const Posts = ({ posts }) => {
  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
