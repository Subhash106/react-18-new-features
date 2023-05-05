import useSWR from "swr";
import fetcher from "./fetcher";
import { useEffect, useState } from "react";

function usePosts() {
  // const [posts, setPosts] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState("");
  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );

  // useEffect(() => {
  //   setIsLoading(true);
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => res.json())
  //     .then((posts) => setPosts(posts))
  //     .catch((error) => setError(error.message));
  //   setIsLoading(false);
  // }, []);

  return {
    data,
    error,
    isLoading,
  };
}

export default usePosts;
