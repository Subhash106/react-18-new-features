import { useRef } from "react";
import { useEffect, useState } from "react";

const SearchResults = ({ query }) => {
  if (query === "") return null;
  const [posts, setPosts] = useState([]);
  const searchRef = useRef(false);

  useEffect(() => {
    if (searchRef.current) {
      fetch(`https://jsonplaceholder.typicode.com/posts?title_like=${query}`)
        .then((res) => res.json())
        .then((data) => setPosts(data));
    } else {
      searchRef.current = true;
    }
  }, [query]);

  return (
    <ul>
      {posts.map(({ id, title }) => (
        <li key={id}>{title}</li>
      ))}
    </ul>
  );
};

export default SearchResults;
