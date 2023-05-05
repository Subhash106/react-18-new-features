import usePosts from "./usePosts";

const TotalPosts = () => {
  const { data } = usePosts();
  return <p>Total posts: {data.length}</p>;
};

export default TotalPosts;
