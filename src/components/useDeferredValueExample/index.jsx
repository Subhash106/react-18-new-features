import { useDeferredValue } from "react";
import { lazy, Suspense, useEffect } from "react";
import { useState } from "react";
const SearchResults = lazy(
  async () =>
    await new Promise((resolve) => setTimeout(resolve, 3000)).then(() =>
      import("./SearchResults")
    )
);

const SearchPosts = () => {
  console.log("SearchPosts rendered");
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);

  return (
    <div>
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <hr />
      <Suspense fallback={<p>Loading...</p>}>
        <SearchResults query={deferredQuery} />
      </Suspense>
    </div>
  );
};

export default SearchPosts;
